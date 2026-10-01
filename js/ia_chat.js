/**
 * js/ia_chat.js - Assistente Jurídico Virtual Law AI
 * Advocacia ETEC
 */

class LawAIChat {
  static init() {
    const form = document.getElementById('ia-chat-form');
    const input = document.getElementById('ia-chat-input');
    if (!form || !input) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const userText = input.value.trim();
      if (!userText) return;

      LawAIChat.appendUserMessage(userText);
      input.value = '';

      // Resposta simulada/inteligente da Law AI
      setTimeout(() => {
        const responseText = LawAIChat.gerarResposta(userText);
        LawAIChat.appendBotMessage(responseText);
      }, 600);
    });
  }

  static appendUserMessage(text) {
    const container = document.getElementById('ia-chat-messages');
    if (!container) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'flex gap-2 max-w-[80%] ml-auto justify-end';
    msgDiv.innerHTML = `
      <div class="bg-primary-container text-white p-3 rounded-2xl text-xs font-body shadow-sm space-y-1">
        <p><strong>Você:</strong> ${LawAIChat.escapeHtml(text)}</p>
      </div>
      <div class="w-7 h-7 rounded-full bg-secondary-container text-primary flex items-center justify-center text-xs font-bold shrink-0">DR</div>
    `;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
  }

  static appendBotMessage(htmlContent) {
    const container = document.getElementById('ia-chat-messages');
    if (!container) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'flex gap-2 max-w-[85%]';
    msgDiv.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-primary-container text-white flex items-center justify-center text-xs font-bold shrink-0">AI</div>
      <div class="bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant/20 text-xs text-on-surface font-body shadow-sm space-y-1.5">
        <p class="font-semibold text-primary">Law AI Assistant:</p>
        <div>${htmlContent}</div>
      </div>
    `;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
  }

  static gerarResposta(pergunta) {
    const query = pergunta.toLowerCase();

    if (query.includes('oab') || query.includes('honorário') || query.includes('tabela')) {
      return `
        <p>Em conformidade com a <strong>Tabela de Honorários da OAB/SP</strong>:</p>
        <ul class="list-disc pl-4 space-y-0.5 mt-1">
          <li><strong>Consulta Jurídica:</strong> Valor mínimo fixo de R$ 300,00.</li>
          <li><strong>Ação Trabalhista:</strong> Mínimo de R$ 1.500,00 ou 15% sobre o proveito econômico/condenação.</li>
          <li><strong>Ação Cível:</strong> Mínimo de R$ 1.000,00 ou 10% sobre o valor da causa.</li>
        </ul>
        <p class="mt-1"><em>Nota: O sistema do escritório aplica automaticamente a regra do MAIOR valor entre o fixo e o percentual, ajustando pelo nível de senioridade do advogado.</em></p>
      `;
    }

    if (query.includes('penal') || query.includes('crime') || query.includes('prescrição') || query.includes('artigo')) {
      return `
        <p><strong>Análise de Legislação Penal & Processual:</strong></p>
        <p class="mt-1">De acordo com o <strong>Código Penal Brasileiro (Decreto-Lei nº 2.848/1940)</strong> e a jurisprudência dos Tribunais Superiores (STJ/STF):</p>
        <ul class="list-disc pl-4 space-y-0.5 mt-1">
          <li>Recomenda-se a análise da dosimetria da pena (Art. 59 do CP) e atenuantes/agravantes.</li>
          <li>Verificar prazos prescricionais do Art. 109 do CP com base na pena máxima cominada em abstrato.</li>
        </ul>
        <p class="mt-1">Deseja simular algum cenário específico para audiência de instrução ou sustentação oral?</p>
      `;
    }

    if (query.includes('agendamento') || query.includes('horário') || query.includes('conflito') || query.includes('secretária')) {
      return `
        <p><strong>Orientação sobre Agendamentos no Sistema:</strong></p>
        <ul class="list-disc pl-4 space-y-0.5 mt-1">
          <li>Cada consulta possui duração mínima de <strong>30 minutos</strong>.</li>
          <li>O sistema bloqueia automaticamente choque de horários para o mesmo advogado e exibe a mensagem: <em>"O advogado já possui consulta nesse horário."</em></li>
          <li>A pauta diária por advogado permite visualizar com clareza todos os slots livres e ocupados.</li>
        </ul>
      `;
    }

    return `
      <p>Anotado, Doutor(a). A <strong>Law AI</strong> analisou sua solicitação: "<em>${LawAIChat.escapeHtml(pergunta)}</em>".</p>
      <p class="mt-1">Conforme os ditames do <strong>Estatuto da Advocacia e da OAB (Lei 8.906/94)</strong> e o Código de Ética e Disciplina, os atos do escritório preservam o sigilo profissional e a excelência no atendimento aos clientes.</p>
      <p class="mt-1">Se precisar de embasamento doutrinário ou pesquisa de precedentes para esta demanda, estou à disposição!</p>
    `;
  }

  static escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  LawAIChat.init();
});
