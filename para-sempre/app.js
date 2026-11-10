/**
 * Aplicação Principal — Projeto Para Sempre
 * Roteamento, Gerenciamento de Interface e Temas
 */

(function () {
  class ParaSempreApp {
    constructor() {
      this.currentSection = "dashboard";
      this.initEvents();
    }

    init() {
      this.syncViewWithRoute();
      window.addEventListener("hashchange", () => this.syncViewWithRoute());
    }

    initEvents() {
      // Toggle sidebar drawer
      const openBtn = document.getElementById("btn-open-sidebar");
      const closeBtn = document.getElementById("btn-close-sidebar");
      const backdrop = document.getElementById("sidebar-backdrop");
      const drawer = document.getElementById("sidebar-drawer");

      const closeDrawer = () => {
        if (drawer) drawer.classList.add("-translate-x-full");
        if (backdrop) backdrop.classList.add("hidden");
      };

      const openDrawer = () => {
        if (drawer) drawer.classList.remove("-translate-x-full");
        if (backdrop) backdrop.classList.remove("hidden");
      };

      if (openBtn) openBtn.addEventListener("click", openDrawer);
      if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
      if (backdrop) backdrop.addEventListener("click", closeDrawer);

      // Fechar drawer ao clicar em links
      const navLinks = document.querySelectorAll("#nav-links a");
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          closeDrawer();
        });
      });
    }

    syncViewWithRoute() {
      const rawHash = window.location.hash || "#/login";
      const cleanHash = rawHash.replace("#", "");
      const auth = window.ParaSempreAuth;
      const currentUser = auth.getCurrentUser();

      const viewLogin = document.getElementById("view-login");
      const viewApp = document.getElementById("view-app");

      // Rota de login
      if (cleanHash === "/login" || cleanHash === "" || cleanHash === "/") {
        if (auth.isAuthenticated()) {
          window.location.hash = "#" + currentUser.path;
          return;
        }
        viewLogin.classList.remove("hidden");
        viewApp.classList.add("hidden");
        document.body.setAttribute("data-theme", "gustavo");
        return;
      }

      // Verificação de autenticação para qualquer rota privada
      if (!auth.isAuthenticated()) {
        window.location.hash = "#/login";
        return;
      }

      // Proteção de rotas cruzadas
      // Se Gustavo tentar acessar /dudinha ou Dudinha tentar acessar /gustavo
      if (currentUser.role === "gustavo" && cleanHash.startsWith("/dudinha")) {
        window.location.hash = "#/gustavo";
        return;
      }
      if (currentUser.role === "dudinha" && cleanHash.startsWith("/gustavo")) {
        window.location.hash = "#/dudinha";
        return;
      }

      // Exibir área privada
      viewLogin.classList.add("hidden");
      viewApp.classList.remove("hidden");

      // Aplicar tema e textos da área pessoal
      this.applyUserTheme(currentUser);

      // Determinar seção ativa (dashboard, playlist, bandas, etc.)
      const pathParts = cleanHash.split("/").filter(Boolean);
      // Exemplos: ['gustavo'], ['gustavo', 'playlist'], ou navegação direta #playlist
      let section = "dashboard";
      if (pathParts.length > 1) {
        section = pathParts[1];
      } else if (!["gustavo", "dudinha"].includes(pathParts[0])) {
        section = pathParts[0];
      }

      this.switchSection(section);
    }

    applyUserTheme(user) {
      document.body.setAttribute("data-theme", user.role);

      const headerTitle = document.getElementById("header-user-title");
      const headerSubtitle = document.getElementById("header-user-subtitle");
      const userDisplayName = document.getElementById("user-display-name");
      const welcomeTitle = document.getElementById("dashboard-welcome-title");
      const welcomeQuote = document.getElementById("dashboard-welcome-quote");
      const finalTitle = document.getElementById("final-love-title");
      const finalSubtitle = document.getElementById("final-love-subtitle");

      if (user.role === "gustavo") {
        if (headerTitle) headerTitle.textContent = "Para Sempre";
        if (headerSubtitle) headerSubtitle.textContent = "Nosso cantinho, nossas histórias.";
        if (userDisplayName) userDisplayName.textContent = "Darling";
        if (welcomeTitle) welcomeTitle.textContent = "Bem-vindo, Darling";
        if (welcomeQuote) welcomeQuote.textContent = '"Cada momento com você é uma lembrança que quero guardar para sempre."';
        if (finalTitle) finalTitle.textContent = "Te amo, Dudinha.";
        if (finalSubtitle) finalSubtitle.textContent = "Você faz parte das minhas melhores histórias.";
      } else {
        if (headerTitle) headerTitle.textContent = "Para Sempre";
        if (headerSubtitle) headerSubtitle.textContent = "Um lugar especial para guardar nossas lembranças.";
        if (userDisplayName) userDisplayName.textContent = "Dudinha";
        if (welcomeTitle) welcomeTitle.textContent = "Bem-vinda, Dudinha";
        if (welcomeQuote) welcomeQuote.textContent = '"Você é uma das partes mais bonitas da minha história."';
        if (finalTitle) finalTitle.textContent = "Te amo, Darling.";
        if (finalSubtitle) finalSubtitle.textContent = "Que a nossa história continue sendo escrita, um momento de cada vez.";
      }
    }

    switchSection(sectionName) {
      const validSections = [
        "dashboard", "playlist", "bandas", "fotos",
        "notas", "cartinhas", "animes", "filmes", "palavras", "lugares"
      ];
      const target = validSections.includes(sectionName) ? sectionName : "dashboard";
      this.currentSection = target;

      validSections.forEach(sec => {
        const el = document.getElementById(`section-${sec}`);
        if (el) {
          if (sec === target) {
            el.classList.remove("hidden");
          } else {
            el.classList.add("hidden");
          }
        }
      });

      // Atualizar classe ativa nos links da sidebar
      const navLinks = document.querySelectorAll("#nav-links a");
      navLinks.forEach(link => {
        const href = link.getAttribute("href") || "";
        const linkSec = href.replace("#", "").replace("/", "");
        if (linkSec === target || (target === "dashboard" && (linkSec === "" || linkSec === "dashboard"))) {
          link.classList.add("bg-white/15", "text-white");
        } else {
          link.classList.remove("bg-white/15", "text-white");
        }
      });

      // Carregar os dados correspondentes da seção
      this.loadSectionData(target);
    }

    async loadSectionData(section) {
      const auth = window.ParaSempreAuth;
      const user = auth.getCurrentUser();
      if (!user) return;

      switch (section) {
        case "playlist":
          await this.renderTracks();
          break;
        case "bandas":
          await this.renderArtists();
          break;
        case "fotos":
          await this.renderPhotos();
          break;
        case "notas":
          await this.renderNotes();
          break;
        case "cartinhas":
          await this.renderLetters();
          break;
        case "animes":
          await this.renderAnimes();
          break;
        case "filmes":
          await this.renderMovies();
          break;
        case "palavras":
          await this.renderWords();
          break;
        case "lugares":
          await this.renderPlaces();
          break;
      }
    }

    /* -----------------------------
     * GESTÃO DE MODAIS
     * ----------------------------- */
    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove("hidden");
    }

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add("hidden");
    }

    /* -----------------------------
     * PLAYLIST COMPARTILHADA
     * ----------------------------- */
    extractYouTubeId(url) {
      if (!url) return null;
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    }

    async renderTracks() {
      const container = document.getElementById("tracks-container");
      if (!container) return;
      const tracks = await window.ParaSempreDB.getMusicTracks();

      if (!tracks || tracks.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">Nenhuma música adicionada ainda.</div>`;
        return;
      }

      container.innerHTML = tracks.map(track => `
        <div class="card-glass p-3.5 rounded-2xl flex items-center justify-between gap-3 group transition-all">
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <div class="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-md bg-black/40">
              <img src="${track.thumbnail_url || `https://img.youtube.com/vi/${track.video_id}/hqdefault.jpg`}" alt="${track.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&fit=crop';"/>
            </div>
            <div class="min-w-0 flex-1">
              <h4 class="font-editorial text-sm font-medium text-white truncate">${track.title}</h4>
              <p class="text-[11px] text-slate-400 truncate">YouTube ID: ${track.video_id}</p>
            </div>
          </div>
          <button onclick="window.ParaSempreApp.playTrack('${track.video_id}', '${encodeURIComponent(track.title)}')" class="w-10 h-10 rounded-full bg-blue-500/20 text-blue-300 hover:bg-blue-500 hover:text-white flex items-center justify-center shrink-0 transition-all shadow" title="Tocar música">
            <span class="material-symbols-outlined text-xl">play_arrow</span>
          </button>
        </div>
      `).join("");
    }

    playTrack(videoId, encodedTitle) {
      const title = decodeURIComponent(encodedTitle);
      const player = document.getElementById("youtube-main-player");
      const titleEl = document.getElementById("player-active-title");
      if (player) {
        player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
      }
      if (titleEl) {
        titleEl.textContent = title;
      }
    }

    async handleSubmitTrack(event) {
      event.preventDefault();
      const titleInput = document.getElementById("track-title");
      const urlInput = document.getElementById("track-url");
      const title = titleInput.value.trim();
      const url = urlInput.value.trim();

      const videoId = this.extractYouTubeId(url);
      if (!videoId) {
        alert("Por favor informe uma URL válida do YouTube (ex: https://youtu.be/... ou https://youtube.com/watch?v=...)");
        return;
      }

      const user = window.ParaSempreAuth.getCurrentUser();
      try {
        await window.ParaSempreDB.addMusicTrack(title, url, videoId, user ? user.id : null);
        titleInput.value = "";
        urlInput.value = "";
        this.closeModal("modal-add-track");
        await this.renderTracks();
      } catch (e) {
        alert(e.message || "Erro ao adicionar música.");
      }
    }

    /* -----------------------------
     * ARTISTAS COMPARTILHADOS
     * ----------------------------- */
    async renderArtists() {
      const container = document.getElementById("artists-container");
      if (!container) return;
      const artists = await window.ParaSempreDB.getArtists();

      if (!artists || artists.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">Nenhum artista cadastrado ainda.</div>`;
        return;
      }

      container.innerHTML = artists.map(artist => `
        <div class="card-glass rounded-2xl overflow-hidden group flex flex-col justify-between">
          <div class="h-44 w-full relative overflow-hidden bg-slate-900">
            <img src="${artist.image_url}" alt="${artist.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&fit=crop';"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-3 right-3">
              <h3 class="font-editorial text-lg font-semibold text-white truncate">${artist.name}</h3>
            </div>
          </div>
          <div class="p-4 flex items-center justify-between border-t border-white/10 bg-black/20">
            <span class="text-xs text-slate-400">Banda / Cantor</span>
            <a href="${artist.spotify_url}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-white flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-sm">play_circle</span>
              <span>Ouvir no Spotify</span>
            </a>
          </div>
        </div>
      `).join("");
    }

    async handleSubmitArtist(event) {
      event.preventDefault();
      const nameInput = document.getElementById("artist-name");
      const imgInput = document.getElementById("artist-image");
      const spotifyInput = document.getElementById("artist-spotify");

      const name = nameInput.value.trim();
      const img = imgInput.value.trim();
      const spotify = spotifyInput.value.trim();

      if (!name) return;

      try {
        await window.ParaSempreDB.addArtist(name, img, spotify);
        nameInput.value = "";
        imgInput.value = "";
        spotifyInput.value = "";
        this.closeModal("modal-add-artist");
        await this.renderArtists();
      } catch (e) {
        alert(e.message || "Erro ao adicionar artista.");
      }
    }

    /* -----------------------------
     * FOTOGRAFIAS INDIVIDUAIS
     * ----------------------------- */
    async renderPhotos() {
      const container = document.getElementById("photos-container");
      if (!container) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      const photos = await window.ParaSempreDB.getIndividualItems("photos", user ? user.id : null);

      if (!photos || photos.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">Nenhuma foto guardada ainda. Adicione sua primeira lembrança!</div>`;
        return;
      }

      container.innerHTML = photos.map(photo => `
        <div class="card-glass rounded-2xl overflow-hidden group flex flex-col justify-between">
          <div class="h-56 w-full relative overflow-hidden bg-slate-900 cursor-pointer" onclick="window.ParaSempreApp.openLightbox('${encodeURIComponent(photo.image_url)}', '${encodeURIComponent(photo.caption || '')}')">
            <img src="${photo.image_url}" alt="${photo.caption || 'Foto'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&fit=crop';"/>
            <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-4 flex items-center justify-between border-t border-white/10 bg-black/20">
            <div class="min-w-0 flex-1 mr-2">
              <p class="text-sm font-medium text-white truncate">${photo.caption || "Momento especial"}</p>
              <p class="text-[11px] text-slate-400">${new Date(photo.created_at).toLocaleDateString("pt-BR")}</p>
            </div>
            <button onclick="window.ParaSempreApp.deletePhoto('${photo.id}')" class="text-slate-400 hover:text-red-400 p-1" title="Excluir">
              <span class="material-symbols-outlined text-lg">delete</span>
            </button>
          </div>
        </div>
      `).join("");
    }

    openLightbox(encodedUrl, encodedCaption) {
      const url = decodeURIComponent(encodedUrl);
      const caption = decodeURIComponent(encodedCaption);
      const img = document.getElementById("lightbox-img");
      const cap = document.getElementById("lightbox-caption");
      if (img) img.src = url;
      if (cap) cap.textContent = caption;
      this.openModal("modal-lightbox");
    }

    async handleSubmitPhoto(event) {
      event.preventDefault();
      const fileInput = document.getElementById("photo-file");
      const urlInput = document.getElementById("photo-url");
      const capInput = document.getElementById("photo-caption");

      const caption = capInput.value.trim();
      let imageUrl = urlInput.value.trim();

      const user = window.ParaSempreAuth.getCurrentUser();
      if (!user) return;

      const proceedWithUrl = async (finalUrl) => {
        try {
          await window.ParaSempreDB.addIndividualItem("photos", {
            image_url: finalUrl || "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&fit=crop",
            caption: caption
          }, user.id);
          fileInput.value = "";
          urlInput.value = "";
          capInput.value = "";
          this.closeModal("modal-add-photo");
          await this.renderPhotos();
        } catch (e) {
          alert(e.message || "Erro ao salvar foto.");
        }
      };

      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => proceedWithUrl(e.target.result);
        reader.readAsDataURL(fileInput.files[0]);
      } else if (imageUrl) {
        await proceedWithUrl(imageUrl);
      } else {
        alert("Selecione um arquivo de foto ou forneça a URL da imagem.");
      }
    }

    async deletePhoto(id) {
      if (!confirm("Tem certeza que deseja excluir esta foto?")) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      await window.ParaSempreDB.deleteIndividualItem("photos", id, user.id);
      await this.renderPhotos();
    }

    /* -----------------------------
     * NOTAS INDIVIDUAIS
     * ----------------------------- */
    async renderNotes() {
      const container = document.getElementById("notes-container");
      if (!container) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      const notes = await window.ParaSempreDB.getIndividualItems("notes", user ? user.id : null);

      if (!notes || notes.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">Nenhuma nota escrita ainda.</div>`;
        return;
      }

      container.innerHTML = notes.map(note => `
        <div class="card-glass p-5 rounded-2xl flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-start justify-between gap-2 mb-2">
              <h4 class="font-editorial text-lg font-semibold text-white">${note.title}</h4>
              <button onclick="window.ParaSempreApp.deleteNote('${note.id}')" class="text-slate-400 hover:text-red-400" title="Excluir">
                <span class="material-symbols-outlined text-base">delete</span>
              </button>
            </div>
            <p class="text-xs text-slate-300 whitespace-pre-line leading-relaxed font-light">${note.content}</p>
          </div>
          <div class="pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
            <span>${new Date(note.created_at).toLocaleDateString("pt-BR")}</span>
            <span class="material-symbols-outlined text-xs text-amber-400">bookmark</span>
          </div>
        </div>
      `).join("");
    }

    async handleSubmitNote(event) {
      event.preventDefault();
      const title = document.getElementById("note-title").value.trim();
      const content = document.getElementById("note-content").value.trim();
      const user = window.ParaSempreAuth.getCurrentUser();

      try {
        await window.ParaSempreDB.addIndividualItem("notes", { title, content }, user.id);
        document.getElementById("note-title").value = "";
        document.getElementById("note-content").value = "";
        this.closeModal("modal-add-note");
        await this.renderNotes();
      } catch (e) {
        alert(e.message || "Erro ao salvar nota.");
      }
    }

    async deleteNote(id) {
      if (!confirm("Deseja realmente apagar esta nota?")) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      await window.ParaSempreDB.deleteIndividualItem("notes", id, user.id);
      await this.renderNotes();
    }

    /* -----------------------------
     * CARTINHAS INDIVIDUAIS
     * ----------------------------- */
    async renderLetters() {
      const container = document.getElementById("letters-container");
      if (!container) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      const letters = await window.ParaSempreDB.getIndividualItems("letters", user ? user.id : null);

      if (!letters || letters.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">Nenhuma cartinha escrita ainda.</div>`;
        return;
      }

      container.innerHTML = letters.map(letter => `
        <div class="card-glass p-5 rounded-2xl flex flex-col justify-between space-y-4">
          <div class="flex items-center justify-between">
            <span class="material-symbols-outlined text-rose-400 text-2xl">mail</span>
            <button onclick="window.ParaSempreApp.deleteLetter('${letter.id}')" class="text-slate-400 hover:text-red-400" title="Excluir">
              <span class="material-symbols-outlined text-base">delete</span>
            </button>
          </div>
          <div>
            <h4 class="font-editorial text-lg font-semibold text-white truncate mb-1">${letter.title}</h4>
            <p class="text-xs text-slate-400 line-clamp-2 font-light">${letter.content}</p>
          </div>
          <button onclick="window.ParaSempreApp.openLetterModal('${encodeURIComponent(letter.title)}', '${encodeURIComponent(letter.content)}', '${new Date(letter.created_at).toLocaleDateString("pt-BR")}')"
            class="w-full py-2 px-3 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all">
            <span class="material-symbols-outlined text-sm">mark_email_read</span>
            <span>Abrir cartinha</span>
          </button>
        </div>
      `).join("");
    }

    openLetterModal(encodedTitle, encodedContent, dateStr) {
      const title = decodeURIComponent(encodedTitle);
      const content = decodeURIComponent(encodedContent);
      document.getElementById("letter-modal-title").textContent = title;
      document.getElementById("letter-modal-content").textContent = content;
      document.getElementById("letter-modal-date").textContent = dateStr;
      this.openModal("modal-view-letter");
    }

    async handleSubmitLetter(event) {
      event.preventDefault();
      const title = document.getElementById("letter-title").value.trim();
      const content = document.getElementById("letter-content").value.trim();
      const user = window.ParaSempreAuth.getCurrentUser();

      try {
        await window.ParaSempreDB.addIndividualItem("letters", { title, content }, user.id);
        document.getElementById("letter-title").value = "";
        document.getElementById("letter-content").value = "";
        this.closeModal("modal-add-letter");
        await this.renderLetters();
      } catch (e) {
        alert(e.message || "Erro ao guardar cartinha.");
      }
    }

    async deleteLetter(id) {
      if (!confirm("Deseja realmente apagar esta cartinha?")) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      await window.ParaSempreDB.deleteIndividualItem("letters", id, user.id);
      await this.renderLetters();
    }

    /* -----------------------------
     * ANIMES INDIVIDUAIS
     * ----------------------------- */
    async renderAnimes() {
      const container = document.getElementById("animes-container");
      if (!container) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      const animes = await window.ParaSempreDB.getIndividualItems("anime_watchlist", user ? user.id : null);

      if (!animes || animes.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">Nenhum anime cadastrado ainda.</div>`;
        return;
      }

      container.innerHTML = animes.map(anime => `
        <div class="card-glass rounded-2xl overflow-hidden group flex flex-col justify-between">
          <div class="h-48 w-full relative overflow-hidden bg-slate-900">
            <img src="${anime.image_url || 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&fit=crop'}" alt="${anime.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&fit=crop';"/>
            <div class="absolute top-2 right-2">
              <span class="px-2 py-1 rounded-full text-[10px] font-medium ${anime.watched ? 'bg-emerald-500/80 text-white' : 'bg-purple-500/80 text-white'}">
                ${anime.watched ? 'Assistido' : 'Desejado'}
              </span>
            </div>
          </div>
          <div class="p-3.5 space-y-2">
            <h4 class="font-editorial text-sm font-semibold text-white truncate">${anime.title}</h4>
            ${anime.description ? `<p class="text-[11px] text-slate-400 line-clamp-2 font-light">${anime.description}</p>` : ''}
            <div class="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
              <button onclick="window.ParaSempreApp.toggleAnimeWatched('${anime.id}', ${!anime.watched})" class="text-purple-400 hover:text-purple-300">
                ${anime.watched ? 'Marcar como não visto' : 'Marcar visto'}
              </button>
              <button onclick="window.ParaSempreApp.deleteAnime('${anime.id}')" class="text-slate-400 hover:text-red-400">
                <span class="material-symbols-outlined text-sm">delete</span>
              </button>
            </div>
          </div>
        </div>
      `).join("");
    }

    async handleSubmitAnime(event) {
      event.preventDefault();
      const title = document.getElementById("anime-title").value.trim();
      const image_url = document.getElementById("anime-image").value.trim();
      const description = document.getElementById("anime-desc").value.trim();
      const watched = document.getElementById("anime-watched").checked;
      const user = window.ParaSempreAuth.getCurrentUser();

      try {
        await window.ParaSempreDB.addIndividualItem("anime_watchlist", {
          title, image_url, description, watched
        }, user.id);
        document.getElementById("anime-title").value = "";
        document.getElementById("anime-image").value = "";
        document.getElementById("anime-desc").value = "";
        document.getElementById("anime-watched").checked = false;
        this.closeModal("modal-add-anime");
        await this.renderAnimes();
      } catch (e) {
        alert(e.message || "Erro ao cadastrar anime.");
      }
    }

    async toggleAnimeWatched(id, watched) {
      const user = window.ParaSempreAuth.getCurrentUser();
      await window.ParaSempreDB.updateIndividualItem("anime_watchlist", id, { watched }, user.id);
      await this.renderAnimes();
    }

    async deleteAnime(id) {
      if (!confirm("Deseja apagar este anime?")) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      await window.ParaSempreDB.deleteIndividualItem("anime_watchlist", id, user.id);
      await this.renderAnimes();
    }

    /* -----------------------------
     * FILMES INDIVIDUAIS
     * ----------------------------- */
    async renderMovies() {
      const container = document.getElementById("movies-container");
      if (!container) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      const movies = await window.ParaSempreDB.getIndividualItems("movie_watchlist", user ? user.id : null);

      if (!movies || movies.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">Nenhum filme cadastrado ainda.</div>`;
        return;
      }

      container.innerHTML = movies.map(movie => `
        <div class="card-glass rounded-2xl overflow-hidden group flex flex-col justify-between">
          <div class="h-48 w-full relative overflow-hidden bg-slate-900">
            <img src="${movie.image_url || 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&fit=crop'}" alt="${movie.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&fit=crop';"/>
            <div class="absolute top-2 right-2">
              <span class="px-2 py-1 rounded-full text-[10px] font-medium ${movie.watched ? 'bg-emerald-500/80 text-white' : 'bg-emerald-600/80 text-white'}">
                ${movie.watched ? 'Assistido' : 'Desejado'}
              </span>
            </div>
          </div>
          <div class="p-3.5 space-y-2">
            <h4 class="font-editorial text-sm font-semibold text-white truncate">${movie.title}</h4>
            ${movie.description ? `<p class="text-[11px] text-slate-400 line-clamp-2 font-light">${movie.description}</p>` : ''}
            <div class="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
              <button onclick="window.ParaSempreApp.toggleMovieWatched('${movie.id}', ${!movie.watched})" class="text-emerald-400 hover:text-emerald-300">
                ${movie.watched ? 'Marcar não visto' : 'Marcar visto'}
              </button>
              <button onclick="window.ParaSempreApp.deleteMovie('${movie.id}')" class="text-slate-400 hover:text-red-400">
                <span class="material-symbols-outlined text-sm">delete</span>
              </button>
            </div>
          </div>
        </div>
      `).join("");
    }

    async handleSubmitMovie(event) {
      event.preventDefault();
      const title = document.getElementById("movie-title").value.trim();
      const image_url = document.getElementById("movie-image").value.trim();
      const description = document.getElementById("movie-desc").value.trim();
      const watched = document.getElementById("movie-watched").checked;
      const user = window.ParaSempreAuth.getCurrentUser();

      try {
        await window.ParaSempreDB.addIndividualItem("movie_watchlist", {
          title, image_url, description, watched
        }, user.id);
        document.getElementById("movie-title").value = "";
        document.getElementById("movie-image").value = "";
        document.getElementById("movie-desc").value = "";
        document.getElementById("movie-watched").checked = false;
        this.closeModal("modal-add-movie");
        await this.renderMovies();
      } catch (e) {
        alert(e.message || "Erro ao cadastrar filme.");
      }
    }

    async toggleMovieWatched(id, watched) {
      const user = window.ParaSempreAuth.getCurrentUser();
      await window.ParaSempreDB.updateIndividualItem("movie_watchlist", id, { watched }, user.id);
      await this.renderMovies();
    }

    async deleteMovie(id) {
      if (!confirm("Deseja apagar este filme?")) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      await window.ParaSempreDB.deleteIndividualItem("movie_watchlist", id, user.id);
      await this.renderMovies();
    }

    /* -----------------------------
     * PALAVRAS ROMÂNTICAS INDIVIDUAIS
     * ----------------------------- */
    async renderWords() {
      const container = document.getElementById("words-container");
      if (!container) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      const words = await window.ParaSempreDB.getIndividualItems("romantic_words", user ? user.id : null);

      if (!words || words.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">Nenhuma frase cadastrada ainda.</div>`;
        return;
      }

      container.innerHTML = words.map(w => `
        <div class="card-glass p-6 rounded-2xl flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <span class="material-symbols-outlined text-rose-400 text-2xl">format_quote</span>
            <p class="font-editorial text-base text-white italic leading-relaxed">"${w.phrase}"</p>
          </div>
          <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>${w.context || 'Para Sempre'}</span>
            <button onclick="window.ParaSempreApp.deleteWord('${w.id}')" class="text-slate-400 hover:text-red-400">
              <span class="material-symbols-outlined text-sm">delete</span>
            </button>
          </div>
        </div>
      `).join("");
    }

    async handleSubmitWord(event) {
      event.preventDefault();
      const phrase = document.getElementById("word-phrase").value.trim();
      const context = document.getElementById("word-context").value.trim();
      const user = window.ParaSempreAuth.getCurrentUser();

      try {
        await window.ParaSempreDB.addIndividualItem("romantic_words", { phrase, context }, user.id);
        document.getElementById("word-phrase").value = "";
        document.getElementById("word-context").value = "";
        this.closeModal("modal-add-word");
        await this.renderWords();
      } catch (e) {
        alert(e.message || "Erro ao salvar frase.");
      }
    }

    async deleteWord(id) {
      if (!confirm("Deseja apagar esta frase?")) return;
      const user = window.ParaSempreAuth.getCurrentUser();
      await window.ParaSempreDB.deleteIndividualItem("romantic_words", id, user.id);
      await this.renderWords();
    }

    /* -----------------------------
     * MAPA DE SONHOS COMPARTILHADO
     * ----------------------------- */
    async renderPlaces() {
      const container = document.getElementById("places-container");
      if (!container) return;
      const places = await window.ParaSempreDB.getDreamPlaces();

      if (!places || places.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 text-sm">Nenhum destino dos sonhos cadastrado ainda.</div>`;
        return;
      }

      container.innerHTML = places.map(place => `
        <div class="card-glass rounded-2xl overflow-hidden group flex flex-col justify-between">
          <div class="h-48 w-full relative overflow-hidden bg-slate-900">
            <img src="${place.image_url}" alt="${place.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&fit=crop';"/>
            <div class="absolute top-2 right-2">
              <span class="px-2.5 py-1 rounded-full text-[10px] font-medium ${place.visited ? 'bg-emerald-500 text-white' : 'bg-teal-600/90 text-white'}">
                ${place.visited ? 'Já Conhecemos' : 'Queremos Conhecer'}
              </span>
            </div>
            <div class="absolute bottom-2 left-3 right-3 text-white">
              <h4 class="font-editorial text-lg font-semibold truncate">${place.name}</h4>
              <p class="text-xs text-slate-300">${place.country}</p>
            </div>
          </div>
          <div class="p-4 space-y-3">
            <p class="text-xs text-slate-300 font-light leading-relaxed">${place.description || 'Um lugar incrível para visitar juntos.'}</p>
            <div class="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
              <button onclick="window.ParaSempreApp.togglePlaceVisited('${place.id}', ${!place.visited})" class="text-teal-400 hover:text-teal-300">
                ${place.visited ? 'Marcar como desejo futuro' : 'Marcar como visitado'}
              </button>
              <button onclick="window.ParaSempreApp.deletePlace('${place.id}')" class="text-slate-400 hover:text-red-400">
                <span class="material-symbols-outlined text-sm">delete</span>
              </button>
            </div>
          </div>
        </div>
      `).join("");
    }

    async handleSubmitPlace(event) {
      event.preventDefault();
      const name = document.getElementById("place-name").value.trim();
      const country = document.getElementById("place-country").value.trim();
      const image_url = document.getElementById("place-image").value.trim();
      const description = document.getElementById("place-desc").value.trim();
      const visited = document.getElementById("place-visited").checked;
      const user = window.ParaSempreAuth.getCurrentUser();

      try {
        await window.ParaSempreDB.addDreamPlace(name, country, image_url, description, visited, user ? user.id : null);
        document.getElementById("place-name").value = "";
        document.getElementById("place-country").value = "";
        document.getElementById("place-image").value = "";
        document.getElementById("place-desc").value = "";
        document.getElementById("place-visited").checked = false;
        this.closeModal("modal-add-place");
        await this.renderPlaces();
      } catch (e) {
        alert(e.message || "Erro ao adicionar destino.");
      }
    }

    async togglePlaceVisited(id, visited) {
      await window.ParaSempreDB.updateDreamPlace(id, { visited });
      await this.renderPlaces();
    }

    async deletePlace(id) {
      if (!confirm("Deseja excluir este destino?")) return;
      await window.ParaSempreDB.deleteDreamPlace(id);
      await this.renderPlaces();
    }
  }

  window.ParaSempreApp = new ParaSempreApp();

  document.addEventListener("DOMContentLoaded", () => {
    window.ParaSempreApp.init();
  });
})();
