-- ============================================================
-- SCHEMA SUPABASE — Sistema Advocacia ETEC
-- Execute este script no SQL Editor do seu projeto Supabase
-- ============================================================

-- Tabela genérica de dados da aplicação.
-- Cada linha guarda uma "chave" de dados (clientes, advogados, consultas...)
-- junto com o conteúdo completo (payload JSON) e a data de atualização.
create table if not exists app_data (
  key        text primary key,
  payload    jsonb not null,
  updated_at timestamptz not null default now()
);

-- Política aberta para a chave "anon" (projeto/TCC sem autenticação no banco).
-- ATENÇÃO: qualquer pessoa com a anon key consegue ler/alterar os dados.
-- Para produção real, habilite o Supabase Auth e ajuste as políticas (RLS).
alter table app_data enable row level security;

create policy "app_data_acesso_anon"
  on app_data for all
  to anon
  using (true)
  with check (true);