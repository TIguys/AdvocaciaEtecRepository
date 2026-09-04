Sistema de Gestao — Escritorio de Advocacia
> Um escritorio que cresceu rapido demais e agora precisa deixar de depender de planilhas espalhadas e anotacoes na memoria.

1. Visao Geral
Um sistema web simples para cadastrar clientes, gerenciar advogados, calcular valores de consulta conforme a tabela de honorarios da OAB e controlar horarios disponiveis. Tudo roda no navegador, sem banco de dados.

2. Quem usa o sistema
A secretaria e a principal usuaria. Ela cadastra clientes, agenda consultas, consulta disponibilidade dos advogados e gera relatorios.

Os advogados, no futuro, poderao consultar seus proprios horarios e honorarios. Mas o foco inicial e todo na secretaria.

3. Funcionalidades
F1 — Cadastro de Clientes
A secretaria precisa cadastrar clientes para que eles possam agendar consultas.

Cada cliente precisa ter nome completo, CPF, telefone, e-mail e endereco (sendo o endereco opcional).

O sistema deve listar todos os clientes cadastrados, permitir busca por nome e excluir um cadastro quando necessario.

F2 — Cadastro de Advogados
A secretaria cadastra os advogados do escritorio com seu nivel de senioridade.

Cada advogado precisa ter nome completo, numero da OAB, nivel (Junior, Pleno, Senior ou Especialista), area de atuacao (opcional) e horario de trabalho (por exemplo, 9h as 12h e 14h as 18h).

O sistema nao pode permitir dois advogados com a mesma OAB.

F3 — Calculo do Valor da Consulta conforme a Tabela da OAB
A secretaria escolhe o tipo de servico que sera prestado, informa o valor da causa quando houver, e o sistema calcula o honorario sozinho com base na tabela da OAB.

A tabela da OAB organiza os servicos por area do direito. Cada servico tem um valor minimo fixo e, em muitos casos, um percentual sobre o valor da causa ou do proveito economico. Quando existem os dois, o sistema aplica o que for maior.

Por exemplo, uma consulta juridica tem um valor minimo fixo. Ja uma acao trabalhista pode ter um valor minimo fixo mais um percentual sobre o valor da condenacao ou do acordo. O sistema faz essa conta automaticamente.

Alem disso, o nivel do advogado influencia no valor final. Advogados mais experientes ou especialistas tem uma margem maior sobre o valor base da tabela, refletindo a complexidade e o tempo dedicado. O sistema aplica esse ajuste conforme o nivel cadastrado do advogado escolhido.

O valor aparece automaticamente na tela antes da secretaria confirmar o agendamento, ja com o valor minimo ou percentual calculado e ajustado pelo nivel do profissional.

F4 — Controle de Horarios dos Advogados
A secretaria precisa ver os horarios livres e ocupados de cada advogado para nao marcar em cima de outra consulta.

Cada consulta tem no minimo 30 minutos. Horarios ja ocupados ficam bloqueados na interface. E possivel visualizar a agenda de um advogado especifico por dia.

Se a secretaria tentar marcar um horario que ja esta ocupado, o sistema avisa com uma mensagem clara, algo como: “O advogado ja possui consulta nesse horario.”

F5 — Relatorios
A secretaria precisa de relatorios simples para acompanhar o escritorio.

O primeiro relatorio mostra as consultas do dia, com nome do cliente, nome do advogado, horario e valor.

O segundo mostra o faturamento por advogado em um periodo escolhido, como uma semana ou um mes.

O terceiro e uma lista completa de clientes cadastrados, com opcao de filtrar por nome ou outro dado.

Todos os relatorios sao exibidos na tela e tem opcao de impressao em formato limpo.

F6 — Dashboard da Secretaria
A tela inicial mostra o que realmente importa no dia.

La em cima fica o total de consultas agendadas para hoje. Abaixo, as cinco proximas consultas. Tambem aparece quais advogados estao com agenda livre no momento. E tem atalhos rapidos para abrir a tela de novo cliente e de nova consulta.

4. Telas e Fluxo
A navegacao principal parte do Dashboard da Secretaria.

De la, ela pode ir para o cadastro de cliente, que depois leva para a lista de clientes cadastrados.

Ou pode ir para a nova consulta, que conecta com a agenda do advogado para verificar disponibilidade.

Tambem pode acessar direto os relatorios.

5. Stack Tecnica
A estrutura das paginas usa HTML5 semantico.

O estilo usa CSS3 puro ou um framework leve carregado por CDN, como o Tailwind.

Toda a logica roda em JavaScript vanilla, sem frameworks pesados.

Os dados ficam salvos no localStorage do navegador, entao nao some quando fecha a aba.

Para os graficos dos relatorios, usa uma biblioteca leve via CDN, como o Chart.js.

O ponto mais importante: nao usar banco de dados. Todo o estado vive no navegador.

6. Fora do Escopo
Nao fazer agora:

Login ou autenticacao
Banco de dados como MySQL ou MongoDB
Backend ou API propria
Emissao de nota fiscal
Integracao com e-mail ou WhatsApp
Aplicativo mobile nativo
Multiplos usuarios simultaneos com permissoes diferentes
7. Criterios de Aceitacao Gerais
O sistema precisa funcionar 100% no navegador, sem depender de servidor.

Os dados precisam persistir apos fechar o navegador, usando o localStorage.

O calculo de valores precisa estar correto conforme a tabela de honorarios da OAB, aplicando o valor minimo ou o percentual sobre o valor da causa, sempre observando o maior valor entre eles quando ambos existirem.

Nao pode ser possivel agendar duas consultas no mesmo horario para o mesmo advogado.

A interface precisa ser limpa, responsiva e usavel tanto em monitor de escritorio quanto em notebook.

Todos os campos obrigatorios precisam ser validados antes de salvar.

8. Proximos Passos Sugeridos
Primeiro, fazer o prototipo das telas, um wireframe das quatro principais.

Depois, definir o modelo de dados em JavaScript, criando as estruturas para cliente, advogado e consulta, incluindo a referencia aos servicos da tabela da OAB.

Em seguida, implementar a tela de cadastro de cliente, que e a parte mais simples.

Por ultimo, montar o agendamento com calculo automatico baseado na tabela da OAB, que e o coracao do sistema.
