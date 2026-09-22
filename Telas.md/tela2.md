<!DOCTYPE html>

<html lang="pt-BR"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Clientes | Advocacia ETEC</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&amp;family=Noto+Serif:ital,wght@0,400;0,500;0,600;1,400&amp;family=PT+Serif:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
    @layer base {
      html, body { margin: 0; padding: 0; }
      body { overscroll-behavior: none; }
    }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-thumb { background: #e5e2e1; border-radius: 9999px; }
    ::-webkit-scrollbar-track { background: transparent; }
  </style>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#65121A",
            "primary-dark": "#450009",
            "primary-subtle": "#faf2f3",
            "primary-container": "#65121A",
            "on-primary": "#ffffff",
            surface: "#FFFFFF",
            "surface-canvas": "#FBFBFB",
            "surface-subtle": "#F7F7F8",
            "on-surface": "#0B0B0B",
            "on-surface-variant": "#636267",
            "border-subtle": "#EDEDEE",
            "border-muted": "#96959B",
            gold: "#C59B27",
            "gold-soft": "#FDF7E7",
            success: "#1B7340",
            "success-soft": "#EDF7F1",
            error: "#A31621",
            "error-soft": "#FDF2F3"
          },
          fontFamily: {
            serif: ["PT Serif", "Noto Serif", "serif"],
            sans: ["IBM Plex Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
            display: ["PT Serif", "Noto Serif", "serif"]
          }
        }
      }
    }
  </script>
</head>
<body class="bg-surface-canvas text-on-surface font-sans antialiased min-h-screen">
<!-- Header Minimalista -->
<header class="fixed top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md border-b border-border-subtle">
<div class="h-16 w-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
<div class="flex items-center gap-4">
<a class="flex items-center gap-3 group" href="#">
<img alt="Advocacia ETEC" class="h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6vReqTzfmd0sTDwsShZecEpE8h2lJ7xO-c1k_vJ6xMYLMI1PQ7tF124kG7-rJKA8MQZFXKg7J3GqsAf_Pes1YPKDq47bhdczWyDSOF1HHVi-vQbeSFRjweFmQ-hGwr3MHYx1Y_kF_BVH4TSsAh3yFhcy8KCQxHxCSlY89zD_vgmKV3lIN5AEPg-VcJkeJQmkWY4fbN1S4Mpg7GnGK5QxVeKCv_YWr_dRJ9KCM6PAv8Pn2SGRsH60fhA"/>
<div class="flex flex-col">
<span class="font-serif text-lg font-bold text-primary tracking-tight leading-none">Advocacia ETEC</span>
<span class="text-[11px] text-on-surface-variant font-light tracking-wider mt-0.5">Tecnologia Jurídica de Precisão</span>
</div>
</a>
</div>
<nav class="hidden md:flex items-center gap-8 text-[13px] font-medium text-on-surface-variant">
<a class="hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="hover:text-primary transition-colors" href="#">Processos</a>
<a class="text-primary font-semibold border-b-2 border-primary pb-0.5" href="#">Clientes</a>
<a class="hover:text-primary transition-colors" href="#">Prazos</a>
<a class="hover:text-primary transition-colors" href="#">Financeiro</a>
<a class="hover:text-primary transition-colors" href="#">Documentos</a>
</nav>
<div class="flex items-center gap-5">
<button class="text-on-surface-variant hover:text-on-surface transition-colors p-1" title="Notificações">
<span class="material-symbols-outlined text-[20px]">notifications_none</span>
</button>
<div class="h-4 w-[1px] bg-border-subtle"></div>
<div class="flex items-center gap-2.5 cursor-pointer">
<div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-semibold tracking-wider font-serif">
            AS
          </div>
<div class="hidden lg:flex flex-col text-left">
<span class="text-[13px] font-medium text-on-surface leading-tight">Dr. Arthur Silveira</span>
<span class="text-[11px] text-on-surface-variant">OAB/SP 412.890</span>
</div>
</div>
</div>
</div>
</header>
<!-- Conteúdo Principal com Generoso Whitespace -->
<main class="pt-24 pb-20 max-w-7xl mx-auto px-6 lg:px-10">
<!-- Título Principal & Ações de Topo -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border-subtle">
<div>
<span class="text-xs uppercase tracking-widest text-on-surface-variant font-medium">Gestão de Carteira</span>
<h1 class="font-serif text-3xl md:text-4xl font-normal text-on-surface tracking-tight mt-1">Clientes</h1>
<p class="text-sm text-on-surface-variant mt-1.5 font-light">142 clientes cadastrados e integrados ao ecossistema.</p>
</div>
<div class="flex items-center gap-3">
<button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface text-[13px] font-medium hover:bg-surface-subtle transition-all duration-150" id="btn-exportar">
<span class="material-symbols-outlined text-[17px] text-on-surface-variant">arrow_downward</span>
<span>Exportar</span>
</button>
<button class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary text-[13px] font-medium hover:bg-primary-dark transition-all duration-150 shadow-sm" id="btn-novo-cliente">
<span class="material-symbols-outlined text-[17px]">add</span>
<span>Novo Cliente</span>
</button>
</div>
</div>
<!-- Barra Minimalista de Métricas (Leve, sem molduras pesadas) -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-border-subtle">
<div>
<p class="text-xs uppercase tracking-wider text-on-surface-variant">Total Registrados</p>
<div class="flex items-baseline gap-2 mt-1">
<span class="font-serif text-3xl font-medium text-on-surface">142</span>
<span class="text-xs text-success font-medium">+8% mês</span>
</div>
</div>
<div>
<p class="text-xs uppercase tracking-wider text-on-surface-variant">Ativos em Carteira</p>
<div class="flex items-baseline gap-2 mt-1">
<span class="font-serif text-3xl font-medium text-on-surface">118</span>
<span class="text-xs text-on-surface-variant">83%</span>
</div>
</div>
<div>
<p class="text-xs uppercase tracking-wider text-on-surface-variant">Ações em Curso</p>
<div class="flex items-baseline gap-2 mt-1">
<span class="font-serif text-3xl font-medium text-on-surface">87</span>
<span class="text-xs text-on-surface-variant">processos</span>
</div>
</div>
<div>
<p class="text-xs uppercase tracking-wider text-on-surface-variant">Novos no Mês</p>
<div class="flex items-baseline gap-2 mt-1">
<span class="font-serif text-3xl font-medium text-primary">+14</span>
<span class="text-xs text-on-surface-variant">meta 12</span>
</div>
</div>
</div>
<!-- Barra de Busca e Filtros Ultra-Limpa -->
<div class="pt-8 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div class="relative flex-1 max-w-lg">
<span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[19px] text-border-muted">search</span>
<input class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-subtle bg-surface text-on-surface text-[13px] placeholder:text-border-muted focus:outline-none focus:border-primary transition-colors" id="input-busca" placeholder="Buscar por nome, documento, e-mail ou processo..." type="text"/>
</div>
<div class="flex items-center gap-2 flex-wrap">
<div class="flex items-center gap-1 p-1 bg-surface-subtle rounded-lg border border-border-subtle text-xs">
<button class="filter-tipo-btn px-3 py-1.5 rounded-md font-medium bg-surface text-on-surface shadow-xs transition-all" data-tipo-btn="todos">Todos</button>
<button class="filter-tipo-btn px-3 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface transition-all" data-tipo-btn="PF">Pessoa Física</button>
<button class="filter-tipo-btn px-3 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface transition-all" data-tipo-btn="PJ">Pessoa Jurídica</button>
</div>
<button class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border-subtle bg-surface text-[13px] text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors" id="btn-toggle-filtros">
<span class="material-symbols-outlined text-[17px]">tune</span>
<span>Filtros</span>
<span class="hidden w-1.5 h-1.5 rounded-full bg-primary" id="filtro-badge"></span>
</button>
<button class="text-xs text-on-surface-variant hover:text-error px-2 py-2 transition-colors" id="btn-limpar-filtros" title="Restaurar visualização">
          Limpar
        </button>
</div>
</div>
<!-- Painel Expansível de Filtros Avançados -->
<div class="hidden grid-cols-1 md:grid-cols-3 gap-4 p-5 mb-4 rounded-xl bg-surface-subtle border border-border-subtle text-xs" id="painel-filtros-avancados">
<div>
<label class="block text-on-surface-variant font-medium mb-1.5">Status</label>
<select class="w-full px-3 py-2 rounded-md bg-surface border border-border-subtle text-on-surface text-xs focus:outline-none focus:border-primary" id="select-status">
<option value="">Todos os status</option>
<option value="Ativo">Ativo</option>
<option value="Processo em Andamento">Processo em Andamento</option>
<option value="Em Negociação">Em Negociação</option>
<option value="Inativo">Inativo</option>
</select>
</div>
<div>
<label class="block text-on-surface-variant font-medium mb-1.5">Área de Atuação</label>
<select class="w-full px-3 py-2 rounded-md bg-surface border border-border-subtle text-on-surface text-xs focus:outline-none focus:border-primary" id="select-area">
<option value="">Todas as áreas</option>
<option value="Cível">Cível</option>
<option value="Trabalhista">Trabalhista</option>
<option value="Empresarial">Empresarial</option>
<option value="Tributário">Tributário</option>
<option value="Família">Família &amp; Sucessões</option>
</select>
</div>
<div>
<label class="block text-on-surface-variant font-medium mb-1.5">Advogado Responsável</label>
<select class="w-full px-3 py-2 rounded-md bg-surface border border-border-subtle text-on-surface text-xs focus:outline-none focus:border-primary">
<option value="">Todos</option>
<option>Dr. Arthur Silveira (OAB/SP 412.890)</option>
<option>Dra. Mariana Fontes (OAB/SP 389.120)</option>
</select>
</div>
</div>
<!-- Indicador de Resultados -->
<div class="flex items-center justify-between py-3 text-xs text-on-surface-variant">
<span id="contagem-resultados">5 registros exibidos</span>
<span class="hidden sm:inline">Ordenado por mais recentes</span>
</div>
<!-- Tabela Limpa e Elegante (Desktop) -->
<div class="hidden lg:block overflow-hidden bg-surface rounded-xl border border-border-subtle">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-border-subtle text-[11px] uppercase tracking-wider text-on-surface-variant bg-surface-subtle/50">
<th class="py-3.5 px-6 font-medium">Cliente</th>
<th class="py-3.5 px-6 font-medium">Contato</th>
<th class="py-3.5 px-6 font-medium">Área &amp; Status</th>
<th class="py-3.5 px-6 font-medium text-center">Processos</th>
<th class="py-3.5 px-6 font-medium">Última Atividade</th>
<th class="py-3.5 px-6 font-medium text-right">Ações</th>
</tr>
</thead>
<tbody class="divide-y divide-border-subtle" id="tabela-clientes-body">
<!-- Linha 1 -->
<tr class="client-row hover:bg-surface-subtle/60 transition-colors group" data-area="Empresarial" data-status="Processo em Andamento" data-tipo="PJ">
<td class="py-4 px-6">
<div class="flex items-center gap-3.5">
<div class="w-9 h-9 rounded-full bg-primary-subtle text-primary flex items-center justify-center font-serif font-bold text-xs">
                  GC
                </div>
<div>
<div class="font-serif font-medium text-on-surface text-[15px] group-hover:text-primary transition-colors">
                    Guimarães Construtora &amp; Engenharia Ltda
                  </div>
<div class="text-xs text-on-surface-variant font-light mt-0.5">CNPJ 14.892.304/0001-92</div>
</div>
</div>
</td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light space-y-0.5">
<div>contato@guimaraeseng.com.br</div>
<div class="text-on-surface">(11) 98822-1010</div>
</td>
<td class="py-4 px-6">
<div class="flex flex-col items-start gap-1">
<span class="text-xs text-on-surface">Empresarial</span>
<span class="inline-flex items-center gap-1.5 text-[11px] text-primary">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Em Andamento
                </span>
</div>
</td>
<td class="py-4 px-6 text-center text-xs font-medium text-on-surface">
              4 ações
            </td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light">
<div class="text-on-surface">12/10/2024</div>
<div class="text-[11px]">Petição protocolada</div>
</td>
<td class="py-4 px-6 text-right">
<div class="inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="btn-ver-dossie p-1.5 rounded text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-colors" title="Visualizar Dossiê">
<span class="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button class="btn-editar-cliente p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors" data-area="Empresarial" data-doc="14.892.304/0001-92" data-email="contato@guimaraeseng.com.br" data-nome="Guimarães Construtora &amp; Engenharia Ltda" data-status="Processo em Andamento" data-tel="(11) 98822-1010" data-tipo="PJ" title="Editar">
<span class="material-symbols-outlined text-[18px]">edit</span>
</button>
<button class="btn-excluir-cliente p-1.5 rounded text-on-surface-variant hover:text-error hover:bg-error-soft transition-colors" data-nome="Guimarães Construtora &amp; Engenharia Ltda" title="Excluir">
<span class="material-symbols-outlined text-[18px]">delete_outline</span>
</button>
</div>
</td>
</tr>
<!-- Linha 2 -->
<tr class="client-row hover:bg-surface-subtle/60 transition-colors group" data-area="Cível" data-status="Ativo" data-tipo="PF">
<td class="py-4 px-6">
<div class="flex items-center gap-3.5">
<div class="w-9 h-9 rounded-full bg-surface-subtle text-on-surface border border-border-subtle flex items-center justify-center font-serif font-bold text-xs">
                  MS
                </div>
<div>
<div class="flex items-center gap-1.5">
<span class="font-serif font-medium text-on-surface text-[15px] group-hover:text-primary transition-colors">Mariana Silveira Santos</span>
<span class="material-symbols-outlined text-[14px] text-gold" title="Cliente VIP">star</span>
</div>
<div class="text-xs text-on-surface-variant font-light mt-0.5">CPF 341.***.***-09</div>
</div>
</div>
</td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light space-y-0.5">
<div>mariana.silveira@advmail.com</div>
<div class="text-on-surface">(11) 97120-3344</div>
</td>
<td class="py-4 px-6">
<div class="flex flex-col items-start gap-1">
<span class="text-xs text-on-surface">Cível</span>
<span class="inline-flex items-center gap-1.5 text-[11px] text-success">
<span class="w-1.5 h-1.5 rounded-full bg-success"></span>
                  Ativo
                </span>
</div>
</td>
<td class="py-4 px-6 text-center text-xs font-medium text-on-surface">
              2 ações
            </td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light">
<div class="text-on-surface">Hoje às 10:45</div>
<div class="text-[11px]">Reunião realizada</div>
</td>
<td class="py-4 px-6 text-right">
<div class="inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="btn-ver-dossie p-1.5 rounded text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-colors" title="Visualizar Dossiê">
<span class="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button class="btn-editar-cliente p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors" data-area="Cível" data-doc="341.890.128-09" data-email="mariana.silveira@advmail.com" data-nome="Mariana Silveira Santos" data-status="Ativo" data-tel="(11) 97120-3344" data-tipo="PF" title="Editar">
<span class="material-symbols-outlined text-[18px]">edit</span>
</button>
<button class="btn-excluir-cliente p-1.5 rounded text-on-surface-variant hover:text-error hover:bg-error-soft transition-colors" data-nome="Mariana Silveira Santos" title="Excluir">
<span class="material-symbols-outlined text-[18px]">delete_outline</span>
</button>
</div>
</td>
</tr>
<!-- Linha 3 -->
<tr class="client-row hover:bg-surface-subtle/60 transition-colors group" data-area="Trabalhista" data-status="Processo em Andamento" data-tipo="PF">
<td class="py-4 px-6">
<div class="flex items-center gap-3.5">
<div class="w-9 h-9 rounded-full bg-surface-subtle text-on-surface border border-border-subtle flex items-center justify-center font-serif font-bold text-xs">
                  LA
                </div>
<div>
<div class="font-serif font-medium text-on-surface text-[15px] group-hover:text-primary transition-colors">
                    Lucas de Albuquerque Lima
                  </div>
<div class="text-xs text-on-surface-variant font-light mt-0.5">CPF 198.***.***-45</div>
</div>
</div>
</td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light space-y-0.5">
<div>lucas.albuquerque@techsol.br</div>
<div class="text-on-surface">(11) 96340-2288</div>
</td>
<td class="py-4 px-6">
<div class="flex flex-col items-start gap-1">
<span class="text-xs text-on-surface">Trabalhista</span>
<span class="inline-flex items-center gap-1.5 text-[11px] text-gold">
<span class="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Audiência Designada
                </span>
</div>
</td>
<td class="py-4 px-6 text-center text-xs font-medium text-on-surface">
              1 ação
            </td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light">
<div class="text-on-surface">Ontem</div>
<div class="text-[11px]">Publicação DJE</div>
</td>
<td class="py-4 px-6 text-right">
<div class="inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="btn-ver-dossie p-1.5 rounded text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-colors" title="Visualizar Dossiê">
<span class="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button class="btn-editar-cliente p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors" data-area="Trabalhista" data-doc="198.542.871-45" data-email="lucas.albuquerque@techsol.br" data-nome="Lucas de Albuquerque Lima" data-status="Processo em Andamento" data-tel="(11) 96340-2288" data-tipo="PF" title="Editar">
<span class="material-symbols-outlined text-[18px]">edit</span>
</button>
<button class="btn-excluir-cliente p-1.5 rounded text-on-surface-variant hover:text-error hover:bg-error-soft transition-colors" data-nome="Lucas de Albuquerque Lima" title="Excluir">
<span class="material-symbols-outlined text-[18px]">delete_outline</span>
</button>
</div>
</td>
</tr>
<!-- Linha 4 -->
<tr class="client-row hover:bg-surface-subtle/60 transition-colors group" data-area="Tributário" data-status="Em Negociação" data-tipo="PJ">
<td class="py-4 px-6">
<div class="flex items-center gap-3.5">
<div class="w-9 h-9 rounded-full bg-primary-subtle text-primary flex items-center justify-center font-serif font-bold text-xs">
                  NR
                </div>
<div>
<div class="font-serif font-medium text-on-surface text-[15px] group-hover:text-primary transition-colors">
                    Nexus Redes Hospitalares S.A.
                  </div>
<div class="text-xs text-on-surface-variant font-light mt-0.5">CNPJ 03.541.902/0002-18</div>
</div>
</div>
</td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light space-y-0.5">
<div>juridico@nexusredes.com</div>
<div class="text-on-surface">(11) 99990-8877</div>
</td>
<td class="py-4 px-6">
<div class="flex flex-col items-start gap-1">
<span class="text-xs text-on-surface">Tributário</span>
<span class="inline-flex items-center gap-1.5 text-[11px] text-on-surface-variant">
<span class="w-1.5 h-1.5 rounded-full bg-border-muted"></span>
                  Em Negociação
                </span>
</div>
</td>
<td class="py-4 px-6 text-center text-xs font-medium text-on-surface">
              —
            </td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light">
<div class="text-on-surface">08/10/2024</div>
<div class="text-[11px]">Minuta enviada</div>
</td>
<td class="py-4 px-6 text-right">
<div class="inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="btn-ver-dossie p-1.5 rounded text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-colors" title="Visualizar Dossiê">
<span class="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button class="btn-editar-cliente p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors" data-area="Tributário" data-doc="03.541.902/0002-18" data-email="juridico@nexusredes.com" data-nome="Nexus Redes Hospitalares S.A." data-status="Em Negociação" data-tel="(11) 99990-8877" data-tipo="PJ" title="Editar">
<span class="material-symbols-outlined text-[18px]">edit</span>
</button>
<button class="btn-excluir-cliente p-1.5 rounded text-on-surface-variant hover:text-error hover:bg-error-soft transition-colors" data-nome="Nexus Redes Hospitalares S.A." title="Excluir">
<span class="material-symbols-outlined text-[18px]">delete_outline</span>
</button>
</div>
</td>
</tr>
<!-- Linha 5 -->
<tr class="client-row hover:bg-surface-subtle/60 transition-colors group" data-area="Família" data-status="Inativo" data-tipo="PF">
<td class="py-4 px-6">
<div class="flex items-center gap-3.5">
<div class="w-9 h-9 rounded-full bg-surface-subtle text-on-surface border border-border-subtle flex items-center justify-center font-serif font-bold text-xs">
                  RO
                </div>
<div>
<div class="font-serif font-medium text-on-surface text-[15px] group-hover:text-primary transition-colors">
                    Rodrigo de Oliveira Ramos
                  </div>
<div class="text-xs text-on-surface-variant font-light mt-0.5">CPF 255.***.***-60</div>
</div>
</div>
</td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light space-y-0.5">
<div>rodrigo.ramos@uol.com.br</div>
<div class="text-on-surface">(11) 98544-9012</div>
</td>
<td class="py-4 px-6">
<div class="flex flex-col items-start gap-1">
<span class="text-xs text-on-surface">Família</span>
<span class="inline-flex items-center gap-1.5 text-[11px] text-border-muted">
<span class="w-1.5 h-1.5 rounded-full bg-border-muted"></span>
                  Inativo
                </span>
</div>
</td>
<td class="py-4 px-6 text-center text-xs font-light text-on-surface-variant">
              1 arquivado
            </td>
<td class="py-4 px-6 text-xs text-on-surface-variant font-light">
<div class="text-on-surface">15/08/2024</div>
<div class="text-[11px]">Trânsito em julgado</div>
</td>
<td class="py-4 px-6 text-right">
<div class="inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
<button class="btn-ver-dossie p-1.5 rounded text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-colors" title="Visualizar Dossiê">
<span class="material-symbols-outlined text-[18px]">folder_open</span>
</button>
<button class="btn-editar-cliente p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors" data-area="Família" data-doc="255.109.843-60" data-email="rodrigo.ramos@uol.com.br" data-nome="Rodrigo de Oliveira Ramos" data-status="Inativo" data-tel="(11) 98544-9012" data-tipo="PF" title="Editar">
<span class="material-symbols-outlined text-[18px]">edit</span>
</button>
<button class="btn-excluir-cliente p-1.5 rounded text-on-surface-variant hover:text-error hover:bg-error-soft transition-colors" data-nome="Rodrigo de Oliveira Ramos" title="Excluir">
<span class="material-symbols-outlined text-[18px]">delete_outline</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Lista Minimalista Mobile -->
<div class="lg:hidden space-y-3" id="lista-clientes-mobile">
<!-- Card Mobile 1 -->
<div class="client-card-mobile bg-surface p-4 rounded-xl border border-border-subtle" data-area="Empresarial" data-status="Processo em Andamento" data-tipo="PJ">
<div class="flex items-start justify-between">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-primary-subtle text-primary font-serif font-bold text-xs flex items-center justify-center">GC</div>
<div>
<h3 class="font-serif font-medium text-sm text-on-surface">Guimarães Construtora</h3>
<p class="text-[11px] text-on-surface-variant">CNPJ 14.892.304/0001-92</p>
</div>
</div>
<span class="text-[11px] text-primary font-medium">Em Andamento</span>
</div>
<div class="mt-3 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-on-surface-variant">
<span>4 ações vinculadas</span>
<div class="flex items-center gap-1">
<button class="btn-ver-dossie p-1.5 text-on-surface"><span class="material-symbols-outlined text-[18px]">folder_open</span></button>
<button class="btn-editar-cliente p-1.5 text-on-surface" data-area="Empresarial" data-doc="14.892.304/0001-92" data-email="contato@guimaraeseng.com.br" data-nome="Guimarães Construtora" data-status="Processo em Andamento" data-tel="(11) 98822-1010" data-tipo="PJ"><span class="material-symbols-outlined text-[18px]">edit</span></button>
<button class="btn-excluir-cliente p-1.5 text-error" data-nome="Guimarães Construtora"><span class="material-symbols-outlined text-[18px]">delete_outline</span></button>
</div>
</div>
</div>
<!-- Card Mobile 2 -->
<div class="client-card-mobile bg-surface p-4 rounded-xl border border-border-subtle" data-area="Cível" data-status="Ativo" data-tipo="PF">
<div class="flex items-start justify-between">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-surface-subtle border border-border-subtle text-on-surface font-serif font-bold text-xs flex items-center justify-center">MS</div>
<div>
<h3 class="font-serif font-medium text-sm text-on-surface">Mariana Silveira</h3>
<p class="text-[11px] text-on-surface-variant">CPF 341.***.***-09</p>
</div>
</div>
<span class="text-[11px] text-success font-medium">Ativo</span>
</div>
<div class="mt-3 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-on-surface-variant">
<span>2 ações cíveis</span>
<div class="flex items-center gap-1">
<button class="btn-ver-dossie p-1.5 text-on-surface"><span class="material-symbols-outlined text-[18px]">folder_open</span></button>
<button class="btn-editar-cliente p-1.5 text-on-surface" data-area="Cível" data-doc="341.890.128-09" data-email="mariana.silveira@advmail.com" data-nome="Mariana Silveira" data-status="Ativo" data-tel="(11) 97120-3344" data-tipo="PF"><span class="material-symbols-outlined text-[18px]">edit</span></button>
<button class="btn-excluir-cliente p-1.5 text-error" data-nome="Mariana Silveira"><span class="material-symbols-outlined text-[18px]">delete_outline</span></button>
</div>
</div>
</div>
</div>
<!-- Paginação Discreta -->
<div class="flex items-center justify-between pt-6 text-xs text-on-surface-variant">
<span>1 a 5 de 142 clientes</span>
<div class="flex items-center gap-1.5">
<button class="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors disabled:opacity-40" disabled="">
<span class="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<span class="px-2.5 py-1 text-xs font-semibold text-primary">1</span>
<button class="px-2.5 py-1 text-xs text-on-surface-variant hover:text-on-surface">2</button>
<button class="px-2.5 py-1 text-xs text-on-surface-variant hover:text-on-surface">3</button>
<button class="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-subtle transition-colors">
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</main>
<!-- Modal Cadastro / Edição Minimalista -->
<div class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" id="modal-cliente">
<div class="bg-surface w-full max-w-xl rounded-2xl shadow-xl border border-border-subtle overflow-hidden flex flex-col max-h-[90vh]">
<!-- Cabeçalho Modal -->
<div class="px-6 py-5 border-b border-border-subtle flex items-center justify-between">
<div>
<h2 class="font-serif text-xl font-medium text-on-surface" id="modal-titulo">Novo Cliente</h2>
<p class="text-xs text-on-surface-variant mt-0.5">Preencha os dados fundamentais para cadastro</p>
</div>
<button class="p-1 text-on-surface-variant hover:text-on-surface transition-colors" id="modal-fechar-btn">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<!-- Formulário com Abas Limpas -->
<div class="flex border-b border-border-subtle px-6 text-xs">
<button class="tab-btn py-3 px-3 font-medium text-primary border-b-2 border-primary -mb-[1px]" data-tab="tab-pessoais">Identificação</button>
<button class="tab-btn py-3 px-3 text-on-surface-variant hover:text-on-surface -mb-[1px]" data-tab="tab-contato">Contato &amp; Endereço</button>
<button class="tab-btn py-3 px-3 text-on-surface-variant hover:text-on-surface -mb-[1px]" data-tab="tab-juridico">Jurídico</button>
</div>
<div class="p-6 overflow-y-auto space-y-5 text-xs">
<!-- Tab 1: Pessoais -->
<div class="tab-pane space-y-4" id="tab-pessoais">
<div class="flex items-center gap-4">
<span class="text-on-surface-variant">Tipo:</span>
<label class="flex items-center gap-1.5 cursor-pointer text-on-surface">
<input checked="" class="text-primary focus:ring-0" name="tipo_pessoa" type="radio" value="PF"/>
<span>Pessoa Física (PF)</span>
</label>
<label class="flex items-center gap-1.5 cursor-pointer text-on-surface">
<input class="text-primary focus:ring-0" name="tipo_pessoa" type="radio" value="PJ"/>
<span>Pessoa Jurídica (PJ)</span>
</label>
</div>
<div>
<label class="block text-on-surface font-medium mb-1">Nome Completo / Razão Social *</label>
<input class="w-full px-3 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface focus:outline-none focus:border-primary text-xs" id="form-nome" placeholder="Ex: Roberto Ramos ou Alfa Engenharia" type="text"/>
<span class="hidden text-error text-[11px] mt-1" id="nome-status">Nome é obrigatório</span>
</div>
<div class="grid grid-cols-2 gap-3">
<div>
<label class="block text-on-surface font-medium mb-1" id="label-doc-num">CPF *</label>
<input class="w-full px-3 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface focus:outline-none focus:border-primary text-xs" id="form-doc" placeholder="000.000.000-00" type="text"/>
</div>
<div>
<label class="block text-on-surface font-medium mb-1">Status</label>
<select class="w-full px-3 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface focus:outline-none focus:border-primary text-xs" id="form-status">
<option value="Ativo">Ativo</option>
<option value="Processo em Andamento">Processo em Andamento</option>
<option value="Em Negociação">Em Negociação</option>
<option value="Inativo">Inativo</option>
</select>
</div>
</div>
</div>
<!-- Tab 2: Contato -->
<div class="tab-pane hidden space-y-4" id="tab-contato">
<div class="grid grid-cols-2 gap-3">
<div>
<label class="block text-on-surface font-medium mb-1">E-mail Principal *</label>
<input class="w-full px-3 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface focus:outline-none focus:border-primary text-xs" id="form-email" placeholder="cliente@dominio.com.br" type="email"/>
<span class="hidden text-error text-[11px] mt-1" id="email-status">E-mail válido é obrigatório</span>
</div>
<div>
<label class="block text-on-surface font-medium mb-1">WhatsApp / Telefone</label>
<input class="w-full px-3 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface focus:outline-none focus:border-primary text-xs" id="form-tel" placeholder="(11) 98000-0000" type="text"/>
</div>
</div>
<div>
<label class="block text-on-surface font-medium mb-1">Endereço Completo</label>
<input class="w-full px-3 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface focus:outline-none focus:border-primary text-xs" placeholder="Av. Paulista, 1000 - Bela Vista, São Paulo/SP" type="text"/>
</div>
</div>
<!-- Tab 3: Jurídico -->
<div class="tab-pane hidden space-y-4" id="tab-juridico">
<div class="grid grid-cols-2 gap-3">
<div>
<label class="block text-on-surface font-medium mb-1">Área de Atuação</label>
<select class="w-full px-3 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface focus:outline-none focus:border-primary text-xs" id="form-area">
<option value="Cível">Cível</option>
<option value="Trabalhista">Trabalhista</option>
<option value="Empresarial">Empresarial</option>
<option value="Tributário">Tributário</option>
<option value="Família">Família &amp; Sucessões</option>
</select>
</div>
<div>
<label class="block text-on-surface font-medium mb-1">Advogado Titular</label>
<select class="w-full px-3 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface focus:outline-none focus:border-primary text-xs">
<option>Dr. Arthur Silveira (OAB/SP 412.890)</option>
<option>Dra. Mariana Fontes (OAB/SP 389.120)</option>
</select>
</div>
</div>
<div>
<label class="block text-on-surface font-medium mb-1">Anotações Estratégicas</label>
<textarea class="w-full px-3 py-2 rounded-lg border border-border-subtle bg-surface text-on-surface focus:outline-none focus:border-primary text-xs" placeholder="Informações contratuais relevantes, honorários acordados..." rows="3"></textarea>
</div>
</div>
</div>
<!-- Rodapé Modal -->
<div class="px-6 py-4 border-t border-border-subtle flex items-center justify-end gap-2.5 bg-surface-subtle/50">
<button class="px-4 py-2 text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors" id="modal-cancelar-btn">
          Cancelar
        </button>
<button class="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-medium hover:bg-primary-dark transition-colors shadow-xs" id="modal-salvar-btn">
<span id="salvar-btn-texto">Salvar</span>
</button>
</div>
</div>
</div>
<!-- Modal Exclusão Minimalista -->
<div class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" id="modal-excluir">
<div class="bg-surface w-full max-w-sm rounded-2xl shadow-xl border border-border-subtle p-6 flex flex-col gap-4 text-center">
<div class="w-10 h-10 rounded-full bg-error-soft text-error flex items-center justify-center mx-auto">
<span class="material-symbols-outlined text-[20px]">delete</span>
</div>
<div>
<h3 class="font-serif text-lg font-medium text-on-surface">Excluir Registro?</h3>
<p class="text-xs text-on-surface-variant mt-1">
          Confirma a exclusão de <span class="font-medium text-on-surface" id="excluir-nome-cliente">Cliente</span>? Esta operação não poderá ser desfeita.
        </p>
</div>
<div class="flex items-center justify-center gap-2 pt-2">
<button class="px-4 py-2 text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors" id="excluir-cancelar-btn">
          Cancelar
        </button>
<button class="px-4 py-2 rounded-lg bg-error text-white text-xs font-medium hover:bg-red-700 transition-colors" id="excluir-confirmar-btn">
          Excluir
        </button>
</div>
</div>
</div>
<!-- Notificação Toast Minimalista -->
<div class="fixed bottom-6 right-6 z-50 hidden items-center gap-2.5 px-4 py-2.5 rounded-lg shadow-lg bg-on-surface text-surface text-xs font-light" id="toast-notificacao">
<span class="material-symbols-outlined text-[16px] text-gold" id="toast-icon">check_circle</span>
<span id="toast-titulo">Ação concluída</span>
</div>
<script>
    (function() {
      const modalCliente = document.getElementById('modal-cliente');
      const modalExcluir = document.getElementById('modal-excluir');
      const btnNovoCliente = document.getElementById('btn-novo-cliente');
      const modalFecharBtn = document.getElementById('modal-fechar-btn');
      const modalCancelarBtn = document.getElementById('modal-cancelar-btn');
      const modalSalvarBtn = document.getElementById('modal-salvar-btn');
      const salvarBtnTexto = document.getElementById('salvar-btn-texto');
      const excluirCancelarBtn = document.getElementById('excluir-cancelar-btn');
      const excluirConfirmarBtn = document.getElementById('excluir-confirmar-btn');
      const excluirNomeCliente = document.getElementById('excluir-nome-cliente');
      const btnToggleFiltros = document.getElementById('btn-toggle-filtros');
      const painelFiltros = document.getElementById('painel-filtros-avancados');
      const filtroBadge = document.getElementById('filtro-badge');
      const btnLimparFiltros = document.getElementById('btn-limpar-filtros');
      const inputBusca = document.getElementById('input-busca');
      const selectStatus = document.getElementById('select-status');
      const selectArea = document.getElementById('select-area');
      const filterTipoBtns = document.querySelectorAll('.filter-tipo-btn');
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabPanes = document.querySelectorAll('.tab-pane');
      const toast = document.getElementById('toast-notificacao');
      const toastTitulo = document.getElementById('toast-titulo');
      const toastIcon = document.getElementById('toast-icon');
      const contagemResultados = document.getElementById('contagem-resultados');

      let currentTipoFilter = 'todos';
      let rowToDelete = null;

      function showToast(titulo, isError = false) {
        toastTitulo.textContent = titulo;
        toastIcon.textContent = isError ? 'error' : 'check_circle';
        toastIcon.className = 'material-symbols-outlined text-[16px] ' + (isError ? 'text-error' : 'text-gold');
        toast.classList.remove('hidden');
        toast.classList.add('flex');
        setTimeout(() => {
          toast.classList.add('hidden');
          toast.classList.remove('flex');
        }, 2500);
      }

      // Abertura Modal Novo Cliente
      btnNovoCliente.addEventListener('click', () => {
        document.getElementById('modal-titulo').textContent = 'Novo Cliente';
        salvarBtnTexto.textContent = 'Salvar';
        document.getElementById('form-nome').value = '';
        document.getElementById('form-doc').value = '';
        document.getElementById('form-email').value = '';
        document.getElementById('form-tel').value = '';
        modalCliente.classList.remove('hidden');
      });

      modalFecharBtn.addEventListener('click', () => modalCliente.classList.add('hidden'));
      modalCancelarBtn.addEventListener('click', () => modalCliente.classList.add('hidden'));

      // Abas
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-tab');
          tabBtns.forEach(b => {
            b.classList.remove('text-primary', 'border-b-2', 'border-primary', 'font-medium');
            b.classList.add('text-on-surface-variant');
          });
          btn.classList.add('text-primary', 'border-b-2', 'border-primary', 'font-medium');
          btn.classList.remove('text-on-surface-variant');

          tabPanes.forEach(pane => {
            if (pane.id === targetId) {
              pane.classList.remove('hidden');
            } else {
              pane.classList.add('hidden');
            }
          });
        });
      });

      // Alternar PF / PJ
      const radioPF = document.querySelector('input[name="tipo_pessoa"][value="PF"]');
      const radioPJ = document.querySelector('input[name="tipo_pessoa"][value="PJ"]');
      const labelDocNum = document.getElementById('label-doc-num');
      const formDoc = document.getElementById('form-doc');

      function updateTipoPessoa() {
        if (radioPJ.checked) {
          labelDocNum.textContent = 'CNPJ *';
          formDoc.placeholder = '00.000.000/0001-00';
        } else {
          labelDocNum.textContent = 'CPF *';
          formDoc.placeholder = '000.000.000-00';
        }
      }
      radioPF.addEventListener('change', updateTipoPessoa);
      radioPJ.addEventListener('change', updateTipoPessoa);

      const formNome = document.getElementById('form-nome');
      const nomeStatus = document.getElementById('nome-status');
      const formEmail = document.getElementById('form-email');
      const emailStatus = document.getElementById('email-status');

      modalSalvarBtn.addEventListener('click', () => {
        const nomeVal = formNome.value.trim();
        const emailVal = formEmail.value.trim();
        let hasError = false;

        if (!nomeVal) {
          nomeStatus.classList.remove('hidden');
          hasError = true;
        } else {
          nomeStatus.classList.add('hidden');
        }

        if (emailVal && !emailVal.includes('@')) {
          emailStatus.classList.remove('hidden');
          hasError = true;
        } else {
          emailStatus.classList.add('hidden');
        }

        if (hasError) return;

        salvarBtnTexto.textContent = 'Gravando...';
        setTimeout(() => {
          modalCliente.classList.add('hidden');
          salvarBtnTexto.textContent = 'Salvar';
          showToast('Cliente gravado com sucesso.');
        }, 500);
      });

      // Edição
      document.querySelectorAll('.btn-editar-cliente').forEach(btn => {
        btn.addEventListener('click', () => {
          const nome = btn.getAttribute('data-nome') || '';
          const doc = btn.getAttribute('data-doc') || '';
          const email = btn.getAttribute('data-email') || '';
          const tel = btn.getAttribute('data-tel') || '';
          const tipo = btn.getAttribute('data-tipo') || 'PF';

          document.getElementById('modal-titulo').textContent = 'Editar Cliente';
          salvarBtnTexto.textContent = 'Atualizar';

          formNome.value = nome;
          formDoc.value = doc;
          formEmail.value = email;
          document.getElementById('form-tel').value = tel;

          if (tipo === 'PJ') {
            radioPJ.checked = true;
          } else {
            radioPF.checked = true;
          }
          updateTipoPessoa();
          modalCliente.classList.remove('hidden');
        });
      });

      // Exclusão
      document.querySelectorAll('.btn-excluir-cliente').forEach(btn => {
        btn.addEventListener('click', () => {
          const nome = btn.getAttribute('data-nome') || 'Registro';
          excluirNomeCliente.textContent = nome;
          rowToDelete = btn.closest('tr') || btn.closest('.client-card-mobile');
          modalExcluir.classList.remove('hidden');
        });
      });

      excluirCancelarBtn.addEventListener('click', () => modalExcluir.classList.add('hidden'));

      excluirConfirmarBtn.addEventListener('click', () => {
        modalExcluir.classList.add('hidden');
        if (rowToDelete) {
          rowToDelete.remove();
          showToast('Registro excluído.');
          aplicarFiltros();
        }
      });

      // Ver dossiê
      document.querySelectorAll('.btn-ver-dossie').forEach(btn => {
        btn.addEventListener('click', () => {
          showToast('Abrindo pasta processual...');
        });
      });

      // Alternar filtros avançados
      btnToggleFiltros.addEventListener('click', () => {
        painelFiltros.classList.toggle('hidden');
        painelFiltros.classList.toggle('grid');
      });

      // Filtro tipo (PF / PJ / Todos)
      filterTipoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterTipoBtns.forEach(b => {
            b.classList.remove('bg-surface', 'text-on-surface', 'shadow-xs', 'font-medium');
            b.classList.add('text-on-surface-variant');
          });
          btn.classList.add('bg-surface', 'text-on-surface', 'shadow-xs', 'font-medium');
          btn.classList.remove('text-on-surface-variant');
          currentTipoFilter = btn.getAttribute('data-tipo-btn');
          aplicarFiltros();
        });
      });

      // Filtragem
      function aplicarFiltros() {
        const termo = inputBusca.value.toLowerCase().trim();
        const statusSel = selectStatus.value;
        const areaSel = selectArea.value;

        const rowsDesktop = document.querySelectorAll('#tabela-clientes-body tr.client-row');
        const cardsMobile = document.querySelectorAll('#lista-clientes-mobile .client-card-mobile');

        let visiveis = 0;

        function matchItem(el) {
          const tipo = el.getAttribute('data-tipo');
          const area = el.getAttribute('data-area') || '';
          const status = el.getAttribute('data-status') || '';
          const texto = el.textContent.toLowerCase();

          const mTipo = (currentTipoFilter === 'todos') || (tipo === currentTipoFilter);
          const mTermo = !termo || texto.includes(termo);
          const mStatus = !statusSel || status.includes(statusSel);
          const mArea = !areaSel || area.includes(areaSel);

          return mTipo && mTermo && mStatus && mArea;
        }

        rowsDesktop.forEach(r => {
          if (matchItem(r)) {
            r.classList.remove('hidden');
            visiveis++;
          } else {
            r.classList.add('hidden');
          }
        });

        cardsMobile.forEach(c => {
          if (matchItem(c)) {
            c.classList.remove('hidden');
          } else {
            c.classList.add('hidden');
          }
        });

        contagemResultados.textContent = visiveis + ' registros exibidos';

        const ativo = termo || statusSel || areaSel || currentTipoFilter !== 'todos';
        if (ativo) {
          filtroBadge.classList.remove('hidden');
        } else {
          filtroBadge.classList.add('hidden');
        }
      }

      inputBusca.addEventListener('input', aplicarFiltros);
      selectStatus.addEventListener('change', aplicarFiltros);
      selectArea.addEventListener('change', aplicarFiltros);

      btnLimparFiltros.addEventListener('click', () => {
        inputBusca.value = '';
        selectStatus.value = '';
        selectArea.value = '';
        currentTipoFilter = 'todos';
        filterTipoBtns.forEach((b, i) => {
          if (i === 0) {
            b.classList.add('bg-surface', 'text-on-surface', 'shadow-xs', 'font-medium');
            b.classList.remove('text-on-surface-variant');
          } else {
            b.classList.remove('bg-surface', 'text-on-surface', 'shadow-xs', 'font-medium');
            b.classList.add('text-on-surface-variant');
          }
        });
        aplicarFiltros();
      });

      document.getElementById('btn-exportar').addEventListener('click', () => {
        showToast('Exportando dados em formato CSV...');
      });
    })();
  </script>
</body></html>
