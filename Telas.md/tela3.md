<!DOCTYPE html>

<html lang="pt-BR"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" name="viewport"/><title>JurisApp SaaS</title><link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;family=Noto+Sans:wght@400;600&amp;family=PT+Serif:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/><style>@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}</style><script src="https://cdn.tailwindcss.com"></script><script id="tailwind-config">tailwind.config = { darkMode: "class", theme: { extend: { colors: { "on-primary-container": "#ec797a", "on-tertiary-fixed": "#1b1b20", "secondary": "#6d5e00", "primary": "#450009", "tertiary-fixed-dim": "#c7c6cc", "on-tertiary-fixed-variant": "#46464c", "on-error": "#ffffff", "on-primary": "#ffffff", "surface-container-high": "#ebe7e7", "on-secondary-fixed-variant": "#524600", "secondary-fixed-dim": "#e0c640", "on-primary-fixed-variant": "#80272c", "surface-tint": "#9f3e42", "outline": "#897271", "surface-dim": "#dcd9d9", "on-secondary-fixed": "#211b00", "inverse-primary": "#ffb3b2", "tertiary-container": "#323237", "on-background": "#1c1b1b", "error": "#ba1a1a", "secondary-container": "#fae057", "tertiary-fixed": "#e3e1e8", "on-tertiary-container": "#9b9aa0", "surface-container-low": "#f6f3f2", "secondary-fixed": "#fde25a", "on-surface": "#1c1b1b", "error-container": "#ffdad6", "on-surface-variant": "#564241", "on-error-container": "#93000a", "background": "#fcf8f8", "on-primary-fixed": "#410008", "surface-bright": "#fcf8f8", "surface": "#fcf8f8", "outline-variant": "#dcc0bf", "inverse-surface": "#313030", "surface-variant": "#e5e2e1", "on-tertiary": "#ffffff", "inverse-on-surface": "#f3f0ef", "tertiary": "#1d1d22", "primary-fixed-dim": "#ffb3b2", "surface-container-highest": "#e5e2e1", "on-secondary": "#ffffff", "primary-fixed": "#ffdad9", "surface-container-lowest": "#ffffff", "on-secondary-container": "#726200", "primary-container": "#65121a", "surface-container": "#f0edec" }, borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" }, spacing: { "space-xl": "2rem", "margin": "1rem", "space-md": "1rem", "space-lg": "1.5rem", "gutter": "1rem", "space-sm": "0.5rem", "space-xs": "0.25rem" }, fontFamily: { "form-input": ["Noto Sans"], "form-label": ["Noto Sans"], "label-md": ["IBM Plex Sans"], "body-md": ["IBM Plex Sans"], "body-sm": ["IBM Plex Sans"], "headline-md": ["PT Serif"], "headline-lg": ["PT Serif"], "body-lg": ["IBM Plex Sans"], "form-helper": ["Noto Sans"], "display-lg": ["PT Serif"], "headline-sm": ["PT Serif"], "label-sm": ["IBM Plex Sans"] }, fontSize: { "form-input": ["15px", { "lineHeight": "22px", "fontWeight": "400" }], "form-label": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "600" }], "label-md": ["13px", { "lineHeight": "18px", "letterSpacing": "0.01em", "fontWeight": "600" }], "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }], "body-sm": ["12px", { "lineHeight": "16px", "fontWeight": "400" }], "headline-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }], "headline-lg": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "700" }], "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }], "form-helper": ["11px", { "lineHeight": "14px", "fontWeight": "400" }], "display-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700" }], "headline-sm": ["18px", { "lineHeight": "24px", "fontWeight": "600" }], "label-sm": ["11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "600" }] } } } };</script></head><body class="bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col"><header class="fixed top-0 inset-x-0 z-50 bg-primary-container text-on-primary pt-safe shadow-[0_4px_12px_rgba(0,0,0,0.15)]"><div class="h-14 px-margin flex items-center justify-between"><div class="flex items-center gap-space-sm min-w-0"><img alt="Juris Logo" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UvpLoDUjQJyWqwqxiW_lvmyOs3A49QN-PYWLbiGQRY9wV9mQfKCqyD2u93b5YWKRCpXNUtDxBlZJI2VPSTmYXMyHoULMkPswaUwYdnZVL4YLiiwvUlKrmahnZqTRVgyc-1BHMzGe3fswnPRkfAbQMenh1hWe8ZDqGEISTC0dhqtJBwvZNFktiefHDhstuo8NLzQ0XZIO5nqtfUTC7A0hiUkbgc5EGdEJbLcjNU5bw5WzKcN2j-2EBh8J8"/><div class="flex flex-col min-w-0"><span class="font-headline-sm text-headline-sm tracking-tight text-on-primary truncate">JurisTech</span><span class="font-label-sm text-label-sm text-secondary-container tracking-wider uppercase truncate">Advogados</span></div></div><div class="flex items-center gap-space-xs"><button aria-label="Notificações" class="w-11 h-11 flex items-center justify-center rounded-full text-on-primary hover:text-secondary-container transition-colors" type="button"><span class="material-symbols-outlined text-[22px]">notifications</span></button><div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main class="flex-1 flex flex-col relative w-full pt-14 pb-20 bg-surface px-margin"><div class="flex flex-col w-full pb-10">
<!-- Floating Feedback Toast / Micro-alert -->
<aside class="mb-space-md w-full bg-tertiary text-on-tertiary rounded-xl p-space-sm shadow-xl flex items-center justify-between transition-all duration-300 transform opacity-100 translate-y-0" id="toast-feedback">
<div class="flex items-center gap-space-sm min-w-0">
<div class="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<div class="flex flex-col min-w-0">
<span class="font-label-md text-label-md truncate text-on-tertiary">Helena Silveira atualizada</span>
<span class="font-body-sm text-body-sm text-on-tertiary-container truncate">Disponibilidade e horários salvos</span>
</div>
</div>
<button aria-label="Fechar notificação" class="w-11 h-11 flex items-center justify-center text-on-tertiary-container hover:text-on-tertiary flex-shrink-0" onclick="document.getElementById('toast-feedback').remove()">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
</aside>
<!-- Editorial Section Title & Subtitle -->
<header class="mb-space-md">
<div class="flex items-baseline justify-between">
<h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Corpo Jurídico</h1>
<span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded-full">14 Membros</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mt-0.5">Gestão de bancada, especialidades e plantões</p>
</header>
<!-- Integrated Search Bar -->
<section class="relative mb-space-md">
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-space-sm text-on-surface-variant text-[20px] pointer-events-none">search</span>
<input class="w-full h-12 pl-10 pr-11 bg-surface-container-lowest text-on-surface rounded-xl shadow-sm font-form-input text-form-input focus:outline-none focus:ring-2 focus:ring-secondary-container placeholder:text-on-surface-variant/60" placeholder="Buscar por nome, OAB ou especialidade..." type="search"/>
<button aria-label="Limpar ou comando de voz" class="absolute right-1 w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
<span class="material-symbols-outlined text-[20px]">mic</span>
</button>
</div>
</section>
<!-- Scrollable Filter Chips - Seniority & Specialty -->
<section class="mb-space-lg flex flex-col gap-space-xs">
<!-- Row 1: Seniority Filters & Advanced Filter Button -->
<div class="flex items-center gap-space-xs overflow-x-auto pb-1 -mx-margin px-margin no-scrollbar">
<button class="flex items-center gap-1 h-9 px-3.5 rounded-full bg-secondary-container text-on-secondary-container shadow-sm flex-shrink-0">
<span class="material-symbols-outlined text-[16px]">tune</span>
<span class="font-label-md text-label-md">Filtros</span>
<span class="w-4 h-4 rounded-full bg-on-secondary-container text-secondary-container text-[10px] flex items-center justify-center font-bold">2</span>
</button>
<div class="h-5 w-px bg-surface-container-highest mx-0.5 flex-shrink-0"></div>
<button class="h-9 px-4 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex-shrink-0 shadow-sm">
        Todos
      </button>
<button class="h-9 px-3.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md flex-shrink-0 shadow-sm flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
        Sênior / Sócio
      </button>
<button class="h-9 px-3.5 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md flex-shrink-0">
        Pleno
      </button>
<button class="h-9 px-3.5 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md flex-shrink-0">
        Júnior
      </button>
<button class="h-9 px-3.5 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md flex-shrink-0">
        Estagiários
      </button>
</div>
<!-- Row 2: Specialty Tags Horizontal Rail -->
<div class="flex items-center gap-space-xs overflow-x-auto pb-1 -mx-margin px-margin no-scrollbar">
<span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider pl-1 flex-shrink-0">Áreas:</span>
<button class="h-8 px-3 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex-shrink-0 hover:bg-surface-container-high">
        Direito Empresarial
      </button>
<button class="h-8 px-3 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex-shrink-0 hover:bg-surface-container-high">
        Tributário
      </button>
<button class="h-8 px-3 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex-shrink-0 hover:bg-surface-container-high">
        Contencioso Cível
      </button>
<button class="h-8 px-3 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex-shrink-0 hover:bg-surface-container-high">
        Trabalhista
      </button>
<button class="h-8 px-3 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex-shrink-0 hover:bg-surface-container-high">
        Penal Econômico
      </button>
</div>
</section>
<!-- Lawyer Cards Stream -->
<section class="flex flex-col gap-space-md">
<!-- Card 1: Drª. Helena Silveira Vasconcelos -->
<article class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative transition-shadow hover:shadow-md">
<div class="flex items-start justify-between gap-space-sm">
<div class="flex items-start gap-space-sm min-w-0">
<div class="relative flex-shrink-0">
<img class="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Close-up professional photographic portrait of a Brazilian female attorney in her 40s with confident warm smile, dark tailored blazer, elegant minimalist pearl earring, natural studio lighting, soft cream bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFCzgG0K_RWITdeXu6hKLM9cjEbnOXh9jANP-ExnZ0aDWfBBpxTi_tnF6qywZTwqIgSdmT0wT1z-bicSMUWXGO0rq5uAKWTXX9bXsYiIIHwFV5XpxAEJ2ms-RG1NUZtkrBkqyrUXcuPRb9M0WepCXoFzV5xwDXbXNlYI_93Gingo4vCHRhYLVoI0A3ph1a2qf91g96DsDTlFBsYp2E61T0OiKU7SCZqEvtfpJj3yAapOesMo-5a6zX"/>
<span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-surface-container-lowest" title="Disponível"></span>
</div>
<div class="flex flex-col min-w-0">
<div class="flex items-center gap-space-xs flex-wrap">
<h2 class="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">Drª. Helena Silveira</h2>
<span class="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold flex-shrink-0">Sócia Sênior</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant font-medium">OAB/SP 342.891</p>
<div class="flex items-center gap-1.5 mt-1">
<span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span class="font-label-sm text-label-sm font-semibold text-emerald-800">Livre agora para consulta</span>
</div>
</div>
</div>
<button aria-label="Opções para Drª. Helena" class="w-11 h-11 -mr-2 -mt-2 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface flex-shrink-0" onclick="toggleCardMenu('menu-helena')" type="button">
<span class="material-symbols-outlined text-[22px]">more_vert</span>
</button>
</div>
<!-- Specialty Pills & Schedule -->
<div class="flex flex-wrap gap-1.5 pt-1">
<span class="font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant">Direito Empresarial</span>
<span class="font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant">Tributário Estruturante</span>
</div>
<div class="mt-1 pt-space-xs flex items-center justify-between bg-surface-container-low px-3 py-2 rounded-lg">
<div class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px] text-secondary">schedule</span>
<span class="font-body-sm text-body-sm">Plantão hoje: <strong class="text-on-surface font-semibold">09h às 18h</strong></span>
</div>
<span class="font-label-sm text-label-sm text-secondary font-semibold">3 aud. marcadas</span>
</div>
<!-- Quick Action Menu Drawer (Hidden by Default) -->
<div class="hidden absolute top-12 right-4 z-20 w-48 bg-surface-container-lowest rounded-xl shadow-xl p-1.5 flex flex-col gap-0.5" id="menu-helena">
<button class="w-full h-11 px-3 flex items-center gap-2 text-on-surface hover:bg-surface-container rounded-lg text-left">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">edit</span>
<span class="font-label-md text-label-md">Editar Cadastro</span>
</button>
<button class="w-full h-11 px-3 flex items-center gap-2 text-on-surface hover:bg-surface-container rounded-lg text-left">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_clock</span>
<span class="font-label-md text-label-md">Grade de Horários</span>
</button>
<button class="w-full h-11 px-3 flex items-center gap-2 text-on-surface hover:bg-surface-container rounded-lg text-left">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">share</span>
<span class="font-label-md text-label-md">Compartilhar Cartão</span>
</button>
<button class="w-full h-11 px-3 flex items-center gap-2 text-error hover:bg-error-container/40 rounded-lg text-left" onclick="openDeleteModal('Drª. Helena Silveira')">
<span class="material-symbols-outlined text-[18px]">delete</span>
<span class="font-label-md text-label-md">Desativar Perfil</span>
</button>
</div>
</article>
<!-- Card 2: Dr. Marcus Vinícius Prado -->
<article class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative transition-shadow hover:shadow-md">
<div class="flex items-start justify-between gap-space-sm">
<div class="flex items-start gap-space-sm min-w-0">
<div class="relative flex-shrink-0">
<img class="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Portrait photography of an approachable male Brazilian lawyer in his late 30s with trimmed beard wearing a dark charcoal suit jacket with open collar white shirt, corporate law office setting with warm ambient tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsSkjNfkPuTUhcgvz48ltXgZc8LtNBOm_jLSkyrf_8KdrA9VI5UdSXgkaduuef3sRJJTtZrOII6RiWmue9lFbpdaaVoRwzeu8-xPxYOWifcyaDZvCeRG8gJ8ZA_nCNVUYMnCm0zLpjVLIg6Y4D3S9XpGVStdOzTvvezoSH-rZX9J7pILb8Mq31zXtIQ9L8u4XtGFYE6yxJ7hpqkdSemXs8U9bnP733ZkwhRXtQ6eFDRvUU36-gqdti"/>
<span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-amber-500 rounded-full ring-2 ring-surface-container-lowest" title="Em consulta"></span>
</div>
<div class="flex flex-col min-w-0">
<div class="flex items-center gap-space-xs flex-wrap">
<h2 class="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">Dr. Marcus Vinícius Prado</h2>
<span class="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold flex-shrink-0">Pleno</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant font-medium">OAB/RJ 189.442</p>
<div class="flex items-center gap-1.5 mt-1">
<span class="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
<span class="font-label-sm text-label-sm font-semibold text-amber-900">Em consulta até 15:30</span>
</div>
</div>
</div>
<button aria-label="Opções para Dr. Marcus" class="w-11 h-11 -mr-2 -mt-2 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface flex-shrink-0" onclick="toggleCardMenu('menu-marcus')" type="button">
<span class="material-symbols-outlined text-[22px]">more_vert</span>
</button>
</div>
<div class="flex flex-wrap gap-1.5 pt-1">
<span class="font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant">Contencioso Cível Estratégico</span>
<span class="font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant">Arbitragem</span>
</div>
<div class="mt-1 pt-space-xs flex items-center justify-between bg-surface-container-low px-3 py-2 rounded-lg">
<div class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">schedule</span>
<span class="font-body-sm text-body-sm">Plantão hoje: <strong class="text-on-surface font-semibold">13h às 19h</strong></span>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant font-medium">Próx: 16h00</span>
</div>
<div class="hidden absolute top-12 right-4 z-20 w-48 bg-surface-container-lowest rounded-xl shadow-xl p-1.5 flex flex-col gap-0.5" id="menu-marcus">
<button class="w-full h-11 px-3 flex items-center gap-2 text-on-surface hover:bg-surface-container rounded-lg text-left">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">edit</span>
<span class="font-label-md text-label-md">Editar Cadastro</span>
</button>
<button class="w-full h-11 px-3 flex items-center gap-2 text-on-surface hover:bg-surface-container rounded-lg text-left">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_clock</span>
<span class="font-label-md text-label-md">Grade de Horários</span>
</button>
<button class="w-full h-11 px-3 flex items-center gap-2 text-error hover:bg-error-container/40 rounded-lg text-left" onclick="openDeleteModal('Dr. Marcus Vinícius')">
<span class="material-symbols-outlined text-[18px]">delete</span>
<span class="font-label-md text-label-md">Desativar Perfil</span>
</button>
</div>
</article>
<!-- Card 3: Drª. Camila Duarte Ramos -->
<article class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative transition-shadow hover:shadow-md">
<div class="flex items-start justify-between gap-space-sm">
<div class="flex items-start gap-space-sm min-w-0">
<div class="relative flex-shrink-0">
<img class="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Headshot of a sharp young female attorney with glasses and tied-back hair, wearing an ivory silk blouse, modern law firm boardroom background with soft natural sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgRlcc6H2LL1suyujWpbb3N2VIs8eMHCxuOgSNGMgrTpTJ10E2EOtvQxbh3deQiCEkU5aOldc0OVdEQkPISxtskKEerOagGvP1hZT5WFbSefcbxnFlvW9-0f6pcLN_9ZAI9KHvnh3xESLygc6lKxEg81SmBWGCEHchhWJ3mDBGZVXBYFeNCtwMNDXFUu1BhPvCRBl498RvUlJcSN6HyGyWW4N7ahH3l_4LXuZgLgOfe2ye6trM8j36"/>
<span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-surface-container-lowest" title="Disponível"></span>
</div>
<div class="flex flex-col min-w-0">
<div class="flex items-center gap-space-xs flex-wrap">
<h2 class="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">Drª. Camila Duarte Ramos</h2>
<span class="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold flex-shrink-0">Júnior</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant font-medium">OAB/SP 412.003</p>
<div class="flex items-center gap-1.5 mt-1">
<span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span class="font-label-sm text-label-sm font-semibold text-emerald-800">Livre agora</span>
</div>
</div>
</div>
<button aria-label="Opções para Drª. Camila" class="w-11 h-11 -mr-2 -mt-2 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface flex-shrink-0" onclick="toggleCardMenu('menu-camila')" type="button">
<span class="material-symbols-outlined text-[22px]">more_vert</span>
</button>
</div>
<div class="flex flex-wrap gap-1.5 pt-1">
<span class="font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant">Direito do Trabalho</span>
<span class="font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant">Compliance Trabalhista</span>
</div>
<div class="mt-1 pt-space-xs flex items-center justify-between bg-surface-container-low px-3 py-2 rounded-lg">
<div class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">schedule</span>
<span class="font-body-sm text-body-sm">Plantão hoje: <strong class="text-on-surface font-semibold">08h às 17h</strong></span>
</div>
<span class="font-label-sm text-label-sm text-emerald-800 font-semibold">Sem fila de espera</span>
</div>
<div class="hidden absolute top-12 right-4 z-20 w-48 bg-surface-container-lowest rounded-xl shadow-xl p-1.5 flex flex-col gap-0.5" id="menu-camila">
<button class="w-full h-11 px-3 flex items-center gap-2 text-on-surface hover:bg-surface-container rounded-lg text-left">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">edit</span>
<span class="font-label-md text-label-md">Editar Cadastro</span>
</button>
<button class="w-full h-11 px-3 flex items-center gap-2 text-on-surface hover:bg-surface-container rounded-lg text-left">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_clock</span>
<span class="font-label-md text-label-md">Grade de Horários</span>
</button>
<button class="w-full h-11 px-3 flex items-center gap-2 text-error hover:bg-error-container/40 rounded-lg text-left" onclick="openDeleteModal('Drª. Camila Duarte')">
<span class="material-symbols-outlined text-[18px]">delete</span>
<span class="font-label-md text-label-md">Desativar Perfil</span>
</button>
</div>
</article>
<!-- Card 4: Dr. Eduardo Brandão Neto -->
<article class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative transition-shadow hover:shadow-md opacity-90">
<div class="flex items-start justify-between gap-space-sm">
<div class="flex items-start gap-space-sm min-w-0">
<div class="relative flex-shrink-0">
<img class="w-14 h-14 rounded-full object-cover grayscale-[25%] shadow-sm" data-alt="Distinguished senior male lawyer with silver hair wearing classic navy pinstripe suit, elegant burgundy silk tie, warm library setting with leather-bound legal tomes in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_FwMBavMCj-7zON17qSet9RtmG_qj_60sAQI2nkI-NNCljQlnngs7RocrwXIBLa1_0BJLtW8Og4i-R0uC3WtpivtI9wQs5VQomHbh9wOldlzduim-nT_c7d01ZXlxpGsJyuVnrfOoO9kitPSNzITQ1CM9grDwE-0kAJbgO2cfgNv9qNQHc3V3JsMr3CoVcrXYtGS2RB_sIgZF0ikL8tgz5YGiT-SHx3rZzme1zZArZsaBe9DBFJiD"/>
<span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-outline rounded-full ring-2 ring-surface-container-lowest" title="Ausente hoje"></span>
</div>
<div class="flex flex-col min-w-0">
<div class="flex items-center gap-space-xs flex-wrap">
<h2 class="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">Dr. Eduardo Brandão Neto</h2>
<span class="bg-primary-container text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold flex-shrink-0">Sócio Fundador</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant font-medium">OAB/DF 098.771</p>
<div class="flex items-center gap-1.5 mt-1">
<span class="inline-block w-2 h-2 rounded-full bg-outline"></span>
<span class="font-label-sm text-label-sm font-semibold text-on-surface-variant">Ausente hoje (Audiência STJ)</span>
</div>
</div>
</div>
<button aria-label="Opções para Dr. Eduardo" class="w-11 h-11 -mr-2 -mt-2 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface flex-shrink-0" onclick="toggleCardMenu('menu-eduardo')" type="button">
<span class="material-symbols-outlined text-[22px]">more_vert</span>
</button>
</div>
<div class="flex flex-wrap gap-1.5 pt-1">
<span class="font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant">Tribunais Superiores</span>
<span class="font-label-sm text-label-sm bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant">Tributário Constitucional</span>
</div>
<div class="mt-1 pt-space-xs flex items-center justify-between bg-surface-container-low px-3 py-2 rounded-lg">
<div class="flex items-center gap-1.5 text-on-surface-variant">
<span class="material-symbols-outlined text-[16px]">event_busy</span>
<span class="font-body-sm text-body-sm">Retorno previsto: <strong class="text-on-surface font-semibold">Amanhã às 10h</strong></span>
</div>
<button class="font-label-sm text-label-sm text-primary font-bold hover:underline">Ver agenda</button>
</div>
<div class="hidden absolute top-12 right-4 z-20 w-48 bg-surface-container-lowest rounded-xl shadow-xl p-1.5 flex flex-col gap-0.5" id="menu-eduardo">
<button class="w-full h-11 px-3 flex items-center gap-2 text-on-surface hover:bg-surface-container rounded-lg text-left">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">edit</span>
<span class="font-label-md text-label-md">Editar Cadastro</span>
</button>
<button class="w-full h-11 px-3 flex items-center gap-2 text-on-surface hover:bg-surface-container rounded-lg text-left">
<span class="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_clock</span>
<span class="font-label-md text-label-md">Grade de Horários</span>
</button>
<button class="w-full h-11 px-3 flex items-center gap-2 text-error hover:bg-error-container/40 rounded-lg text-left" onclick="openDeleteModal('Dr. Eduardo Brandão')">
<span class="material-symbols-outlined text-[18px]">delete</span>
<span class="font-label-md text-label-md">Desativar Perfil</span>
</button>
</div>
</article>
</section>
<!-- Floating Action Button (FAB) -->
<div class="fixed bottom-20 right-4 z-40">
<button aria-label="Cadastrar novo advogado" class="w-14 h-14 rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-[0_6px_20px_rgba(0,0,0,0.25)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-150" onclick="openNewModal()" type="button">
<span class="material-symbols-outlined text-[28px] font-bold">add</span>
</button>
</div>
<!-- Deletion Confirmation Dialog Sheet / Drawer Modal -->
<div class="fixed inset-0 z-50 bg-tertiary/60 backdrop-blur-sm hidden items-end sm:items-center justify-center p-margin" id="delete-modal">
<div class="bg-surface-container-lowest text-on-surface w-full max-w-sm rounded-2xl p-space-md shadow-2xl flex flex-col gap-space-sm transform transition-all">
<div class="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center mx-auto mb-1">
<span class="material-symbols-outlined text-[26px]">person_off</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-center text-on-surface font-bold">Desativar Advogado</h3>
<p class="font-body-md text-body-md text-center text-on-surface-variant" id="delete-modal-desc">
        Tem certeza que deseja inativar as atribuições e remover da escala imediata?
      </p>
<div class="flex flex-col gap-2 mt-space-sm">
<button class="w-full h-12 rounded-xl bg-error text-on-error font-label-md text-label-md font-bold shadow-sm" onclick="closeDeleteModal()" type="button">
          Sim, Desativar da Bancada
        </button>
<button class="w-full h-12 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-medium" onclick="closeDeleteModal()" type="button">
          Cancelar
        </button>
</div>
</div>
</div>
<!-- Quick Add Drawer / Modal -->
<div class="fixed inset-0 z-50 bg-tertiary/60 backdrop-blur-sm hidden items-end justify-center" id="new-lawyer-modal">
<div class="bg-surface-container-lowest text-on-surface w-full max-w-md rounded-t-2xl p-space-md shadow-2xl flex flex-col gap-space-sm max-h-[85vh] overflow-y-auto">
<div class="w-10 h-1.5 bg-surface-container-highest rounded-full mx-auto mb-2"></div>
<div class="flex items-center justify-between">
<div>
<h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Novo Membro do Corpo Jurídico</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Cadastro imediato e vinculação de OAB</p>
</div>
<button class="w-10 h-10 flex items-center justify-center text-on-surface-variant" onclick="closeNewModal()">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<div class="flex flex-col gap-3 mt-2">
<div>
<label class="block font-form-label text-form-label text-on-surface mb-1">NOME COMPLETO</label>
<input class="w-full h-12 px-3 bg-surface-container-lowest text-on-surface rounded-lg shadow-sm font-form-input text-form-input focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="ex.: Dr. Roberto Marcondes" type="text"/>
</div>
<div class="grid grid-cols-2 gap-2">
<div>
<label class="block font-form-label text-form-label text-on-surface mb-1">REGISTRO OAB</label>
<input class="w-full h-12 px-3 bg-surface-container-lowest text-on-surface rounded-lg shadow-sm font-form-input text-form-input focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="OAB/UF 000.000" type="text"/>
</div>
<div>
<label class="block font-form-label text-form-label text-on-surface mb-1">SENIORIDADE</label>
<select class="w-full h-12 px-3 bg-surface-container-lowest text-on-surface rounded-lg shadow-sm font-form-input text-form-input focus:outline-none focus:ring-2 focus:ring-secondary-container">
<option>Sócio / Sênior</option>
<option selected="">Pleno</option>
<option>Júnior</option>
<option>Estagiário</option>
</select>
</div>
</div>
<div>
<label class="block font-form-label text-form-label text-on-surface mb-1">ESPECIALIDADE PRINCIPAL</label>
<input class="w-full h-12 px-3 bg-surface-container-lowest text-on-surface rounded-lg shadow-sm font-form-input text-form-input focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="ex.: Direito Tributário &amp; Financeiro" type="text"/>
</div>
<div class="flex items-center gap-2 py-1">
<input checked="" class="w-5 h-5 accent-primary rounded" id="plantao-hoje" type="checkbox"/>
<label class="font-body-md text-body-md text-on-surface" for="plantao-hoje">Incluir na escala de atendimento hoje</label>
</div>
<button class="w-full h-12 mt-2 rounded-xl bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold shadow-md" onclick="closeNewModal()" type="button">
          Salvar Advogado
        </button>
</div>
</div>
</div>
</div>
<script>
  function toggleCardMenu(menuId) {
    const menus = document.querySelectorAll('[id^="menu-"]');
    menus.forEach(m => {
      if (m.id !== menuId) m.classList.add('hidden');
    });
    const target = document.getElementById(menuId);
    if (target) {
      target.classList.toggle('hidden');
    }
  }

  function openDeleteModal(lawyerName) {
    const modal = document.getElementById('delete-modal');
    const desc = document.getElementById('delete-modal-desc');
    desc.textContent = `Tem certeza que deseja desativar o acesso de ${lawyerName}? As consultas agendadas serão reatribuídas.`;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    // close open popups
    document.querySelectorAll('[id^="menu-"]').forEach(m => m.classList.add('hidden'));
  }

  function closeDeleteModal() {
    const modal = document.getElementById('delete-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  function openNewModal() {
    const modal = document.getElementById('new-lawyer-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeNewModal() {
    const modal = document.getElementById('new-lawyer-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  // Dismiss dropdowns on background click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[onclick^="toggleCardMenu"]') && !e.target.closest('[id^="menu-"]')) {
      document.querySelectorAll('[id^="menu-"]').forEach(m => m.classList.add('hidden'));
    }
  });
</script></main><nav class="fixed bottom-0 inset-x-0 z-50 pb-safe bg-tertiary shadow-[0_-4px_16px_rgba(0,0,0,0.25)]" data-active-classes="text-secondary-fixed"><div class="flex justify-around items-center h-16 px-space-xs"><a class="flex flex-col items-center justify-center w-full h-11 text-on-tertiary-container hover:text-on-tertiary transition-colors" data-path="dashboard" href="#"><span class="material-symbols-outlined text-[22px]">dashboard</span><span class="font-label-sm text-label-sm mt-space-xs">Dashboard</span></a><a class="flex flex-col items-center justify-center w-full h-11 text-on-tertiary-container hover:text-on-tertiary transition-colors" data-path="clientes" href="#"><span class="material-symbols-outlined text-[22px]">group</span><span class="font-label-sm text-label-sm mt-space-xs">Clientes</span></a><a aria-current="page" class="flex flex-col items-center justify-center w-full h-11 transition-colors text-secondary-fixed" data-path="advogados" href="#"><span class="material-symbols-outlined text-[22px]">balance</span><span class="font-label-sm text-label-sm mt-space-xs">Advogados</span></a><a class="flex flex-col items-center justify-center w-full h-11 text-on-tertiary-container hover:text-on-tertiary transition-colors" data-path="agendamentos" href="#"><span class="material-symbols-outlined text-[22px]">pending_actions</span><span class="font-label-sm text-label-sm mt-space-xs">Agendamentos</span></a></div></nav></body></html>
