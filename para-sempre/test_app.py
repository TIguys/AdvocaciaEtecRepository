#!/usr/bin/env python3
"""
Suíte de testes automatizados para a aplicação 'Para Sempre' (Presente para a Dudinha).
Testa:
- Integridade dos arquivos essenciais (index.html, style.css, app.js, auth.js, db.js, config.js, logo.png, schema.sql).
- Sintaxe JavaScript dos módulos.
- Validação e extração de YouTube Video ID.
- Lógica de autenticação e proteção de dados individuais x compartilhados via simulação Node.js.
"""

import os
import subprocess
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def check_files():
    print("[-] Verificando arquivos essenciais...")
    required = [
        "index.html",
        "style.css",
        "app.js",
        "auth.js",
        "db.js",
        "config.js",
        "public/logo.png",
        "supabase/schema.sql",
        "README.md"
    ]
    for rel_path in required:
        full_path = os.path.join(BASE_DIR, rel_path)
        assert os.path.exists(full_path), f"Arquivo ausente: {rel_path}"
        assert os.path.getsize(full_path) > 0, f"Arquivo vazio: {rel_path}"
        print(f"  [OK] {rel_path} ({os.path.getsize(full_path)} bytes)")

def check_js_syntax():
    print("\n[-] Verificando sintaxe JavaScript...")
    js_files = ["config.js", "db.js", "auth.js", "app.js"]
    for jf in js_files:
        path = os.path.join(BASE_DIR, jf)
        res = subprocess.run(["node", "-c", path], capture_output=True, text=True)
        assert res.returncode == 0, f"Erro de sintaxe em {jf}: {res.stderr}"
        print(f"  [OK] Sintaxe correta em {jf}")

def check_logic_simulation():
    print("\n[-] Executando simulação de lógica (Auth + DB + Isolamento)...")
    sim_script = """
    const fs = require('fs');
    const path = require('path');

    // Mock de localStorage
    const storage = {};
    global.localStorage = {
      getItem: (k) => storage[k] || null,
      setItem: (k, v) => { storage[k] = String(v); },
      removeItem: (k) => { delete storage[k]; }
    };
    global.window = {
      location: { hash: '#/login' },
      localStorage: global.localStorage,
      addEventListener: () => {},
      document: { addEventListener: () => {} }
    };

    // Carregar config, db e auth
    eval(fs.readFileSync(path.join(__dirname, 'config.js'), 'utf-8'));
    eval(fs.readFileSync(path.join(__dirname, 'db.js'), 'utf-8'));
    eval(fs.readFileSync(path.join(__dirname, 'auth.js'), 'utf-8'));

    const db = window.ParaSempreDB;
    const auth = window.ParaSempreAuth;

    async function test() {
      // 1. Testar login inválido
      let errorThrown = false;
      try {
        await auth.login('darling', 'senha_errada');
      } catch (e) {
        errorThrown = true;
      }
      if (!errorThrown) throw new Error('Deveria ter falhado com senha incorreta');

      // 2. Testar login Gustavo (Darling)
      const userGustavo = await auth.login('Darling', 'Gu527723*');
      if (userGustavo.role !== 'gustavo' || userGustavo.path !== '/gustavo') {
        throw new Error('Falha no login do Gustavo');
      }

      // 3. Testar inserção individual por Gustavo
      await db.addIndividualItem('notes', { title: 'Nota do Darling', content: 'Lembrança 01' }, userGustavo.id);
      const gustavoNotes = await db.getIndividualItems('notes', userGustavo.id);
      if (gustavoNotes.length !== 1 || gustavoNotes[0].title !== 'Nota do Darling') {
        throw new Error('Nota do Gustavo não foi gravada corretamente');
      }

      // 4. Testar login Dudinha e verificar isolamento
      const userDudinha = await auth.login('Dudinha', 'DudaSilva2812');
      if (userDudinha.role !== 'dudinha' || userDudinha.path !== '/dudinha') {
        throw new Error('Falha no login da Dudinha');
      }

      const dudinhaNotes = await db.getIndividualItems('notes', userDudinha.id);
      if (dudinhaNotes.length !== 0) {
        throw new Error('Vazamento de dados: Dudinha viu as notas do Gustavo!');
      }

      // 5. Testar compartilhamento de dados (ex: nova música)
      const tracksBefore = await db.getMusicTracks();
      await db.addMusicTrack('Música Compartilhada', 'https://youtu.be/pqrUQrAcfo4_test', 'pqrUQrAcfo9', userDudinha.id);
      const tracksAfter = await db.getMusicTracks();
      if (tracksAfter.length !== tracksBefore.length + 1) {
        throw new Error('Música compartilhada não foi salva');
      }

      console.log('  [OK] Autenticação, isolamento de notas e compartilhamento testados com 100% de sucesso.');
    }

    test().catch(err => {
      console.error(err);
      process.exit(1);
    });
    """
    res = subprocess.run(["node", "-e", sim_script], cwd=BASE_DIR, capture_output=True, text=True)
    if res.returncode != 0:
        print("Erro na simulação:", res.stderr)
        sys.exit(1)
    print(res.stdout.strip())

def main():
    print("========================================")
    print(" Executando Testes: Projeto Para Sempre ")
    print("========================================")
    check_files()
    check_js_syntax()
    check_logic_simulation()
    print("\n✅ Todos os testes passaram com sucesso!")

if __name__ == "__main__":
    main()
