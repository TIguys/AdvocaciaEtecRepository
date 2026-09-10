-- ============================================
-- SISTEMA DE GESTÃO — ESCRITÓRIO DE ADVOCACIA
-- Banco de dados PostgreSQL (Supabase)
-- ============================================

-- Extensão necessária para impedir conflito de horários
create extension if not exists btree_gist;

-- ============================================
-- 1. CLIENTES (F1)
-- ============================================
create table clientes (
  id uuid primary key default gen_random_uuid(),
  nome_completo text not null,
  cpf varchar(14) not null unique,
  telefone varchar(20) not null,
  email text not null,
  endereco text, -- opcional conforme spec
  criado_em timestamptz not null default now()
);

-- ============================================
-- 2. ADVOGADOS (F2)
-- ============================================
create table advogados (
  id uuid primary key default gen_random_uuid(),
  nome_completo text not null,
  oab varchar(20) not null unique, -- não permite OAB duplicada
  nivel text not null check (nivel in ('Junior', 'Pleno', 'Senior', 'Especialista')),
  area_atuacao text, -- opcional
  -- Horário de trabalho (ex: 09-12h e 14-18h)
  horario_inicio_manha time not null default '09:00',
  horario_fim_manha time not null default '12:00',
  horario_inicio_tarde time not null default '14:00',
  horario_fim_tarde time not null default '18:00',
  ativo boolean not null default true,
  criado_em timestamptz not null default now()
);

-- ============================================
-- 3. TABELA DE HONORÁRIOS DA OAB (F3)
-- Cada serviço: valor mínimo fixo e/ou percentual
-- ============================================
create table servicos (
  id uuid primary key default gen_random_uuid(),
  area_direito text not null, -- Ex: Trabalhista, Cível, Penal
  descricao text not null, -- Ex: "Consulta jurídica", "Ação trabalhista"
  valor_minimo numeric(12,2), -- pode ser nulo se o serviço for só percentual
  percentual numeric(5,2), -- ex: 10.00 = 10% (nulo se for só valor fixo)
  ativo boolean not null default true
);

-- Margem de ajuste por senioridade (F3)
-- Ex: Junior = 0% sobre a tabela, Especialista = +40%
create table ajuste_senioridade (
  nivel text primary key check (nivel in ('Junior', 'Pleno', 'Senior', 'Especialista')),
  multiplicador numeric(4,2) not null -- 1.00 = sem ajuste, 1.20 = +20%
);

insert into ajuste_senioridade (nivel, multiplicador) values
  ('Junior', 1.00),
  ('Pleno', 1.10),
  ('Senior', 1.25),
  ('Especialista', 1.40);

-- Dados iniciais de exemplo da tabela OAB (edite depois)
insert into servicos (area_direito, descricao, valor_minimo, percentual) values
  ('Geral', 'Consulta jurídica', 300.00, null),
  ('Trabalhista', 'Ação trabalhista (percentual sobre condenação/acordo)', 1500.00, 15.00),
  ('Cível', 'Ação de cobrança', 1000.00, 10.00),
  ('Cível', 'Contrato particular', 800.00, null),
  ('Penal', 'Defesa criminal — caso completo', 5000.00, null),
  ('Família', 'Divórcio consensual', 2000.00, null),
  ('Família', 'Pensão alimentícia', 1200.00, 8.00);

-- ============================================
-- 4. CONSULTAS (F3 + F4)
-- ============================================
create table consultas (
  id uuid primary key default gen_random_uuid(),
  cliente_id uuid not null references clientes(id) on delete restrict,
  advogado_id uuid not null references advogados(id) on delete restrict,
  servico_id uuid not null references servicos(id),
  valor_causa numeric(12,2), -- informado pela secretária quando houver
  valor_honorario numeric(12,2) not null, -- valor final já calculado e ajustado
  inicio timestamptz not null,
  fim timestamptz not null,
  observacoes text,
  status text not null default 'agendada' check (status in ('agendada', 'realizada', 'cancelada')),
  criado_em timestamptz not null default now(),

  -- Duração mínima de 30 minutos (F4)
  constraint duracao_minima check (fim >= inicio + interval '30 minutes'),

  -- ⭐ IMPEDE agendar dois horários sobrepostos para o MESMO advogado (F4)
  -- Se tentar, o banco REJEITA com erro automático
  constraint sem_conflito_agenda exclude using gist (
    advogado_id with =,
    tstzrange(inicio, fim) with &&
  )
);

-- ============================================
-- 5. ÍNDICES (relatórios e buscas ficam rápidos)
-- ============================================
create index idx_clientes_nome on clientes (lower(nome_completo));
create index idx_consultas_advogado_data on consultas (advogado_id, inicio);
create index idx_consultas_dia on consultas (inicio);
create index idx_servicos_area on servicos (area_direito);

-- ============================================
-- 6. FUNÇÃO DE CÁLCULO DO HONORÁRIO (F3)
-- Aplica max(valor_minimo, percentual × valor_causa)
-- e depois multiplica pelo ajuste de senioridade
-- ============================================
create or replace function calcular_honorario(
  p_servico_id uuid,
  p_valor_causa numeric,
  p_advogado_id uuid
) returns numeric as $$
declare
  v_minimo numeric;
  v_percentual numeric;
  v_multiplicador numeric;
  v_base numeric;
begin
  select valor_minimo, percentual into v_minimo, v_percentual
  from servicos where id = p_servico_id;

  select a.multiplicador into v_multiplicador
  from advogados adv
  join ajuste_senioridade a on a.nivel = adv.nivel
  where adv.id = p_advogado_id;

  -- Regra da OAB: quando existem os dois, vale o MAIOR
  v_base := greatest(
    coalesce(v_minimo, 0),
    coalesce(v_percentual, 0) / 100 * coalesce(p_valor_causa, 0)
  );

  return round(v_base * coalesce(v_multiplicador, 1), 2);
end;
$$ language plpgsql stable;

-- ============================================
-- 7. RELATÓRIOS PRONTOS COMO "VIEWS" (F5)
-- Você consulta essas views direto do JavaScript
-- ============================================

-- Consultas do dia (cliente, advogado, horário, valor)
create view relatorio_consultas_do_dia as
select
  c.inicio,
  cli.nome_completo as cliente,
  adv.nome_completo as advogado,
  s.descricao as servico,
  c.valor_honorario
from consultas c
join clientes cli on cli.id = c.cliente_id
join advogados adv on adv.id = c.advogado_id
join servicos s on s.id = c.servico_id
where c.inicio::date = current_date
  and c.status = 'agendada'
order by c.inicio;

-- Faturamento por advogado em um período
create view relatorio_faturamento_advogado as
select
  adv.id as advogado_id,
  adv.nome_completo as advogado,
  date_trunc('day', c.inicio)::date as dia,
  sum(c.valor_honorario) as faturamento,
  count(*) as total_consultas
from consultas c
join advogados adv on adv.id = c.advogado_id
where c.status = 'realizada'
group by adv.id, adv.nome_completo, dia
order by dia, adv.nome_completo;

-- ============================================
-- 8. SEGURANÇA (RLS) — mesmo sem login,
-- recomendo ativar para proteger as tabelas
-- ============================================
alter table clientes enable row level security;
alter table advogados enable row level security;
alter table servicos enable row level security;
alter table consultas enable row level security;

create policy "acesso_total" on clientes for all using (true) with check (true);
create policy "acesso_total" on advogados for all using (true) with check (true);
create policy "acesso_total" on servicos for all using (true) with check (true);
create policy "acesso_total" on consultas for all using (true) with check (true);
