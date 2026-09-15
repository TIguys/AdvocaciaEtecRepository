/**
 * js/app.js - Lógica Principal da Aplicação e Controle da Interface (SPA)
 * Advocacia ETEC
 */

let chartFaturamentoInstance = null;

class App {
  static init() {
    App.bindNavigation();
    App.bindDashboardEvents();
    App.bindClienteEvents();
    App.bindAdvogadoEvents();
    App.bindAgendamentoEvents();
    App.bindRelatorioEvents();

    // Renderização inicial da tela visível (Dashboard)
    App.renderDashboard();
  }

  // --- NAVEGAÇÃO SPA ---
  static bindNavigation() {
    const navButtons = document.querySelectorAll('[data-nav]');
    const views = {
      'dashboard': document.getElementById('view-dashboard'),
      'clientes': document.getElementById('view-clientes'),
      'advogados': document.getElementById('view-advogados'),
      'agendamentos': document.getElementById('view-agendamentos'),
      'relatorios': document.getElementById('view-relatorios'),
      'ia-assistant': document.getElementById('view-ia-assistant')
    };

    const navigateTo = (targetView) => {
      Object.keys(views).forEach(key => {
        if (views[key]) {
          if (key === targetView) {
            views[key].classList.remove('hidden');
          } else {
            views[key].classList.add('hidden');
          }
        }
      });

      // Atualiza estilo dos botões da barra inferior
      navButtons.forEach(btn => {
        const viewKey = btn.getAttribute('data-nav');
        if (viewKey === targetView) {
          btn.className = 'nav-bottom-item flex flex-col items-center justify-center bg-primary-container text-white rounded-xl px-3 py-1.5 transition font-semibold';
        } else {
          btn.className = 'nav-bottom-item flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary px-3 py-1.5 rounded-xl transition';
        }
      });

      // Triggers específicos por visão
      if (targetView === 'dashboard') App.renderDashboard();
      if (targetView === 'clientes') App.renderClientes();
      if (targetView === 'advogados') App.renderAdvogados();
      if (targetView === 'agendamentos') App.renderAgendamentosForm();
      if (targetView === 'relatorios') App.renderRelatorios();

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-nav');
        navigateTo(target);
      });
    });

    // Botoes do Header / Logo
    document.getElementById('brand-logo-btn')?.addEventListener('click', () => navigateTo('dashboard'));
    document.getElementById('nav-ia-btn')?.addEventListener('click', () => navigateTo('ia-assistant'));
  }

  // --- TOAST NOTIFICATION HELPERS ---
  static showToast(title, desc, isError = false) {
    const toast = document.getElementById('toast-notif');
    const icon = document.getElementById('toast-icon');
    const titleEl = document.getElementById('toast-title');
    const descEl = document.getElementById('toast-desc');

    if (!toast) return;

    titleEl.textContent = title;
    descEl.textContent = desc;

    if (isError) {
      icon.textContent = 'error';
      icon.className = 'material-symbols-outlined text-rose-600';
    } else {
      icon.textContent = 'check_circle';
      icon.className = 'material-symbols-outlined text-emerald-600';
    }

    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 4000);
  }

  // =========================================================================
  // F6 — DASHBOARD DA SECRETÁRIA
  // =========================================================================
  static bindDashboardEvents() {
    document.getElementById('dash-btn-nova-consulta')?.addEventListener('click', () => {
      document.querySelector('[data-nav="agendamentos"]')?.click();
    });

    document.getElementById('dash-btn-novo-cliente')?.addEventListener('click', () => {
      document.querySelector('[data-nav="clientes"]')?.click();
      document.getElementById('btn-abrir-modal-cliente')?.click();
    });

    document.getElementById('dashboard-search-input')?.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (!term) {
        App.renderDashboard();
        return;
      }
      // Filtra consultas de hoje/próximas por termo de busca
      App.renderDashboard(term);
    });
  }

  static renderDashboard(filterTerm = '') {
    const hojeIsoPrefix = new Date().toISOString().split('T')[0];
    const consultas = DB.getConsultas().filter(c => c.status !== 'cancelada');
    const advogados = DB.getAdvogados().filter(a => a.ativo);
    const clientes = DB.getClientes();

    // 1. Total de consultas para hoje (F6)
    const consultasHoje = consultas.filter(c => c.inicio.startsWith(hojeIsoPrefix));

    const badgeHoje = document.getElementById('dash-hoje-data-str');
    if (badgeHoje) {
      const d = new Date();
      badgeHoje.textContent = `Hoje, ${d.getDate()} de ${d.toLocaleDateString('pt-BR', { month: 'short' })} • ${consultasHoje.length} agendadas`;
    }

    // Renderiza Consultas de Hoje
    const containerHoje = document.getElementById('dash-consultas-hoje-list');
    if (containerHoje) {
      let list = consultasHoje;
      if (filterTerm) {
        list = list.filter(c => {
          const cli = DB.getClienteById(c.cliente_id)?.nome_completo || '';
          const adv = DB.getAdvogadoById(c.advogado_id)?.nome_completo || '';
          return cli.toLowerCase().includes(filterTerm) || adv.toLowerCase().includes(filterTerm);
        });
      }

      if (list.length === 0) {
        containerHoje.innerHTML = `
          <div class="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center text-on-surface-variant text-xs font-body">
            Nenhuma consulta agendada para hoje.
          </div>
        `;
      } else {
        containerHoje.innerHTML = list.map(c => {
          const cli = DB.getClienteById(c.cliente_id) || { nome_completo: 'Cliente não encontrado' };
          const adv = DB.getAdvogadoById(c.advogado_id) || { nome_completo: 'Advogado não encontrado' };
          const srv = DB.getServicoById(c.servico_id) || { descricao: 'Atendimento' };

          const horaIni = new Date(c.inicio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
          const horaFim = new Date(c.fim).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

          return `
            <article class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/30 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div class="absolute top-0 left-0 w-1.5 h-full bg-primary-container"></div>
              <div class="flex items-start gap-3.5 pl-2">
                <div class="flex flex-col items-center justify-center bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/20 shrink-0 min-w-[75px]">
                  <span class="font-label text-base font-bold text-primary-container">${horaIni}</span>
                  <span class="font-label text-[10px] text-on-surface-variant uppercase">${horaFim}</span>
                </div>
                <div class="space-y-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-headline text-base font-semibold text-on-surface">${adv.nome_completo}</span>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-label font-bold bg-secondary-container/30 text-primary border border-secondary-container">
                      Confirmada
                    </span>
                  </div>
                  <p class="font-body text-xs text-on-surface">
                    <strong class="text-primary">${srv.descricao}:</strong> ${OABCalculator.formatarMoeda(c.valor_honorario)}
                  </p>
                  <p class="font-label text-xs text-on-surface-variant">
                    Cliente: <strong>${cli.nome_completo}</strong> (${cli.tipo || 'PF'})
                  </p>
                </div>
              </div>
            </article>
          `;
        }).join('');
      }
    }

    // 2. Cinco Próximas Consultas (F6)
    const agora = new Date().getTime();
    const proximasConsultas = consultas
      .filter(c => new Date(c.inicio).getTime() >= agora)
      .sort((a, b) => new Date(a.inicio).getTime() - new Date(b.inicio).getTime())
      .slice(0, 5);

    const containerProximas = document.getElementById('dash-proximas-consultas-list');
    if (containerProximas) {
      if (proximasConsultas.length === 0) {
        containerProximas.innerHTML = `
          <div class="p-4 text-center text-on-surface-variant text-xs font-body">
            Nenhuma próxima consulta cadastrada.
          </div>
        `;
      } else {
        containerProximas.innerHTML = proximasConsultas.map(c => {
          const cli = DB.getClienteById(c.cliente_id) || { nome_completo: 'Cliente' };
          const adv = DB.getAdvogadoById(c.advogado_id) || { nome_completo: 'Advogado' };

          const dt = new Date(c.inicio);
          const dataStr = dt.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
          const horaStr = dt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

          return `
            <div class="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-container-low/60 transition">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-surface-container rounded-lg text-primary shrink-0">
                  <span class="material-symbols-outlined text-lg">event</span>
                </div>
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-label text-xs font-bold text-primary-container">${dataStr}, ${horaStr}</span>
                    <span class="text-on-surface-variant text-xs">•</span>
                    <span class="font-label text-xs font-semibold text-on-surface">${adv.nome_completo}</span>
                  </div>
                  <p class="font-body text-xs text-on-surface mt-0.5">
                    Cliente: <strong>${cli.nome_completo}</strong> • Honorário: ${OABCalculator.formatarMoeda(c.valor_honorario)}
                  </p>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // 3. Advogados com Agenda Livre no Momento (F6)
    const containerAdvLivres = document.getElementById('dash-advogados-livres-container');
    const badgeAdvLivresCount = document.getElementById('dash-advogados-livres-count');

    if (containerAdvLivres) {
      // Considera livre se não tem consulta ativa no horário atual
      const advogadosLivres = advogados.filter(adv => {
        const cAtiva = consultas.find(c => {
          if (c.advogado_id !== adv.id) return false;
          const ini = new Date(c.inicio).getTime();
          const fim = new Date(c.fim).getTime();
          return agora >= ini && agora <= fim;
        });
        return !cAtiva;
      });

      if (badgeAdvLivresCount) {
        badgeAdvLivresCount.textContent = `${advogadosLivres.length} Livre(s)`;
      }

      containerAdvLivres.innerHTML = advogadosLivres.slice(0, 3).map(adv => `
        <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-xs">
                  ${adv.nome_completo.split(' ').map(n=>n[0]).slice(0,2).join('')}
                </div>
                <div>
                  <h3 class="font-label text-sm font-bold text-on-surface">${adv.nome_completo}</h3>
                  <p class="font-label text-xs text-on-surface-variant">OAB ${adv.oab} • ${adv.nivel}</p>
                </div>
              </div>
              <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-label font-bold bg-emerald-100 text-emerald-800">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Livre
              </span>
            </div>
            <div class="mt-3 pt-2 border-t border-surface-container text-xs font-body text-on-surface-variant">
              <span>Especialidade: <strong>${adv.area_atuacao || 'Geral'}</strong></span>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 4. Métricas Gerais
    document.getElementById('dash-metric-total-clientes').textContent = clientes.length;
    document.getElementById('dash-metric-total-advogados').textContent = advogados.length;
    document.getElementById('dash-metric-total-consultas').textContent = consultas.length;

    const faturamentoTotal = consultas.reduce((acc, c) => acc + Number(c.valor_honorario || 0), 0);
    document.getElementById('dash-metric-faturamento').textContent = OABCalculator.formatarMoeda(faturamentoTotal);
  }

  // =========================================================================
  // F1 — CADASTRO E LISTA DE CLIENTES
  // =========================================================================
  static bindClienteEvents() {
    const modal = document.getElementById('modal-cliente');
    const form = document.getElementById('form-cliente');
    const btnAbrir = document.getElementById('btn-abrir-modal-cliente');
    const btnFechar = document.getElementById('modal-cliente-fechar');
    const btnCancelar = document.getElementById('modal-cliente-cancelar');

    btnAbrir?.addEventListener('click', () => {
      form.reset();
      document.getElementById('form-cliente-id').value = '';
      document.getElementById('modal-cliente-titulo').textContent = 'Cadastrar Novo Cliente';
      modal.classList.remove('hidden');
    });

    const fecharModal = () => modal.classList.add('hidden');
    btnFechar?.addEventListener('click', fecharModal);
    btnCancelar?.addEventListener('click', fecharModal);

    // Ajusta placeholder do documento ao trocar PF/PJ
    const radioPF = document.querySelector('input[name="tipo_pessoa"][value="PF"]');
    const radioPJ = document.querySelector('input[name="tipo_pessoa"][value="PJ"]');
    const lblDoc = document.getElementById('lbl-cliente-doc');
    const inputDoc = document.getElementById('form-cliente-doc');

    const updateTipoDoc = () => {
      if (radioPJ?.checked) {
        lblDoc.textContent = 'CNPJ *';
        inputDoc.placeholder = '00.000.000/0001-00';
      } else {
        lblDoc.textContent = 'CPF *';
        inputDoc.placeholder = '000.000.000-00';
      }
    };
    radioPF?.addEventListener('change', updateTipoDoc);
    radioPJ?.addEventListener('change', updateTipoDoc);

    // Form Submit
    form?.addEventListener('submit', (e) => {
      e.preventDefault();

      const id = document.getElementById('form-cliente-id').value;
      const nome = document.getElementById('form-cliente-nome').value.trim();
      const doc = document.getElementById('form-cliente-doc').value.trim();
      const tel = document.getElementById('form-cliente-tel').value.trim();
      const email = document.getElementById('form-cliente-email').value.trim();
      const endereco = document.getElementById('form-cliente-endereco').value.trim();
      const tipo = document.querySelector('input[name="tipo_pessoa"]:checked')?.value || 'PF';

      if (!nome || !doc || !tel || !email) {
        App.showToast('Campos Obrigatórios', 'Por favor preencha Nome, CPF/CNPJ, Telefone e E-mail.', true);
        return;
      }

      try {
        DB.saveCliente({
          id: id || undefined,
          nome_completo: nome,
          cpf_cnpj: doc,
          tipo: tipo,
          telefone: tel,
          email: email,
          endereco: endereco
        });

        App.showToast('Cliente Salvo', `O cliente "${nome}" foi cadastrado com sucesso.`);
        fecharModal();
        App.renderClientes();
        App.renderDashboard();
      } catch (err) {
        App.showToast('Erro ao Salvar', err.message, true);
      }
    });

    // Busca e Filtros
    document.getElementById('input-busca-cliente')?.addEventListener('input', () => App.renderClientes());
    document.getElementById('select-filtro-tipo-cliente')?.addEventListener('change', () => App.renderClientes());
    document.getElementById('btn-limpar-busca-cliente')?.addEventListener('click', () => {
      document.getElementById('input-busca-cliente').value = '';
      document.getElementById('select-filtro-tipo-cliente').value = '';
      App.renderClientes();
    });
  }

  static renderClientes() {
    const containerBody = document.getElementById('tabela-clientes-body');
    const contagemTxt = document.getElementById('contagem-clientes-txt');
    if (!containerBody) return;

    let clientes = DB.getClientes();
    const termo = (document.getElementById('input-busca-cliente')?.value || '').toLowerCase().trim();
    const tipoFiltro = document.getElementById('select-filtro-tipo-cliente')?.value || '';

    if (termo) {
      clientes = clientes.filter(c =>
        c.nome_completo.toLowerCase().includes(termo) ||
        c.cpf_cnpj.toLowerCase().includes(termo) ||
        c.email.toLowerCase().includes(termo) ||
        c.telefone.toLowerCase().includes(termo)
      );
    }

    if (tipoFiltro) {
      clientes = clientes.filter(c => c.tipo === tipoFiltro);
    }

    if (contagemTxt) {
      contagemTxt.textContent = `${clientes.length} cliente(s) encontrado(s)`;
    }

    if (clientes.length === 0) {
      containerBody.innerHTML = `
        <tr>
          <td colspan="5" class="py-8 text-center text-on-surface-variant font-body text-xs">
            Nenhum cliente cadastrado ou encontrado com os filtros aplicados.
          </td>
        </tr>
      `;
      return;
    }

    const consultas = DB.getConsultas();

    containerBody.innerHTML = clientes.map(c => {
      const totalConsultas = consultas.filter(cons => cons.cliente_id === c.id).length;

      return `
        <tr class="hover:bg-surface transition">
          <td class="py-3 px-4">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-primary-container text-white font-label font-bold text-xs flex items-center justify-center">
                ${c.tipo === 'PJ' ? 'PJ' : 'PF'}
              </div>
              <div class="flex flex-col">
                <span class="font-label text-sm font-bold text-on-surface">${c.nome_completo}</span>
                <span class="font-label text-xs text-on-surface-variant">${c.cpf_cnpj}</span>
              </div>
            </div>
          </td>
          <td class="py-3 px-4 font-body text-xs text-on-surface">
            <div>${c.email}</div>
            <div class="text-emerald-700 font-medium">${c.telefone}</div>
          </td>
          <td class="py-3 px-4 font-body text-xs text-on-surface-variant">
            ${c.endereco || '<span class="text-outline">Não informado</span>'}
          </td>
          <td class="py-3 px-4 text-center">
            <span class="px-2.5 py-1 rounded-full bg-surface-container font-label text-xs font-bold text-primary">
              ${totalConsultas} consulta(s)
            </span>
          </td>
          <td class="py-3 px-4 text-right">
            <div class="inline-flex items-center gap-1">
              <button onclick="App.editarCliente('${c.id}')" class="p-1.5 text-on-surface-variant hover:text-primary rounded-lg" title="Editar">
                <span class="material-symbols-outlined text-lg">edit</span>
              </button>
              <button onclick="App.excluirCliente('${c.id}')" class="p-1.5 text-on-surface-variant hover:text-rose-600 rounded-lg" title="Excluir">
                <span class="material-symbols-outlined text-lg">delete</span>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  static editarCliente(id) {
    const c = DB.getClienteById(id);
    if (!c) return;

    document.getElementById('form-cliente-id').value = c.id;
    document.getElementById('form-cliente-nome').value = c.nome_completo;
    document.getElementById('form-cliente-doc').value = c.cpf_cnpj;
    document.getElementById('form-cliente-tel').value = c.telefone;
    document.getElementById('form-cliente-email').value = c.email;
    document.getElementById('form-cliente-endereco').value = c.endereco || '';

    const radioPF = document.querySelector('input[name="tipo_pessoa"][value="PF"]');
    const radioPJ = document.querySelector('input[name="tipo_pessoa"][value="PJ"]');
    if (c.tipo === 'PJ' && radioPJ) radioPJ.checked = true;
    if (c.tipo === 'PF' && radioPF) radioPF.checked = true;

    document.getElementById('modal-cliente-titulo').textContent = 'Editar Cliente';
    document.getElementById('modal-cliente').classList.remove('hidden');
  }

  static excluirCliente(id) {
    const c = DB.getClienteById(id);
    if (!c) return;

    if (confirm(`Deseja realmente excluir o cadastro do cliente "${c.nome_completo}"?`)) {
      DB.deleteCliente(id);
      App.showToast('Cliente Removido', `O cadastro de "${c.nome_completo}" foi excluído.`);
      App.renderClientes();
      App.renderDashboard();
    }
  }

  // =========================================================================
  // F2 — CADASTRO E GESTÃO DE ADVOGADOS
  // =========================================================================
  static bindAdvogadoEvents() {
    const modal = document.getElementById('modal-advogado');
    const form = document.getElementById('form-advogado');
    const btnAbrir = document.getElementById('btn-abrir-modal-advogado');
    const btnFechar = document.getElementById('modal-advogado-fechar');
    const btnCancelar = document.getElementById('modal-advogado-cancelar');

    btnAbrir?.addEventListener('click', () => {
      form.reset();
      document.getElementById('form-advogado-id').value = '';
      document.getElementById('modal-advogado-titulo').textContent = 'Cadastrar Advogado';
      modal.classList.remove('hidden');
    });

    const fecharModal = () => modal.classList.add('hidden');
    btnFechar?.addEventListener('click', fecharModal);
    btnCancelar?.addEventListener('click', fecharModal);

    form?.addEventListener('submit', (e) => {
      e.preventDefault();

      const id = document.getElementById('form-advogado-id').value;
      const nome = document.getElementById('form-advogado-nome').value.trim();
      const oab = document.getElementById('form-advogado-oab').value.trim();
      const nivel = document.getElementById('form-advogado-nivel').value;
      const area = document.getElementById('form-advogado-area').value.trim();
      const hmIni = document.getElementById('form-advogado-hm-ini').value;
      const hmFim = document.getElementById('form-advogado-hm-fim').value;
      const htIni = document.getElementById('form-advogado-ht-ini').value;
      const htFim = document.getElementById('form-advogado-ht-fim').value;

      if (!nome || !oab || !nivel) {
        App.showToast('Campos Obrigatórios', 'Preencha Nome, OAB e Nível de Senioridade.', true);
        return;
      }

      try {
        DB.saveAdvogado({
          id: id || undefined,
          nome_completo: nome,
          oab: oab,
          nivel: nivel,
          area_atuacao: area,
          horario_inicio_manha: hmIni,
          horario_fim_manha: hmFim,
          horario_inicio_tarde: htIni,
          horario_fim_tarde: htFim,
          ativo: true
        });

        App.showToast('Advogado Salvo', `Dr(a). "${nome}" cadastrado com sucesso.`);
        fecharModal();
        App.renderAdvogados();
        App.renderDashboard();
      } catch (err) {
        App.showToast('Erro OAB Duplicada', err.message, true);
      }
    });

    document.getElementById('input-busca-advogado')?.addEventListener('input', () => App.renderAdvogados());
    document.getElementById('select-filtro-nivel-advogado')?.addEventListener('change', () => App.renderAdvogados());
  }

  static renderAdvogados() {
    const container = document.getElementById('grid-advogados-container');
    if (!container) return;

    let advogados = DB.getAdvogados();
    const termo = (document.getElementById('input-busca-advogado')?.value || '').toLowerCase().trim();
    const nivelFiltro = document.getElementById('select-filtro-nivel-advogado')?.value || '';

    if (termo) {
      advogados = advogados.filter(a =>
        a.nome_completo.toLowerCase().includes(termo) ||
        a.oab.toLowerCase().includes(termo) ||
        (a.area_atuacao || '').toLowerCase().includes(termo)
      );
    }

    if (nivelFiltro) {
      advogados = advogados.filter(a => a.nivel === nivelFiltro);
    }

    if (advogados.length === 0) {
      container.innerHTML = `
        <div class="col-span-full p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/30 text-center text-on-surface-variant font-body text-xs">
          Nenhum advogado encontrado com os filtros selecionados.
        </div>
      `;
      return;
    }

    const margensMap = {
      'Junior': '1.0x (Base OAB)',
      'Pleno': '1.1x (+10%)',
      'Senior': '1.25x (+25%)',
      'Especialista': '1.4x (+40%)'
    };

    container.innerHTML = advogados.map(a => `
      <div class="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-full bg-primary-container text-white font-label font-bold text-sm flex items-center justify-center">
                ${a.nome_completo.split(' ').map(n=>n[0]).slice(0,2).join('')}
              </div>
              <div>
                <h3 class="font-label text-base font-bold text-on-surface">${a.nome_completo}</h3>
                <p class="font-label text-xs text-primary font-semibold">OAB ${a.oab}</p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-xs font-label font-bold bg-secondary-container text-primary">
              ${a.nivel}
            </span>
          </div>

          <div class="mt-4 pt-3 border-t border-surface-container space-y-1.5 text-xs font-body">
            <div class="flex justify-between">
              <span class="text-on-surface-variant">Especialidade:</span>
              <span class="font-medium text-on-surface">${a.area_atuacao || 'Geral'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-on-surface-variant">Margem Senioridade:</span>
              <span class="font-medium text-emerald-700">${margensMap[a.nivel] || '1.0x'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-on-surface-variant">Horário Manhã:</span>
              <span class="font-medium text-on-surface">${a.horario_inicio_manha || '09:00'} às ${a.horario_fim_manha || '12:00'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-on-surface-variant">Horário Tarde:</span>
              <span class="font-medium text-on-surface">${a.horario_inicio_tarde || '14:00'} às ${a.horario_fim_tarde || '18:00'}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 pt-2 border-t border-surface-container">
          <button onclick="App.editarAdvogado('${a.id}')" class="flex-1 py-1.5 px-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-lg text-xs font-label font-semibold transition">
            Editar
          </button>
          <button onclick="App.excluirAdvogado('${a.id}')" class="py-1.5 px-3 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg text-xs font-label font-semibold transition">
            Excluir
          </button>
        </div>
      </div>
    `).join('');
  }

  static editarAdvogado(id) {
    const a = DB.getAdvogadoById(id);
    if (!a) return;

    document.getElementById('form-advogado-id').value = a.id;
    document.getElementById('form-advogado-nome').value = a.nome_completo;
    document.getElementById('form-advogado-oab').value = a.oab;
    document.getElementById('form-advogado-nivel').value = a.nivel;
    document.getElementById('form-advogado-area').value = a.area_atuacao || '';
    document.getElementById('form-advogado-hm-ini').value = a.horario_inicio_manha || '09:00';
    document.getElementById('form-advogado-hm-fim').value = a.horario_fim_manha || '12:00';
    document.getElementById('form-advogado-ht-ini').value = a.horario_inicio_tarde || '14:00';
    document.getElementById('form-advogado-ht-fim').value = a.horario_fim_tarde || '18:00';

    document.getElementById('modal-advogado-titulo').textContent = 'Editar Advogado';
    document.getElementById('modal-advogado').classList.remove('hidden');
  }

  static excluirAdvogado(id) {
    const a = DB.getAdvogadoById(id);
    if (!a) return;

    if (confirm(`Deseja realmente remover o cadastro do advogado "${a.nome_completo}"?`)) {
      DB.deleteAdvogado(id);
      App.showToast('Advogado Removido', `O cadastro de "${a.nome_completo}" foi excluído.`);
      App.renderAdvogados();
      App.renderDashboard();
    }
  }

  // =========================================================================
  // F3 & F4 — AGENDAMENTOS, SIMULADOR OAB E PAUTA DIÁRIA
  // =========================================================================
  static bindAgendamentoEvents() {
    // Selects e Inputs do Formulário
    const selectCliente = document.getElementById('agend-select-cliente');
    const selectAdvogado = document.getElementById('agend-select-advogado');
    const selectServico = document.getElementById('agend-select-servico');
    const inputValorCausa = document.getElementById('agend-input-valor-causa');
    const inputData = document.getElementById('agend-input-data');
    const inputHora = document.getElementById('agend-input-hora-inicio');
    const btnConfirmar = document.getElementById('btn-confirmar-agendamento');

    // Preenche data padrão para hoje e hora padrão para próximo slot
    if (inputData) {
      inputData.value = new Date().toISOString().split('T')[0];
    }
    if (inputHora) {
      inputHora.value = '10:00';
    }

    // Eventos para recálculo dinâmico do simulador OAB
    const triggerRecalc = () => App.atualizarCalculoOABSimulador();
    selectAdvogado?.addEventListener('change', () => {
      const adv = DB.getAdvogadoById(selectAdvogado.value);
      const infoStr = document.getElementById('agend-advogado-info-str');
      if (adv && infoStr) {
        infoStr.textContent = `Nível: ${adv.nivel} • Horários: ${adv.horario_inicio_manha}-${adv.horario_fim_manha} e ${adv.horario_inicio_tarde}-${adv.horario_fim_tarde}`;
      } else if (infoStr) {
        infoStr.textContent = '';
      }
      triggerRecalc();
    });

    selectServico?.addEventListener('change', () => {
      const srv = DB.getServicoById(selectServico.value);
      const descStr = document.getElementById('agend-servico-desc-str');
      if (srv && descStr) {
        descStr.textContent = `Mínimo: ${OABCalculator.formatarMoeda(srv.valor_minimo)} ${srv.percentual ? ' | Percentual: ' + srv.percentual + '%' : ''}`;
      } else if (descStr) {
        descStr.textContent = '';
      }
      triggerRecalc();
    });

    inputValorCausa?.addEventListener('input', triggerRecalc);

    // Confirmar Agendamento Submit
    btnConfirmar?.addEventListener('click', () => {
      const clienteId = selectCliente?.value;
      const advogadoId = selectAdvogado?.value;
      const servicoId = selectServico?.value;
      const valorCausa = parseFloat(inputValorCausa?.value || '0');
      const dataVal = inputData?.value;
      const horaVal = inputHora?.value;
      const duracaoMin = parseInt(document.getElementById('agend-select-duracao')?.value || '60', 10);
      const obsVal = document.getElementById('agend-textarea-obs')?.value.trim() || '';

      if (!clienteId || !advogadoId || !servicoId || !dataVal || !horaVal) {
        App.showToast('Campos Incompletos', 'Selecione Cliente, Advogado, Serviço OAB, Data e Horário.', true);
        return;
      }

      // Calcula datas ISO
      const dtInicio = new Date(`${dataVal}T${horaVal}:00`);
      const dtFim = new Date(dtInicio.getTime() + duracaoMin * 60 * 1000);

      const servico = DB.getServicoById(servicoId);
      const advogado = DB.getAdvogadoById(advogadoId);

      const calcRes = OABCalculator.calcular({
        servico: servico,
        valorCausa: valorCausa,
        nivelAdvogado: advogado?.nivel || 'Junior'
      });

      try {
        DB.saveConsulta({
          cliente_id: clienteId,
          advogado_id: advogadoId,
          servico_id: servicoId,
          valor_causa: valorCausa,
          valor_honorario: calcRes.valorFinal,
          inicio: dtInicio.toISOString(),
          fim: dtFim.toISOString(),
          observacoes: obsVal,
          status: 'agendada'
        });

        App.showToast('Consulta Agendada', `Consulta confirmada para ${dtInicio.toLocaleDateString('pt-BR')} às ${horaVal}. Honorário: ${OABCalculator.formatarMoeda(calcRes.valorFinal)}`);

        // Limpa formulário e atualiza pauta
        document.getElementById('agend-textarea-obs').value = '';
        App.renderDashboard();
        App.renderPautaDiariaGrid();
      } catch (err) {
        App.showToast('Conflito de Agenda', err.message, true);
      }
    });

    // Toggle Modo Pauta
    const btnTogglePauta = document.getElementById('btn-toggle-modo-pauta');
    const pautaBox = document.getElementById('pauta-diaria-box');
    const lblPauta = document.getElementById('lbl-modo-pauta');

    btnTogglePauta?.addEventListener('click', () => {
      if (pautaBox.classList.contains('hidden')) {
        pautaBox.classList.remove('hidden');
        lblPauta.textContent = 'Ocultar Agenda Diária';
        App.renderPautaDiariaGrid();
      } else {
        pautaBox.classList.add('hidden');
        lblPauta.textContent = 'Ver Agenda Diária do Advogado';
      }
    });

    document.getElementById('pauta-select-advogado')?.addEventListener('change', () => App.renderPautaDiariaGrid());
    document.getElementById('pauta-input-data')?.addEventListener('change', () => App.renderPautaDiariaGrid());
  }

  static renderAgendamentosForm() {
    const selectCliente = document.getElementById('agend-select-cliente');
    const selectAdvogado = document.getElementById('agend-select-advogado');
    const selectServico = document.getElementById('agend-select-servico');
    const pautaSelectAdv = document.getElementById('pauta-select-advogado');
    const pautaInputData = document.getElementById('pauta-input-data');

    const clientes = DB.getClientes();
    const advogados = DB.getAdvogados().filter(a => a.ativo);
    const servicos = DB.getServicosOAB().filter(s => s.ativo);

    if (selectCliente) {
      selectCliente.innerHTML = '<option value="">-- Selecione um Cliente --</option>' +
        clientes.map(c => `<option value="${c.id}">${c.nome_completo} (${c.cpf_cnpj})</option>`).join('');
    }

    if (selectAdvogado) {
      selectAdvogado.innerHTML = '<option value="">-- Selecione um Advogado --</option>' +
        advogados.map(a => `<option value="${a.id}">${a.nome_completo} - OAB ${a.oab} (${a.nivel})</option>`).join('');
    }

    if (pautaSelectAdv) {
      pautaSelectAdv.innerHTML = advogados.map(a => `<option value="${a.id}">${a.nome_completo} (OAB ${a.oab})</option>`).join('');
    }

    if (pautaInputData && !pautaInputData.value) {
      pautaInputData.value = new Date().toISOString().split('T')[0];
    }

    if (selectServico) {
      selectServico.innerHTML = '<option value="">-- Selecione o Serviço OAB --</option>' +
        servicos.map(s => `<option value="${s.id}">${s.area_direito} - ${s.descricao}</option>`).join('');
    }

    App.atualizarCalculoOABSimulador();
  }

  static atualizarCalculoOABSimulador() {
    const servicoId = document.getElementById('agend-select-servico')?.value;
    const advogadoId = document.getElementById('agend-select-advogado')?.value;
    const valorCausa = parseFloat(document.getElementById('agend-input-valor-causa')?.value || '0');

    const servico = DB.getServicoById(servicoId);
    const advogado = DB.getAdvogadoById(advogadoId);

    const res = OABCalculator.calcular({
      servico: servico,
      valorCausa: valorCausa,
      nivelAdvogado: advogado?.nivel || 'Junior'
    });

    document.getElementById('oab-calc-minimo').textContent = OABCalculator.formatarMoeda(res.valorMinimo);
    document.getElementById('oab-calc-percentual-str').textContent = servico?.percentual ? `${servico.percentual}% (${OABCalculator.formatarMoeda(res.valorPercentual)})` : 'N/A';
    document.getElementById('oab-calc-base').textContent = OABCalculator.formatarMoeda(res.valorBase);
    document.getElementById('oab-calc-senioridade-str').textContent = `${advogado?.nivel || 'Júnior'} (${res.multiplicador}x)`;
    document.getElementById('oab-calc-total-final').textContent = OABCalculator.formatarMoeda(res.valorFinal);
  }

  // Pauta Diária de Slots (F4 / Tela 5)
  static renderPautaDiariaGrid() {
    const container = document.getElementById('pauta-horarios-grid');
    const advId = document.getElementById('pauta-select-advogado')?.value;
    const dataVal = document.getElementById('pauta-input-data')?.value;

    if (!container || !advId || !dataVal) return;

    const adv = DB.getAdvogadoById(advId);
    if (!adv) return;

    const consultas = DB.getConsultas().filter(c => c.status !== 'cancelada' && c.advogado_id === advId);

    // Gerar slots das 08:00 às 18:00 de 30 em 30 min
    const slots = [];
    let cur = new Date(`${dataVal}T08:00:00`);
    const endOfDay = new Date(`${dataVal}T18:00:00`);

    while (cur < endOfDay) {
      const slotIni = new Date(cur);
      const slotFim = new Date(cur.getTime() + 30 * 60 * 1000);

      const horaStr = slotIni.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

      // Checa se está ocupado
      const ocupadoObj = consultas.find(c => {
        const cIni = new Date(c.inicio).getTime();
        const cFim = new Date(c.fim).getTime();
        return slotIni.getTime() < cFim && slotFim.getTime() > cIni;
      });

      slots.push({
        hora: horaStr,
        slotIniIso: slotIni.toISOString(),
        ocupado: !!ocupadoObj,
        clienteNome: ocupadoObj ? (DB.getClienteById(ocupadoObj.cliente_id)?.nome_completo || 'Consulta Ocupada') : null
      });

      cur = slotFim;
    }

    container.innerHTML = slots.map(s => {
      if (s.ocupado) {
        return `
          <div class="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-center flex flex-col justify-center cursor-not-allowed">
            <span class="font-label text-xs font-bold text-rose-800">${s.hora}</span>
            <span class="font-label text-[10px] text-rose-600 font-semibold truncate" title="${s.clienteNome}">Ocupado (${s.clienteNome})</span>
          </div>
        `;
      } else {
        return `
          <button onclick="App.selecionarHorarioSlotPauta('${dataVal}', '${s.hora}')" class="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-center flex flex-col justify-center transition">
            <span class="font-label text-xs font-bold text-emerald-800">${s.hora}</span>
            <span class="font-label text-[10px] text-emerald-600 font-semibold">Livre</span>
          </button>
        `;
      }
    }).join('');
  }

  static selecionarHorarioSlotPauta(dataVal, horaVal) {
    const inputData = document.getElementById('agend-input-data');
    const inputHora = document.getElementById('agend-input-hora-inicio');
    const selectAdv = document.getElementById('agend-select-advogado');
    const pautaAdvId = document.getElementById('pauta-select-advogado')?.value;

    if (inputData) inputData.value = dataVal;
    if (inputHora) inputHora.value = horaVal;
    if (selectAdv && pautaAdvId) selectAdv.value = pautaAdvId;

    App.atualizarCalculoOABSimulador();
    App.showToast('Horário Selecionado', `Preenchido no formulário: ${dataVal} às ${horaVal}.`);
  }

  // =========================================================================
  // F5 — RELATÓRIOS E IMPRESSÃO
  // =========================================================================
  static bindRelatorioEvents() {
    document.getElementById('relat-select-periodo')?.addEventListener('change', () => App.renderRelatorios());
    document.getElementById('relat-select-advogado')?.addEventListener('change', () => App.renderRelatorios());

    document.getElementById('btn-imprimir-relatorio')?.addEventListener('click', () => {
      document.querySelectorAll('.print-date').forEach(el => {
        el.textContent = new Date().toLocaleString('pt-BR');
      });
      window.print();
    });
  }

  static renderRelatorios() {
    const periodo = document.getElementById('relat-select-periodo')?.value || 'mes';
    const advFiltro = document.getElementById('relat-select-advogado')?.value || '';
    const selectAdvRelat = document.getElementById('relat-select-advogado');

    // Atualiza opções do filtro de advogado
    if (selectAdvRelat && selectAdvRelat.options.length <= 1) {
      const advs = DB.getAdvogados();
      selectAdvRelat.innerHTML = '<option value="">Todos os Advogados</option>' +
        advs.map(a => `<option value="${a.id}">${a.nome_completo}</option>`).join('');
    }

    let consultas = DB.getConsultas().filter(c => c.status !== 'cancelada');

    // Filtra por período
    const agora = new Date();
    if (periodo === 'hoje') {
      const hojePrefix = agora.toISOString().split('T')[0];
      consultas = consultas.filter(c => c.inicio.startsWith(hojePrefix));
    } else if (periodo === 'semana') {
      const umaSemanaAtras = new Date(agora.getTime() - 7 * 24 * 60 * 60 * 1000);
      consultas = consultas.filter(c => new Date(c.inicio) >= umaSemanaAtras);
    } else if (periodo === 'mes') {
      const umMesAtras = new Date(agora.getTime() - 30 * 24 * 60 * 60 * 1000);
      consultas = consultas.filter(c => new Date(c.inicio) >= umMesAtras);
    }

    // Filtra por advogado
    if (advFiltro) {
      consultas = consultas.filter(c => c.advogado_id === advFiltro);
    }

    // Renderiza Tabela do Relatório
    const containerTabela = document.getElementById('tabela-relatorio-consultas-body');
    const totalSumEl = document.getElementById('relat-total-honorarios-sum');

    const totalFaturamento = consultas.reduce((acc, c) => acc + Number(c.valor_honorario || 0), 0);
    if (totalSumEl) {
      totalSumEl.textContent = `Total: ${OABCalculator.formatarMoeda(totalFaturamento)}`;
    }

    if (containerTabela) {
      if (consultas.length === 0) {
        containerTabela.innerHTML = `
          <tr>
            <td colspan="6" class="py-6 text-center text-on-surface-variant font-body text-xs">
              Nenhuma consulta encontrada no período selecionado.
            </td>
          </tr>
        `;
      } else {
        containerTabela.innerHTML = consultas.map(c => {
          const cli = DB.getClienteById(c.cliente_id) || { nome_completo: 'Cliente' };
          const adv = DB.getAdvogadoById(c.advogado_id) || { nome_completo: 'Advogado' };
          const srv = DB.getServicoById(c.servico_id) || { descricao: 'Atendimento' };

          const dt = new Date(c.inicio);
          const dataHoraStr = `${dt.toLocaleDateString('pt-BR')} ${dt.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

          return `
            <tr class="hover:bg-surface transition">
              <td class="py-3 px-4 font-body text-xs font-semibold text-primary">${dataHoraStr}</td>
              <td class="py-3 px-4 font-body text-xs text-on-surface">${cli.nome_completo}</td>
              <td class="py-3 px-4 font-body text-xs text-on-surface">${adv.nome_completo}</td>
              <td class="py-3 px-4 font-body text-xs text-on-surface-variant">${srv.descricao}</td>
              <td class="py-3 px-4 font-body text-xs font-bold text-emerald-700 text-right">${OABCalculator.formatarMoeda(c.valor_honorario)}</td>
              <td class="py-3 px-4 text-center">
                <span class="px-2 py-0.5 rounded text-[10px] font-label font-bold bg-emerald-100 text-emerald-800">Agendada</span>
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    // Renderiza Gráfico Chart.js
    App.renderChartFaturamento(consultas);
  }

  static renderChartFaturamento(consultas) {
    const canvas = document.getElementById('chartFaturamentoAdvogados');
    if (!canvas) return;

    // Agrupa faturamento por advogado
    const advogados = DB.getAdvogados();
    const faturamentoMap = {};

    advogados.forEach(a => {
      faturamentoMap[a.nome_completo] = 0;
    });

    consultas.forEach(c => {
      const adv = DB.getAdvogadoById(c.advogado_id);
      if (adv) {
        faturamentoMap[adv.nome_completo] = (faturamentoMap[adv.nome_completo] || 0) + Number(c.valor_honorario || 0);
      }
    });

    const labels = Object.keys(faturamentoMap);
    const dataValues = Object.values(faturamentoMap);

    if (chartFaturamentoInstance) {
      chartFaturamentoInstance.destroy();
    }

    const ctx = canvas.getContext('2d');
    chartFaturamentoInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Faturamento em Honorários (R$)',
          data: dataValues,
          backgroundColor: '#65121a',
          hoverBackgroundColor: '#450009',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` Faturamento: ${OABCalculator.formatarMoeda(ctx.raw)}`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (val) => 'R$ ' + val
            }
          }
        }
      }
    });
  }
}

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
