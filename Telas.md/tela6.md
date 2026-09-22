<!DOCTYPE html>

<html lang="pt-BR"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Agendar Consulta | Advocacia ETEC</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&amp;family=Noto+Serif:wght@500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
    @layer base {
      html, body { margin: 0; padding: 0; }
      body { overscroll-behavior: none; }
    }
    ::-webkit-scrollbar { display: none; }
  </style>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "surface-container-lowest": "#ffffff",
            "surface": "#fcf8f8",
            "on-surface": "#1c1b1b",
            "outline": "#897271",
            "outline-variant": "#e2dedd",
            "surface-container-highest": "#e8e4e3",
            "primary": "#65121a",
            "primary-dark": "#450009",
            "primary-light": "#ffdad9",
            "secondary-gold": "#d4af37",
            "surface-container-high": "#ebe7e7",
            "surface-container": "#f3efee",
            "surface-container-low": "#f8f5f4",
            "on-primary": "#ffffff",
            "on-surface-variant": "#5f5352",
          },
          fontFamily: {
            "headline": ["Noto Serif", "serif"],
            "body": ["IBM Plex Sans", "sans-serif"],
          }
        }
      }
    };
  </script>
</head>
<body class="bg-surface font-body text-on-surface antialiased selection:bg-primary-light selection:text-primary">
<!-- Header Superior -->
<header class="fixed top-0 w-full z-50 h-16 bg-surface-container-lowest border-b border-surface-container-high px-8 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-amber-200">
<span class="material-symbols-outlined text-[20px]">balance</span>
</div>
<div class="flex flex-col">
<span class="font-headline font-bold text-base tracking-tight text-primary leading-none">ADVOCACIA ETEC</span>
<span class="text-[11px] text-outline font-medium tracking-wider uppercase mt-0.5">Consultoria &amp; Litígio</span>
</div>
</div>
<!-- Barra de busca rápida limpa -->
<div class="flex-1 max-w-md hidden md:flex mx-8">
<div class="w-full flex items-center bg-surface-container-low px-3 py-1.5 rounded-lg border border-transparent focus-within:border-outline-variant focus-within:bg-surface-container-lowest transition-all">
<span class="material-symbols-outlined text-outline text-[18px] mr-2">search</span>
<input class="w-full bg-transparent border-none outline-none text-xs text-on-surface placeholder:text-outline/70 focus:ring-0 p-0" placeholder="Buscar clientes ou processos..." type="text"/>
</div>
</div>
<!-- Perfil & Notificações -->
<div class="flex items-center gap-4">
<button class="relative p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" title="Notificações">
<span class="material-symbols-outlined text-[20px]">notifications</span>
<span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary"></span>
</button>
<div class="h-6 w-px bg-surface-container-high"></div>
<div class="flex items-center gap-3">
<div class="flex flex-col text-right hidden sm:flex">
<span class="text-xs font-semibold text-on-surface leading-tight">Dr. Alexandre Mello</span>
<span class="text-[10px] text-outline uppercase font-medium">OAB/SP 428.190</span>
</div>
<img alt="Perfil" class="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-high" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6XalwYG4Rg8EfH4oTPVB8eeO5D7mvF9DfkMIRrQDeu_8KAq6d2_7S0A8p7ZcsQSPXb85hglnFAkrXD8eyC0ryM5Sg364rWw7lfCYJsTj1Cp6ejbNrvzWysHZpbQn2DvZoyYeu2h1XE6rRdUeRhthC0zTyi4Q0f8lIh0UiwdKB6owA_OuZEgpNbzgJ-L8k_R9NVptIWl5M8Dql96d2M6rJBX6DQvv1pxPwutziZAT95YqIcSZSPkkS"/>
</div>
</div>
</header>
<!-- Sidebar Lateral Limpa -->
<aside class="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-surface-container-lowest border-r border-surface-container-high z-40 flex flex-col justify-between py-6 px-4">
<div class="flex flex-col gap-1">
<span class="text-[11px] font-semibold text-outline uppercase tracking-wider px-3 mb-2">Menu Principal</span>
<nav class="flex flex-col gap-1">
<a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-on-primary font-medium text-xs shadow-sm transition-all" href="#">
<span class="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Agendamentos</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface text-xs font-medium transition-all" href="#">
<span class="material-symbols-outlined text-[18px]">gavel</span>
<span>Processos</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface text-xs font-medium transition-all" href="#">
<span class="material-symbols-outlined text-[18px]">group</span>
<span>Clientes</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface text-xs font-medium transition-all" href="#">
<span class="material-symbols-outlined text-[18px]">account_balance_wallet</span>
<span>Honorários</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface text-xs font-medium transition-all" href="#">
<span class="material-symbols-outlined text-[18px]">analytics</span>
<span>Relatórios</span>
</a>
</nav>
</div>
<div class="flex flex-col gap-2 pt-4 border-t border-surface-container-high">
<a class="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface text-xs font-medium transition-all" href="#">
<span class="material-symbols-outlined text-[18px]">settings</span>
<span>Configurações</span>
</a>
</div>
</aside>
<!-- Conteúdo Principal -->
<div class="pl-64">
<main class="w-full pt-20 px-8 pb-12 max-w-6xl mx-auto">
<!-- Cabeçalho da Página -->
<div class="mb-8">
<div class="flex items-center gap-2 text-xs text-outline mb-1">
<span>Agendamentos</span>
<span class="material-symbols-outlined text-[14px]">chevron_right</span>
<span class="text-primary font-semibold">Nova Consulta</span>
</div>
<h1 class="font-headline font-bold text-2xl md:text-3xl text-on-surface">Agendar Consulta</h1>
<p class="text-xs md:text-sm text-on-surface-variant mt-1">Preencha as informações para agendar e formalizar o atendimento do cliente.</p>
</div>
<!-- Grid Principal: Formulário + Resumo Lateral -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Formulário Descomplicado (7 Colunas) -->
<div class="lg:col-span-7 flex flex-col gap-6">
<!-- Passo 1: Cliente -->
<section class="bg-surface-container-lowest p-6 rounded-xl border border-surface-container-high shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col gap-4">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2.5">
<span class="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">1</span>
<h2 class="font-headline text-base font-semibold text-on-surface">Cliente</h2>
</div>
<button class="text-xs text-primary font-semibold hover:underline flex items-center gap-1" type="button">
<span class="material-symbols-outlined text-sm">add</span> Novo Cliente
              </button>
</div>
<div class="flex flex-col gap-1.5">
<label class="text-xs font-medium text-on-surface-variant" for="client-input">Buscar ou selecionar cliente</label>
<div class="relative">
<div class="flex items-center bg-surface-container-low px-3 py-2 rounded-lg border border-surface-container-high focus-within:border-primary focus-within:bg-surface-container-lowest transition-all">
<span class="material-symbols-outlined text-outline text-base mr-2">search</span>
<input class="w-full bg-transparent border-none outline-none text-xs text-on-surface focus:ring-0 p-0" id="client-input" placeholder="Nome, CPF ou CNPJ..." type="text" value="Dr. Marcelo Siqueira - CPF: 248.913.028-44"/>
<span class="material-symbols-outlined text-emerald-600 text-sm" title="Cliente Ativo">check_circle</span>
</div>
</div>
</div>
<!-- Card Resumo Simples do Cliente Selecionado -->
<div class="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-surface-container-high/60">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">
                  MS
                </div>
<div class="flex flex-col">
<span class="text-xs font-semibold text-on-surface">Dr. Marcelo Siqueira</span>
<span class="text-[11px] text-outline">marcelo.siqueira@holding.com.br • (11) 98721-0044</span>
</div>
</div>
<span class="text-[11px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">Cadastrado</span>
</div>
</section>
<!-- Passo 2: Advogado & Especialidade -->
<section class="bg-surface-container-lowest p-6 rounded-xl border border-surface-container-high shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col gap-4">
<div class="flex items-center gap-2.5">
<span class="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">2</span>
<h2 class="font-headline text-base font-semibold text-on-surface">Advogado Responsável</h2>
</div>
<div class="flex flex-col gap-1.5">
<label class="text-xs font-medium text-on-surface-variant" for="lawyer-select">Selecione o profissional</label>
<div class="relative bg-surface-container-low rounded-lg border border-surface-container-high focus-within:border-primary focus-within:bg-surface-container-lowest transition-all">
<select class="w-full bg-transparent border-none outline-none text-xs text-on-surface px-3 py-2 appearance-none cursor-pointer focus:ring-0" id="lawyer-select">
<option selected="" value="carolina">Dra. Carolina Alencar — Especialista em Direito Tributário</option>
<option value="roberto">Dr. Roberto Guimarães — Especialista em Direito Cível</option>
<option value="vinicius">Dr. Vinícius Paiva — Especialista em Contratos</option>
<option value="helena">Dra. Helena Castello — Especialista em Direito Trabalhista</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-2.5 text-outline pointer-events-none text-sm">expand_more</span>
</div>
</div>
<!-- Seleção Simples de Senioridade -->
<div class="flex flex-col gap-1.5">
<label class="text-xs font-medium text-on-surface-variant">Nível de Senioridade</label>
<div class="grid grid-cols-4 gap-2">
<label class="seniority-btn flex flex-col items-center justify-center p-2.5 rounded-lg border border-surface-container-high bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all text-center">
<input class="sr-only" name="seniority" type="radio" value="junior"/>
<span class="text-xs font-medium text-on-surface">Júnior</span>
<span class="text-[11px] text-outline mt-0.5">R$ 350/h</span>
</label>
<label class="seniority-btn flex flex-col items-center justify-center p-2.5 rounded-lg border border-surface-container-high bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all text-center">
<input class="sr-only" name="seniority" type="radio" value="pleno"/>
<span class="text-xs font-medium text-on-surface">Pleno</span>
<span class="text-[11px] text-outline mt-0.5">R$ 550/h</span>
</label>
<label class="seniority-btn flex flex-col items-center justify-center p-2.5 rounded-lg border border-primary bg-primary text-on-primary cursor-pointer shadow-sm transition-all text-center">
<input checked="" class="sr-only" name="seniority" type="radio" value="senior"/>
<span class="text-xs font-semibold">Sênior</span>
<span class="text-[11px] text-primary-light mt-0.5">R$ 850/h</span>
</label>
<label class="seniority-btn flex flex-col items-center justify-center p-2.5 rounded-lg border border-surface-container-high bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all text-center">
<input class="sr-only" name="seniority" type="radio" value="socio"/>
<span class="text-xs font-medium text-on-surface">Sócio</span>
<span class="text-[11px] text-outline mt-0.5">R$ 1.200/h</span>
</label>
</div>
</div>
</section>
<!-- Passo 3: Área e Valor da Causa -->
<section class="bg-surface-container-lowest p-6 rounded-xl border border-surface-container-high shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col gap-4">
<div class="flex items-center gap-2.5">
<span class="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">3</span>
<h2 class="font-headline text-base font-semibold text-on-surface">Área &amp; Causa</h2>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="flex flex-col gap-1.5">
<label class="text-xs font-medium text-on-surface-variant" for="law-area">Área do Direito</label>
<div class="relative bg-surface-container-low rounded-lg border border-surface-container-high focus-within:border-primary focus-within:bg-surface-container-lowest">
<select class="w-full bg-transparent border-none outline-none text-xs text-on-surface px-3 py-2 appearance-none cursor-pointer focus:ring-0" id="law-area">
<option selected="" value="tributario">Direito Tributário</option>
<option value="civil">Direito Civil</option>
<option value="empresarial">Direito Empresarial</option>
<option value="trabalhista">Direito Trabalhista</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-2.5 text-outline pointer-events-none text-sm">expand_more</span>
</div>
</div>
<div class="flex flex-col gap-1.5">
<label class="text-xs font-medium text-on-surface-variant" for="consultation-type">Tipo de Atendimento</label>
<div class="relative bg-surface-container-low rounded-lg border border-surface-container-high focus-within:border-primary focus-within:bg-surface-container-lowest">
<select class="w-full bg-transparent border-none outline-none text-xs text-on-surface px-3 py-2 appearance-none cursor-pointer focus:ring-0" id="consultation-type">
<option selected="" value="parecer">Parecer Inicial</option>
<option value="auditoria">Análise de Riscos</option>
<option value="defesa">Defesa em Ação</option>
<option value="contrato">Elaboração de Contrato</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-2.5 text-outline pointer-events-none text-sm">expand_more</span>
</div>
</div>
</div>
<div class="flex flex-col gap-1.5 pt-1">
<label class="text-xs font-medium text-on-surface-variant" for="case-value">Valor Estimado da Causa (R$)</label>
<div class="flex items-center bg-surface-container-low px-3 py-2 rounded-lg border border-surface-container-high focus-within:border-primary focus-within:bg-surface-container-lowest">
<span class="text-xs font-bold text-primary mr-2">R$</span>
<input class="w-full bg-transparent border-none outline-none text-sm font-semibold text-on-surface focus:ring-0 p-0" id="case-value" type="text" value="250.000,00"/>
</div>
</div>
</section>
<!-- Passo 4: Data e Horário -->
<section class="bg-surface-container-lowest p-6 rounded-xl border border-surface-container-high shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col gap-4">
<div class="flex items-center gap-2.5">
<span class="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">4</span>
<h2 class="font-headline text-base font-semibold text-on-surface">Data &amp; Horário</h2>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="flex flex-col gap-1.5">
<label class="text-xs font-medium text-on-surface-variant" for="consultation-date">Data</label>
<div class="flex items-center bg-surface-container-low px-3 py-2 rounded-lg border border-surface-container-high focus-within:border-primary focus-within:bg-surface-container-lowest">
<span class="material-symbols-outlined text-outline text-base mr-2">calendar_today</span>
<input class="w-full bg-transparent border-none outline-none text-xs text-on-surface focus:ring-0 p-0 cursor-pointer" id="consultation-date" type="date" value="2026-09-18"/>
</div>
</div>
<div class="flex flex-col gap-1.5">
<label class="text-xs font-medium text-on-surface-variant">Formato do Atendimento</label>
<div class="grid grid-cols-2 gap-2">
<label class="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-surface-container-high bg-surface-container-low text-xs font-medium text-on-surface cursor-pointer hover:bg-surface-container transition-all">
<input class="sr-only" name="modalidade" type="radio" value="presencial"/>
<span class="material-symbols-outlined text-sm">apartment</span>
<span>Presencial</span>
</label>
<label class="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-primary bg-primary text-on-primary text-xs font-medium cursor-pointer transition-all">
<input checked="" class="sr-only" name="modalidade" type="radio" value="virtual"/>
<span class="material-symbols-outlined text-sm">videocam</span>
<span>Online (Vídeo)</span>
</label>
</div>
</div>
</div>
<!-- Seleção de Horário Limpa -->
<div class="flex flex-col gap-2 pt-1">
<label class="text-xs font-medium text-on-surface-variant">Horários Disponíveis</label>
<div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
<button class="time-slot-btn py-2 rounded-lg border border-surface-container-high bg-surface-container-low hover:border-outline text-xs text-on-surface font-medium transition-all" type="button">
                  09:00
                </button>
<button class="time-slot-btn py-2 rounded-lg border border-surface-container-high bg-surface-container-low hover:border-outline text-xs text-on-surface font-medium transition-all" type="button">
                  10:30
                </button>
<button class="py-2 rounded-lg border border-surface-container-high/40 bg-surface-container text-xs text-outline/50 font-medium cursor-not-allowed line-through" disabled="" type="button">
                  11:30
                </button>
<button class="time-slot-btn py-2 rounded-lg border border-surface-container-high bg-surface-container-low hover:border-outline text-xs text-on-surface font-medium transition-all" type="button">
                  14:00
                </button>
<button class="time-slot-btn py-2 rounded-lg border border-primary bg-primary text-on-primary font-semibold text-xs transition-all shadow-sm" type="button">
                  15:30
                </button>
<button class="time-slot-btn py-2 rounded-lg border border-surface-container-high bg-surface-container-low hover:border-outline text-xs text-on-surface font-medium transition-all" type="button">
                  17:00
                </button>
</div>
<div class="flex items-center gap-1.5 text-xs text-emerald-700 mt-1">
<span class="material-symbols-outlined text-sm">check_circle</span>
<span>Horário livre na agenda da Dra. Carolina</span>
</div>
</div>
<!-- Observações Opcionais -->
<div class="flex flex-col gap-1.5 pt-2">
<label class="text-xs font-medium text-on-surface-variant" for="notes">Observações (opcional)</label>
<textarea class="w-full bg-surface-container-low p-2.5 rounded-lg border border-surface-container-high outline-none text-xs text-on-surface placeholder:text-outline/70 focus:border-primary focus:bg-surface-container-lowest focus:ring-0 transition-all resize-none" id="notes" placeholder="Descreva brevemente o tema ou instruções para a reunião..." rows="2"></textarea>
</div>
</section>
</div>
<!-- Coluna Direita: Resumo Simplificado e Direto (5 Colunas) -->
<div class="lg:col-span-5 sticky top-24">
<div class="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
<div class="p-6 flex flex-col gap-5">
<h3 class="font-headline font-bold text-lg text-on-surface">Resumo do Agendamento</h3>
<!-- Detalhes em lista limpa -->
<div class="flex flex-col divide-y divide-surface-container-high text-xs">
<div class="py-2.5 flex justify-between items-center">
<span class="text-outline">Cliente</span>
<span class="font-semibold text-on-surface">Dr. Marcelo Siqueira</span>
</div>
<div class="py-2.5 flex justify-between items-center">
<span class="text-outline">Advogado</span>
<span class="font-semibold text-on-surface">Dra. Carolina Alencar</span>
</div>
<div class="py-2.5 flex justify-between items-center">
<span class="text-outline">Área</span>
<span class="font-medium text-on-surface">Direito Tributário</span>
</div>
<div class="py-2.5 flex justify-between items-center">
<span class="text-outline">Data &amp; Horário</span>
<span class="font-semibold text-on-surface">18/09/2026 às 15:30</span>
</div>
<div class="py-2.5 flex justify-between items-center">
<span class="text-outline">Formato</span>
<span class="font-medium text-on-surface flex items-center gap-1">
<span class="material-symbols-outlined text-sm text-primary">videocam</span> Online
                  </span>
</div>
</div>
<!-- Destaque Direto do Valor -->
<div class="p-4 rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col gap-1">
<span class="text-[11px] font-medium text-outline uppercase tracking-wider">Valor da Consulta</span>
<div class="flex items-baseline justify-between">
<span class="font-headline font-bold text-2xl text-primary">R$ 1.020,00</span>
<span class="text-xs text-on-surface-variant">Sênior • 1h de sessão</span>
</div>
</div>
<!-- Notificação por E-mail/WhatsApp -->
<label class="flex items-center gap-2 cursor-pointer text-xs text-on-surface-variant">
<input checked="" class="w-4 h-4 rounded text-primary focus:ring-primary/20 cursor-pointer" type="checkbox"/>
<span>Enviar confirmação por WhatsApp e E-mail</span>
</label>
<!-- Botão Principal de Ação -->
<div class="flex flex-col gap-2 pt-1">
<button class="w-full py-3 px-4 rounded-lg bg-primary hover:bg-primary-dark text-on-primary font-semibold text-sm shadow transition-all flex items-center justify-center gap-2 active:scale-[0.99]" id="btn-confirm" type="button">
<span class="material-symbols-outlined text-base">check_circle</span>
<span>Confirmar Agendamento</span>
</button>
<button class="w-full py-2 px-3 rounded-lg text-xs text-on-surface-variant hover:bg-surface-container transition-all" type="button">
                  Salvar Rascunho
                </button>
</div>
<!-- Mensagem de Confirmação Suave (Mock JS) -->
<div class="hidden p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2" id="alert-success">
<span class="material-symbols-outlined text-base text-emerald-600">check_circle</span>
<span>Consulta agendada com sucesso!</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
      // Interação Simples dos Slots de Horário
      const timeSlots = document.querySelectorAll('.time-slot-btn');
      timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
          timeSlots.forEach(s => {
            s.classList.remove('bg-primary', 'text-on-primary', 'border-primary', 'font-semibold', 'shadow-sm');
            s.classList.add('bg-surface-container-low', 'text-on-surface', 'border-surface-container-high', 'font-medium');
          });
          slot.classList.add('bg-primary', 'text-on-primary', 'border-primary', 'font-semibold', 'shadow-sm');
          slot.classList.remove('bg-surface-container-low', 'text-on-surface', 'border-surface-container-high');
        });
      });

      // Interação Simples da Senioridade
      const seniorityCards = document.querySelectorAll('.seniority-btn');
      seniorityCards.forEach(card => {
        card.addEventListener('click', () => {
          seniorityCards.forEach(c => {
            c.classList.remove('bg-primary', 'text-on-primary', 'border-primary', 'shadow-sm');
            c.classList.add('bg-surface-container-low', 'text-on-surface', 'border-surface-container-high');
            const sub = c.querySelector('span:last-child');
            if (sub) {
              sub.classList.remove('text-primary-light');
              sub.classList.add('text-outline');
            }
          });
          card.classList.add('bg-primary', 'text-on-primary', 'border-primary', 'shadow-sm');
          card.classList.remove('bg-surface-container-low', 'text-on-surface', 'border-surface-container-high');
          const activeSub = card.querySelector('span:last-child');
          if (activeSub) {
            activeSub.classList.remove('text-outline');
            activeSub.classList.add('text-primary-light');
          }
        });
      });

      // Botão de Confirmação
      const confirmBtn = document.getElementById('btn-confirm');
      const alertSuccess = document.getElementById('alert-success');
      if (confirmBtn && alertSuccess) {
        confirmBtn.addEventListener('click', () => {
          confirmBtn.disabled = true;
          confirmBtn.innerHTML = `
            <span class="material-symbols-outlined text-base animate-spin">refresh</span>
            <span>Agendando...</span>
          `;
          setTimeout(() => {
            confirmBtn.disabled = false;
            confirmBtn.innerHTML = `
              <span class="material-symbols-outlined text-base">check_circle</span>
              <span>Consulta Agendada!</span>
            `;
            alertSuccess.classList.remove('hidden');
            setTimeout(() => {
              alertSuccess.classList.add('hidden');
            }, 4000);
          }, 600);
        });
      }
    });
  </script>
</body></html>
