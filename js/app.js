/**
 * Advocacia ETEC - Lógica de Controle SPA e Interatividade
 */

document.addEventListener('DOMContentLoaded', () => {
  // === GERENCIAMENTO DE TEMAS LIGHT / DARK ===
  const htmlEl = document.documentElement;
  const btnThemeToggle = document.getElementById('btn-theme-toggle');

  function aplicarTema(theme) {
    if (theme === 'dark') {
      htmlEl.classList.remove('light');
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
      htmlEl.classList.add('light');
    }
    db.setTheme(theme);
  }

  // Carrega tema salvo ou preferência
  const currentTheme = db.getTheme();
  aplicarTema(currentTheme);

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      const isDark = htmlEl.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      aplicarTema(newTheme);
      showToast(`Modo ${newTheme === 'dark' ? 'Escuro' : 'Claro'} ativado.`, 'light_mode');
    });
  }

  // === ROTEAMENTO / NAVEGAÇÃO SPA ===
  const navLinks = document.querySelectorAll('.nav-link');
  const spaViews = document.querySelectorAll('.spa-view');

  function navegarPara(viewId) {
    spaViews.forEach(view => {
      if (view.id === `view-${viewId}`) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('data-view') === viewId) {
        link.classList.add('active', 'font-semibold', 'text-brand-800', 'dark:text-gold-400', 'border-b-2', 'border-brand-800', 'dark:border-gold-400');
        link.classList.remove('text-stone-600', 'dark:text-stone-400');
      } else {
        link.classList.remove('active', 'font-semibold', 'text-brand-800', 'dark:text-gold-400', 'border-b-2', 'border-brand-800', 'dark:border-gold-400');
        link.classList.add('text-stone-600', 'dark:text-stone-400');
      }
    });

    // Renderizar visão ativada
    renderView(viewId);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = link.getAttribute('data-view');
      navegarPara(viewId);
    });
  });

  function renderView(viewId) {
    switch (viewId) {
      case 'dashboard':
        renderDashboard();
        break;
      case 'clientes':
        renderClientes();
        break;
      case 'advogados':
        renderAdvogados();
        break;
      case 'consultas':
        renderConsultas();
        break;
      case 'relatorios':
        renderRelatorios();
        break;
      case 'lawai':
        // Chat interativo pronto
        break;
    }
  }

  // === NOTIFICAÇÕES TOAST ===
  const toast = document.getElementById('toast-notificacao');
  const toastMsg = document.getElementById('toast-mensagem');
  const toastIcon = document.getElementById('toast-icon');

  function showToast(mensagem, icon = 'check_circle', isError = false) {
    toastMsg.textContent = mensagem;
    toastIcon.textContent = icon;
    toastIcon.className = `material-symbols-outlined text-[20px] ${isError ? 'text-red-500' : 'text-gold-400'}`;
    toast.classList.remove('hidden');
    toast.classList.add('flex');

    setTimeout(() => {
      toast.classList.add('hidden');
      toast.classList.remove('flex');
    }, 3000);
  }

  // === MODAIS ===
  const modalCliente = document.getElementById('modal-cliente');
  const modalAdvogado = document.getElementById('modal-advogado');
  const modalConsulta = document.getElementById('modal-consulta');

  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      modalCliente.classList.add('hidden');
      modalAdvogado.classList.add('hidden');
      modalConsulta.classList.add('hidden');
    });
  });

  // Atalhos Rápidos Dashboard
  document.getElementById('btn-dash-novo-cliente')?.addEventListener('click', () => abrirModalCliente());
  document.getElementById('btn-dash-nova-consulta')?.addEventListener('click', () => abrirModalConsulta());
  document.getElementById('btn-novo-cliente')?.addEventListener('click', () => abrirModalCliente());
  document.getElementById('btn-novo-advogado')?.addEventListener('click', () => abrirModalAdvogado());
  document.getElementById('btn-nova-consulta')?.addEventListener('click', () => abrirModalConsulta());

  // === FORMATADORES UTILS ===
  function formatMoney(val) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0);
  }

  function formatDateIsoToBr(iso) {
    if (!iso) return '-';
    const d = new Date(iso);
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  function formatTimeIso(iso) {
    if (!iso) return '-';
    const d = new Date(iso);
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  // ========================================================
  // RENDER VISÃO 1: DASHBOARD DA SECRETÁRIA (F6)
  // ========================================================
  function renderDashboard() {
    // Data Atual formatada
    const now = new Date();
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('pt-BR', optionsDate);
    const dateStrFormatted = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    document.getElementById('dash-current-date').textContent = dateStrFormatted;

    const consultas = db.getConsultas();
    const clientes = db.getClientes();
    const advogados = db.getAdvogados();

    // 1. Métricas da Secretaria (F6)
    const hojeYmd = now.toISOString().split('T')[0];
    const consultasHoje = consultas.filter(c => c.inicio.startsWith(hojeYmd) && c.status !== 'cancelada');
    document.getElementById('metric-consultas-hoje').textContent = consultasHoje.length;

    document.getElementById('metric-total-clientes').textContent = clientes.length;
    document.getElementById('metric-total-advogados').textContent = advogados.filter(a => a.ativo).length;

    // Faturamento do Mês
    const mesAtualYm = hojeYmd.slice(0, 7);
    const faturamentoMes = consultas
      .filter(c => c.inicio.startsWith(mesAtualYm) && c.status !== 'cancelada')
      .reduce((sum, c) => sum + Number(c.valorHonorario || 0), 0);
    document.getElementById('metric-faturamento-mes').textContent = formatMoney(faturamentoMes);

    // 2. As cinco próximas consultas (F6)
    const proximasConsultas = consultas
      .filter(c => new Date(c.inicio) >= new Date() && c.status !== 'cancelada')
      .sort((a, b) => new Date(a.inicio) - new Date(b.inicio))
      .slice(0, 5);

    const tableBody = document.getElementById('dash-proximas-consultas-list');
    if (proximasConsultas.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" class="py-4 text-center text-stone-400">Nenhuma consulta futura agendada.</td></tr>`;
    } else {
      tableBody.innerHTML = proximasConsultas.map(c => {
        const cliente = clientes.find(cli => cli.id === c.clienteId);
        const advogado = advogados.find(adv => adv.id === c.advogadoId);
        return `
          <tr class="hover:bg-stone-50 dark:hover:bg-darkcard/50 transition-colors">
            <td class="py-3 px-2 text-stone-900 dark:text-stone-100 font-semibold">
              ${formatDateIsoToBr(c.inicio)} • ${formatTimeIso(c.inicio)}
            </td>
            <td class="py-3 px-2 text-stone-800 dark:text-stone-200">
              <span class="font-medium">${cliente ? cliente.nomeCompleto : 'Cliente Excluído'}</span>
            </td>
            <td class="py-3 px-2 text-stone-700 dark:text-stone-300">
              ${advogado ? advogado.nomeCompleto : 'Advogado'}
            </td>
            <td class="py-3 px-2 font-serif font-bold text-brand-800 dark:text-gold-400">
              ${formatMoney(c.valorHonorario)}
            </td>
            <td class="py-3 px-2 text-right">
              <button onclick="navegarPara('consultas')" class="text-stone-400 hover:text-stone-800 dark:hover:text-stone-200">
                Ver na Agenda
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }

    // 3. Advogados com agenda livre no momento (F6)
    const horaAgoraMs = now.getTime();
    const advogadosLivres = advogados.filter(adv => {
      if (!adv.ativo) return false;
      // Checa se possui consulta agora
      const emConsulta = consultas.some(c => {
        if (c.advogadoId !== adv.id || c.status === 'cancelada') return false;
        const ini = new Date(c.inicio).getTime();
        const fim = new Date(c.fim).getTime();
        return horaAgoraMs >= ini && horaAgoraMs <= fim;
      });
      return !emConsulta;
    });

    document.getElementById('badge-advogados-livres-count').textContent = `${advogadosLivres.length} livres`;

    const livresList = document.getElementById('dash-advogados-livres-list');
    if (advogadosLivres.length === 0) {
      livresList.innerHTML = `<p class="py-4 text-xs text-center text-stone-400">Todos os advogados estão em atendimento ou fora de expediente.</p>`;
    } else {
      livresList.innerHTML = advogadosLivres.map(adv => `
        <div class="py-3 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-semibold font-ui flex items-center justify-center text-xs border border-stone-200 dark:border-stone-700 relative">
              ${adv.nomeCompleto.split(' ').map(n=>n[0]).join('').slice(0, 2)}
              <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-darksurface"></span>
            </div>
            <div>
              <h4 class="text-xs font-semibold text-stone-900 dark:text-stone-100">${adv.nomeCompleto}</h4>
              <p class="text-[11px] text-stone-500 dark:text-stone-400">${adv.areaAtuacao || 'Geral'} • ${adv.nivel}</p>
            </div>
          </div>
          <button onclick="agendarParaAdvogado('${adv.id}')" class="px-2.5 py-1 text-xs text-stone-700 dark:text-stone-300 hover:text-brand-900 border border-stone-200 dark:border-stone-700 hover:border-stone-400 rounded transition-colors font-ui">
            Agendar
          </button>
        </div>
      `).join('');
    }
  }

  // ========================================================
  // RENDER VISÃO 2: CLIENTES (F1)
  // ========================================================
  function renderClientes() {
    const clientes = db.getClientes();
    const termo = (document.getElementById('input-busca-cliente').value || '').toLowerCase().trim();

    const filtrados = clientes.filter(c =>
      c.nomeCompleto.toLowerCase().includes(termo) ||
      c.cpfCnpj.toLowerCase().includes(termo) ||
      c.email.toLowerCase().includes(termo)
    );

    const tbody = document.getElementById('tabela-clientes-list');
    if (filtrados.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="py-6 text-center text-stone-400">Nenhum cliente encontrado.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtrados.map(c => `
      <tr class="hover:bg-stone-50 dark:hover:bg-darkcard/50 transition-colors">
        <td class="py-3.5 px-6 font-semibold text-stone-900 dark:text-stone-100">${c.nomeCompleto}</td>
        <td class="py-3.5 px-6 text-stone-600 dark:text-stone-400">${c.cpfCnpj}</td>
        <td class="py-3.5 px-6 space-y-0.5">
          <div class="text-stone-800 dark:text-stone-200">${c.telefone}</div>
          <div class="text-stone-400 text-[11px]">${c.email}</div>
        </td>
        <td class="py-3.5 px-6 text-stone-500 dark:text-stone-400">${c.endereco || '—'}</td>
        <td class="py-3.5 px-6 text-right space-x-2">
          <button onclick="editarCliente('${c.id}')" class="text-stone-600 dark:text-stone-300 hover:text-brand-800 dark:hover:text-gold-400" title="Editar">
            <span class="material-symbols-outlined text-[18px]">edit</span>
          </button>
          <button onclick="excluirCliente('${c.id}')" class="text-stone-400 hover:text-red-600" title="Excluir">
            <span class="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </td>
      </tr>
    `).join('');
  }

  document.getElementById('input-busca-cliente')?.addEventListener('input', renderClientes);

  function abrirModalCliente(clienteId = null) {
    document.getElementById('cliente-id').value = '';
    document.getElementById('cliente-nome').value = '';
    document.getElementById('cliente-cpf').value = '';
    document.getElementById('cliente-telefone').value = '';
    document.getElementById('cliente-email').value = '';
    document.getElementById('cliente-endereco').value = '';

    if (clienteId) {
      const cliente = db.getClientes().find(c => c.id === clienteId);
      if (cliente) {
        document.getElementById('modal-cliente-titulo').textContent = 'Editar Cliente';
        document.getElementById('cliente-id').value = cliente.id;
        document.getElementById('cliente-nome').value = cliente.nomeCompleto;
        document.getElementById('cliente-cpf').value = cliente.cpfCnpj;
        document.getElementById('cliente-telefone').value = cliente.telefone;
        document.getElementById('cliente-email').value = cliente.email;
        document.getElementById('cliente-endereco').value = cliente.endereco || '';
      }
    } else {
      document.getElementById('modal-cliente-titulo').textContent = 'Cadastrar Cliente';
    }

    modalCliente.classList.remove('hidden');
  }

  window.editarCliente = abrirModalCliente;

  window.excluirCliente = function(id) {
    const cliente = db.getClientes().find(c => c.id === id);
    if (!cliente) return;
    if (confirm(`Confirma a exclusão do cliente "${cliente.nomeCompleto}"?`)) {
      db.excluirCliente(id);
      showToast('Cliente excluído com sucesso.');
      renderClientes();
      renderDashboard();
    }
  };

  document.getElementById('form-cliente')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const clienteData = {
      id: document.getElementById('cliente-id').value || null,
      nomeCompleto: document.getElementById('cliente-nome').value.trim(),
      cpfCnpj: document.getElementById('cliente-cpf').value.trim(),
      telefone: document.getElementById('cliente-telefone').value.trim(),
      email: document.getElementById('cliente-email').value.trim(),
      endereco: document.getElementById('cliente-endereco').value.trim()
    };

    try {
      db.salvarCliente(clienteData);
      modalCliente.classList.add('hidden');
      showToast('Cliente salvo com sucesso!');
      renderClientes();
      renderDashboard();
    } catch (err) {
      alert(err.message);
    }
  });

  // ========================================================
  // RENDER VISÃO 3: ADVOGADOS (F2)
  // ========================================================
  function renderAdvogados() {
    const advogados = db.getAdvogados();
    const grid = document.getElementById('grid-advogados-list');

    if (advogados.length === 0) {
      grid.innerHTML = `<p class="col-span-full py-8 text-center text-stone-400">Nenhum advogado cadastrado.</p>`;
      return;
    }

    grid.innerHTML = advogados.map(adv => `
      <div class="bg-white dark:bg-darksurface p-6 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-start justify-between">
            <div>
              <h3 class="font-serif font-bold text-base text-stone-900 dark:text-stone-100">${adv.nomeCompleto}</h3>
              <p class="text-xs text-brand-800 dark:text-gold-400 font-semibold font-ui mt-0.5">${adv.oab}</p>
            </div>
            <span class="px-2 py-0.5 text-[11px] font-semibold bg-stone-100 dark:bg-darkcard text-stone-700 dark:text-stone-300 rounded font-ui">
              ${adv.nivel}
            </span>
          </div>

          <div class="mt-4 space-y-1.5 text-xs text-stone-600 dark:text-stone-400 font-ui">
            <p><strong>Área:</strong> ${adv.areaAtuacao || 'Geral'}</p>
            <p><strong>Expediente:</strong> ${adv.horarioInicioManha}-${adv.horarioFimManha} | ${adv.horarioInicioTarde}-${adv.horarioFimTarde}</p>
          </div>
        </div>

        <div class="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
          <button onclick="agendarParaAdvogado('${adv.id}')" class="text-brand-800 dark:text-gold-400 font-semibold hover:underline">
            Agendar Consulta
          </button>
          <div class="space-x-2">
            <button onclick="editarAdvogado('${adv.id}')" class="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100" title="Editar">
              <span class="material-symbols-outlined text-[18px]">edit</span>
            </button>
            <button onclick="excluirAdvogado('${adv.id}')" class="text-stone-400 hover:text-red-600" title="Excluir">
              <span class="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function abrirModalAdvogado(advogadoId = null) {
    document.getElementById('advogado-id').value = '';
    document.getElementById('advogado-nome').value = '';
    document.getElementById('advogado-oab').value = '';
    document.getElementById('advogado-nivel').value = 'Junior';
    document.getElementById('advogado-area').value = '';
    document.getElementById('advogado-hm-ini').value = '09:00';
    document.getElementById('advogado-hm-fim').value = '12:00';
    document.getElementById('advogado-ht-ini').value = '14:00';
    document.getElementById('advogado-ht-fim').value = '18:00';

    if (advogadoId) {
      const adv = db.getAdvogados().find(a => a.id === advogadoId);
      if (adv) {
        document.getElementById('modal-advogado-titulo').textContent = 'Editar Advogado';
        document.getElementById('advogado-id').value = adv.id;
        document.getElementById('advogado-nome').value = adv.nomeCompleto;
        document.getElementById('advogado-oab').value = adv.oab;
        document.getElementById('advogado-nivel').value = adv.nivel;
        document.getElementById('advogado-area').value = adv.areaAtuacao || '';
        document.getElementById('advogado-hm-ini').value = adv.horarioInicioManha || '09:00';
        document.getElementById('advogado-hm-fim').value = adv.horarioFimManha || '12:00';
        document.getElementById('advogado-ht-ini').value = adv.horarioInicioTarde || '14:00';
        document.getElementById('advogado-ht-fim').value = adv.horarioFimTarde || '18:00';
      }
    } else {
      document.getElementById('modal-advogado-titulo').textContent = 'Cadastrar Advogado';
    }

    modalAdvogado.classList.remove('hidden');
  }

  window.editarAdvogado = abrirModalAdvogado;

  window.excluirAdvogado = function(id) {
    const adv = db.getAdvogados().find(a => a.id === id);
    if (!adv) return;
    if (confirm(`Confirma a exclusão do advogado "${adv.nomeCompleto}"?`)) {
      db.excluirAdvogado(id);
      showToast('Advogado excluído.');
      renderAdvogados();
      renderDashboard();
    }
  };

  document.getElementById('form-advogado')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const advData = {
      id: document.getElementById('advogado-id').value || null,
      nomeCompleto: document.getElementById('advogado-nome').value.trim(),
      oab: document.getElementById('advogado-oab').value.trim(),
      nivel: document.getElementById('advogado-nivel').value,
      areaAtuacao: document.getElementById('advogado-area').value.trim(),
      horarioInicioManha: document.getElementById('advogado-hm-ini').value,
      horarioFimManha: document.getElementById('advogado-hm-fim').value,
      horarioInicioTarde: document.getElementById('advogado-ht-ini').value,
      horarioFimTarde: document.getElementById('advogado-ht-fim').value
    };

    try {
      db.salvarAdvogado(advData);
      modalAdvogado.classList.add('hidden');
      showToast('Advogado salvo com sucesso!');
      renderAdvogados();
      renderDashboard();
    } catch (err) {
      alert(err.message);
    }
  });

  // ========================================================
  // RENDER VISÃO 4: CONSULTAS & AGENDA DIÁRIA (F3 + F4)
  // ========================================================
  function renderConsultas() {
    const consultas = db.getConsultas();
    const clientes = db.getClientes();
    const advogados = db.getAdvogados();
    const servicos = db.getServicos();

    // 1. Tabela com todas as consultas
    const tbody = document.getElementById('tabela-consultas-list');
    if (consultas.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="py-6 text-center text-stone-400">Nenhuma consulta agendada.</td></tr>`;
    } else {
      tbody.innerHTML = consultas.map(c => {
        const cliente = clientes.find(cli => cli.id === c.clienteId);
        const advogado = advogados.find(adv => adv.id === c.advogadoId);
        const servico = servicos.find(srv => srv.id === c.servicoId);

        let statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] bg-blue-100 text-blue-800">Agendada</span>';
        if (c.status === 'realizada') {
          statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] bg-emerald-100 text-emerald-800">Realizada</span>';
        } else if (c.status === 'cancelada') {
          statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] bg-stone-100 text-stone-500">Cancelada</span>';
        }

        return `
          <tr class="hover:bg-stone-50 dark:hover:bg-darkcard/50 transition-colors">
            <td class="py-3 px-4 text-stone-900 dark:text-stone-100 font-semibold">
              ${formatDateIsoToBr(c.inicio)}<br/>
              <span class="text-stone-500 font-normal text-[11px]">${formatTimeIso(c.inicio)} - ${formatTimeIso(c.fim)}</span>
            </td>
            <td class="py-3 px-4 font-medium text-stone-800 dark:text-stone-200">${cliente ? cliente.nomeCompleto : 'Cliente Excluído'}</td>
            <td class="py-3 px-4 text-stone-700 dark:text-stone-300">${advogado ? advogado.nomeCompleto : 'Advogado'}</td>
            <td class="py-3 px-4 text-stone-600 dark:text-stone-400">${servico ? servico.descricao : 'Serviço'}</td>
            <td class="py-3 px-4 font-serif font-bold text-brand-800 dark:text-gold-400">${formatMoney(c.valorHonorario)}</td>
            <td class="py-3 px-4">${statusBadge}</td>
            <td class="py-3 px-4 text-right space-x-1">
              ${c.status === 'agendada' ? `
                <button onclick="concluirConsulta('${c.id}')" class="text-emerald-600 hover:text-emerald-800" title="Concluir">
                  <span class="material-symbols-outlined text-[18px]">check_circle</span>
                </button>
                <button onclick="cancelarConsulta('${c.id}')" class="text-red-500 hover:text-red-700" title="Cancelar">
                  <span class="material-symbols-outlined text-[18px]">cancel</span>
                </button>
              ` : ''}
            </td>
          </tr>
        `;
      }).join('');
    }

    // 2. Agenda Diária por Advogado (F4)
    const selectAdv = document.getElementById('select-agenda-advogado');
    const inputData = document.getElementById('input-agenda-data');

    // Preenche select de advogados
    selectAdv.innerHTML = advogados.map(a => `<option value="${a.id}">${a.nomeCompleto}</option>`).join('');

    // Seta data atual se vazio
    if (!inputData.value) {
      inputData.value = new Date().toISOString().split('T')[0];
    }

    renderGradeHorarios();
  }

  document.getElementById('select-agenda-advogado')?.addEventListener('change', renderGradeHorarios);
  document.getElementById('input-agenda-data')?.addEventListener('change', renderGradeHorarios);

  function renderGradeHorarios() {
    const advId = document.getElementById('select-agenda-advogado').value;
    const dataYmd = document.getElementById('input-agenda-data').value;
    const container = document.getElementById('grade-horarios-container');

    if (!advId || !dataYmd) return;

    const adv = db.getAdvogados().find(a => a.id === advId);
    if (!adv) return;

    const consultasAdv = db.getConsultas().filter(c =>
      c.advogadoId === advId &&
      c.inicio.startsWith(dataYmd) &&
      c.status !== 'cancelada'
    );

    // Gerar horários de 30 em 30 min das 08h às 18h
    const slots = [];
    for (let h = 8; h < 18; h++) {
      for (let m = 0; m < 60; m += 30) {
        const timeStr = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        const slotIso = `${dataYmd}T${timeStr}:00`;
        const slotTimeMs = new Date(slotIso).getTime();

        // Checar expediente do advogado
        const minAtual = h * 60 + m;
        const [hmI, mmI] = (adv.horarioInicioManha || '09:00').split(':').map(Number);
        const [hmF, mmF] = (adv.horarioFimManha || '12:00').split(':').map(Number);
        const [htI, mtI] = (adv.horarioInicioTarde || '14:00').split(':').map(Number);
        const [htF, mtF] = (adv.horarioFimTarde || '18:00').split(':').map(Number);

        const emExpediente = (minAtual >= hmI * 60 + mmI && minAtual < hmF * 60 + mmF) ||
                             (minAtual >= htI * 60 + mtI && minAtual < htF * 60 + mtF);

        // Checar se ocupado
        const ocupado = consultasAdv.find(c => {
          const ini = new Date(c.inicio).getTime();
          const fim = new Date(c.fim).getTime();
          return slotTimeMs >= ini && slotTimeMs < fim;
        });

        slots.push({ timeStr, emExpediente, ocupado });
      }
    }

    container.innerHTML = slots.map(s => {
      if (!s.emExpediente) {
        return `
          <div class="p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-darkcard/30 text-stone-400 text-center text-xs">
            <span class="font-semibold block">${s.timeStr}</span>
            <span class="text-[10px]">Indisponível</span>
          </div>
        `;
      }

      if (s.ocupado) {
        const cli = db.getClientes().find(c => c.id === s.ocupado.clienteId);
        return `
          <div class="p-2.5 rounded-lg border border-red-300 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 text-center text-xs shadow-xs" title="O advogado já possui consulta nesse horário.">
            <span class="font-bold block">${s.timeStr}</span>
            <span class="text-[10px] block truncate font-medium">${cli ? cli.nomeCompleto : 'Ocupado'}</span>
          </div>
        `;
      }

      return `
        <button onclick="agendarSlotDirect('${advId}', '${dataYmd}', '${s.timeStr}')" class="p-2.5 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-center text-xs transition-colors cursor-pointer">
          <span class="font-bold block">${s.timeStr}</span>
          <span class="text-[10px] block font-semibold">+ Livre</span>
        </button>
      `;
    }).join('');
  }

  window.concluirConsulta = function(id) {
    db.concluirConsulta(id);
    showToast('Consulta concluída com sucesso!');
    renderConsultas();
    renderDashboard();
  };

  window.cancelarConsulta = function(id) {
    if (confirm('Deseja realmente cancelar esta consulta?')) {
      db.cancelarConsulta(id);
      showToast('Consulta cancelada.');
      renderConsultas();
      renderDashboard();
    }
  };

  window.agendarParaAdvogado = function(advId) {
    navegarPara('consultas');
    abrirModalConsulta(advId);
  };

  window.agendarSlotDirect = function(advId, dataYmd, horaStr) {
    abrirModalConsulta(advId, dataYmd, horaStr);
  };

  // CÁLCULO DINÂMICO EM TEMPO REAL NO FORMULÁRIO DE AGENDAMENTO (F3)
  function atualizarCalculoHonorarioForm() {
    const servicoId = document.getElementById('consulta-servico').value;
    const advogadoId = document.getElementById('consulta-advogado').value;
    const valorCausa = parseFloat(document.getElementById('consulta-valor-causa').value) || 0;

    const valorEstimado = db.calcularHonorario(servicoId, valorCausa, advogadoId);
    document.getElementById('consulta-calculo-estimado').textContent = formatMoney(valorEstimado);

    const srv = db.getServicos().find(s => s.id === servicoId);
    const adv = db.getAdvogados().find(a => a.id === advogadoId);

    if (srv && adv) {
      let detalhe = `Base: Valor Mínimo ${formatMoney(srv.valorMinimo)}`;
      if (srv.percentual) {
        detalhe += ` ou ${srv.percentual}% da Causa (${formatMoney((srv.percentual/100)*valorCausa)}). Foi aplicado o maior valor.`;
      }
      detalhe += ` Ajuste por nível ${adv.nivel} (+${(MULTIPLICADORES_SENIORIDADE[adv.nivel]-1)*100}%).`;
      document.getElementById('consulta-calculo-detalhe').textContent = detalhe;
    }
  }

  document.getElementById('consulta-servico')?.addEventListener('change', atualizarCalculoHonorarioForm);
  document.getElementById('consulta-advogado')?.addEventListener('change', atualizarCalculoHonorarioForm);
  document.getElementById('consulta-valor-causa')?.addEventListener('input', atualizarCalculoHonorarioForm);

  function abrirModalConsulta(advIdPref = null, dataPref = null, horaIniPref = null) {
    const clientes = db.getClientes();
    const advogados = db.getAdvogados();
    const servicos = db.getServicos();

    if (clientes.length === 0) {
      alert('Cadastre pelo menos um cliente antes de agendar uma consulta.');
      navegarPara('clientes');
      abrirModalCliente();
      return;
    }

    if (advogados.length === 0) {
      alert('Cadastre pelo menos um advogado antes de agendar uma consulta.');
      navegarPara('advogados');
      abrirModalAdvogado();
      return;
    }

    document.getElementById('consulta-id').value = '';

    // Popula dropdowns
    document.getElementById('consulta-cliente').innerHTML = clientes.map(c => `<option value="${c.id}">${c.nomeCompleto}</option>`).join('');
    document.getElementById('consulta-advogado').innerHTML = advogados.map(a => `<option value="${a.id}">${a.nomeCompleto} (${a.nivel})</option>`).join('');
    document.getElementById('consulta-servico').innerHTML = servicos.map(s => `<option value="${s.id}">${s.area} - ${s.descricao}</option>`).join('');

    if (advIdPref) {
      document.getElementById('consulta-advogado').value = advIdPref;
    }

    const hoje = dataPref || new Date().toISOString().split('T')[0];
    document.getElementById('consulta-data').value = hoje;

    const hIni = horaIniPref || '14:00';
    document.getElementById('consulta-hora-ini').value = hIni;

    // Seta hora fim + 1h por padrão
    const [hh, mm] = hIni.split(':').map(Number);
    const hFim = `${String(hh + 1).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
    document.getElementById('consulta-hora-fim').value = hFim;

    document.getElementById('consulta-valor-causa').value = '';
    document.getElementById('consulta-sala').value = 'Sala 01';
    document.getElementById('consulta-obs').value = '';

    atualizarCalculoHonorarioForm();
    modalConsulta.classList.remove('hidden');
  }

  document.getElementById('form-consulta')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const dataYmd = document.getElementById('consulta-data').value;
    const horaIni = document.getElementById('consulta-hora-ini').value;
    const horaFim = document.getElementById('consulta-hora-fim').value;

    const inicioIso = `${dataYmd}T${horaIni}:00`;
    const fimIso = `${dataYmd}T${horaFim}:00`;

    const consultaData = {
      id: document.getElementById('consulta-id').value || null,
      clienteId: document.getElementById('consulta-cliente').value,
      advogadoId: document.getElementById('consulta-advogado').value,
      servicoId: document.getElementById('consulta-servico').value,
      valorCausa: parseFloat(document.getElementById('consulta-valor-causa').value) || null,
      inicio: inicioIso,
      fim: fimIso,
      modalidade: document.getElementById('consulta-modalidade').value,
      sala: document.getElementById('consulta-sala').value.trim(),
      observacoes: document.getElementById('consulta-obs').value.trim(),
      status: 'agendada'
    };

    try {
      db.agendarConsulta(consultaData);
      modalConsulta.classList.add('hidden');
      showToast('Consulta agendada com sucesso!');
      renderConsultas();
      renderDashboard();
    } catch (err) {
      // Exibe mensagem clara em caso de conflito (F4)
      alert(err.message);
    }
  });

  // ========================================================
  // RENDER VISÃO 5: RELATÓRIOS & CHART.JS (F5)
  // ========================================================
  let chartInstance = null;

  function renderRelatorios() {
    const consultas = db.getConsultas();
    const clientes = db.getClientes();
    const advogados = db.getAdvogados();
    const servicos = db.getServicos();

    // Data de impressão
    document.getElementById('print-date').textContent = `Data: ${new Date().toLocaleDateString('pt-BR')}`;

    // 1. Relatório Consultas do Dia (F5)
    const hojeYmd = new Date().toISOString().split('T')[0];
    const consultasHoje = consultas.filter(c => c.inicio.startsWith(hojeYmd) && c.status !== 'cancelada');

    const listHoje = document.getElementById('relatorio-consultas-hoje-list');
    if (consultasHoje.length === 0) {
      listHoje.innerHTML = `<tr><td colspan="5" class="py-3 text-center text-stone-400">Nenhuma consulta agendada para hoje.</td></tr>`;
    } else {
      listHoje.innerHTML = consultasHoje.map(c => {
        const cli = clientes.find(x => x.id === c.clienteId);
        const adv = advogados.find(x => x.id === c.advogadoId);
        const srv = servicos.find(x => x.id === c.servicoId);
        return `
          <tr class="hover:bg-stone-50 dark:hover:bg-darkcard/50">
            <td class="py-2.5 px-2 font-semibold">${formatTimeIso(c.inicio)}</td>
            <td class="py-2.5 px-2 font-medium">${cli ? cli.nomeCompleto : 'Cliente'}</td>
            <td class="py-2.5 px-2">${adv ? adv.nomeCompleto : 'Advogado'}</td>
            <td class="py-2.5 px-2 text-stone-500">${srv ? srv.descricao : 'Serviço'}</td>
            <td class="py-2.5 px-2 text-right font-serif font-bold text-brand-800 dark:text-gold-400">${formatMoney(c.valorHonorario)}</td>
          </tr>
        `;
      }).join('');
    }

    // 2. Relatório Faturamento por Advogado + Gráfico (F5)
    const faturamentoAdv = advogados.map(adv => {
      const consAdv = consultas.filter(c => c.advogadoId === adv.id && c.status !== 'cancelada');
      const total = consAdv.reduce((sum, c) => sum + Number(c.valorHonorario || 0), 0);
      return {
        advogado: adv.nomeCompleto,
        nivel: adv.nivel,
        qtd: consAdv.length,
        total: total
      };
    });

    const listFat = document.getElementById('relatorio-faturamento-advogado-list');
    listFat.innerHTML = faturamentoAdv.map(f => `
      <tr class="hover:bg-stone-50 dark:hover:bg-darkcard/50">
        <td class="py-2.5 px-2 font-semibold text-stone-900 dark:text-stone-100">${f.advogado}</td>
        <td class="py-2.5 px-2 text-stone-600 dark:text-stone-400">${f.nivel}</td>
        <td class="py-2.5 px-2">${f.qtd} consultas</td>
        <td class="py-2.5 px-2 text-right font-serif font-bold text-brand-800 dark:text-gold-400">${formatMoney(f.total)}</td>
      </tr>
    `).join('');

    // Chart.js Gráfico de Faturamento
    const ctx = document.getElementById('chartFaturamento');
    if (ctx) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: faturamentoAdv.map(f => f.advogado),
          datasets: [{
            label: 'Faturamento Total (R$)',
            data: faturamentoAdv.map(f => f.total),
            backgroundColor: '#701A24',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) { return 'R$ ' + value; }
              }
            }
          }
        }
      });
    }

    // 3. Relação Geral de Clientes (F5)
    const listCliGeral = document.getElementById('relatorio-clientes-geral-list');
    listCliGeral.innerHTML = clientes.map(c => `
      <tr class="hover:bg-stone-50 dark:hover:bg-darkcard/50">
        <td class="py-2.5 px-2 font-semibold">${c.nomeCompleto}</td>
        <td class="py-2.5 px-2 text-stone-600 dark:text-stone-400">${c.cpfCnpj}</td>
        <td class="py-2.5 px-2">${c.telefone}</td>
        <td class="py-2.5 px-2 text-stone-500">${c.email}</td>
      </tr>
    `).join('');
  }

  // ========================================================
  // LAW AI (Assistente Jurídico)
  // ========================================================
  const lawaiChatBox = document.getElementById('lawai-chat-box');
  const lawaiInput = document.getElementById('lawai-input-msg');
  const lawaiBtnSend = document.getElementById('lawai-btn-send');

  function enviarMensagemLawAI() {
    const msg = lawaiInput.value.trim();
    if (!msg) return;

    // Adiciona mensagem do usuário
    lawaiChatBox.innerHTML += `
      <div class="flex items-start justify-end gap-3">
        <div class="bg-brand-800 text-white p-3 rounded-lg max-w-[80%] leading-relaxed">
          ${msg}
        </div>
      </div>
    `;

    lawaiInput.value = '';
    lawaiChatBox.scrollTop = lawaiChatBox.scrollHeight;

    // Resposta Simulada da Law AI sobre legislação brasileira
    setTimeout(() => {
      let resp = "Compreendido, doutor(a). Com base na legislação brasileira e jurisprudência dos Tribunais Superiores, recomendo verificar a adequação aos requisitos legais e prazos previstos no Código de Processo Civil / Penal.";
      const msgLower = msg.toLowerCase();

      if (msgLower.includes('estelionato') || msgLower.includes('171')) {
        resp = "<strong>Art. 171 do Código Penal (Estelionato):</strong> Obter, para si ou para outrem, vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro. <br/><strong>Pena:</strong> Reclusão, de 1 a 5 anos, e multa. Com o advento da Lei 13.964/19 (Pacote Anticrime), a ação penal tornou-se pública condicionada à representação, salvo exceções legais.";
      } else if (msgLower.includes('divórcio') || msgLower.includes('família')) {
        resp = "<strong>Direito de Família (Lei 11.441/07 & CPC):</strong> O divórcio consensual pode ser realizado por escritura pública em cartório se não houver filhos menores/incapazes e houver consenso na partilha de bens. Valor mínimo na tabela OAB: R$ 2.000,00.";
      } else if (msgLower.includes('trabalhista') || msgLower.includes('rescisão')) {
        resp = "<strong>Direito do Trabalho (CLT, art. 477):</strong> O pagamento das verbas rescisórias deve ser efetuado em até 10 dias após o término do contrato. Honorários de sucumbência variam entre 5% e 15% segundo a Reforma Trabalhista.";
      }

      lawaiChatBox.innerHTML += `
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-full bg-brand-800 text-gold-400 font-bold flex items-center justify-center shrink-0">
            AI
          </div>
          <div class="bg-stone-100 dark:bg-darkcard p-3 rounded-lg text-stone-800 dark:text-stone-200 max-w-[80%] leading-relaxed">
            ${resp}
          </div>
        </div>
      `;
      lawaiChatBox.scrollTop = lawaiChatBox.scrollHeight;
    }, 600);
  }

  lawaiBtnSend?.addEventListener('click', enviarMensagemLawAI);
  lawaiInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enviarMensagemLawAI();
  });

  // Inicializa na visão Dashboard
  renderDashboard();
});
