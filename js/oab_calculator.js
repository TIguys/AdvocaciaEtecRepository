/**
 * js/oab_calculator.js - Motor de Cálculo dos Honorários da OAB conforme F3 e schema.md
 * Advocacia ETEC
 */

// Tabela de Ajuste por Senioridade (F3)
const AJUSTE_SENIORIDADE = {
  'Junior': 1.00,        // 0% de margem adicional
  'Pleno': 1.10,         // +10% sobre o valor base
  'Senior': 1.25,        // +25% sobre o valor base
  'Especialista': 1.40   // +40% sobre o valor base
};

class OABCalculator {
  /**
   * Calcula o valor do honorário conforme a regra da OAB:
   * 1. Valor base = maior entre (valor_minimo, percentual % * valor_causa)
   * 2. Valor final = Valor base * multiplicador_senioridade
   *
   * @param {Object} servico Objeto com { valor_minimo, percentual }
   * @param {number} valorCausa Valor da causa informado pela secretária
   * @param {string} nivelAdvogado Nível ('Junior', 'Pleno', 'Senior', 'Especialista')
   * @returns {Object} { valorMinimo, valorPercentual, valorBase, multiplicador, valorFinal }
   */
  static calcular({ servico, valorCausa = 0, nivelAdvogado = 'Junior' }) {
    if (!servico) {
      return {
        valorMinimo: 0,
        valorPercentual: 0,
        valorBase: 0,
        multiplicador: 1.0,
        valorFinal: 0
      };
    }

    const valorMinimo = Number(servico.valor_minimo || 0);
    const percentual = Number(servico.percentual || 0);
    const causa = Number(valorCausa || 0);

    const valorPercentual = percentual > 0 ? (percentual / 100) * causa : 0;

    // Regra OAB: Aplica o MAIOR entre valor mínimo fixo e percentual sobre o valor da causa
    const valorBase = Math.max(valorMinimo, valorPercentual);

    // Margem por senioridade
    const multiplicador = AJUSTE_SENIORIDADE[nivelAdvogado] || 1.00;

    // Valor final arredondado para 2 casas decimais
    const valorFinal = Math.round((valorBase * multiplicador) * 100) / 100;

    return {
      valorMinimo,
      valorPercentual: Math.round(valorPercentual * 100) / 100,
      valorBase: Math.round(valorBase * 100) / 100,
      multiplicador,
      valorFinal
    };
  }

  /**
   * Formata número para moeda Real Brasileira (R$)
   */
  static formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor || 0);
  }
}
