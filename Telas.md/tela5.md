<!DOCTYPE html>

<html lang="pt-BR"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" name="viewport"/><style>@layer base{html,body{width:100vw;margin:0;padding:0;}body{overscroll-behavior:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,0px);}.pt-safe{padding-top:env(safe-area-inset-top,0px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}</style><script src="https://cdn.tailwindcss.com"></script><script id="tailwind-config">tailwind.config = { darkMode: "class", theme: { extend: { "colors": { "error": "#ba1a1a", "on-primary-fixed-variant": "#80272c", "primary-fixed": "#ffdad9", "on-tertiary-fixed-variant": "#524600", "on-surface-variant": "#564241", "primary": "#450009", "surface-container-high": "#e9e7ee", "on-surface": "#1b1b20", "on-primary-fixed": "#410008", "on-tertiary-fixed": "#211b00", "secondary-fixed-dim": "#c9c6c5", "primary-fixed-dim": "#ffb3b2", "tertiary-container": "#c3ab25", "surface-container-lowest": "#ffffff", "on-secondary-fixed-variant": "#474646", "tertiary-fixed": "#fde25a", "surface-bright": "#fbf8ff", "secondary-fixed": "#e5e2e1", "on-error": "#ffffff", "surface-container": "#efedf3", "tertiary-fixed-dim": "#e0c640", "secondary": "#5f5e5e", "error-container": "#ffdad6", "on-background": "#1b1b20", "secondary-container": "#e5e2e1", "surface-variant": "#e3e1e8", "outline": "#897271", "surface-container-highest": "#e3e1e8", "on-primary": "#ffffff", "on-secondary-container": "#656464", "on-error-container": "#93000a", "outline-variant": "#dcc0bf", "inverse-on-surface": "#f2f0f6", "inverse-primary": "#ffb3b2", "surface": "#fbf8ff", "primary-container": "#65121a", "background": "#fbf8ff", "on-tertiary-container": "#4a3f00", "inverse-surface": "#303035", "tertiary": "#6d5e00", "on-secondary": "#ffffff", "surface-tint": "#9f3e42", "on-primary-container": "#ec797a", "surface-container-low": "#f5f2f9", "on-secondary-fixed": "#1c1b1b", "surface-dim": "#dbd9df", "on-tertiary": "#ffffff" }, "borderRadius": { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" }, "spacing": { "space-sm": "0.5rem", "space-lg": "1.5rem", "space-xs": "0.25rem", "space-xl": "2rem", "space-md": "1rem", "gutter": "1rem", "margin": "1rem" }, "fontFamily": { "headline-lg-mobile": ["Noto Serif"], "body-md": ["IBM Plex Sans"], "headline-md": ["Noto Serif"], "headline-xl": ["Noto Serif"], "label-md": ["IBM Plex Sans"], "body-sm": ["IBM Plex Sans"], "body-lg": ["IBM Plex Sans"], "label-sm": ["IBM Plex Sans"], "headline-xl-mobile": ["Noto Serif"], "headline-lg": ["Noto Serif"], "title-md": ["IBM Plex Sans"] }, "fontSize": { "headline-lg-mobile": ["22px", { "lineHeight": "28px", "fontWeight": "600" }], "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }], "headline-md": ["20px", { "lineHeight": "26px", "fontWeight": "600" }], "headline-xl": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700" }], "label-md": ["13px", { "lineHeight": "18px", "letterSpacing": "0.02em", "fontWeight": "600" }], "body-sm": ["12px", { "lineHeight": "16px", "fontWeight": "400" }], "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }], "label-sm": ["11px", { "lineHeight": "14px", "letterSpacing": "0.04em", "fontWeight": "500" }], "headline-xl-mobile": ["28px", { "lineHeight": "34px", "letterSpacing": "-0.01em", "fontWeight": "700" }], "headline-lg": ["28px", { "lineHeight": "36px", "fontWeight": "600" }], "title-md": ["16px", { "lineHeight": "22px", "fontWeight": "600" }] } } } };</script><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/><link href="https://fonts.googleapis.com" rel="preconnect"/><link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&amp;family=Noto+Serif:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/></head><body class="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen"><header class="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="h-16 px-gutter flex items-center justify-between gap-space-sm"><div class="flex items-center gap-space-sm"><div class="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary"><span class="material-symbols-outlined text-[22px]">balance</span></div><div class="flex flex-col"><div class="flex items-center gap-space-xs"><span class="font-headline-md text-headline-md text-primary-container tracking-tight leading-none">Advocacia ETEC</span><span class="inline-block w-1.5 h-1.5 rounded-full bg-tertiary-container"></span></div><div class="flex items-center gap-1.5 mt-0.5"><span class="inline-block w-2 h-2 rounded-full bg-tertiary"></span><span class="font-label-sm text-label-sm text-on-surface-variant font-medium uppercase tracking-wider">Atendimento Online</span></div></div></div><div class="flex items-center gap-space-xs"><button aria-label="Notificações" class="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary-container relative"><span class="material-symbols-outlined text-[24px]">notifications</span><span class="absolute top-2.5 right-2.5 w-2 h-2 bg-primary-container rounded-full ring-2 ring-surface"></span></button><img alt="Profile" class="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1U5uu2dgV72yxLiGZeJ84_SIz3BuKjlBmUOp99IyeVoQk5BrXAfPmNsPMpUWWSk9rr5Nf9TCh5IwHpK7BumR21uSMKPEh9546JhirNi4-fXIlbtUbAquLkDjscqVQKOBjXwfo6ARw8oQy6R7yNbO0dhd758jqF3RQcCuXbWqm9xIp_MOwW8-jbdvQFu5x_TGsmvPsF16MxhNpma485xK6Xzai42v6L1GukrFdgeHXNNY60Ykx3BU6fceIqiUQRPd8YFDDl9XghdgPg"/></div></div></header><main class="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div class="flex flex-col w-full">
<section class="px-gutter pt-space-sm pb-space-xs flex flex-col gap-space-xs">
<div class="flex items-center gap-space-xs">
<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
<span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
        Sincronizado OAB • Tempo Real
      </span>
<span class="text-on-surface-variant/40 text-xs">•</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Criptografia Ponta a Ponta</span>
</div>
<div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight font-semibold">
        Agendamento Jurídico
      </h1>
<p class="font-body-md text-body-md text-on-surface-variant mt-0.5">
        Selecione o profissional, a data forense e o horário para sua consulta de alta precisão.
      </p>
</div>
<div class="mt-space-xs p-3 rounded-xl bg-surface-container-low flex items-center justify-between shadow-sm">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
<span class="material-symbols-outlined text-[20px]">event_repeat</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface font-semibold">Consultas com Validação OAB</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Atendimento presencial ou via sala virtual certificada</span>
</div>
</div>
</div>
</section>
<section class="mt-space-md flex flex-col">
<div class="px-gutter flex items-center justify-between mb-space-xs">
<div>
<h2 class="font-title-md text-title-md text-on-surface font-semibold">Corpo Jurídico</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant">Selecione o especialista de sua causa</p>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-full">3 Ativos</span>
</div>
<div class="px-gutter flex gap-1.5 overflow-x-auto no-scrollbar pb-space-xs pt-1">
<button class="filter-pill active px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-primary-container text-on-primary font-medium shadow-sm">
        Todos
      </button>
<button class="filter-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant font-medium">
        Direito Digital &amp; IA
      </button>
<button class="filter-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant font-medium">
        Corporativo &amp; LGPD
      </button>
<button class="filter-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant font-medium">
        Tributário &amp; Startups
      </button>
</div>
<div class="flex gap-space-sm overflow-x-auto px-gutter py-space-xs no-scrollbar snap-x snap-mandatory" id="lawyer-carousel">
<div class="lawyer-card snap-center shrink-0 w-[270px] rounded-xl p-3.5 bg-surface-container-lowest shadow-md flex flex-col justify-between cursor-pointer transition-all duration-200 ring-2 ring-primary-container bg-gradient-to-b from-surface-container-lowest to-surface-container-low" data-lawyer-id="1" data-lawyer-name="Dr. Lucas Mendonça">
<div class="flex items-start gap-3">
<div class="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface-container-high shadow-inner">
<img class="w-full h-full object-cover" data-alt="Close up professional portrait of Dr. Lucas Mendonça, a polished Brazilian attorney in tailored charcoal bespoke suit with discreet deep burgundy tie and pocket square, warm soft office background with dark mahogany legal books and brass balance scales, editorial photography, refined lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH0FprH7yNd2UAdtDhMKYe9X-sVFnoNnxiwwVQcW6ii1L2Z2mvV4Lmyd0-vPIkWwyAYJRrFNjS4HzpU5ynKOBhcjsa_iI34WNVItLza1qCYS3mlJmcsWyPhue0H6yvVeWcDmHE61xUym72lIlQ9fj2OKuEEeuDAN2hRxb4cwqJ92IeJYZahJXehH0OGlcA6mvkFEfToVU0NOVZSGw89xMjWoaNJJr08V0MEqRAfFsMc-qXnzkHBrl2YQ"/>
<span class="absolute bottom-0 inset-x-0 bg-primary-container/80 text-on-primary font-label-sm text-[9px] text-center leading-tight py-0.5">OAB/SP</span>
</div>
<div class="flex flex-col min-w-0 flex-1">
<div class="flex items-center justify-between">
<span class="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-semibold flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">verified</span>
                Ativo
              </span>
<span class="font-label-sm text-label-sm font-semibold text-primary flex items-center gap-0.5">
<span class="material-symbols-outlined text-[13px] text-tertiary" style="font-variation-settings: 'FILL' 1;">star</span>
                4.9
              </span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface truncate font-semibold mt-0.5">Dr. Lucas Mendonça</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant truncate">OAB/SP 412.890</p>
</div>
</div>
<div class="mt-3 pt-2.5 bg-surface-container-high/50 -mx-3.5 -mb-3.5 px-3.5 pb-3 rounded-b-xl flex items-center justify-between">
<div class="flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant">Especialidade Forense</span>
<span class="font-body-sm text-body-sm font-medium text-on-surface truncate max-w-[150px]">Direito Digital &amp; IA</span>
</div>
<span class="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold px-2 py-1 rounded-md bg-primary-container text-on-primary">
            Selecionado
          </span>
</div>
</div>
<div class="lawyer-card snap-center shrink-0 w-[270px] rounded-xl p-3.5 bg-surface-container-lowest shadow-sm flex flex-col justify-between cursor-pointer transition-all duration-200" data-lawyer-id="2" data-lawyer-name="Dra. Beatriz Alencar">
<div class="flex items-start gap-3">
<div class="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface-container-high shadow-inner">
<img class="w-full h-full object-cover" data-alt="Polished portrait of Dra. Beatriz Alencar, confident female senior legal counsel in tailored ivory silk shirt and navy blazer, minimalist modern glass law firm headquarters background, serene natural light, cinematic editorial tone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz9GAlInB_UieuiP4u-1iQO3_IFEoJ_i0AaTf_BZYB5DctYDTiuyPAkuxwsZtIceDx2S19wbxmGkNxOMrBRvZ1gfL-aTCB808CtR6znulK175z34La5dNaK3uvYwfB2Fz2ekF1PZwwEsAfcLCxSmHLfOIkkyAgu5-s2Frqe8nnCCFOjrQv4Nljf5-GqUcdb9rykRSVo8534m0f-NcP1-E2z2fXrzvvkiH9HGtt3tjhVjlhp1tcSa0yTQ"/>
<span class="absolute bottom-0 inset-x-0 bg-surface-container-highest text-on-surface-variant font-label-sm text-[9px] text-center leading-tight py-0.5">OAB/RJ</span>
</div>
<div class="flex flex-col min-w-0 flex-1">
<div class="flex items-center justify-between">
<span class="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium">
                Amanhã
              </span>
<span class="font-label-sm text-label-sm font-semibold text-on-surface flex items-center gap-0.5">
<span class="material-symbols-outlined text-[13px] text-tertiary" style="font-variation-settings: 'FILL' 1;">star</span>
                5.0
              </span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface truncate font-semibold mt-0.5">Dra. Beatriz Alencar</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant truncate">OAB/RJ 198.320</p>
</div>
</div>
<div class="mt-3 pt-2.5 bg-surface-container-low -mx-3.5 -mb-3.5 px-3.5 pb-3 rounded-b-xl flex items-center justify-between">
<div class="flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant">Especialidade Forense</span>
<span class="font-body-sm text-body-sm font-medium text-on-surface truncate max-w-[150px]">Corporativo &amp; Compliance</span>
</div>
<span class="inline-flex items-center gap-1 font-label-sm text-label-sm font-medium px-2 py-1 rounded-md bg-surface-container-high text-on-surface-variant">
            Selecionar
          </span>
</div>
</div>
<div class="lawyer-card snap-center shrink-0 w-[270px] rounded-xl p-3.5 bg-surface-container-lowest shadow-sm flex flex-col justify-between cursor-pointer transition-all duration-200" data-lawyer-id="3" data-lawyer-name="Dr. Rodrigo Farias">
<div class="flex items-start gap-3">
<div class="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface-container-high shadow-inner">
<img class="w-full h-full object-cover" data-alt="Distinguished portrait of Dr. Rodrigo Farias, Brazilian tax attorney wearing glasses and structured deep burgundy three-piece suit, standing before grand mahogany book shelves, confident and warm expression, premium law firm aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZZ6WTygJTSHUj-oySa2Pfn_0fGMzs-_VevR4CULqLfGFLnd0_QsNzBqz1cBVLcjaeFitXtCgWaBE6phTxigYyzhemgy5xXUiLFUHW-KnI_08GWJLYE3MeBf43UT0Rx2fsl0h5Z9l5Nhy4eaUE3K_ZIp5ukXX_ff8x95R1ccu0AXebcpHpu-sSNXl5vKuCsybZGfmKCKZHzhJZzZEEinNFyFSy7frmwmIYgw2xAeRm403yk2ej1aXf5Q"/>
<span class="absolute bottom-0 inset-x-0 bg-surface-container-highest text-on-surface-variant font-label-sm text-[9px] text-center leading-tight py-0.5">OAB/DF</span>
</div>
<div class="flex flex-col min-w-0 flex-1">
<div class="flex items-center justify-between">
<span class="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium">
                Sex, 25
              </span>
<span class="font-label-sm text-label-sm font-semibold text-on-surface flex items-center gap-0.5">
<span class="material-symbols-outlined text-[13px] text-tertiary" style="font-variation-settings: 'FILL' 1;">star</span>
                4.8
              </span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface truncate font-semibold mt-0.5">Dr. Rodrigo Farias</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant truncate">OAB/DF 76.450</p>
</div>
</div>
<div class="mt-3 pt-2.5 bg-surface-container-low -mx-3.5 -mb-3.5 px-3.5 pb-3 rounded-b-xl flex items-center justify-between">
<div class="flex flex-col">
<span class="font-label-sm text-label-sm text-on-surface-variant">Especialidade Forense</span>
<span class="font-body-sm text-body-sm font-medium text-on-surface truncate max-w-[150px]">Tributário &amp; Startups</span>
</div>
<span class="inline-flex items-center gap-1 font-label-sm text-label-sm font-medium px-2 py-1 rounded-md bg-surface-container-high text-on-surface-variant">
            Selecionar
          </span>
</div>
</div>
</div>
</section>
<section class="mt-space-md px-gutter flex flex-col">
<div class="flex items-center justify-between mb-space-xs">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary-container text-[22px]">calendar_month</span>
<h2 class="font-title-md text-title-md text-on-surface font-semibold">Outubro 2024</h2>
</div>
<div class="flex items-center gap-1 bg-surface-container-high rounded-lg p-0.5">
<button aria-label="Mês anterior" class="w-7 h-7 flex items-center justify-center rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<span class="font-label-sm text-label-sm px-1.5 font-medium text-on-surface">Semana 43</span>
<button aria-label="Próximo mês" class="w-7 h-7 flex items-center justify-center rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
<div class="grid grid-cols-5 gap-2" id="date-carousel">
<button class="date-chip flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-surface-container-lowest shadow-sm opacity-60 cursor-not-allowed" data-date="21 Out" data-day="SEG">
<span class="font-label-sm text-label-sm text-on-surface-variant font-medium">SEG</span>
<span class="font-title-md text-title-md text-on-surface-variant font-bold mt-0.5 line-through">21</span>
<span class="w-1.5 h-1.5 rounded-full bg-error mt-1.5"></span>
</button>
<button class="date-chip flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-surface-container-lowest shadow-sm opacity-60 cursor-not-allowed" data-date="22 Out" data-day="TER">
<span class="font-label-sm text-label-sm text-on-surface-variant font-medium">TER</span>
<span class="font-title-md text-title-md text-on-surface-variant font-bold mt-0.5 line-through">22</span>
<span class="w-1.5 h-1.5 rounded-full bg-error mt-1.5"></span>
</button>
<button class="date-chip flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all" data-date="23 Out" data-day="QUA">
<span class="font-label-sm text-label-sm text-on-surface-variant font-medium">QUA</span>
<span class="font-title-md text-title-md text-on-surface font-bold mt-0.5">23</span>
<span class="w-1.5 h-1.5 rounded-full bg-tertiary-container mt-1.5"></span>
</button>
<button class="date-chip active flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-primary-container text-on-primary shadow-md transition-all ring-2 ring-tertiary-container relative" data-date="24 Out" data-day="QUI">
<span class="font-label-sm text-label-sm text-primary-fixed-dim font-semibold">QUI</span>
<span class="font-title-md text-title-md text-on-primary font-bold mt-0.5">24</span>
<span class="w-1.5 h-1.5 rounded-full bg-tertiary-fixed mt-1.5"></span>
<span class="absolute -top-1.5 bg-tertiary-container text-on-tertiary-container font-label-sm text-[8px] px-1 rounded uppercase font-bold tracking-wider">Hoje</span>
</button>
<button class="date-chip flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all" data-date="25 Out" data-day="SEX">
<span class="font-label-sm text-label-sm text-on-surface-variant font-medium">SEX</span>
<span class="font-title-md text-title-md text-on-surface font-bold mt-0.5">25</span>
<span class="w-1.5 h-1.5 rounded-full bg-tertiary-container mt-1.5"></span>
</button>
</div>
</section>
<section class="mt-space-md px-gutter flex flex-col">
<div class="flex items-center justify-between mb-space-xs">
<div>
<h2 class="font-title-md text-title-md text-on-surface font-semibold">Horários Oficiais de Pauta</h2>
<p class="font-body-sm text-body-sm text-on-surface-variant">Sessões forenses de 50 minutos com ata imediata</p>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-tertiary-container"></span>
        Horário de Brasília
      </span>
</div>
<div class="flex items-center justify-between py-2 px-3 bg-surface-container-low rounded-lg mb-space-sm font-label-sm text-label-sm text-on-surface-variant">
<div class="flex items-center gap-1.5">
<span class="w-3 h-3 rounded-full bg-surface-container-lowest shadow-sm border-2 border-primary-container"></span>
<span>Livre</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-3 h-3 rounded-full bg-primary-container"></span>
<span class="font-semibold text-primary">Selecionado</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-3 h-3 rounded-full bg-surface-container-highest"></span>
<span>Ocupado</span>
</div>
</div>
<div class="flex flex-col gap-space-sm">
<div>
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-primary-container text-[18px]">light_mode</span>
<span class="font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">Período Matutino</span>
</div>
<div class="grid grid-cols-3 gap-2">
<button class="time-slot px-2.5 py-3 rounded-xl bg-surface-container-highest text-on-surface-variant/60 shadow-none cursor-not-allowed flex flex-col items-center justify-center relative overflow-hidden" data-time="09:00" disabled="">
<div class="flex items-center gap-1">
<span class="font-title-md text-title-md line-through">09:00</span>
<span class="material-symbols-outlined text-[15px] text-on-surface-variant/50">lock</span>
</div>
<span class="font-label-sm text-[10px] text-on-surface-variant/60 mt-0.5">Em Audiência</span>
</button>
<button class="time-slot active px-2.5 py-3 rounded-xl bg-primary-container text-on-primary shadow-md flex flex-col items-center justify-center transition-all ring-2 ring-tertiary-container" data-time="10:00">
<span class="font-title-md text-title-md font-bold">10:00</span>
<span class="font-label-sm text-[10px] text-tertiary-fixed font-semibold mt-0.5 flex items-center gap-0.5">
<span class="material-symbols-outlined text-[10px]">check_circle</span>
              Eleito
            </span>
</button>
<button class="time-slot px-2.5 py-3 rounded-xl bg-surface-container-lowest text-on-surface shadow-sm hover:shadow-md flex flex-col items-center justify-center transition-all" data-time="11:00">
<span class="font-title-md text-title-md font-semibold text-primary">11:00</span>
<span class="font-label-sm text-[10px] text-tertiary font-medium mt-0.5">Disponível</span>
</button>
</div>
</div>
<div>
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-primary-container text-[18px]">wb_twilight</span>
<span class="font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider">Período Vespertino</span>
</div>
<div class="grid grid-cols-4 gap-2">
<button class="time-slot px-1.5 py-3 rounded-xl bg-surface-container-lowest text-on-surface shadow-sm hover:shadow-md flex flex-col items-center justify-center transition-all" data-time="14:00">
<span class="font-title-md text-title-md font-semibold text-primary">14:00</span>
<span class="font-label-sm text-[10px] text-tertiary font-medium mt-0.5">Livre</span>
</button>
<button class="time-slot px-1.5 py-3 rounded-xl bg-surface-container-highest text-on-surface-variant/60 shadow-none cursor-not-allowed flex flex-col items-center justify-center" data-time="15:00" disabled="">
<div class="flex items-center gap-0.5">
<span class="font-title-md text-title-md line-through text-[14px]">15:00</span>
<span class="material-symbols-outlined text-[14px] text-on-surface-variant/50">lock</span>
</div>
<span class="font-label-sm text-[9px] text-on-surface-variant/60 mt-0.5">Reservado</span>
</button>
<button class="time-slot px-1.5 py-3 rounded-xl bg-surface-container-lowest text-on-surface shadow-sm hover:shadow-md flex flex-col items-center justify-center transition-all" data-time="16:00">
<span class="font-title-md text-title-md font-semibold text-primary">16:00</span>
<span class="font-label-sm text-[10px] text-tertiary font-medium mt-0.5">Livre</span>
</button>
<button class="time-slot px-1.5 py-3 rounded-xl bg-surface-container-lowest text-on-surface shadow-sm hover:shadow-md flex flex-col items-center justify-center transition-all" data-time="17:00">
<span class="font-title-md text-title-md font-semibold text-primary">17:00</span>
<span class="font-label-sm text-[10px] text-tertiary font-medium mt-0.5">Livre</span>
</button>
</div>
</div>
</div>
</section>
<section class="mt-space-lg px-gutter flex flex-col">
<div class="flex items-center justify-between mb-space-xs">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-primary-container text-[20px]">verified_user</span>
<h2 class="font-title-md text-title-md text-on-surface font-semibold">Próxima Consulta Confirmada</h2>
</div>
<span class="font-label-sm text-label-sm text-tertiary font-semibold">ID #ETEC-8921</span>
</div>
<div class="rounded-xl bg-surface-container-lowest p-4 shadow-md relative overflow-hidden flex flex-col gap-3">
<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div class="flex items-start justify-between pl-1">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-lg bg-surface-container overflow-hidden shrink-0 shadow-inner">
<img class="w-full h-full object-cover" data-alt="Portrait of senior corporate attorney Dr. Lucas Mendonça in elegant law firm office, sharp focus, professional demeanor, crisp natural ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp6AJ5q_CMQt5ZD5OovycrNbs1Orkz_kx0r9CRi817XLe5R0nzQg3OBW6ZtVD7JyuVnVdEI-Jof5Yb-gbh6pIbNCvCBLSHN-gXsVoOIZ3DCFl2Z_RWlTW-NDkyObNB9kD48Jvlwd-3dx79XvMyryRHvHCBJqyxUHsO1L03FSSVgaCquOknCvU62PHrG9DfICfwNeggRlI2X1P6QEn66lEXxFau5LL8uRPidwrCT9cyDLl0-dCV8h54lA"/>
</div>
<div class="flex flex-col">
<div class="flex items-center gap-1.5">
<h3 class="font-headline-md text-headline-md text-on-surface font-semibold leading-tight">Dr. Lucas Mendonça</h3>
<span class="material-symbols-outlined text-tertiary text-[16px]">verified</span>
</div>
<span class="font-body-sm text-body-sm text-on-surface-variant">Direito Digital &amp; IA • OAB/SP 412.890</span>
</div>
</div>
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-semibold">
<span class="material-symbols-outlined text-[13px]">check_circle</span>
          Confirmado
        </span>
</div>
<div class="grid grid-cols-2 gap-2 bg-surface-container-low p-2.5 rounded-lg pl-3">
<div class="flex items-center gap-2">
<div class="w-8 h-8 rounded-md bg-surface-container-lowest flex items-center justify-center text-primary-container shrink-0">
<span class="material-symbols-outlined text-[18px]">calendar_today</span>
</div>
<div class="flex flex-col min-w-0">
<span class="font-label-sm text-[11px] text-on-surface-variant">Data &amp; Horário</span>
<span class="font-body-sm text-body-sm font-semibold text-on-surface truncate">24 Out, 15:00</span>
</div>
</div>
<div class="flex items-center gap-2">
<div class="w-8 h-8 rounded-md bg-surface-container-lowest flex items-center justify-center text-primary-container shrink-0">
<span class="material-symbols-outlined text-[18px]">videocam</span>
</div>
<div class="flex flex-col min-w-0">
<span class="font-label-sm text-[11px] text-on-surface-variant">Modalidade</span>
<span class="font-body-sm text-body-sm font-semibold text-on-surface truncate">Sala Criptografada</span>
</div>
</div>
</div>
<div class="flex items-center gap-2 pt-1">
<button class="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform">
<span class="material-symbols-outlined text-[18px]">lock_open</span>
          Entrar na Sala Virtual
        </button>
<button aria-label="Reagendar consulta" class="py-2 px-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-medium flex items-center justify-center gap-1 hover:bg-surface-container-highest transition-colors">
<span class="material-symbols-outlined text-[18px]">edit_calendar</span>
          Reagendar
        </button>
</div>
</div>
</section>
<div class="mt-space-lg px-gutter mb-space-xl">
<div class="p-3.5 rounded-xl bg-surface-container-high/40 flex items-start gap-3">
<span class="material-symbols-outlined text-primary-container text-[22px] shrink-0 mt-0.5">gavel</span>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface font-semibold">Garantia Institucional ETEC</span>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
          Todas as interações são protegidas por sigilo profissional assegurado pelo Estatuto da Advocacia e da OAB (Lei 8.906/94).
        </p>
</div>
</div>
</div>
<div class="sticky bottom-20 inset-x-0 z-40 px-gutter pb-space-sm pt-2 pointer-events-none">
<div class="pointer-events-auto max-w-md mx-auto rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl p-3 shadow-xl flex items-center justify-between gap-3">
<div class="flex flex-col min-w-0 pl-1.5">
<div class="flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span class="font-label-sm text-label-sm text-on-surface-variant" id="bar-lawyer">Dr. Lucas Mendonça</span>
</div>
<div class="flex items-center gap-1 mt-0.5">
<span class="font-title-md text-title-md font-bold text-primary truncate" id="bar-datetime">24 Out • 10:00</span>
<span class="font-label-sm text-label-sm px-1.5 py-0.2 bg-primary-fixed text-on-primary-fixed font-semibold rounded">Confirmar</span>
</div>
</div>
<button class="py-3 px-5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-title-md text-title-md font-semibold flex items-center gap-2 shadow-lg active:scale-95 transition-all shrink-0" id="btn-confirm">
<span>Agendar</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
<script>
  (function() {
    let currentLawyer = "Dr. Lucas Mendonça";
    let currentDate = "24 Out";
    let currentTime = "10:00";

    const lawyerCards = document.querySelectorAll('.lawyer-card');
    const dateChips = document.querySelectorAll('.date-chip:not(.cursor-not-allowed)');
    const timeSlots = document.querySelectorAll('.time-slot:not([disabled])');
    const barLawyer = document.getElementById('bar-lawyer');
    const barDateTime = document.getElementById('bar-datetime');
    const btnConfirm = document.getElementById('btn-confirm');

    function updateSummary() {
      if (barLawyer) barLawyer.textContent = currentLawyer;
      if (barDateTime) barDateTime.textContent = currentDate + ' • ' + currentTime;
    }

    lawyerCards.forEach(card => {
      card.addEventListener('click', () => {
        lawyerCards.forEach(c => {
          c.classList.remove('ring-2', 'ring-primary-container', 'shadow-md', 'bg-gradient-to-b', 'from-surface-container-lowest', 'to-surface-container-low');
          c.classList.add('shadow-sm');
          const badge = c.querySelector('.bg-primary-container');
          if (badge && badge.textContent.trim() === 'Selecionado') {
            badge.className = 'inline-flex items-center gap-1 font-label-sm text-label-sm font-medium px-2 py-1 rounded-md bg-surface-container-high text-on-surface-variant';
            badge.textContent = 'Selecionar';
          }
        });

        card.classList.remove('shadow-sm');
        card.classList.add('ring-2', 'ring-primary-container', 'shadow-md', 'bg-gradient-to-b', 'from-surface-container-lowest', 'to-surface-container-low');
        const badge = card.querySelector('.bg-surface-container-high');
        if (badge && badge.textContent.trim() === 'Selecionar') {
          badge.className = 'inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold px-2 py-1 rounded-md bg-primary-container text-on-primary';
          badge.textContent = 'Selecionado';
        }

        currentLawyer = card.getAttribute('data-lawyer-name') || currentLawyer;
        updateSummary();
      });
    });

    dateChips.forEach(chip => {
      chip.addEventListener('click', () => {
        dateChips.forEach(c => {
          c.classList.remove('active', 'bg-primary-container', 'text-on-primary', 'ring-2', 'ring-tertiary-container');
          c.classList.add('bg-surface-container-lowest');
          const daySpan = c.querySelector('span:first-child');
          const dateSpan = c.querySelector('span:nth-child(2)');
          if (daySpan) daySpan.className = 'font-label-sm text-label-sm text-on-surface-variant font-medium';
          if (dateSpan) dateSpan.className = 'font-title-md text-title-md text-on-surface font-bold mt-0.5';
        });

        chip.classList.remove('bg-surface-container-lowest');
        chip.classList.add('active', 'bg-primary-container', 'text-on-primary', 'ring-2', 'ring-tertiary-container');
        const daySpan = chip.querySelector('span:first-child');
        const dateSpan = chip.querySelector('span:nth-child(2)');
        if (daySpan) daySpan.className = 'font-label-sm text-label-sm text-primary-fixed-dim font-semibold';
        if (dateSpan) dateSpan.className = 'font-title-md text-title-md text-on-primary font-bold mt-0.5';

        currentDate = chip.getAttribute('data-date') || currentDate;
        updateSummary();
      });
    });

    timeSlots.forEach(slot => {
      slot.addEventListener('click', () => {
        timeSlots.forEach(s => {
          s.classList.remove('active', 'bg-primary-container', 'text-on-primary', 'ring-2', 'ring-tertiary-container');
          s.classList.add('bg-surface-container-lowest', 'text-on-surface');
          const timeText = s.querySelector('span:first-child');
          const subText = s.querySelector('span:nth-child(2)');
          if (timeText) timeText.className = 'font-title-md text-title-md font-semibold text-primary';
          if (subText) {
            subText.className = 'font-label-sm text-[10px] text-tertiary font-medium mt-0.5';
            subText.innerHTML = 'Livre';
          }
        });

        slot.classList.remove('bg-surface-container-lowest', 'text-on-surface');
        slot.classList.add('active', 'bg-primary-container', 'text-on-primary', 'ring-2', 'ring-tertiary-container');
        const timeText = slot.querySelector('span:first-child');
        const subText = slot.querySelector('span:nth-child(2)');
        if (timeText) timeText.className = 'font-title-md text-title-md font-bold';
        if (subText) {
          subText.className = 'font-label-sm text-[10px] text-tertiary-fixed font-semibold mt-0.5 flex items-center gap-0.5';
          subText.innerHTML = '<span class="material-symbols-outlined text-[10px]">check_circle</span> Eleito';
        }

        currentTime = slot.getAttribute('data-time') || currentTime;
        updateSummary();
      });
    });

    if (btnConfirm) {
      btnConfirm.addEventListener('click', () => {
        const originalHtml = btnConfirm.innerHTML;
        btnConfirm.disabled = true;
        btnConfirm.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">sync</span><span>Gravando...</span>';
        setTimeout(() => {
          btnConfirm.innerHTML = '<span class="material-symbols-outlined text-[20px]">done</span><span>Sucesso!</span>';
          btnConfirm.classList.replace('bg-primary-container', 'bg-tertiary');
          setTimeout(() => {
            btnConfirm.innerHTML = originalHtml;
            btnConfirm.disabled = false;
            btnConfirm.classList.replace('bg-tertiary', 'bg-primary-container');
            alert(`Sessão agendada com sucesso!\nProfissional: ${currentLawyer}\nData: ${currentDate} às ${currentTime}\nAta enviada para seu e-mail cadastrado.`);
          }, 1000);
        }, 800);
      });
    }

    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => {
          p.classList.remove('bg-primary-container', 'text-on-primary');
          p.classList.add('bg-surface-container-high', 'text-on-surface-variant');
        });
        pill.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
        pill.classList.add('bg-primary-container', 'text-on-primary');
      });
    });
  })();
</script></main><nav class="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]" data-active-classes="text-primary-container font-semibold"><div class="flex justify-around items-center h-20 px-space-xs"><a aria-current="page" class="flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[44px] transition-colors text-primary-container font-semibold" data-path="agenda" href="#"><span class="material-symbols-outlined text-[24px]">calendar_month</span><span class="font-label-sm text-label-sm">Agenda</span></a><a class="flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[44px] text-on-surface-variant hover:text-primary-container transition-colors" data-path="meus-agendamentos" href="#"><span class="material-symbols-outlined text-[24px]">event_available</span><span class="font-label-sm text-label-sm">Meus Agendamentos</span></a><a class="flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[44px] text-on-surface-variant hover:text-primary-container transition-colors" data-path="advogados" href="#"><span class="material-symbols-outlined text-[24px]">badge</span><span class="font-label-sm text-label-sm">Advogados</span></a><a class="flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[44px] text-on-surface-variant hover:text-primary-container transition-colors" data-path="suporte" href="#"><span class="material-symbols-outlined text-[24px]">support_agent</span><span class="font-label-sm text-label-sm">Suporte</span></a></div></nav></body></html>
