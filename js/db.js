/**
 * js/db.js - Camada de Persistência no LocalStorage e Estado da Aplicação
 * Advocacia ETEC
 */

const STORAGE_KEYS = {
  CLIENTES: 'advocacia_etec_clientes_v1',
  ADVOGADOS: 'advocacia_etec_advogados_v1',
  SERVICOS_OAB: 'advocacia_etec_servicos_oab_v1',
  CONSULTAS: 'advocacia_etec_consultas_v1',
  IA_HISTORICO: 'advocacia_etec_ia_chat_v1'
};

// Seed de Serviços da Tabela OAB conforme F3 e schema.md
const SEED_SERVICOS_OAB = [
  {
    id: "serv-1",
    area_direito: "Geral",
    descricao: "Consulta jurídica",
    valor_minimo: 300.00,
    percentual: null,
    ativo: true
  },
  {
    id: "serv-2",
    area_direito: "Trabalhista",
    descricao: "Ação trabalhista (percentual sobre condenação/acordo)",
    valor_minimo: 1500.00,
    percentual: 15.00,
    ativo: true
  },
  {
    id: "serv-3",
    area_direito: "Cível",
    descricao: "Ação de cobrança",
    valor_minimo: 1000.00,
    percentual: 10.00,
    ativo: true
  },
  {
    id: "serv-4",
    area_direito: "Cível",
    descricao: "Contrato particular",
    valor_minimo: 800.00,
    percentual: null,
    ativo: true
  },
  {
    id: "serv-5",
    area_direito: "Penal",
    descricao: "Defesa criminal — caso completo",
    valor_minimo: 5000.00,
    percentual: null,
    ativo: true
  },
  {
    id: "serv-6",
    area_direito: "Família",
    descricao: "Divórcio consensual",
    valor_minimo: 2000.00,
    percentual: null,
    ativo: true
  },
  {
    id: "serv-7",
    area_direito: "Família",
    descricao: "Pensão alimentícia",
    valor_minimo: 1200.00,
    percentual: 8.00,
    ativo: true
  },
  {
    id: "serv-8",
    area_direito: "Empresarial",
    descricao: "Contrato Societário e Fusão",
    valor_minimo: 3500.00,
    percentual: 12.00,
    ativo: true
  }
];

// Seed de Advogados conforme F2 e Telas.md
const SEED_ADVOGADOS = [
  {
    id: "adv-1",
    nome_completo: "Dr. Roberto Dias",
    oab: "412.890",
    nivel: "Junior", // 1.0x
    area_atuacao: "Direito Cível & Contratos",
    horario_inicio_manha: "09:00",
    horario_fim_manha: "12:00",
    horario_inicio_tarde: "14:00",
    horario_fim_tarde: "18:00",
    ativo: true
  },
  {
    id: "adv-2",
    nome_completo: "Dra. Sofia Mendes",
    oab: "389.102",
    nivel: "Pleno", // 1.1x
    area_atuacao: "Direito Tributário",
    horario_inicio_manha: "09:00",
    horario_fim_manha: "12:00",
    horario_inicio_tarde: "14:00",
    horario_fim_tarde: "18:00",
    ativo: true
  },
  {
    id: "adv-3",
    nome_completo: "Dr. Lucas Alencar",
    oab: "450.311",
    nivel: "Senior", // 1.25x
    area_atuacao: "Trabalhista & Previdenciário",
    horario_inicio_manha: "09:00",
    horario_fim_manha: "12:00",
    horario_inicio_tarde: "14:00",
    horario_fim_tarde: "18:00",
    ativo: true
  },
  {
    id: "adv-4",
    nome_completo: "Dra. Helena Castro",
    oab: "342.119",
    nivel: "Especialista", // 1.4x
    area_atuacao: "Direito Empresarial & Societário",
    horario_inicio_manha: "08:30",
    horario_fim_manha: "12:00",
    horario_inicio_tarde: "13:30",
    horario_fim_tarde: "18:30",
    ativo: true
  }
];

// Seed de Clientes conforme F1 e Telas.md
const SEED_CLIENTES = [
  {
    id: "cli-1",
    nome_completo: "Grupo Vanguarda Logística S/A",
    cpf_cnpj: "14.892.304/0001-92",
    tipo: "PJ",
    telefone: "(11) 98822-1010",
    email: "contato@guimaraeseng.com.br",
    endereco: "Av. Paulista, 1500 - São Paulo/SP",
    criado_em: new Date().toISOString()
  },
  {
    id: "cli-2",
    nome_completo: "Marcos Vinícius Peixoto",
    cpf_cnpj: "341.890.128-09",
    tipo: "PF",
    telefone: "(11) 97120-3344",
    email: "marcos.peixoto@email.com",
    endereco: "Rua das Flores, 120 - Bragança Paulista/SP",
    criado_em: new Date().toISOString()
  },
  {
    id: "cli-3",
    nome_completo: "Construtora Alvorada Ltda",
    cpf_cnpj: "03.541.902/0002-18",
    tipo: "PJ",
    telefone: "(11) 99990-8877",
    email: "juridico@alvorada.com.br",
    endereco: "Av. Brasil, 450 - Campinas/SP",
    criado_em: new Date().toISOString()
  },
  {
    id: "cli-4",
    nome_completo: "Maria Clara Silva",
    cpf_cnpj: "255.109.843-60",
    tipo: "PF",
    telefone: "(11) 98544-9012",
    email: "mariaclara@uol.com.br",
    endereco: "Rua das Palmeiras, 88 - Atibaia/SP",
    criado_em: new Date().toISOString()
  }
];

// Data auxiliar de hoje para o seed de consultas
function getTodayIsoDate(hour, minute = 0) {
  const d = new Date();
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

function getFutureIsoDate(daysOffset, hour, minute = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

const SEED_CONSULTAS = [
  {
    id: "cons-1",
    cliente_id: "cli-1",
    advogado_id: "adv-4", // Dra Helena Castro (Especialista)
    servico_id: "serv-8", // Contrato Societario
    valor_causa: 250000.00,
    valor_honorario: 42000.00, // max(3500, 12% * 250000) * 1.4 = 30000 * 1.4 = 42000
    inicio: getTodayIsoDate(9, 30),
    fim: getTodayIsoDate(10, 30),
    observacoes: "Reunião de fusão de empresas e minuta societária",
    status: "agendada",
    criado_em: new Date().toISOString()
  },
  {
    id: "cons-2",
    cliente_id: "cli-2",
    advogado_id: "adv-3", // Dr Lucas Alencar (Senior)
    servico_id: "serv-2", // Acao Trabalhista
    valor_causa: 50000.00,
    valor_honorario: 9375.00, // max(1500, 15% * 50000) * 1.25 = 7500 * 1.25 = 9375
    inicio: getTodayIsoDate(14, 0),
    fim: getTodayIsoDate(15, 0),
    observacoes: "Acordo Coletivo & Rescisão Direta",
    status: "agendada",
    criado_em: new Date().toISOString()
  },
  {
    id: "cons-3",
    cliente_id: "cli-3",
    advogado_id: "adv-1", // Dr Roberto Dias (Junior)
    servico_id: "serv-4", // Contrato particular
    valor_causa: 0,
    valor_honorario: 800.00, // max(800, 0) * 1.0 = 800
    inicio: getTodayIsoDate(16, 30),
    fim: getTodayIsoDate(17, 30),
    observacoes: "Minuta de Compra e Venda Imóvel",
    status: "agendada",
    criado_em: new Date().toISOString()
  },
  {
    id: "cons-4",
    cliente_id: "cli-4",
    advogado_id: "adv-1", // Dr Roberto Dias
    servico_id: "serv-6", // Divorcio consensual
    valor_causa: 0,
    valor_honorario: 2000.00,
    inicio: getFutureIsoDate(1, 10, 0),
    fim: getFutureIsoDate(1, 11, 0),
    observacoes: "Divórcio consensual e partilha",
    status: "agendada",
    criado_em: new Date().toISOString()
  },
  {
    id: "cons-5",
    cliente_id: "cli-1",
    advogado_id: "adv-2", // Dra Sofia Mendes
    servico_id: "serv-3", // Acao de cobranca
    valor_causa: 80000.00,
    valor_honorario: 8800.00, // max(1000, 10% * 80000) * 1.1 = 8000 * 1.1 = 8800
    inicio: getFutureIsoDate(1, 15, 30),
    fim: getFutureIsoDate(1, 16, 30),
    observacoes: "Cobrança tributária e compliance",
    status: "agendada",
    criado_em: new Date().toISOString()
  }
];

class DB {
  static init() {
    if (!localStorage.getItem(STORAGE_KEYS.SERVICOS_OAB)) {
      localStorage.setItem(STORAGE_KEYS.SERVICOS_OAB, JSON.stringify(SEED_SERVICOS_OAB));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ADVOGADOS)) {
      localStorage.setItem(STORAGE_KEYS.ADVOGADOS, JSON.stringify(SEED_ADVOGADOS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CLIENTES)) {
      localStorage.setItem(STORAGE_KEYS.CLIENTES, JSON.stringify(SEED_CLIENTES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CONSULTAS)) {
      localStorage.setItem(STORAGE_KEYS.CONSULTAS, JSON.stringify(SEED_CONSULTAS));
    }
  }

  // --- CLIENTES ---
  static getClientes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CLIENTES) || '[]');
  }

  static getClienteById(id) {
    return DB.getClientes().find(c => c.id === id);
  }

  static saveCliente(cliente) {
    const clientes = DB.getClientes();
    if (cliente.id) {
      const idx = clientes.findIndex(c => c.id === cliente.id);
      if (idx !== -1) {
        clientes[idx] = { ...clientes[idx], ...cliente };
      }
    } else {
      cliente.id = 'cli-' + Date.now();
      cliente.criado_em = new Date().toISOString();
      clientes.push(cliente);
    }
    localStorage.setItem(STORAGE_KEYS.CLIENTES, JSON.stringify(clientes));
    return cliente;
  }

  static deleteCliente(id) {
    const clientes = DB.getClientes().filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEYS.CLIENTES, JSON.stringify(clientes));
  }

  // --- ADVOGADOS ---
  static getAdvogados() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ADVOGADOS) || '[]');
  }

  static getAdvogadoById(id) {
    return DB.getAdvogados().find(a => a.id === id);
  }

  static getAdvogadoByOab(oab) {
    const cleanOab = String(oab).replace(/\D/g, '');
    return DB.getAdvogados().find(a => String(a.oab).replace(/\D/g, '') === cleanOab);
  }

  static saveAdvogado(advogado) {
    const advogados = DB.getAdvogados();
    // Validação de OAB única (excluindo o próprio se for edição)
    const existing = DB.getAdvogadoByOab(advogado.oab);
    if (existing && existing.id !== advogado.id) {
      throw new Error(`Já existe um advogado cadastrado com a OAB ${advogado.oab}.`);
    }

    if (advogado.id) {
      const idx = advogados.findIndex(a => a.id === advogado.id);
      if (idx !== -1) {
        advogados[idx] = { ...advogados[idx], ...advogado };
      }
    } else {
      advogado.id = 'adv-' + Date.now();
      advogado.ativo = advogado.ativo !== undefined ? advogado.ativo : true;
      advogados.push(advogado);
    }
    localStorage.setItem(STORAGE_KEYS.ADVOGADOS, JSON.stringify(advogados));
    return advogado;
  }

  static deleteAdvogado(id) {
    const advogados = DB.getAdvogados().filter(a => a.id !== id);
    localStorage.setItem(STORAGE_KEYS.ADVOGADOS, JSON.stringify(advogados));
  }

  // --- SERVIÇOS OAB ---
  static getServicosOAB() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SERVICOS_OAB) || '[]');
  }

  static getServicoById(id) {
    return DB.getServicosOAB().find(s => s.id === id);
  }

  // --- CONSULTAS / AGENDAMENTOS ---
  static getConsultas() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CONSULTAS) || '[]');
  }

  static getConsultaById(id) {
    return DB.getConsultas().find(c => c.id === id);
  }

  /**
   * Verifica se há choque de horários para o mesmo advogado (F4)
   * Duração mínima: 30 minutos
   */
  static checkConflitoAgenda(advogadoId, inicioIso, fimIso, consultaIdIgnorar = null) {
    const inicioNew = new Date(inicioIso).getTime();
    const fimNew = new Date(fimIso).getTime();

    if (fimNew - inicioNew < 30 * 60 * 1000) {
      throw new Error("A duração mínima da consulta é de 30 minutos.");
    }

    const consultas = DB.getConsultas();
    for (const c of consultas) {
      if (c.status === 'cancelada') continue;
      if (consultaIdIgnorar && c.id === consultaIdIgnorar) continue;

      if (c.advogado_id === advogadoId) {
        const cInicio = new Date(c.inicio).getTime();
        const cFim = new Date(c.fim).getTime();

        // Checa se há interseção [inicio, fim)
        if (inicioNew < cFim && fimNew > cInicio) {
          return true; // Tem conflito
        }
      }
    }
    return false;
  }

  static saveConsulta(consulta) {
    // Validação de Conflito de Horário
    const temConflito = DB.checkConflitoAgenda(
      consulta.advogado_id,
      consulta.inicio,
      consulta.fim,
      consulta.id
    );

    if (temConflito) {
      throw new Error("O advogado já possui consulta nesse horário.");
    }

    const consultas = DB.getConsultas();
    if (consulta.id) {
      const idx = consultas.findIndex(c => c.id === consulta.id);
      if (idx !== -1) {
        consultas[idx] = { ...consultas[idx], ...consulta };
      }
    } else {
      consulta.id = 'cons-' + Date.now();
      consulta.status = consulta.status || 'agendada';
      consulta.criado_em = new Date().toISOString();
      consultas.push(consulta);
    }
    localStorage.setItem(STORAGE_KEYS.CONSULTAS, JSON.stringify(consultas));
    return consulta;
  }

  static deleteConsulta(id) {
    const consultas = DB.getConsultas().filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEYS.CONSULTAS, JSON.stringify(consultas));
  }
}

// Inicializa a base no carregamento do arquivo
DB.init();
