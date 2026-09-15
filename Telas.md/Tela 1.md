<!DOCTYPE html>

<html class="light" lang="pt-BR"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Advocacia ETEC - Gestão Jurídica Inteligente</title>
<!-- Google Fonts: Noto Serif, IBM Plex Sans, Noto Sans -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;family=Noto+Serif:ital,wght@0,500;0,600;0,700;1,500&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols Outlined -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS v3 -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "surface-container": "#ebeef0",
            "surface-container-low": "#f1f4f6",
            "secondary-fixed": "#fde25a",
            "on-surface-variant": "#564241",
            "secondary": "#6d5e00",
            "primary-container": "#65121a",
            "on-primary-fixed-variant": "#80272c",
            "surface-container-highest": "#e0e3e5",
            "surface-dim": "#d7dadc",
            "on-secondary-container": "#726200",
            "surface-container-high": "#e5e9eb",
            "on-tertiary-fixed": "#1b1b20",
            "primary-fixed": "#ffdad9",
            "inverse-on-surface": "#eef1f3",
            "on-tertiary": "#ffffff",
            "on-primary-container": "#ec797a",
            "error": "#ba1a1a",
            "on-error": "#ffffff",
            "tertiary-container": "#323237",
            "on-tertiary-container": "#9b9aa0",
            "on-background": "#181c1e",
            "surface-container-lowest": "#ffffff",
            "on-error-container": "#93000a",
            "tertiary-fixed-dim": "#c7c6cc",
            "tertiary-fixed": "#e3e1e8",
            "background": "#f7fafc",
            "inverse-primary": "#ffb3b2",
            "on-surface": "#181c1e",
            "tertiary": "#1d1d22",
            "on-primary-fixed": "#410008",
            "on-tertiary-fixed-variant": "#46464c",
            "outline-variant": "#dcc0bf",
            "secondary-container": "#fae057",
            "primary-fixed-dim": "#ffb3b2",
            "surface-tint": "#9f3e42",
            "surface-variant": "#e0e3e5",
            "surface-bright": "#f7fafc",
            "outline": "#897271",
            "inverse-surface": "#2d3133",
            "on-secondary": "#ffffff",
            "on-primary": "#ffffff",
            "secondary-fixed-dim": "#e0c640",
            "primary": "#450009",
            "on-secondary-fixed-variant": "#524600",
            "surface": "#f7fafc",
            "on-secondary-fixed": "#211b00",
            "error-container": "#ffdad6"
          },
          "borderRadius": {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
          },
          "spacing": {
            "space-xs": "0.25rem",
            "margin-mobile": "1rem",
            "gutter-sm": "1rem",
            "space-lg": "1.5rem",
            "space-xl": "2.5rem",
            "gutter": "1.5rem",
            "margin": "2rem",
            "space-sm": "0.5rem",
            "gutter-lg": "2rem",
            "space-md": "1rem"
          },
          "fontFamily": {
            "headline-sm": ["Noto Serif"],
            "label-sm": ["IBM Plex Sans"],
            "headline-lg": ["Noto Serif"],
            "headline-md": ["Noto Serif"],
            "body-lg": ["Noto Sans"],
            "display-lg": ["Noto Serif"],
            "body-md": ["Noto Sans"],
            "label-md": ["IBM Plex Sans"],
            "label-lg": ["IBM Plex Sans"],
            "headline-lg-mobile": ["Noto Serif"],
            "body-sm": ["Noto Sans"]
          },
          "fontSize": {
            "headline-sm": ["1.25rem", { "lineHeight": "1.75rem", "fontWeight": "500" }],
            "label-sm": ["0.6875rem", { "lineHeight": "0.875rem", "fontWeight": "500" }],
            "headline-lg": ["2.25rem", { "lineHeight": "2.75rem", "fontWeight": "600" }],
            "headline-md": ["1.5rem", { "lineHeight": "2rem", "fontWeight": "500" }],
            "body-lg": ["1.125rem", { "lineHeight": "1.75rem", "fontWeight": "400" }],
            "display-lg": ["3.5rem", { "lineHeight": "4rem", "fontWeight": "600" }],
            "body-md": ["0.9375rem", { "lineHeight": "1.5rem", "fontWeight": "400" }],
            "label-md": ["0.8125rem", { "lineHeight": "1rem", "fontWeight": "500" }],
            "label-lg": ["0.9375rem", { "lineHeight": "1.25rem", "fontWeight": "600" }],
            "headline-lg-mobile": ["1.75rem", { "lineHeight": "2.25rem", "fontWeight": "600" }],
            "body-sm": ["0.8125rem", { "lineHeight": "1.25rem", "fontWeight": "400" }]
          }
        }
      }
    }
  </script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
    }
    .material-symbols-fill {
      font-variation-settings: 'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24;
    }
    /* Smooth touch interactions */
    .touch-press:active {
      transform: scale(0.98);
      transition: transform 120ms ease;
    }
    /* Horizontal scrollbar styling */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  </style>
</head>
<body class="bg-surface text-on-surface antialiased min-h-screen flex flex-col font-body-md selection:bg-primary-container selection:text-surface-bright">
<!-- TOP APP BAR / HEADER -->
<header class="sticky top-0 z-40 bg-surface-container-lowest shadow-sm">
<div class="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between py-2.5">
<!-- Left: Brand Logo & Title -->
<div class="flex items-center gap-3">
<div class="relative flex-shrink-0">
<img alt="Advocacia ETEC" class="h-11 w-11 object-contain rounded-lg p-0.5 bg-surface-container-low shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBelZ18vztYj01ZHtaq3wlKlguzQredLletEgS-Q7OYf7sI7_8MM9ycpoI0TQSHUHRS9gdQ5BPLYJksWigwDJZLiyxzhPywHrSp9tMaoy4AVSksKNPlDfW4s_tIyc1gKN-OST8JKQbSw127C0LKIf8gzUGaQFoqZJ_YjxdTmKysxOYvHuRG4oyeFGihOg6UsXHuywwxTcbvtlX3fTuXKE2DXrgIRyo09itN9ltV2hDhv1KnpTqysrwRDwr-TCUdOEZBAkM"/>
<span class="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75"></span>
<span class="relative inline-flex rounded-full h-3 w-3 bg-primary-container border-2 border-surface-container-lowest"></span>
</span>
</div>
<div class="flex flex-col">
<div class="flex items-center gap-1.5">
<span class="font-headline-sm text-headline-sm font-bold text-primary tracking-tight">Advocacia ETEC</span>
<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-sm font-semibold bg-surface-container text-primary-container border border-outline-variant/30">OAB/SP</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant line-clamp-1">Tecnologia para uma Advocacia Eficiente</span>
</div>
</div>
<!-- Right: Action Icons & User Operator -->
<div class="flex items-center gap-2 sm:gap-3">
<!-- Global Notifications Button -->
<button aria-label="Notificações e Intimações" class="relative p-2 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors focus:outline-none" type="button">
<span class="material-symbols-outlined text-[24px]">notifications</span>
<span class="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-container"></span>
</span>
</button>
<!-- Current User Avatar Profile / Status -->
<div class="flex items-center gap-2 pl-1 sm:pl-2 sm:border-l sm:border-outline-variant/30">
<div class="relative">
<div class="w-9 h-9 rounded-full bg-primary-container text-surface-container-lowest flex items-center justify-center font-label-md font-bold shadow-sm ring-2 ring-secondary-container/60">
              CE
            </div>
<span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-secondary-container rounded-full ring-2 ring-surface-container-lowest" title="Disponível"></span>
</div>
<div class="hidden sm:flex flex-col text-left">
<span class="font-label-md text-label-md text-on-surface font-semibold leading-tight">Dr. Carlos Eduardo</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Sócio Coordenador</span>
</div>
</div>
</div>
</div>
</header>
<!-- MAIN SCROLLABLE CONTENT CANVAS -->
<main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-4 pb-28 space-y-6">
<!-- FAST SEARCH & BRIEF OVERVIEW STRIP -->
<div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
<!-- Search Box -->
<div class="relative flex-1">
<span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
<span class="material-symbols-outlined text-[20px]">search</span>
</span>
<input class="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest rounded-xl text-on-surface font-body-sm placeholder:text-on-surface-variant/70 border border-outline-variant/35 focus:ring-2 focus:ring-primary-container focus:border-primary-container shadow-sm transition" placeholder="Buscar por cliente, processo (CNJ), OAB ou matéria..." type="text"/>
</div>
<!-- Quick Office Status Pill -->
<div class="inline-flex items-center gap-2 px-3.5 py-2 bg-surface-container-low rounded-xl border border-outline-variant/20 self-start sm:self-auto">
<span class="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
<span class="font-label-sm text-label-sm text-on-surface">Comarca São Paulo • Plantão Ativo</span>
</div>
</div>
<!-- 2. ATALHOS RÁPIDOS EM DESTAQUE (PRIORITY ACTIONS) -->
<section aria-label="Ações Rápidas Prioritárias">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
<!-- Botão Principal: Nova Consulta -->
<button class="touch-press group relative overflow-hidden bg-primary-container text-surface-container-lowest p-4 rounded-xl shadow-md hover:bg-primary transition-all duration-150 flex items-center justify-between text-left" type="button">
<div class="absolute -right-6 -bottom-6 w-24 h-24 bg-surface-tint/20 rounded-full blur-xl pointer-events-none"></div>
<div class="flex items-center gap-3.5 z-10">
<div class="w-12 h-12 rounded-lg bg-surface-container-lowest/10 border border-secondary-container/40 flex items-center justify-center text-secondary-container flex-shrink-0 group-hover:scale-105 transition-transform">
<span class="material-symbols-outlined text-[26px]">calendar_month</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-label-lg text-label-lg font-bold tracking-wide text-surface-container-lowest">+ Nova Consulta</span>
<span class="bg-secondary-container text-on-secondary-fixed text-[10px] font-label-sm font-bold px-1.5 py-0.5 rounded">URGENTE</span>
</div>
<p class="font-body-sm text-body-sm text-surface-container-high opacity-90 mt-0.5">Agendar cliente, audiência ou sessão preliminar</p>
</div>
</div>
<div class="z-10 pl-2">
<span class="material-symbols-outlined text-secondary-container text-[24px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</div>
</button>
<!-- Botão Secundário: Novo Cliente -->
<button class="touch-press group relative bg-surface-container-lowest text-on-surface p-4 rounded-xl border border-primary-container/20 shadow-sm hover:border-primary-container hover:bg-surface-container-low transition-all duration-150 flex items-center justify-between text-left" type="button">
<div class="flex items-center gap-3.5 z-10">
<div class="w-12 h-12 rounded-lg bg-surface-container text-primary-container flex items-center justify-center flex-shrink-0 group-hover:bg-primary-fixed transition-colors">
<span class="material-symbols-outlined text-[26px]">person_add</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="font-label-lg text-label-lg font-bold text-on-surface">+ Novo Cliente</span>
<span class="text-on-surface-variant font-label-sm text-label-sm">• Pessoa Física / Jurídica</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Cadastro rápido com consulta automatizada à Receita</p>
</div>
</div>
<div class="z-10 pl-2">
<span class="material-symbols-outlined text-primary-container text-[24px] group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</div>
</button>
</div>
</section>
<!-- 5. SEÇÃO: ADVOGADOS LIVRES NO MOMENTO (Horizontal scrollable carousel / cards) -->
<section aria-labelledby="heading-advogados-livres" class="space-y-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary-container text-[20px]">badge</span>
<h2 class="font-headline-sm text-headline-sm font-bold text-primary tracking-tight" id="heading-advogados-livres">Advogados Livres no Momento</h2>
</div>
<span class="font-label-sm text-label-sm font-semibold text-secondary px-2 py-0.5 bg-secondary-fixed/40 rounded-full border border-secondary-fixed">
          3 Online e Prontos
        </span>
</div>
<!-- Horizontal Cards Container -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
<!-- Advogado 1: Dr. Roberto Dias -->
<div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:border-primary-container/40 transition">
<div>
<div class="flex items-start justify-between gap-2">
<div class="flex items-center gap-3">
<div class="w-11 h-11 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-sm ring-1 ring-outline-variant/50">
                  RD
                </div>
<div>
<h3 class="font-label-lg text-label-lg font-bold text-on-surface leading-snug">Dr. Roberto Dias</h3>
<p class="font-label-sm text-label-sm text-on-surface-variant">OAB/SP 412.890</p>
</div>
</div>
<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-label-sm font-semibold bg-surface-container-high text-primary-container border border-primary-container/20">
<span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                Livre Agora
              </span>
</div>
<div class="mt-3 pt-3 border-t border-surface-container-high space-y-1">
<div class="flex items-center justify-between text-xs">
<span class="text-on-surface-variant font-label-sm">Especialidade:</span>
<span class="font-label-sm font-medium text-on-surface">Direito Cível &amp; Contratos</span>
</div>
<div class="flex items-center justify-between text-xs">
<span class="text-on-surface-variant font-label-sm">Tempo estimado:</span>
<span class="font-label-sm text-primary font-medium">Disponível até 15:00</span>
</div>
</div>
</div>
<div class="mt-4">
<button class="w-full py-2 px-3 bg-surface-container-low hover:bg-primary-container hover:text-surface-container-lowest text-primary-container border border-primary-container/30 rounded-lg text-xs font-label-md font-semibold transition-all duration-150 flex items-center justify-center gap-1.5" type="button">
<span class="material-symbols-outlined text-[16px]">call_made</span>
              Chamar / Designar
            </button>
</div>
</div>
<!-- Advogado 2: Dra. Sofia Mendes -->
<div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:border-primary-container/40 transition">
<div>
<div class="flex items-start justify-between gap-2">
<div class="flex items-center gap-3">
<div class="w-11 h-11 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-sm ring-1 ring-outline-variant/50">
                  SM
                </div>
<div>
<h3 class="font-label-lg text-label-lg font-bold text-on-surface leading-snug">Dra. Sofia Mendes</h3>
<p class="font-label-sm text-label-sm text-on-surface-variant">OAB/SP 389.102</p>
</div>
</div>
<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-label-sm font-semibold bg-surface-container-high text-primary-container border border-primary-container/20">
<span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                Livre Agora
              </span>
</div>
<div class="mt-3 pt-3 border-t border-surface-container-high space-y-1">
<div class="flex items-center justify-between text-xs">
<span class="text-on-surface-variant font-label-sm">Especialidade:</span>
<span class="font-label-sm font-medium text-on-surface">Direito Tributário</span>
</div>
<div class="flex items-center justify-between text-xs">
<span class="text-on-surface-variant font-label-sm">Tempo estimado:</span>
<span class="font-label-sm text-primary font-medium">Plantão vespertino livre</span>
</div>
</div>
</div>
<div class="mt-4">
<button class="w-full py-2 px-3 bg-surface-container-low hover:bg-primary-container hover:text-surface-container-lowest text-primary-container border border-primary-container/30 rounded-lg text-xs font-label-md font-semibold transition-all duration-150 flex items-center justify-center gap-1.5" type="button">
<span class="material-symbols-outlined text-[16px]">call_made</span>
              Chamar / Designar
            </button>
</div>
</div>
<!-- Advogado 3: Dr. Lucas Alencar -->
<div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:border-primary-container/40 transition">
<div>
<div class="flex items-start justify-between gap-2">
<div class="flex items-center gap-3">
<div class="w-11 h-11 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-sm ring-1 ring-outline-variant/50">
                  LA
                </div>
<div>
<h3 class="font-label-lg text-label-lg font-bold text-on-surface leading-snug">Dr. Lucas Alencar</h3>
<p class="font-label-sm text-label-sm text-on-surface-variant">OAB/SP 450.311</p>
</div>
</div>
<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-label-sm font-semibold bg-surface-container-high text-primary-container border border-primary-container/20">
<span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                Livre Agora
              </span>
</div>
<div class="mt-3 pt-3 border-t border-surface-container-high space-y-1">
<div class="flex items-center justify-between text-xs">
<span class="text-on-surface-variant font-label-sm">Especialidade:</span>
<span class="font-label-sm font-medium text-on-surface">Trabalhista &amp; Previdenciário</span>
</div>
<div class="flex items-center justify-between text-xs">
<span class="text-on-surface-variant font-label-sm">Tempo estimado:</span>
<span class="font-label-sm text-primary font-medium">Disponível próxima 1h</span>
</div>
</div>
</div>
<div class="mt-4">
<button class="w-full py-2 px-3 bg-surface-container-low hover:bg-primary-container hover:text-surface-container-lowest text-primary-container border border-primary-container/30 rounded-lg text-xs font-label-md font-semibold transition-all duration-150 flex items-center justify-center gap-1.5" type="button">
<span class="material-symbols-outlined text-[16px]">call_made</span>
              Chamar / Designar
            </button>
</div>
</div>
</div>
</section>
<!-- 3. SEÇÃO: CONSULTAS DE HOJE -->
<section aria-labelledby="heading-consultas-hoje" class="space-y-3.5">
<div class="flex items-center justify-between flex-wrap gap-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary-container text-[22px]">today</span>
<h2 class="font-headline-sm text-headline-sm font-bold text-primary tracking-tight" id="heading-consultas-hoje">Consultas de Hoje</h2>
</div>
<div class="flex items-center gap-2">
<span class="px-2.5 py-1 bg-primary-container text-surface-container-lowest font-label-sm text-label-sm font-semibold rounded-lg shadow-sm flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-secondary-container"></span>
            Hoje, 24 de Outubro • 3 agendadas
          </span>
</div>
</div>
<!-- Lista de Consultas de Hoje -->
<div class="grid grid-cols-1 gap-3">
<!-- Consulta 1: Em Andamento / Sala Virtual -->
<article class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 shadow-sm relative overflow-hidden transition hover:shadow-md">
<div class="absolute top-0 left-0 w-1.5 h-full bg-secondary-container"></div>
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
<!-- Horário + Advogado + Causa -->
<div class="flex items-start gap-3.5">
<div class="flex flex-col items-center justify-center bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/20 flex-shrink-0 min-w-[70px]">
<span class="font-label-lg text-label-lg font-bold text-primary-container">09:30</span>
<span class="font-label-sm text-[10px] uppercase text-on-surface-variant tracking-wider">Manhã</span>
</div>
<div class="space-y-1">
<div class="flex items-center gap-2 flex-wrap">
<span class="font-headline-sm text-headline-sm font-semibold text-on-surface">Dra. Helena Castro</span>
<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-label-sm font-bold bg-secondary-container/30 text-on-surface border border-secondary-container animate-pulse">
<span class="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    Em andamento
                  </span>
<span class="inline-flex items-center gap-1 text-[11px] font-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
<span class="material-symbols-outlined text-[14px]">videocam</span>
                    Videoconferência
                  </span>
</div>
<p class="font-body-sm text-body-sm text-on-surface">
<strong class="text-primary font-medium">Direito Empresarial:</strong> Contrato Societário e Fusão
                </p>
<p class="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[15px]">corporate_fare</span>
                  Cliente: Grupo Vanguarda Logística S/A
                </p>
</div>
</div>
<!-- Botões de Ação Rápida -->
<div class="flex items-center gap-2 self-end sm:self-center pl-2 sm:pl-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-surface-container w-full sm:w-auto justify-end">
<button class="py-2 px-3.5 bg-primary-container text-surface-container-lowest rounded-lg font-label-sm text-label-sm font-semibold hover:bg-primary transition flex items-center gap-1.5 shadow-sm" type="button">
<span class="material-symbols-outlined text-[16px]">meeting_room</span>
                Acessar Sala
              </button>
<button class="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition" title="Ver ficha completa" type="button">
<span class="material-symbols-outlined text-[20px]">description</span>
</button>
</div>
</div>
</article>
<!-- Consulta 2: Presencial às 14:00 -->
<article class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 shadow-sm relative overflow-hidden transition hover:shadow-md">
<div class="absolute top-0 left-0 w-1.5 h-full bg-primary-container"></div>
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
<div class="flex items-start gap-3.5">
<div class="flex flex-col items-center justify-center bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/20 flex-shrink-0 min-w-[70px]">
<span class="font-label-lg text-label-lg font-bold text-on-surface">14:00</span>
<span class="font-label-sm text-[10px] uppercase text-on-surface-variant tracking-wider">Tarde</span>
</div>
<div class="space-y-1">
<div class="flex items-center gap-2 flex-wrap">
<span class="font-headline-sm text-headline-sm font-semibold text-on-surface">Dr. Thiago Arantes</span>
<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label-sm font-semibold bg-surface-container-high text-primary border border-outline-variant/30">
                    Confirmada
                  </span>
<span class="inline-flex items-center gap-1 text-[11px] font-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
<span class="material-symbols-outlined text-[14px]">location_on</span>
                    Presencial - Sala 02
                  </span>
</div>
<p class="font-body-sm text-body-sm text-on-surface">
<strong class="text-primary font-medium">Direito Trabalhista:</strong> Acordo Coletivo &amp; Rescisão Direta
                </p>
<p class="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[15px]">person</span>
                  Cliente: Marcos Vinícius Peixoto
                </p>
</div>
</div>
<div class="flex items-center gap-2 self-end sm:self-center pl-2 sm:pl-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-surface-container w-full sm:w-auto justify-end">
<button class="py-2 px-3.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-lg font-label-sm text-label-sm font-semibold transition flex items-center gap-1.5" type="button">
<span class="material-symbols-outlined text-[16px]">folder_open</span>
                Ver Ficha
              </button>
<button class="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition" title="Opções adicionais" type="button">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
</article>
<!-- Consulta 3: Às 16:45 - Aguardando documentação -->
<article class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 shadow-sm relative overflow-hidden transition hover:shadow-md">
<div class="absolute top-0 left-0 w-1.5 h-full bg-outline"></div>
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
<div class="flex items-start gap-3.5">
<div class="flex flex-col items-center justify-center bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/20 flex-shrink-0 min-w-[70px]">
<span class="font-label-lg text-label-lg font-bold text-on-surface">16:45</span>
<span class="font-label-sm text-[10px] uppercase text-on-surface-variant tracking-wider">Tarde</span>
</div>
<div class="space-y-1">
<div class="flex items-center gap-2 flex-wrap">
<span class="font-headline-sm text-headline-sm font-semibold text-on-surface">Dr. Carlos Eduardo</span>
<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label-sm font-semibold bg-surface-container-low text-on-surface-variant border border-outline-variant/40">
                    Aguardando Docs
                  </span>
<span class="inline-flex items-center gap-1 text-[11px] font-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
<span class="material-symbols-outlined text-[14px]">videocam</span>
                    Sessão Híbrida
                  </span>
</div>
<p class="font-body-sm text-body-sm text-on-surface">
<strong class="text-primary font-medium">Direito Cível / Contratos:</strong> Minuta de Compra e Venda Imóvel
                </p>
<p class="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[15px]">domain</span>
                  Cliente: Construtora Alvorada Ltda.
                </p>
</div>
</div>
<div class="flex items-center gap-2 self-end sm:self-center pl-2 sm:pl-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-surface-container w-full sm:w-auto justify-end">
<button class="py-2 px-3.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-lg font-label-sm text-label-sm font-semibold transition flex items-center gap-1.5" type="button">
<span class="material-symbols-outlined text-[16px]">attach_file</span>
                Cobrar Anexos
              </button>
<button class="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition" title="Ver ficha" type="button">
<span class="material-symbols-outlined text-[20px]">description</span>
</button>
</div>
</div>
</article>
</div>
</section>
<!-- 4. SEÇÃO: 5 PRÓXIMAS CONSULTAS -->
<section aria-labelledby="heading-proximas-consultas" class="space-y-3.5">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary-container text-[22px]">calendar_clock</span>
<h2 class="font-headline-sm text-headline-sm font-bold text-primary tracking-tight" id="heading-proximas-consultas">5 Próximas Consultas</h2>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant">Agenda consolidada</span>
</div>
<!-- Lista Compacta e Elegante de 5 Itens -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden divide-y divide-surface-container">
<!-- Item 1: Amanhã, 10:00 -->
<div class="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-container-low/60 transition">
<div class="flex items-start gap-3">
<div class="p-2 bg-surface-container rounded-lg text-primary flex-shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[20px]">calendar_today</span>
</div>
<div>
<div class="flex items-center gap-2 flex-wrap">
<span class="font-label-md text-label-md font-bold text-primary-container">Amanhã, 10:00</span>
<span class="text-on-surface-variant text-xs">•</span>
<span class="font-label-md text-label-md font-semibold text-on-surface">Dr. Roberto Dias</span>
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-label-sm font-medium bg-surface-container text-on-surface-variant">Presencial</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface mt-0.5">
<span class="text-on-surface-variant">Causa:</span> Inventário e Família • <span class="font-medium">Cliente: Maria Clara S.</span>
</p>
</div>
</div>
<div class="flex items-center gap-2 self-end sm:self-center">
<button class="px-3 py-1.5 bg-surface-container text-primary-container hover:bg-primary-container hover:text-surface-container-lowest rounded-lg font-label-sm text-label-sm font-semibold transition flex items-center gap-1" type="button">
              Detalhes
              <span class="material-symbols-outlined text-[14px]">chevron_right</span>
</button>
</div>
</div>
<!-- Item 2: Amanhã, 15:30 -->
<div class="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-container-low/60 transition">
<div class="flex items-start gap-3">
<div class="p-2 bg-surface-container rounded-lg text-primary flex-shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[20px]">calendar_today</span>
</div>
<div>
<div class="flex items-center gap-2 flex-wrap">
<span class="font-label-md text-label-md font-bold text-primary-container">Amanhã, 15:30</span>
<span class="text-on-surface-variant text-xs">•</span>
<span class="font-label-md text-label-md font-semibold text-on-surface">Dra. Sofia Mendes</span>
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-label-sm font-medium bg-secondary-container/20 text-on-surface">Videoconferência</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface mt-0.5">
<span class="text-on-surface-variant">Causa:</span> Tributário e Compliance • <span class="font-medium">Cliente: Indústrias Alfa</span>
</p>
</div>
</div>
<div class="flex items-center gap-2 self-end sm:self-center">
<button class="px-3 py-1.5 bg-surface-container text-primary-container hover:bg-primary-container hover:text-surface-container-lowest rounded-lg font-label-sm text-label-sm font-semibold transition flex items-center gap-1" type="button">
              Detalhes
              <span class="material-symbols-outlined text-[14px]">chevron_right</span>
</button>
</div>
</div>
<!-- Item 3: 26/Out, 09:00 -->
<div class="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-container-low/60 transition">
<div class="flex items-start gap-3">
<div class="p-2 bg-surface-container rounded-lg text-primary flex-shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[20px]">event</span>
</div>
<div>
<div class="flex items-center gap-2 flex-wrap">
<span class="font-label-md text-label-md font-bold text-primary-container">26/Out, 09:00</span>
<span class="text-on-surface-variant text-xs">•</span>
<span class="font-label-md text-label-md font-semibold text-on-surface">Dr. Carlos Eduardo</span>
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-label-sm font-medium bg-secondary-container/20 text-on-surface">Videoconferência</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface mt-0.5">
<span class="text-on-surface-variant">Causa:</span> Revisão Contratual • <span class="font-medium">Cliente: TechSolutions ME</span>
</p>
</div>
</div>
<div class="flex items-center gap-2 self-end sm:self-center">
<button class="px-3 py-1.5 bg-surface-container text-primary-container hover:bg-primary-container hover:text-surface-container-lowest rounded-lg font-label-sm text-label-sm font-semibold transition flex items-center gap-1" type="button">
              Detalhes
              <span class="material-symbols-outlined text-[14px]">chevron_right</span>
</button>
</div>
</div>
<!-- Item 4: 26/Out, 11:30 -->
<div class="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-container-low/60 transition">
<div class="flex items-start gap-3">
<div class="p-2 bg-surface-container rounded-lg text-primary flex-shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[20px]">event</span>
</div>
<div>
<div class="flex items-center gap-2 flex-wrap">
<span class="font-label-md text-label-md font-bold text-primary-container">26/Out, 11:30</span>
<span class="text-on-surface-variant text-xs">•</span>
<span class="font-label-md text-label-md font-semibold text-on-surface">Dra. Helena Castro</span>
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-label-sm font-medium bg-surface-container text-on-surface-variant">Presencial</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface mt-0.5">
<span class="text-on-surface-variant">Causa:</span> Direito Imobiliário • <span class="font-medium">Cliente: Condomínio Solar</span>
</p>
</div>
</div>
<div class="flex items-center gap-2 self-end sm:self-center">
<button class="px-3 py-1.5 bg-surface-container text-primary-container hover:bg-primary-container hover:text-surface-container-lowest rounded-lg font-label-sm text-label-sm font-semibold transition flex items-center gap-1" type="button">
              Detalhes
              <span class="material-symbols-outlined text-[14px]">chevron_right</span>
</button>
</div>
</div>
<!-- Item 5: 27/Out, 14:00 -->
<div class="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-container-low/60 transition">
<div class="flex items-start gap-3">
<div class="p-2 bg-surface-container rounded-lg text-primary flex-shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[20px]">event</span>
</div>
<div>
<div class="flex items-center gap-2 flex-wrap">
<span class="font-label-md text-label-md font-bold text-primary-container">27/Out, 14:00</span>
<span class="text-on-surface-variant text-xs">•</span>
<span class="font-label-md text-label-md font-semibold text-on-surface">Dr. Carlos Eduardo</span>
<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-label-sm font-medium bg-surface-container text-on-surface-variant">Presencial - Sede</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface mt-0.5">
<span class="text-on-surface-variant">Causa:</span> Contencioso Cível • <span class="font-medium">Cliente: João Marcos V.</span>
</p>
</div>
</div>
<div class="flex items-center gap-2 self-end sm:self-center">
<button class="px-3 py-1.5 bg-surface-container text-primary-container hover:bg-primary-container hover:text-surface-container-lowest rounded-lg font-label-sm text-label-sm font-semibold transition flex items-center gap-1" type="button">
              Detalhes
              <span class="material-symbols-outlined text-[14px]">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
<!-- METRICS & SYSTEM AUDIT SUMMARY (Bento / Modern cards) -->
<section class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
<div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/25">
<span class="font-label-sm text-label-sm text-on-surface-variant block">Processos Ativos</span>
<span class="font-headline-sm text-headline-sm font-bold text-primary">148</span>
<span class="text-[11px] text-secondary font-medium block mt-0.5">+4 essa semana</span>
</div>
<div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/25">
<span class="font-label-sm text-label-sm text-on-surface-variant block">Prazos Fatais</span>
<span class="font-headline-sm text-headline-sm font-bold text-primary-container">02</span>
<span class="text-[11px] text-error font-medium block mt-0.5">Vencem hoje</span>
</div>
<div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/25">
<span class="font-label-sm text-label-sm text-on-surface-variant block">Taxa de Êxito</span>
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">94.2%</span>
<span class="text-[11px] text-on-surface-variant font-medium block mt-0.5">Últimos 12 meses</span>
</div>
<div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant/25">
<span class="font-label-sm text-label-sm text-on-surface-variant block">Honorários Previstos</span>
<span class="font-headline-sm text-headline-sm font-bold text-on-surface">R$ 84k</span>
<span class="text-[11px] text-secondary font-medium block mt-0.5">Ciclo Outubro</span>
</div>
</section>
</main>
<!-- 6. BARRA DE TAREFAS / NAVEGAÇÃO INFERIOR MÓVEL (BottomNavBar Shared Component) -->
<nav aria-label="Navegação Principal" class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-2 bg-surface shadow-sm border-t border-outline-variant/25">
<!-- Aba 1: Início (Ativo - strictly maps to Shared Components JSON: Início with style_active_navigation) -->
<a class="flex flex-col items-center justify-center bg-primary-container text-on-primary rounded-xl px-3 py-1.5 touch-press" href="#">
<span class="material-symbols-outlined text-[20px] material-symbols-fill">dashboard</span>
<span class="font-label-sm text-label-sm mt-0.5">Início</span>
</a>
<!-- Aba 2: Consultas -->
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-primary px-3 py-1.5 touch-press transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">calendar_today</span>
<span class="font-label-sm text-label-sm mt-0.5">Consultas</span>
</a>
<!-- Aba 3: Advogados -->
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-primary px-3 py-1.5 touch-press transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">badge</span>
<span class="font-label-sm text-label-sm mt-0.5">Advogados</span>
</a>
<!-- Aba 4: Clientes -->
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-primary px-3 py-1.5 touch-press transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">groups</span>
<span class="font-label-sm text-label-sm mt-0.5">Clientes</span>
</a>
</nav>
</body></html>
