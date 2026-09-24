<!DOCTYPE html>

<html class="light" lang="pt-BR"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Advocacia ETEC — Gestão Jurídica</title>
<!-- Google Fonts: Noto Serif (editorial) & IBM Plex Sans + Plus Jakarta Sans (interface) -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&amp;family=Noto+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols Outlined -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..600,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS v3 -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            brand: {
              900: "#2B050B",
              800: "#3D0B12",
              700: "#54121B",
              600: "#701A24",
              50: "#FAF4F5"
            },
            gold: {
              600: "#9E7D23",
              500: "#B89635",
              400: "#CFAC4C",
              100: "#FDF9EE",
              50: "#FEFCF7"
            },
            paper: "#FAF9F6",
            surface: "#FFFFFF",
            slate: {
              850: "#161F30",
              900: "#0F172A"
            }
          },
          fontFamily: {
            serif: ['"Noto Serif"', 'Georgia', 'serif'],
            sans: ['"IBM Plex Sans"', '"Plus Jakarta Sans"', 'sans-serif'],
            ui: ['"Plus Jakarta Sans"', 'sans-serif']
          }
        }
      }
    }
  </script>
<style>
    .font-serif-title { font-family: 'Noto Serif', Georgia, serif; }
    .hairline { border-width: 0.5px; }
  </style>
</head>
<body class="bg-[#FBFBFA] text-stone-900 font-sans antialiased min-h-screen flex flex-col selection:bg-brand-50 selection:text-brand-900">
<!-- TOP EDITORIAL HEADER -->
<header class="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-stone-200/70">
<div class="max-w-[1360px] mx-auto px-6 h-20 flex items-center justify-between">
<!-- Brand & Firm Identity -->
<div class="flex items-center gap-5">
<img alt="Advocacia ETEC" class="h-9 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBelZ18vztYj01ZHtaq3wlKlguzQredLletEgS-Q7OYf7sI7_8MM9ycpoI0TQSHUHRS9gdQ5BPLYJksWigwDJZLiyxzhPywHrSp9tMaoy4AVSksKNPlDfW4s_tIyc1gKN-OST8JKQbSw127C0LKIf8gzUGaQFoqZJ_YjxdTmKysxOYvHuRG4oyeFGihOg6UsXHuywwxTcbvtlX3fTuXKE2DXrgIRyo09itN9ltV2hDhv1KnpTqysrwRDwr-TCUdOEZBAkM"/>
<div class="h-6 w-[1px] bg-stone-200 hidden sm:block"></div>
<div class="hidden sm:block">
<p class="text-xs uppercase tracking-[0.22em] text-stone-500 font-medium font-ui">Gestão Jurídica Inteligente</p>
</div>
</div>
<!-- Main Desktop Navigation Links -->
<nav class="hidden md:flex items-center gap-8 font-ui text-sm">
<a class="text-stone-900 font-semibold border-b-2 border-brand-800 pb-1 pt-1 transition-colors" href="#">
          Visão Geral
        </a>
<a class="text-stone-500 hover:text-stone-900 pb-1 pt-1 transition-colors" href="#">
          Consultas
        </a>
<a class="text-stone-500 hover:text-stone-900 pb-1 pt-1 transition-colors" href="#">
          Advogados
        </a>
<a class="text-stone-500 hover:text-stone-900 pb-1 pt-1 transition-colors" href="#">
          Clientes
        </a>
<a class="text-stone-500 hover:text-stone-900 pb-1 pt-1 transition-colors" href="#">
          Processos
        </a>
</nav>
<!-- Right Utility / Search & Profile -->
<div class="flex items-center gap-5">
<!-- Discreet Search Input -->
<div class="relative hidden lg:block w-64">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-stone-400 text-[18px]">search</span>
<input class="w-full bg-stone-100/70 border border-stone-200 rounded-full pl-9 pr-3 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-brand-800 focus:bg-white transition-all font-ui" placeholder="Buscar processo ou cliente..." type="search"/>
</div>
<!-- Notification Bell (minimal) -->
<button class="text-stone-500 hover:text-stone-900 transition-colors p-1 relative" title="Notificações">
<span class="material-symbols-outlined text-[20px]">notifications</span>
<span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-700"></span>
</button>
<div class="h-6 w-[1px] bg-stone-200"></div>
<!-- Professional Profile -->
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-stone-900 text-gold-400 flex items-center justify-center text-xs font-semibold tracking-wider font-ui border border-stone-800">
            CE
          </div>
<div class="text-left hidden xl:block">
<p class="text-xs font-semibold text-stone-900 leading-tight">Dr. Carlos Eduardo</p>
<p class="text-[11px] text-stone-500 font-ui">Sócio-Diretor • OAB/SP</p>
</div>
</div>
</div>
</div>
</header>
<!-- MAIN CONTAINER -->
<main class="max-w-[1360px] mx-auto px-6 py-10 w-full flex-1">
<!-- EDITORIAL WELCOME STRIP & ACTIONS -->
<div class="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8 border-b border-stone-200/80 gap-6">
<div>
<div class="flex items-center gap-3 text-xs uppercase tracking-widest text-stone-500 font-ui mb-2">
<span>Quinta-feira, 24 de Outubro</span>
<span class="text-stone-300">•</span>
<span class="inline-flex items-center gap-1.5 text-emerald-800">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            Plantão Operacional Ativo
          </span>
</div>
<h1 class="text-3xl lg:text-4xl font-serif text-stone-900 font-normal tracking-tight">
          Painel de Gestão Jurídica
        </h1>
</div>
<!-- Action Buttons -->
<div class="flex items-center gap-3 font-ui">
<button class="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-lg hover:border-stone-400 hover:text-stone-900 transition-colors shadow-sm">
<span class="material-symbols-outlined text-[17px]">person_add</span>
          Novo Cliente
        </button>
<button class="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-brand-800 hover:bg-brand-900 rounded-lg transition-colors shadow-sm">
<span class="material-symbols-outlined text-[17px]">add_circle</span>
          Nova Consulta
        </button>
</div>
</div>
<!-- CLEAN METRICS ROW -->
<section class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
<!-- Metric 1 -->
<div class="p-6 bg-white border border-stone-200/80 rounded-xl">
<div class="flex items-center justify-between text-stone-400 mb-3">
<span class="text-xs uppercase tracking-wider font-semibold text-stone-500 font-ui">Processos Ativos</span>
<span class="material-symbols-outlined text-[20px] text-stone-400">gavel</span>
</div>
<div class="flex items-baseline gap-2">
<span class="text-3xl font-serif font-semibold text-stone-900">184</span>
<span class="text-xs text-stone-500 font-ui">+12 este mês</span>
</div>
</div>
<!-- Metric 2 -->
<div class="p-6 bg-white border border-stone-200/80 rounded-xl">
<div class="flex items-center justify-between text-stone-400 mb-3">
<span class="text-xs uppercase tracking-wider font-semibold text-stone-500 font-ui">Prazos Fatais</span>
<span class="material-symbols-outlined text-[20px] text-brand-700">schedule</span>
</div>
<div class="flex items-baseline gap-2">
<span class="text-3xl font-serif font-semibold text-brand-800">4</span>
<span class="text-xs text-amber-700 font-ui font-medium">Próx. 48h</span>
</div>
</div>
<!-- Metric 3 -->
<div class="p-6 bg-white border border-stone-200/80 rounded-xl">
<div class="flex items-center justify-between text-stone-400 mb-3">
<span class="text-xs uppercase tracking-wider font-semibold text-stone-500 font-ui">Taxa de Êxito</span>
<span class="material-symbols-outlined text-[20px] text-stone-400">trending_up</span>
</div>
<div class="flex items-baseline gap-2">
<span class="text-3xl font-serif font-semibold text-stone-900">91,4%</span>
<span class="text-xs text-stone-500 font-ui">Último trimestre</span>
</div>
</div>
<!-- Metric 4 -->
<div class="p-6 bg-white border border-stone-200/80 rounded-xl">
<div class="flex items-center justify-between text-stone-400 mb-3">
<span class="text-xs uppercase tracking-wider font-semibold text-stone-500 font-ui">Honorários Mês</span>
<span class="material-symbols-outlined text-[20px] text-gold-600">account_balance</span>
</div>
<div class="flex items-baseline gap-2">
<span class="text-3xl font-serif font-semibold text-stone-900">R$ 218k</span>
<span class="text-xs text-emerald-700 font-ui font-medium">+8% meta</span>
</div>
</div>
</section>
<!-- TWO-COLUMN WORKSPACE -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- PRIMARY COLUMN (7 or 8 cols): Consultas de Hoje & Próximas -->
<div class="lg:col-span-8 space-y-10">
<!-- TODAY'S SESSIONS -->
<section class="bg-white border border-stone-200/80 rounded-xl p-7 shadow-xs">
<div class="flex items-center justify-between pb-5 border-b border-stone-100">
<div>
<h2 class="text-xl font-serif font-medium text-stone-900 tracking-tight">Consultas de Hoje</h2>
<p class="text-xs text-stone-500 font-ui mt-0.5">3 atendimentos pautados para o período</p>
</div>
<span class="px-3 py-1 text-xs font-ui font-medium bg-stone-100 text-stone-700 rounded-full">
              Sessões do dia
            </span>
</div>
<div class="divide-y divide-stone-100">
<!-- Consultation 1 -->
<article class="py-5 first:pt-6 last:pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div class="flex items-start gap-4">
<div class="text-center min-w-[62px] pt-1">
<span class="text-base font-semibold text-stone-900 font-ui">14:00</span>
<span class="block text-[11px] text-stone-400 uppercase tracking-wider">Sala 02</span>
</div>
<div class="space-y-1">
<div class="flex items-center gap-2.5">
<h3 class="text-sm font-semibold text-stone-900">Grupo Vanguarda Logística</h3>
<span class="px-2 py-0.5 rounded text-[11px] font-ui bg-stone-100 text-stone-700 border border-stone-200/60">
                      Presencial
                    </span>
</div>
<p class="text-xs text-stone-500">
                    Contencioso Tributário • <span class="text-stone-700 font-medium">Dr. Roberto Dias</span>
</p>
<p class="text-xs text-stone-400 italic">Tema: Estruturação de defesas fiscais aduaneiras</p>
</div>
</div>
<div class="flex items-center gap-2 sm:self-center pl-[78px] sm:pl-0 font-ui">
<button class="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 rounded-md transition-colors hover:bg-stone-50">
                  Ficha
                </button>
<button class="px-3 py-1.5 text-xs text-brand-800 bg-brand-50 hover:bg-brand-900 hover:text-white rounded-md transition-colors font-medium border border-brand-800/20">
                  Iniciar Atendimento
                </button>
</div>
</article>
<!-- Consultation 2 -->
<article class="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div class="flex items-start gap-4">
<div class="text-center min-w-[62px] pt-1">
<span class="text-base font-semibold text-stone-900 font-ui">15:30</span>
<span class="block text-[11px] text-stone-400 uppercase tracking-wider">Online</span>
</div>
<div class="space-y-1">
<div class="flex items-center gap-2.5">
<h3 class="text-sm font-semibold text-stone-900">Construtora Alvorada S/A</h3>
<span class="px-2 py-0.5 rounded text-[11px] font-ui bg-blue-50 text-blue-800 border border-blue-200/60">
                      Videoconferência
                    </span>
</div>
<p class="text-xs text-stone-500">
                    Direito Imobiliário &amp; Contratos • <span class="text-stone-700 font-medium">Dra. Sofia Mendes</span>
</p>
<p class="text-xs text-stone-400 italic">Tema: Revisão de minuta de incorporação residencial</p>
</div>
</div>
<div class="flex items-center gap-2 sm:self-center pl-[78px] sm:pl-0 font-ui">
<button class="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 rounded-md transition-colors hover:bg-stone-50">
                  Ficha
                </button>
<button class="px-3 py-1.5 text-xs text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors font-medium">
                  Acessar Sala
                </button>
</div>
</article>
<!-- Consultation 3 -->
<article class="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div class="flex items-start gap-4">
<div class="text-center min-w-[62px] pt-1">
<span class="text-base font-semibold text-stone-900 font-ui">17:00</span>
<span class="block text-[11px] text-stone-400 uppercase tracking-wider">Sala 01</span>
</div>
<div class="space-y-1">
<div class="flex items-center gap-2.5">
<h3 class="text-sm font-semibold text-stone-900">Dr. Marcos Vinicius Fontes</h3>
<span class="px-2 py-0.5 rounded text-[11px] font-ui bg-stone-100 text-stone-700 border border-stone-200/60">
                      Presencial
                    </span>
</div>
<p class="text-xs text-stone-500">
                    Assessoria Societária • <span class="text-stone-700 font-medium">Dr. Carlos Eduardo</span>
</p>
<p class="text-xs text-stone-400 italic">Tema: Dissolução parcial de sociedade e apuração de haveres</p>
</div>
</div>
<div class="flex items-center gap-2 sm:self-center pl-[78px] sm:pl-0 font-ui">
<button class="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 rounded-md transition-colors hover:bg-stone-50">
                  Ficha
                </button>
<button class="px-3 py-1.5 text-xs text-stone-700 hover:text-stone-900 border border-stone-200 rounded-md transition-colors">
                  Aguardando
                </button>
</div>
</article>
</div>
</section>
<!-- PRÓXIMAS CONSULTAS (TABELA REFINADA) -->
<section class="bg-white border border-stone-200/80 rounded-xl p-7 shadow-xs">
<div class="flex items-center justify-between pb-5 border-b border-stone-100">
<div>
<h2 class="text-xl font-serif font-medium text-stone-900 tracking-tight">5 Próximas Consultas</h2>
<p class="text-xs text-stone-500 font-ui mt-0.5">Programação confirmada para os dias seguintes</p>
</div>
<a class="text-xs font-ui text-brand-800 hover:text-brand-900 font-medium inline-flex items-center gap-1" href="#">
              Ver agenda completa
              <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
</a>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left text-xs font-ui mt-2">
<thead>
<tr class="border-b border-stone-100 text-stone-400 uppercase tracking-wider font-semibold">
<th class="py-3 px-2">Data &amp; Hora</th>
<th class="py-3 px-2">Cliente / Empresa</th>
<th class="py-3 px-2">Especialidade</th>
<th class="py-3 px-2">Advogado Responsável</th>
<th class="py-3 px-2 text-right">Ação</th>
</tr>
</thead>
<tbody class="divide-y divide-stone-100">
<tr class="hover:bg-stone-50/70 transition-colors">
<td class="py-3.5 px-2 text-stone-900 font-medium">25 Out • 09:30</td>
<td class="py-3.5 px-2">
<span class="font-medium text-stone-900">Indústrias Matarazzo &amp; Cia</span>
<span class="block text-[11px] text-stone-500">Contrato de Fornecimento</span>
</td>
<td class="py-3.5 px-2 text-stone-600">Comercial &amp; Contratos</td>
<td class="py-3.5 px-2 text-stone-700 font-medium">Dr. Thiago Arantes</td>
<td class="py-3.5 px-2 text-right">
<button class="text-stone-400 hover:text-stone-900 text-xs">Detalhes</button>
</td>
</tr>
<tr class="hover:bg-stone-50/70 transition-colors">
<td class="py-3.5 px-2 text-stone-900 font-medium">25 Out • 11:00</td>
<td class="py-3.5 px-2">
<span class="font-medium text-stone-900">Mariana Albuquerque Costa</span>
<span class="block text-[11px] text-stone-500">Divórcio e Partilha</span>
</td>
<td class="py-3.5 px-2 text-stone-600">Família e Sucessões</td>
<td class="py-3.5 px-2 text-stone-700 font-medium">Dra. Helena Castro</td>
<td class="py-3.5 px-2 text-right">
<button class="text-stone-400 hover:text-stone-900 text-xs">Detalhes</button>
</td>
</tr>
<tr class="hover:bg-stone-50/70 transition-colors">
<td class="py-3.5 px-2 text-stone-900 font-medium">25 Out • 16:15</td>
<td class="py-3.5 px-2">
<span class="font-medium text-stone-900">TechSolutions Brasil Ltda</span>
<span class="block text-[11px] text-stone-500">Auditoria de Propriedade Intelectual</span>
</td>
<td class="py-3.5 px-2 text-stone-600">Direito Digital &amp; LGPD</td>
<td class="py-3.5 px-2 text-stone-700 font-medium">Dr. Lucas Alencar</td>
<td class="py-3.5 px-2 text-right">
<button class="text-stone-400 hover:text-stone-900 text-xs">Detalhes</button>
</td>
</tr>
<tr class="hover:bg-stone-50/70 transition-colors">
<td class="py-3.5 px-2 text-stone-900 font-medium">26 Out • 10:00</td>
<td class="py-3.5 px-2">
<span class="font-medium text-stone-900">Banco Mercantil do Centro</span>
<span class="block text-[11px] text-stone-500">Execução de Título Extrajudicial</span>
</td>
<td class="py-3.5 px-2 text-stone-600">Recuperação de Crédito</td>
<td class="py-3.5 px-2 text-stone-700 font-medium">Dr. Roberto Dias</td>
<td class="py-3.5 px-2 text-right">
<button class="text-stone-400 hover:text-stone-900 text-xs">Detalhes</button>
</td>
</tr>
<tr class="hover:bg-stone-50/70 transition-colors">
<td class="py-3.5 px-2 text-stone-900 font-medium">26 Out • 14:30</td>
<td class="py-3.5 px-2">
<span class="font-medium text-stone-900">BioVida Laboratórios Farmacêuticos</span>
<span class="block text-[11px] text-stone-500">Defesa em Processo ANVISA</span>
</td>
<td class="py-3.5 px-2 text-stone-600">Regulatório &amp; Sanitário</td>
<td class="py-3.5 px-2 text-stone-700 font-medium">Dra. Sofia Mendes</td>
<td class="py-3.5 px-2 text-right">
<button class="text-stone-400 hover:text-stone-900 text-xs">Detalhes</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
<!-- SECONDARY COLUMN (4 cols): Advogados Livres & Prazos Críticos -->
<div class="lg:col-span-4 space-y-8">
<!-- ADVOGADOS LIVRES NO MOMENTO -->
<section class="bg-white border border-stone-200/80 rounded-xl p-6 shadow-xs">
<div class="flex items-center justify-between pb-4 border-b border-stone-100">
<div>
<h2 class="text-base font-serif font-semibold text-stone-900">Advogados Disponíveis</h2>
<p class="text-xs text-stone-500 font-ui mt-0.5">Equipe apta para atendimento imediato</p>
</div>
<span class="text-xs font-ui px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded font-medium border border-emerald-200/50">
              3 livres
            </span>
</div>
<div class="divide-y divide-stone-100 mt-2">
<!-- Lawyer 1 -->
<div class="py-4 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-stone-100 text-stone-800 font-medium font-ui flex items-center justify-center text-xs border border-stone-200 relative">
                  LA
                  <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
</div>
<div>
<h4 class="text-xs font-semibold text-stone-900 font-ui">Dr. Lucas Alencar</h4>
<p class="text-[11px] text-stone-500">Direito Digital &amp; LGPD</p>
<p class="text-[10px] text-stone-400 mt-0.5 font-ui">OAB/SP 389.120</p>
</div>
</div>
<button class="px-2.5 py-1 text-xs text-stone-700 hover:text-brand-900 border border-stone-200 hover:border-stone-400 rounded transition-colors font-ui">
                Designar
              </button>
</div>
<!-- Lawyer 2 -->
<div class="py-4 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-stone-100 text-stone-800 font-medium font-ui flex items-center justify-center text-xs border border-stone-200 relative">
                  HC
                  <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
</div>
<div>
<h4 class="text-xs font-semibold text-stone-900 font-ui">Dra. Helena Castro</h4>
<p class="text-[11px] text-stone-500">Família &amp; Sucessões</p>
<p class="text-[10px] text-stone-400 mt-0.5 font-ui">OAB/SP 412.008</p>
</div>
</div>
<button class="px-2.5 py-1 text-xs text-stone-700 hover:text-brand-900 border border-stone-200 hover:border-stone-400 rounded transition-colors font-ui">
                Designar
              </button>
</div>
<!-- Lawyer 3 -->
<div class="py-4 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-stone-100 text-stone-800 font-medium font-ui flex items-center justify-center text-xs border border-stone-200 relative">
                  TA
                  <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
</div>
<div>
<h4 class="text-xs font-semibold text-stone-900 font-ui">Dr. Thiago Arantes</h4>
<p class="text-[11px] text-stone-500">Contratos Comerciais</p>
<p class="text-[10px] text-stone-400 mt-0.5 font-ui">OAB/SP 356.771</p>
</div>
</div>
<button class="px-2.5 py-1 text-xs text-stone-700 hover:text-brand-900 border border-stone-200 hover:border-stone-400 rounded transition-colors font-ui">
                Designar
              </button>
</div>
</div>
</section>
<!-- RESUMO DE PRAZOS & EXPEDIENTE -->
<section class="bg-white border border-stone-200/80 rounded-xl p-6 shadow-xs">
<div class="flex items-center justify-between pb-4 border-b border-stone-100">
<h2 class="text-base font-serif font-semibold text-stone-900">Prazos &amp; Notificações</h2>
<span class="text-[11px] text-stone-400 font-ui">Urgência</span>
</div>
<div class="space-y-3 mt-4 text-xs font-ui">
<div class="p-3 bg-stone-50 rounded-lg border border-stone-200/50">
<div class="flex items-center justify-between text-stone-500 mb-1">
<span class="font-medium text-brand-800">Recurso de Apelação</span>
<span class="text-[11px] text-red-600 font-semibold">Hoje 23:59</span>
</div>
<p class="text-stone-800 font-medium">Proc. 102934-88.2023.8.26.0100</p>
<p class="text-stone-500 text-[11px] mt-0.5">Construtora Alvorada vs. Município de SP</p>
</div>
<div class="p-3 bg-stone-50 rounded-lg border border-stone-200/50">
<div class="flex items-center justify-between text-stone-500 mb-1">
<span class="font-medium text-stone-800">Contestação Trabalhista</span>
<span class="text-[11px] text-amber-700 font-medium">Amanhã 18:00</span>
</div>
<p class="text-stone-800 font-medium">Proc. 0001248-12.2024.5.02.0041</p>
<p class="text-stone-500 text-[11px] mt-0.5">Grupo Vanguarda Logística</p>
</div>
<div class="p-3 bg-stone-50 rounded-lg border border-stone-200/50">
<div class="flex items-center justify-between text-stone-500 mb-1">
<span class="font-medium text-stone-800">Réplica à Contestação</span>
<span class="text-[11px] text-stone-500">28 Outubro</span>
</div>
<p class="text-stone-800 font-medium">Proc. 100984-21.2024.8.26.0001</p>
<p class="text-stone-500 text-[11px] mt-0.5">Indústrias Matarazzo &amp; Cia</p>
</div>
</div>
</section>
</div>
</div>
</main>
<!-- REFINED EDITORIAL FOOTER -->
<footer class="mt-auto border-t border-stone-200/80 bg-white">
<div class="max-w-[1360px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-ui gap-4">
<div class="flex items-center gap-2">
<span class="font-serif text-stone-800 font-medium">Advocacia ETEC</span>
<span>—</span>
<span>Sociedade de Advogados inscrita na OAB/SP sob o nº 14.892</span>
</div>
<div class="flex items-center gap-6">
<a class="hover:text-stone-900 transition-colors" href="#">Termos de Conformidade</a>
<a class="hover:text-stone-900 transition-colors" href="#">Segurança e LGPD</a>
<a class="hover:text-stone-900 transition-colors" href="#">Suporte Interno</a>
</div>
</div>
</footer>
</body></html>
