/**
 * Gerenciador de Autenticação — Projeto Para Sempre
 *
 * Regras da especificação:
 * - Contas autorizadas:
 *   - Darling (Gustavo) -> Senha: Gu527723* -> /gustavo
 *   - Dudinha -> Senha: DudaSilva2812 -> /dudinha
 * - Bloqueio progressivo contra tentativas excessivas
 * - Proteção de rotas privadas e bloqueio cruzado
 * - Sessão persistente
 */

(function () {
  const SESSION_KEY = "para_sempre_session";
  const ATTEMPTS_KEY = "para_sempre_login_attempts";
  const MAX_ATTEMPTS = 5;
  const LOCKOUT_MS = 60 * 1000; // 1 minuto de bloqueio após 5 falhas

  // Contas autorizadas provisionadas
  const AUTHORIZED_ACCOUNTS = {
    "darling": {
      id: "usr_gustavo_01",
      username: "Darling",
      displayName: "Gustavo",
      role: "gustavo",
      path: "/gustavo",
      // Em produção real autentica via Supabase Auth
      passwordHash: "Gu527723*"
    },
    "dudinha": {
      id: "usr_dudinha_02",
      username: "Dudinha",
      displayName: "Dudinha",
      role: "dudinha",
      path: "/dudinha",
      passwordHash: "DudaSilva2812"
    }
  };

  class ParaSempreAuth {
    constructor() {
      this.currentUser = this.loadSession();
    }

    loadSession() {
      try {
        const stored = localStorage.getItem(SESSION_KEY);
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        return null;
      }
    }

    saveSession(user) {
      this.currentUser = user;
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }

    clearSession() {
      this.currentUser = null;
      localStorage.removeItem(SESSION_KEY);
    }

    getAttempts() {
      try {
        const data = localStorage.getItem(ATTEMPTS_KEY);
        return data ? JSON.parse(data) : { count: 0, lockoutUntil: 0 };
      } catch (e) {
        return { count: 0, lockoutUntil: 0 };
      }
    }

    recordFailedAttempt() {
      const state = this.getAttempts();
      state.count = (state.count || 0) + 1;
      if (state.count >= MAX_ATTEMPTS) {
        state.lockoutUntil = Date.now() + LOCKOUT_MS;
      }
      localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(state));
    }

    resetAttempts() {
      localStorage.removeItem(ATTEMPTS_KEY);
    }

    async login(username, password) {
      const attempts = this.getAttempts();
      const now = Date.now();
      if (attempts.lockoutUntil && attempts.lockoutUntil > now) {
        const remainingSec = Math.ceil((attempts.lockoutUntil - now) / 1000);
        throw new Error(`Muitas tentativas incorretas. Tente novamente em ${remainingSec} segundos.`);
      }

      const key = (username || "").trim().toLowerCase();
      const account = AUTHORIZED_ACCOUNTS[key];

      // Se houver cliente Supabase ativo, tenta login com Supabase Auth
      if (window.ParaSempreDB && window.ParaSempreDB.supabase) {
        try {
          const email = `${key}@parasempre.local`;
          const { data, error } = await window.ParaSempreDB.supabase.auth.signInWithPassword({
            email: email,
            password: password
          });
          if (!error && data?.user) {
            this.resetAttempts();
            const userObj = {
              id: data.user.id,
              username: account ? account.username : username,
              displayName: account ? account.displayName : username,
              role: account ? account.role : (key.includes("duda") ? "dudinha" : "gustavo"),
              path: account ? account.path : (key.includes("duda") ? "/dudinha" : "/gustavo")
            };
            this.saveSession(userObj);
            return userObj;
          }
        } catch (supabaseErr) {
          console.warn("Supabase Auth fallback para conta local autorizada:", supabaseErr);
        }
      }

      // Validação segura local das contas fixas
      if (account && account.passwordHash === password) {
        this.resetAttempts();
        const userObj = {
          id: account.id,
          username: account.username,
          displayName: account.displayName,
          role: account.role,
          path: account.path
        };
        this.saveSession(userObj);
        return userObj;
      }

      // Falha genérica para nunca vazar qual campo estava incorreto
      this.recordFailedAttempt();
      throw new Error("Usuário ou senha incorretos.");
    }

    async logout() {
      if (window.ParaSempreDB && window.ParaSempreDB.supabase) {
        try {
          await window.ParaSempreDB.supabase.auth.signOut();
        } catch (e) {
          console.warn("Erro ao deslogar do Supabase:", e);
        }
      }
      this.clearSession();
      window.location.hash = "#/login";
      if (window.ParaSempreApp) {
        window.ParaSempreApp.syncViewWithRoute();
      }
    }

    isAuthenticated() {
      return Boolean(this.currentUser);
    }

    getCurrentUser() {
      return this.currentUser;
    }

    togglePasswordVisibility() {
      const pwdInput = document.getElementById("login-password");
      const pwdIcon = document.getElementById("pwd-icon");
      if (!pwdInput || !pwdIcon) return;
      if (pwdInput.type === "password") {
        pwdInput.type = "text";
        pwdIcon.textContent = "visibility_off";
      } else {
        pwdInput.type = "password";
        pwdIcon.textContent = "visibility";
      }
    }

    async handleLogin() {
      const errBox = document.getElementById("login-error");
      const usernameInput = document.getElementById("login-username");
      const passwordInput = document.getElementById("login-password");
      const submitBtn = document.getElementById("btn-login-submit");

      if (errBox) errBox.classList.add("hidden");
      if (!usernameInput || !passwordInput) return;

      const user = usernameInput.value.trim();
      const pass = passwordInput.value;

      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.classList.add("opacity-60");
        }

        const loggedUser = await this.login(user, pass);
        passwordInput.value = "";
        window.location.hash = "#" + loggedUser.path;
        if (window.ParaSempreApp) {
          window.ParaSempreApp.syncViewWithRoute();
        }
      } catch (err) {
        if (errBox) {
          errBox.textContent = err.message || "Erro ao efetuar login.";
          errBox.classList.remove("hidden");
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove("opacity-60");
        }
      }
    }
  }

  window.ParaSempreAuth = new ParaSempreAuth();
})();
