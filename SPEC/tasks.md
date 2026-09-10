# Tarefas — Sistema de Gestão (Escritório de Advocacia)

> Sistema web para cadastrar clientes, gerenciar advogados, calcular valores de
> consulta conforme a tabela de honorários da OAB e controlar horários
> disponíveis. Roda 100% no navegador, sem banco de dados (localStorage).
> Usuária principal: a secretária.

Divisão da spec em tarefas executáveis. Ordem sugerida: fundamento → cadastros →
núcleo (agendamento/cálculo) → relatórios/dashboard → fechamento.

## Fase 0 — Preparação

- [ ] **T1** — Wireframes das 4 telas principais (Dashboard, Cadastro de Clientes, Nova Consulta, Relatórios)
- [ ] **T2** — Estrutura do projeto: pastas, HTML5 semântico, CDN Tailwind e Chart.js
- [ ] **T3** — Modelar dados em JS (cliente, advogado, consulta, tabela OAB)
- [ ] **T4** — Camada de persistência: helpers de `localStorage` (salvar/carregar) + seed dos serviços OAB

## Fase 1 — Cadastros (F1 e F2)

- [ ] **T5 (F1)** — Formulário de cliente com validação (nome completo, CPF, telefone, e-mail obrigatórios; endereço opcional)
- [ ] **T6 (F1)** — Lista de clientes: listar todos, buscar por nome, excluir cadastro
- [ ] **T7 (F2)** — Formulário de advogado (nome completo, número da OAB, nível Junior/Pleno/Senior/Especialista, área de atuação opcional, horário de trabalho ex.: 9h–12h e 14h–18h)
- [ ] **T8 (F2)** — Validação: impedir dois advogados com a mesma OAB

## Fase 2 — Núcleo: agendamento + cálculo (F3 e F4)

- [ ] **T9 (F3)** — Seed da tabela de honorários da OAB: serviços por área, com valor mínimo fixo e/ou percentual sobre o valor da causa
- [ ] **T10 (F3)** — Motor de cálculo: aplicar `max(valorMínimo, percentual × valorDaCausa)` quando ambos existirem
- [ ] **T11 (F3)** — Ajuste por senioridade: margem por nível do advogado sobre o valor base
- [ ] **T12 (F3)** — Exibição automática do valor final na tela antes da secretária confirmar o agendamento
- [ ] **T13 (F4)** — Seleção de data/horário: duração mínima de 30 minutos + respeitar horários de trabalho do advogado
- [ ] **T14 (F4)** — Bloqueio de horários ocupados na interface
- [ ] **T15 (F4)** — Impedir agendamento duplo no mesmo horário para o mesmo advogado, com a mensagem "O advogado já possui consulta nesse horário."
- [ ] **T16 (F4)** — Visualização da agenda de um advogado específico por dia (livres e ocupados)

## Fase 3 — Relatórios e Dashboard (F5 e F6)

- [ ] **T17 (F5)** — Relatório de consultas do dia: cliente, advogado, horário e valor
- [ ] **T18 (F5)** — Relatório de faturamento por advogado com filtro de período (semana/mês) + gráfico Chart.js
- [ ] **T19 (F5)** — Lista completa de clientes com filtros (nome ou outro dado)
- [ ] **T20 (F5)** — Opção de impressão em formato limpo para todos os relatórios (`@media print`)
- [ ] **T21 (F6)** — Dashboard: total de consultas de hoje
- [ ] **T22 (F6)** — Dashboard: as cinco próximas consultas
- [ ] **T23 (F6)** — Dashboard: advogados com agenda livre no momento
- [ ] **T24 (F6)** — Dashboard: atalhos rápidos para novo cliente e nova consulta

## Fase 4 — Fechamento

- [ ] **T25** — Navegação entre telas a partir do Dashboard da Secretária
- [ ] **T26** — Responsividade e polimento visual (monitor de escritório e notebook)
- [ ] **T27** — QA dos critérios de aceitação:
- [ ] Funciona 100% no navegador, sem depender de servidor
- [ ] Dados persistem após fechar o navegador (localStorage)
- [ ] Cálculo correto: maior entre valor mínimo e percentual sobre a causa
- [ ] Impossível agendar duas consultas no mesmo horário para o mesmo advogado
- [ ] Todos os campos obrigatórios validados antes de salvar

## Fora de escopo (não fazer agora)

- Login ou autenticação
- Banco de dados (MySQL, MongoDB etc.)
- Backend ou API própria
- Emissão de nota fiscal
- Integração com e-mail ou WhatsApp
- Aplicativo mobile nativo
- Múltiplos usuários simultâneos com permissões diferentes
