-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.clientes (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  nome_completo text NOT NULL,
  cpf character varying NOT NULL UNIQUE,
  telefone character varying NOT NULL,
  email text NOT NULL,
  endereco text,
  criado_em timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT clientes_pkey PRIMARY KEY (id)
);
CREATE TABLE public.advogados (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  nome_completo text NOT NULL,
  oab character varying NOT NULL UNIQUE,
  nivel text NOT NULL CHECK (nivel = ANY (ARRAY['Junior'::text, 'Pleno'::text, 'Senior'::text, 'Especialista'::text])),
  area_atuacao text,
  horario_inicio_manha time without time zone NOT NULL DEFAULT '09:00:00'::time without time zone,
  horario_fim_manha time without time zone NOT NULL DEFAULT '12:00:00'::time without time zone,
  horario_inicio_tarde time without time zone NOT NULL DEFAULT '14:00:00'::time without time zone,
  horario_fim_tarde time without time zone NOT NULL DEFAULT '18:00:00'::time without time zone,
  ativo boolean NOT NULL DEFAULT true,
  criado_em timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT advogados_pkey PRIMARY KEY (id)
);
CREATE TABLE public.servicos (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  area_direito text NOT NULL,
  descricao text NOT NULL,
  valor_minimo numeric,
  percentual numeric,
  ativo boolean NOT NULL DEFAULT true,
  CONSTRAINT servicos_pkey PRIMARY KEY (id)
);
CREATE TABLE public.ajuste_senioridade (
  nivel text NOT NULL CHECK (nivel = ANY (ARRAY['Junior'::text, 'Pleno'::text, 'Senior'::text, 'Especialista'::text])),
  multiplicador numeric NOT NULL,
  CONSTRAINT ajuste_senioridade_pkey PRIMARY KEY (nivel)
);
CREATE TABLE public.consultas (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  cliente_id uuid NOT NULL,
  advogado_id uuid NOT NULL,
  servico_id uuid NOT NULL,
  valor_causa numeric,
  valor_honorario numeric NOT NULL,
  inicio timestamp with time zone NOT NULL,
  fim timestamp with time zone NOT NULL,
  observacoes text,
  status text NOT NULL DEFAULT 'agendada'::text CHECK (status = ANY (ARRAY['agendada'::text, 'realizada'::text, 'cancelada'::text])),
  criado_em timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT consultas_pkey PRIMARY KEY (id),
  CONSTRAINT consultas_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id),
  CONSTRAINT consultas_advogado_id_fkey FOREIGN KEY (advogado_id) REFERENCES public.advogados(id),
  CONSTRAINT consultas_servico_id_fkey FOREIGN KEY (servico_id) REFERENCES public.servicos(id)
);
