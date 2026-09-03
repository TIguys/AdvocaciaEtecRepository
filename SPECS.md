SPEC TÉCNICA — CPS Advocacia
Sistema de Gestão de Escritório de Advocacia (Frontend-Only)
Versão 2.0 | Pronta para Implementação com Boltz AI
________________________________________
1. VISÃO GERAL
Nome do Projeto: CPS Advocacia — Sistema de Gestão Interna
Empresa: CPS Advocacia
E-mail institucional: cpsadvocacia11@gmail.com
Tipo: Aplicação web frontend (HTML + CSS + JavaScript puro)
Persistência: localStorage do navegador (sem banco de dados, sem backend)
Público-alvo: Escritório de advocacia multidisciplinar
Objetivo: Organizar clientes, advogados, agenda de consultas e precificação de honorários com base no nível do profissional e na gravidade do caso.
________________________________________
2. PERSONAS E PERFIS DE ACESSO
O sistema possui 3 áreas de usuário com telas e permissões distintas:
Planilhas
Perfil	Descrição	Permissões	Ícone (Lucide)
Secretaria	Recepção e gestão administrativa	Acesso total: cadastra clientes e advogados, agenda consultas, vê todos os relatórios, edita horários, define valores	settings
Advogado	Profissional que atende as consultas	Visualiza sua própria agenda, seus clientes, seus casos, registra anotações	briefcase
Cliente	Pessoa que contrata os serviços	Agenda consultas com advogado preferido, visualiza seus agendamentos, vê valores calculados	user
Fluxo de login: Tela única de login com campo "Perfil" (select: Secretaria / Advogado / Cliente) + e-mail + senha.
Dados de login pré-cadastrados (hardcoded para demonstração):
•	Secretaria: secretaria@cpsadvocacia.com / cps123
•	Advogado: advogado@cpsadvocacia.com / cps123
•	Cliente: cliente@cpsadvocacia.com / cps123
________________________________________
3. ESTRUTURA DE DADOS (localStorage)
Todas as informações são armazenadas no localStorage do navegador em 5 coleções:
JavaScript
// 1. USUARIOS
[
  { id: 1, nome: "Maria Oliveira", email: "secretaria@cpsadvocacia.com", senha: "cps123", perfil: "secretaria", telefone: "(11) 99999-0001", ativo: true },
  { id: 2, nome: "Dr. Carlos Silva", email: "advogado@cpsadvocacia.com", senha: "cps123", perfil: "advogado", telefone: "(11) 99999-0002", ativo: true },
  { id: 3, nome: "João Pereira", email: "cliente@cpsadvocacia.com", senha: "cps123", perfil: "cliente", telefone: "(11) 99999-0003", ativo: true }
]

// 2. ADVOGADOS (apenas perfil = advogado, com dados profissionais)
[
  {
    id: 1,
    usuario_id: 2,
    nome: "Dr. Carlos Silva",
    oab: "SP123456",
    nivel: "senior",        // junior | pleno | senior | especialista
    areas: ["Penal", "Cível"],
    email: "cpsadvocacia11@gmail.com",
    telefone: "(11) 99999-0002",
    valor_hora_base: 300.00,
    horarios: {
      segunda: { inicio: "09:00", fim: "18:00", almoco_inicio: "12:00", almoco_fim: "13:00", ativo: true },
      terca:   { inicio: "09:00", fim: "18:00", almoco_inicio: "12:00", almoco_fim: "13:00", ativo: true },
      quarta:  { inicio: "09:00", fim: "18:00", almoco_inicio: "12:00", almoco_fim: "13:00", ativo: true },
      quinta:  { inicio: "09:00", fim: "18:00", almoco_inicio: "12:00", almoco_fim: "13:00", ativo: true },
      sexta:   { inicio: "09:00", fim: "17:00", almoco_inicio: "12:00", almoco_fim: "13:00", ativo: true },
      sabado:  { inicio: "", fim: "", almoco_inicio: "", almoco_fim: "", ativo: false },
      domingo: { inicio: "", fim: "", almoco_inicio: "", almoco_fim: "", ativo: false }
    },
    ativo: true
  }
]

// 3. CLIENTES
[
  {
    id: 1,
    usuario_id: 3,
    nome: "João Pereira",
    cpf: "123.456.789-00",
    email: "cliente@cpsadvocacia.com",
    telefone: "(11) 99999-0003",
    endereco: "Rua das Flores, 123 - São Paulo/SP",
    data_cadastro: "2026-09-03",
    status: "ativo",        // ativo | inativo
    observacoes: "Cliente indicado pelo Dr. Carlos"
  }
]

// 4. CONSULTAS (agendamentos)
[
  {
    id: 1,
    cliente_id: 1,
    advogado_id: 1,
    data: "2026-09-10",
    hora: "14:00",
    duracao: 60,            // minutos
    tipo: "primeira",       // primeira | retorno
    area_direito: "Penal",
    crime_gravidade: "grave", // leve | media | grave | gravissima
    status: "agendada",     // agendada | confirmada | realizada | cancelada | nao_compareceu
    valor_calculado: 900.00,
    observacoes: "",
    created_at: "2026-09-03T10:00:00"
  }
]

// 5. CONFIGURACOES (tabela de precificação e dados do escritório)
{
  escritorio: {
    nome: "CPS Advocacia",
    email: "cpsadvocacia11@gmail.com",
    telefone: "(11) 3333-4444",
    endereco: "Av. Paulista, 1000 - São Paulo/SP",
    cnpj: "12.345.678/0001-99"
  },
  niveis_advogado: {
    junior:      { multiplicador: 1.0, label: "Júnior" },
    pleno:       { multiplicador: 1.5, label: "Pleno" },
    senior:      { multiplicador: 2.0, label: "Sênior" },
    especialista:{ multiplicador: 2.5, label: "Especialista" }
  },
  gravidade_crime: {
    leve:      { multiplicador: 1.0, label: "Leve", descricao: "Infrações penais menores, contravenções" },
    media:     { multiplicador: 1.5, label: "Média", descricao: "Crimes com pena de até 4 anos" },
    grave:     { multiplicador: 2.5, label: "Grave", descricao: "Crimes com pena de 4 a 8 anos" },
    gravissima:{ multiplicador: 4.0, label: "Gravíssima", descricao: "Crimes hediondos, pena acima de 8 anos" }
  },
  areas_direito: ["Penal", "Cível", "Trabalhista", "Tributário", "Família", "Empresarial"],
  valor_hora_base: 200.00,    // valor base por hora para cálculo
  duracao_consulta_padrao: 60 // minutos
}
________________________________________
4. FLUXO DE NAVEGAÇÃO
plain
[Login] → Seleciona Perfil (Secretaria / Advogado / Cliente)
    ↓
┌─────────────────┬──────────────────┬─────────────────┐
│   SECRETARIA    │    ADVOGADO      │    CLIENTE      │
├─────────────────┼──────────────────┼─────────────────┤
│ Dashboard       │ Minha Agenda     │ Meus Agendamentos│
│ Cadastro Cliente│ Meus Clientes    │ Agendar Consulta │
│ Cadastro Advog. │ Meus Casos       │ Meu Perfil       │
│ Lista Clientes  │                  │                 │
│ Agenda Geral    │                  │                 │
│ Consultas       │                  │                 │
│ Relatórios      │                  │                 │
│ Configurações   │                  │                 │
└─────────────────┴──────────────────┴─────────────────┘
________________________________________
5. TELAS E FUNCIONALIDADES
5.1 Tela de Login (/index.html)
Acesso: Pública
Layout:
•	Centralizado na tela, card com sombra
•	Logo "CPS Advocacia" + ícone scale
•	Campo: Select de Perfil (Secretaria / Advogado / Cliente)
•	Campo: E-mail
•	Campo: Senha (mascarada)
•	Botão: "Entrar no Sistema" (ícone log-in)
•	Link: "Esqueci minha senha" (envia alerta com instruções)
•	Rodapé: "cpsadvocacia11@gmail.com" + ícone mail
Regras:
•	Validação de campos obrigatórios
•	Verifica se o e-mail existe na coleção USUARIOS e se a senha corresponde
•	Redireciona para o dashboard correspondente ao perfil
•	Mensagem de erro: "E-mail ou senha incorretos" (ícone alert-circle)
________________________________________
5.2 Dashboard da Secretaria (/secretaria/dashboard.html)
Acesso: Secretaria
Layout: Sidebar fixa à esquerda + conteúdo principal
Sidebar (menu):
•	Dashboard (ícone layout-dashboard)
•	Clientes (ícone users)
o	Cadastrar Cliente (ícone user-plus)
o	Lista de Clientes (ícone list)
•	Advogados (ícone briefcase)
o	Cadastrar Advogado (ícone user-plus)
o	Lista de Advogados (ícone list)
•	Agenda (ícone calendar-days)
o	Nova Consulta (ícone calendar-plus)
o	Consultas Agendadas (ícone calendar-check)
•	Relatórios (ícone bar-chart-3)
•	Configurações (ícone settings)
•	Sair (ícone log-out)
Conteúdo do Dashboard (cards em grid):
1.	Consultas Hoje — número de consultas do dia atual (ícone calendar)
2.	Clientes Ativos — total de clientes cadastrados (ícone users)
3.	Advogados Ativos — total de advogados cadastrados (ícone briefcase)
4.	Receita do Mês — soma dos valores calculados de consultas "realizadas" no mês atual (ícone dollar-sign)
5.	Próximas Consultas — tabela com as 5 próximas consultas agendadas (cliente, advogado, data/hora, status)
6.	Alertas — consultas com status "nao_compareceu" ou "cancelada" (ícone alert-triangle)
Header: Nome do usuário logado + ícone bell (notificações) + ícone log-out
________________________________________
5.3 Cadastro de Cliente (/secretaria/clientes/cadastrar.html)
Acesso: Secretaria
Formulário:
•	Nome completo (input text, obrigatório)
•	CPF (input text com máscara 000.000.000-00, obrigatório)
•	E-mail (input email, obrigatório)
•	Telefone (input text com máscara (00) 00000-0000)
•	Endereço (textarea)
•	Observações (textarea)
•	Status (select: Ativo / Inativo)
•	Botão: "Salvar Cliente" (ícone save)
Regras:
•	CPF deve ser válido (algoritmo de validação)
•	E-mail deve ser único no sistema
•	Gera id auto-incremental
•	Data de cadastro = data atual
•	Após salvar, redireciona para Lista de Clientes com mensagem de sucesso
________________________________________
5.4 Lista de Clientes (/secretaria/clientes/lista.html)
Acesso: Secretaria
Layout:
•	Título "Clientes Cadastrados" + ícone users
•	Campo de busca (filtra por nome, CPF ou e-mail) + ícone search
•	Botão "Novo Cliente" (ícone user-plus) → redireciona para cadastro
•	Tabela com colunas:
o	Nome
o	CPF
o	E-mail
o	Telefone
o	Data de Cadastro
o	Status (badge verde ativo / cinza inativo)
o	Ações: ícone eye (visualizar), ícone pencil (editar), ícone trash-2 (excluir)
Regras:
•	Ordenação por nome (A-Z) por padrão
•	Paginação: 10 registros por página
•	Exclusão com confirmação: "Tem certeza que deseja excluir este cliente?"
•	Edição abre o formulário de cadastro pré-preenchido
________________________________________
5.5 Cadastro de Advogado (/secretaria/advogados/cadastrar.html)
Acesso: Secretaria
Formulário:
•	Nome completo (input text, obrigatório)
•	Número OAB (input text, obrigatório)
•	E-mail (input email, obrigatório)
•	Telefone (input text com máscara)
•	Nível (select: Júnior / Pleno / Sênior / Especialista) — obrigatório
•	Áreas de Atuação (checkboxes: Penal, Cível, Trabalhista, Tributário, Família, Empresarial)
•	Valor Hora Base (input number, valor padrão = 200.00, editável)
•	Horários de Atendimento (tabela/seletor por dia da semana):
o	Segunda a Domingo: checkbox "Atende?" + hora início + hora fim + almoço início + almoço fim
•	Status (select: Ativo / Inativo)
•	Botão: "Salvar Advogado" (ícone save)
Regras:
•	OAB deve ser única no sistema
•	Pelo menos uma área de atuação deve ser selecionada
•	Horários: se "Atende?" estiver marcado, todos os campos de horário são obrigatórios
•	Valor hora base será usado no cálculo da consulta
________________________________________
5.6 Lista de Advogados (/secretaria/advogados/lista.html)
Acesso: Secretaria
Layout:
•	Título "Advogados Cadastrados" + ícone briefcase
•	Busca + botão "Novo Advogado"
•	Tabela com colunas:
o	Nome
o	OAB
o	Nível (badge colorido: azul=júnior, verde=pleno, âmbar=sênior, roxo=especialista)
o	Áreas de Atuação
o	Valor Hora
o	Status
o	Ações: visualizar, editar, excluir
________________________________________
5.7 Agenda / Nova Consulta (/secretaria/consultas/nova.html)
Acesso: Secretaria
Título: "Agendar Nova Consulta" + ícone calendar-plus
Formulário em 3 etapas (wizard):
Etapa 1 — Seleção do Cliente:
•	Select de cliente (lista de clientes ativos) ou campo de busca
•	Botão "Próximo" (ícone arrow-right)
Etapa 2 — Seleção do Advogado e Horário:
•	Área do Direito (select: Penal, Cível, Trabalhista, Tributário, Família, Empresarial)
•	Sistema filtra advogados que atuam na área selecionada
•	Select de Advogado (mostra nome + nível + áreas)
•	Calendário/Datepicker para escolher a data
•	Ao selecionar data, sistema mostra apenas horários disponíveis do advogado (com base nos horários cadastrados e nas consultas já agendadas)
•	Select de Horário (apenas slots livres de 60 min)
•	Botão "Voltar" + "Próximo"
Etapa 3 — Gravidade e Cálculo:
•	Tipo de Consulta (select: Primeira Consulta / Retorno)
•	Gravidade do Crime / Caso (select: Leve / Média / Grave / Gravíssima)
o	Leve: Infrações menores, contravenções
o	Média: Crimes com pena até 4 anos
o	Grave: Crimes com pena de 4 a 8 anos
o	Gravíssima: Crimes hediondos, pena acima de 8 anos
•	Sistema calcula e exibe em tempo real:
plain
Valor Base = Valor Hora do Advogado × 1 hora (duração padrão)
Multiplicador Nível = conforme tabela (Júnior=1.0, Pleno=1.5, Sênior=2.0, Especialista=2.5)
Multiplicador Gravidade = conforme tabela (Leve=1.0, Média=1.5, Grave=2.5, Gravíssima=4.0)
Valor Final = Valor Base × Multiplicador Nível × Multiplicador Gravidade
•	Card destacado mostrando o Valor Final da Consulta em grande destaque
•	Observações (textarea)
•	Botão "Agendar Consulta" (ícone calendar-check)
Regras:
•	Não permite agendar em horário já ocupado
•	Não permite agendar em dia/hora fora do expediente do advogado
•	Não permite agendar em datas passadas
•	Após agendar, status = "agendada"
•	Envia "e-mail" simulado (alerta na tela): "Consulta agendada com sucesso! Confirmação enviada para cpsadvocacia11@gmail.com e para o cliente."
________________________________________
5.8 Consultas Agendadas (/secretaria/consultas/lista.html)
Acesso: Secretaria
Layout:
•	Título "Consultas Agendadas" + ícone calendar-check
•	Filtros: por data, por advogado, por status, por cliente
•	Tabela com colunas:
o	Data / Hora
o	Cliente
o	Advogado
o	Área do Direito
o	Gravidade (badge: verde=leve, amarelo=média, laranja=grave, vermelho=gravíssima)
o	Valor
o	Status (badge: azul=agendada, verde=confirmada, cinza=realizada, vermelha=cancelada, cinza escuro=nao_compareceu)
o	Ações:
	ícone check → marcar como "realizada"
	ícone x → marcar como "cancelada"
	ícone user-x → marcar como "nao_compareceu"
	ícone eye → visualizar detalhes
Regras:
•	Status só pode ser alterado pela Secretaria
•	Consultas "realizadas" não podem mais ser editadas (apenas visualizadas)
•	Ordenação por data/hora (mais próximas primeiro)
________________________________________
5.9 Relatórios (/secretaria/relatorios.html)
Acesso: Secretaria
Título: "Relatórios do Escritório" + ícone bar-chart-3
Abas:
1.	Financeiro (ícone dollar-sign)
•	Período (date picker: de / até)
•	Total de consultas realizadas no período
•	Receita total no período
•	Tabela: consulta por consulta (data, cliente, advogado, valor)
•	Botão "Exportar CSV" (gera arquivo CSV para download)
2.	Advogados (ícone briefcase)
•	Tabela: nome do advogado, total de consultas, receita gerada, nível
•	Ordenação por receita (maior primeiro)
3.	Clientes (ícone users)
•	Tabela: nome do cliente, total de consultas, total gasto, última consulta
•	Destaque para clientes com mais de 3 consultas (fidelidade)
Regras:
•	Todos os cálculos são feitos em memória a partir do localStorage
•	Filtro de período obrigatório (padrão: mês atual)
________________________________________
5.10 Configurações (/secretaria/configuracoes.html)
Acesso: Secretaria
Título: "Configurações do Sistema" + ícone settings
Seções:
1.	Dados do Escritório
•	Nome: "CPS Advocacia"
•	E-mail: "cpsadvocacia11@gmail.com" (editável)
•	Telefone, Endereço, CNPJ
•	Botão "Salvar" (ícone save)
2.	Tabela de Precificação
•	Valor Hora Base (input number, padrão 200.00)
•	Multiplicadores por Nível (inputs number: Júnior, Pleno, Sênior, Especialista)
•	Multiplicadores por Gravidade (inputs number: Leve, Média, Grave, Gravíssima)
•	Botão "Salvar Configurações"
•	Botão "Restaurar Padrão" (ícone rotate-ccw)
3.	Áreas do Direito
•	Lista atual com opção de adicionar/remover
•	Input para nova área + botão "Adicionar" (ícone plus)
4.	Limpar Dados
•	Botão vermelho "Limpar Todos os Dados" (ícone trash-2)
•	Confirmação com modal: "Tem certeza? Esta ação não pode ser desfeita."
•	Remove tudo do localStorage e recarrega a página
________________________________________
5.11 Dashboard do Advogado (/advogado/dashboard.html)
Acesso: Advogado
Sidebar:
•	Minha Agenda (ícone calendar-days)
•	Meus Clientes (ícone users)
•	Meus Casos (ícone folder-open)
•	Sair (ícone log-out)
Conteúdo:
•	Card: "Consultas Hoje" (quantidade e lista)
•	Card: "Consultas Esta Semana"
•	Card: "Total de Clientes Atendidos"
•	Calendário visual (mês atual) com marcações nos dias que têm consulta
•	Lista das próximas 5 consultas com botão "Ver Detalhes"
________________________________________
5.12 Minha Agenda do Advogado (/advogado/agenda.html)
Acesso: Advogado
Layout:
•	Visualização em calendário (semana/mês)
•	Cada consulta mostra: horário, nome do cliente, tipo (primeira/retorno), área
•	Cores por status: azul=agendada, verde=confirmada, cinza=realizada
•	Clique na consulta abre modal com detalhes:
o	Nome do cliente
o	Telefone
o	Tipo e área
o	Gravidade
o	Valor
o	Campo de anotações (textarea, o advogado pode adicionar notas)
o	Botão "Marcar como Realizada" (se a data já passou)
Regras:
•	Advogado só vê suas próprias consultas
•	Não pode editar data/hora (apenas a secretaria agenda)
•	Pode adicionar anotações livres
________________________________________
5.13 Meus Clientes do Advogado (/advogado/clientes.html)
Acesso: Advogado
Layout:
•	Tabela com clientes que já tiveram consulta com este advogado
•	Colunas: Nome, CPF, Telefone, Total de Consultas, Última Consulta, Ações (visualizar)
•	Tela de visualização mostra histórico completo de consultas do cliente com este advogado
________________________________________
5.14 Portal do Cliente — Meus Agendamentos (/cliente/agendamentos.html)
Acesso: Cliente
Sidebar:
•	Meus Agendamentos (ícone calendar-check)
•	Agendar Consulta (ícone calendar-plus)
•	Meu Perfil (ícone user)
•	Sair (ícone log-out)
Conteúdo:
•	Lista de todas as consultas do cliente logado
•	Cards com: data/hora, advogado, área, status, valor
•	Status com cores e ícones
________________________________________
5.15 Portal do Cliente — Agendar Consulta (/cliente/agendar.html)
Acesso: Cliente
Título: "Agendar Consulta" + ícone calendar-plus
Formulário:
•	Área do Direito (select)
•	Sistema filtra advogados disponíveis na área
•	Select de Advogado (mostra nome, nível, áreas, horários de atendimento)
•	Select de Data (datepicker, apenas datas com horários livres)
•	Select de Horário (slots de 60 min disponíveis)
•	Gravidade do Caso (select: Leve / Média / Grave / Gravíssima — com descrições)
•	Sistema calcula e mostra o Valor Estimado em tempo real
•	Observações (textarea)
•	Botão "Solicitar Agendamento" (ícone calendar-plus)
Regras:
•	Cliente só vê advogados ativos
•	Cliente não pode agendar em horário já ocupado
•	Status inicial = "agendada" (a secretaria pode depois confirmar)
•	Após agendar, mostra mensagem: "Solicitação enviada! A secretaria entrará em contato para confirmação."
________________________________________
5.16 Meu Perfil (/cliente/perfil.html)
Acesso: Cliente
Formulário (apenas visualização/edição limitada):
•	Nome (readonly)
•	CPF (readonly)
•	E-mail (readonly)
•	Telefone (editável)
•	Endereço (editável)
•	Botão "Salvar Alterações" (ícone save)
________________________________________
6. REGRAS DE NEGÓCIO (CÁLCULO DE VALORES)
Fórmula Oficial de Precificação da Consulta
plain
VALOR BASE = Valor Hora Base do Advogado × Duração Padrão (1h)

MULTIPLICADOR NÍVEL:
  Júnior      = 1.0
  Pleno       = 1.5
  Sênior      = 2.0
  Especialista = 2.5

MULTIPLICADOR GRAVIDADE:
  Leve       = 1.0  (Infrações menores, contravenções)
  Média      = 1.5  (Crimes com pena até 4 anos)
  Grave      = 2.5  (Crimes com pena de 4 a 8 anos)
  Gravíssima = 4.0  (Crimes hediondos, pena acima de 8 anos)

VALOR FINAL = VALOR BASE × MULTIPLICADOR NÍVEL × MULTIPLICADOR GRAVIDADE
Exemplo prático:
•	Advogado Sênior (valor hora base: R$ 300,00)
•	Caso Grave (multiplicador 2.5)
•	Valor Final = 300 × 2.0 × 2.5 = R$ 1.500,00
Observação: Todos os valores são configuráveis pela secretaria em "Configurações > Tabela de Precificação".
________________________________________
7. DESIGN E INTERFACE
Biblioteca de Ícones
Usar exclusivamente: Lucide Icons (lucide CDN ou script)
NUNCA usar emojis. Toda representação visual deve ser via ícone Lucide.
Paleta de Cores
css
:root {
  --cor-primaria: #1e3a5f;      /* Azul marinho — confiança */
  --cor-secundaria: #c9a96e;    /* Dourado — excelência */
  --cor-sucesso: #16a34a;       /* Verde — confirmado, ativo */
  --cor-alerta: #f59e0b;        /* Âmbar — alerta médio */
  --cor-perigo: #dc2626;        /* Vermelho — cancelado, gravíssimo */
  --cor-fundo: #f8fafc;         /* Slate-50 */
  --cor-card: #ffffff;          /* Branco */
  --cor-texto: #0f172a;         /* Slate-900 */
  --cor-texto-secundario: #64748b; /* Slate-500 */
  --cor-borda: #e2e8f0;         /* Slate-200 */
}
Tipografia
•	Fonte: Inter (Google Fonts)
•	Tamanhos: Título página: 24px / Subtítulo: 18px / Corpo: 14px / Pequeno: 12px
Layout Padrão
•	Sidebar fixa à esquerda (largura: 260px, cor: --cor-primaria)
•	Header fixo no topo (altura: 64px, cor: branco, sombra sutil)
•	Conteúdo principal com padding: 24px
•	Cards com: fundo branco, borda arredondada (8px), sombra leve, padding: 20px
•	Tabelas com: cabeçalho --cor-primaria (texto branco), linhas zebradas, hover suave
Responsividade
•	Desktop: sidebar visível (1280px+)
•	Tablet: sidebar colapsável (768px - 1279px)
•	Mobile: sidebar vira menu hambúrguer (< 768px) — priorizar telas do Cliente
________________________________________
8. ESTRUTURA DE ARQUIVOS
plain
/cps-advocacia/
├── index.html                    # Login
├── css/
│   ├── global.css               # Variáveis, reset, utilitários
│   ├── login.css                # Estilos da tela de login
│   ├── sidebar.css              # Estilos da sidebar/nav
│   ├── dashboard.css            # Estilos dos cards e grids
│   ├── forms.css                # Estilos de inputs, selects, botões
│   ├── tables.css               # Estilos de tabelas
│   └── responsive.css           # Media queries
├── js/
│   ├── storage.js               # CRUD do localStorage (get, set, update, delete)
│   ├── auth.js                  # Login, logout, verificação de sessão
│   ├── utils.js                 # Máscaras (CPF, telefone), validações, formatadores
│   ├── calculo.js               # Fórmula de precificação
│   ├── data-seed.js             # Dados iniciais de demonstração
│   ├── components.js            # Renderização de sidebar, header, cards, modais
│   ├── secretaria/
│   │   ├── dashboard.js
│   │   ├── clientes-cadastro.js
│   │   ├── clientes-lista.js
│   │   ├── advogados-cadastro.js
│   │   ├── advogados-lista.js
│   │   ├── consultas-nova.js
│   │   ├── consultas-lista.js
│   │   ├── relatorios.js
│   │   └── configuracoes.js
│   ├── advogado/
│   │   ├── dashboard.js
│   │   ├── agenda.js
│   │   └── clientes.js
│   └── cliente/
│       ├── agendamentos.js
│       ├── agendar.js
│       └── perfil.js
└── assets/
    └── logo-cps.png             # Logo da CPS Advocacia
________________________________________
9. DADOS INICIAIS (SEED)
Ao carregar o sistema pela primeira vez (se localStorage vazio), popular automaticamente:
1 Usuário de cada perfil:
•	Secretaria: "Ana Secretária" / secretaria@cpsadvocacia.com / cps123
•	Advogado: "Dr. Roberto Almeida" / advogado@cpsadvocacia.com / cps123 / OAB: "SP654321" / Nível: Sênior / Áreas: Penal, Cível
•	Cliente: "Carlos Cliente" / cliente@cpsadvocacia.com / cps123 / CPF: "987.654.321-00"
3 Consultas de exemplo com datas variadas para demonstrar relatórios e agenda.
________________________________________
10. REQUISITOS FUNCIONAIS RESUMIDOS
Planilhas
ID	Requisito	Prioridade
RF-001	Login com 3 perfis (Secretaria, Advogado, Cliente)	Alta
RF-002	Cadastro de clientes com CPF, e-mail, telefone, endereço	Alta
RF-003	Lista de clientes cadastrados com busca, edição e exclusão	Alta
RF-004	Cadastro de advogados com OAB, nível, áreas, horários e valor hora	Alta
RF-005	Controle de horários disponíveis por advogado (dia da semana)	Alta
RF-006	Agendamento de consulta com seleção de cliente, advogado, data e hora	Alta
RF-007	Cálculo automático do valor da consulta conforme nível do advogado + gravidade do crime	Alta
RF-008	Visualização de consultas agendadas com filtros e alteração de status	Alta
RF-009	Dashboard da secretaria com KPIs (consultas hoje, clientes, receita)	Média
RF-010	Dashboard do advogado com agenda e clientes	Média
RF-011	Portal do cliente para agendar consultas e ver agendamentos	Média
RF-012	Relatórios financeiros e de produtividade por período	Média
RF-013	Configurações editáveis: dados do escritório, tabela de precificação, áreas do direito	Média
RF-014	Persistência de todos os dados no localStorage	Alta
RF-015	Validação de CPF, e-mail, horários e conflitos de agenda	Alta
RF-016	Dados de demonstração pré-carregados (seed)	Baixa
________________________________________
11. REQUISITOS NÃO-FUNCIONAIS
Planilhas
ID	Requisito	Especificação
RNF-001	Sem backend	Toda a lógica em JavaScript vanilla, persistência via localStorage
RNF-002	Sem banco de dados	Não usar IndexedDB, SQLite, ou qualquer BD. Apenas localStorage
RNF-003	Navegador	Compatível com Chrome, Firefox, Edge, Safari (últimas 2 versões)
RNF-004	Offline-first	Funciona sem internet após carregamento inicial
RNF-005	Ícones	Lucide Icons exclusivamente — nenhum emoji
RNF-006	Responsivo	Desktop primário, tablet suportado, mobile para portal do cliente
RNF-007	Performance	Carregamento < 3s, transições suaves entre telas (SPA feel)
RNF-008	Validação	Todos os formulários com validação em tempo real
________________________________________
12. GLOSSÁRIO
Planilhas
Termo	Definição
Consulta	Encontro entre advogado e cliente para avaliação ou acompanhamento
Nível do Advogado	Classificação profissional: Júnior, Pleno, Sênior ou Especialista
Gravidade do Crime	Classificação do caso: Leve, Média, Grave ou Gravíssima
Valor Hora Base	Valor base por hora do advogado, usado no cálculo da consulta
Área do Direito	Ramo jurídico: Penal, Cível, Trabalhista, Tributário, Família, Empresarial
Secretaria	Usuário administrativo que gerencia cadastros e agenda
localStorage	Armazenamento local do navegador para persistência de dados
________________________________________
13. CHECKLIST DE ENTREGA
•	[ ] Tela de login funcional com os 3 perfis
•	[ ] Secretaria consegue cadastrar, editar e excluir clientes
•	[ ] Secretaria consegue cadastrar advogados com nível, áreas e horários
•	[ ] Sistema calcula corretamente o valor da consulta (nível × gravidade)
•	[ ] Agenda mostra apenas horários disponíveis do advogado selecionado
•	[ ] Advogado visualiza apenas sua própria agenda e clientes
•	[ ] Cliente consegue agendar consulta pelo portal
•	[ ] Relatórios geram dados consistentes com as consultas realizadas
•	[ ] Configurações permitem editar e-mail (cpsadvocacia11@gmail.com), precificação e áreas
•	[ ] Dados persistem entre sessões via localStorage
•	[ ] Seed de dados iniciais carrega automaticamente no primeiro acesso
•	[ ] Nenhum emoji é usado — apenas ícones Lucide
•	[ ] Interface responsiva e visualmente profissional
________________________________________
SPEC elaborada para CPS Advocacia — cpsadvocacia11@gmail.com
Escopo: Frontend-only (HTML + CSS + JS + localStorage)
Pronta para implementação com Boltz AI

