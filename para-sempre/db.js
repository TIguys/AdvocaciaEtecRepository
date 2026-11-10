/**
 * Banco de Dados e Camada de Persistência — Projeto Para Sempre
 *
 * Suporta integração com Supabase (quando configurado) ou LocalStorage transparente
 * com sincronização imediata, respeitando a separação entre dados compartilhados
 * (playlists, bandas, lugares) e individuais (fotos, notas, cartas, animes, filmes, palavras).
 */

(function () {
  const STORAGE_KEY_PREFIX = "para_sempre_";

  const INITIAL_TRACKS = [
    { id: "1", title: "Musica 01", youtube_url: "https://youtu.be/pqrUQrAcfo4", video_id: "pqrUQrAcfo4", thumbnail_url: "https://img.youtube.com/vi/pqrUQrAcfo4/hqdefault.jpg", created_at: new Date(Date.now() - 1000000).toISOString() },
    { id: "2", title: "Musica 02", youtube_url: "https://youtu.be/x47TgeRJtH0", video_id: "x47TgeRJtH0", thumbnail_url: "https://img.youtube.com/vi/x47TgeRJtH0/hqdefault.jpg", created_at: new Date(Date.now() - 900000).toISOString() },
    { id: "3", title: "Musica 03", youtube_url: "https://youtu.be/Jir-WItz1OI", video_id: "Jir-WItz1OI", thumbnail_url: "https://img.youtube.com/vi/Jir-WItz1OI/hqdefault.jpg", created_at: new Date(Date.now() - 800000).toISOString() },
    { id: "4", title: "Musica 04", youtube_url: "https://youtu.be/ggG9ySCChYw", video_id: "ggG9ySCChYw", thumbnail_url: "https://img.youtube.com/vi/ggG9ySCChYw/hqdefault.jpg", created_at: new Date(Date.now() - 700000).toISOString() },
    { id: "5", title: "Musica 05", youtube_url: "https://youtu.be/eG4mIKjrOq0", video_id: "eG4mIKjrOq0", thumbnail_url: "https://img.youtube.com/vi/eG4mIKjrOq0/hqdefault.jpg", created_at: new Date(Date.now() - 600000).toISOString() },
    { id: "6", title: "Musica 06", youtube_url: "https://youtu.be/6IOiB1gJrqA", video_id: "6IOiB1gJrqA", thumbnail_url: "https://img.youtube.com/vi/6IOiB1gJrqA/hqdefault.jpg", created_at: new Date(Date.now() - 500000).toISOString() },
    { id: "7", title: "Musica 07", youtube_url: "https://youtu.be/M4uG1MmZVl0", video_id: "M4uG1MmZVl0", thumbnail_url: "https://img.youtube.com/vi/M4uG1MmZVl0/hqdefault.jpg", created_at: new Date(Date.now() - 400000).toISOString() },
    { id: "8", title: "Musica 08", youtube_url: "https://youtu.be/iggmiF7DNoM", video_id: "iggmiF7DNoM", thumbnail_url: "https://img.youtube.com/vi/iggmiF7DNoM/hqdefault.jpg", created_at: new Date(Date.now() - 300000).toISOString() },
    { id: "9", title: "Musica 09", youtube_url: "https://youtu.be/BI9HQCzpDgQ", video_id: "BI9HQCzpDgQ", thumbnail_url: "https://img.youtube.com/vi/BI9HQCzpDgQ/hqdefault.jpg", created_at: new Date(Date.now() - 200000).toISOString() },
    { id: "10", title: "Musica 10", youtube_url: "https://youtu.be/wbpCa2SDr_I", video_id: "wbpCa2SDr_I", thumbnail_url: "https://img.youtube.com/vi/wbpCa2SDr_I/hqdefault.jpg", created_at: new Date(Date.now() - 100000).toISOString() }
  ];

  const INITIAL_ARTISTS = [
    { id: "1", name: "The Neighbourhood", image_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80", spotify_url: "https://open.spotify.com/search/The%20Neighbourhood", created_at: new Date().toISOString() },
    { id: "2", name: "Cigarettes After Sex", image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80", spotify_url: "https://open.spotify.com/search/Cigarettes%20After%20Sex", created_at: new Date().toISOString() },
    { id: "3", name: "Arctic Monkeys", image_url: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=600&auto=format&fit=crop&q=80", spotify_url: "https://open.spotify.com/search/Arctic%20Monkeys", created_at: new Date().toISOString() },
    { id: "4", name: "Charlie Brown Jr.", image_url: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80", spotify_url: "https://open.spotify.com/search/Charlie%20Brown%20Jr", created_at: new Date().toISOString() },
    { id: "5", name: "Legião Urbana", image_url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80", spotify_url: "https://open.spotify.com/search/Legiao%20Urbana", created_at: new Date().toISOString() }
  ];

  const INITIAL_PLACES = [
    { id: "1", name: "Paris", country: "França", image_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80", description: "Caminhar pelas margens do Sena ao entardecer e ver a Torre Eiffel iluminada.", visited: false, created_at: new Date().toISOString() },
    { id: "2", name: "Quioto", country: "Japão", image_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80", description: "Ver as cerejeiras florescendo e passear pelos templos históricos.", visited: false, created_at: new Date().toISOString() }
  ];

  class ParaSempreDB {
    constructor() {
      this.supabase = null;
      this.initSupabase();
      this.initLocalStorageDefaults();
    }

    initSupabase() {
      if (window.SUPABASE_URL && window.SUPABASE_ANON_KEY && window.supabase) {
        try {
          this.supabase = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
          console.log("[ParaSempreDB] Conectado ao Supabase com sucesso.");
        } catch (e) {
          console.warn("[ParaSempreDB] Falha ao inicializar cliente Supabase, utilizando LocalStorage:", e);
        }
      }
    }

    initLocalStorageDefaults() {
      if (!localStorage.getItem(STORAGE_KEY_PREFIX + "music_tracks")) {
        localStorage.setItem(STORAGE_KEY_PREFIX + "music_tracks", JSON.stringify(INITIAL_TRACKS));
      }
      if (!localStorage.getItem(STORAGE_KEY_PREFIX + "artists")) {
        localStorage.setItem(STORAGE_KEY_PREFIX + "artists", JSON.stringify(INITIAL_ARTISTS));
      }
      if (!localStorage.getItem(STORAGE_KEY_PREFIX + "dream_places")) {
        localStorage.setItem(STORAGE_KEY_PREFIX + "dream_places", JSON.stringify(INITIAL_PLACES));
      }
      // Inicializar coleções vazias se não existirem
      const collections = ["photos", "notes", "letters", "anime_watchlist", "movie_watchlist", "romantic_words"];
      collections.forEach(col => {
        if (!localStorage.getItem(STORAGE_KEY_PREFIX + col)) {
          localStorage.setItem(STORAGE_KEY_PREFIX + col, JSON.stringify([]));
        }
      });
    }

    // Helper genérico para buscar dados locais
    getLocalTable(table) {
      try {
        const data = localStorage.getItem(STORAGE_KEY_PREFIX + table);
        return data ? JSON.parse(data) : [];
      } catch (e) {
        console.error("Erro ao ler tabela local " + table, e);
        return [];
      }
    }

    saveLocalTable(table, data) {
      localStorage.setItem(STORAGE_KEY_PREFIX + table, JSON.stringify(data));
    }

    /* -----------------------------
     * MÚSICAS COMPARTILHADAS
     * ----------------------------- */
    async getMusicTracks() {
      if (this.supabase) {
        try {
          const { data, error } = await this.supabase
            .from("music_tracks")
            .select("*")
            .order("created_at", { ascending: false });
          if (!error && data && data.length > 0) return data;
        } catch (err) {
          console.warn("Supabase tracks fallback:", err);
        }
      }
      const list = this.getLocalTable("music_tracks");
      return list.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    }

    async addMusicTrack(title, youtubeUrl, videoId, userId) {
      const newTrack = {
        id: "track_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        title: title || "Música sem título",
        youtube_url: youtubeUrl,
        video_id: videoId,
        thumbnail_url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        added_by: userId,
        created_at: new Date().toISOString()
      };

      if (this.supabase) {
        try {
          const { data, error } = await this.supabase
            .from("music_tracks")
            .insert([{
              title: newTrack.title,
              youtube_url: newTrack.youtube_url,
              video_id: newTrack.video_id,
              thumbnail_url: newTrack.thumbnail_url
            }])
            .select();
          if (!error && data && data.length) return data[0];
        } catch (err) {
          console.warn("Supabase insert music fallback:", err);
        }
      }

      const list = this.getLocalTable("music_tracks");
      // Evitar duplicata de video_id
      if (list.some(t => t.video_id === videoId)) {
        throw new Error("Esta música já existe na playlist!");
      }
      list.unshift(newTrack);
      this.saveLocalTable("music_tracks", list);
      return newTrack;
    }

    /* -----------------------------
     * ARTISTAS COMPARTILHADOS
     * ----------------------------- */
    async getArtists() {
      if (this.supabase) {
        try {
          const { data, error } = await this.supabase
            .from("artists")
            .select("*")
            .order("created_at", { ascending: false });
          if (!error && data && data.length > 0) return data;
        } catch (err) {
          console.warn("Supabase artists fallback:", err);
        }
      }
      const list = this.getLocalTable("artists");
      return list.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    }

    async addArtist(name, imageUrl, spotifyUrl) {
      const generatedSpotify = spotifyUrl || `https://open.spotify.com/search/${encodeURIComponent(name)}`;
      const newArtist = {
        id: "artist_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        name: name,
        image_url: imageUrl || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
        spotify_url: generatedSpotify,
        created_at: new Date().toISOString()
      };

      if (this.supabase) {
        try {
          const { data, error } = await this.supabase
            .from("artists")
            .insert([{
              name: newArtist.name,
              image_url: newArtist.image_url,
              spotify_url: newArtist.spotify_url
            }])
            .select();
          if (!error && data && data.length) return data[0];
        } catch (err) {
          console.warn("Supabase insert artist fallback:", err);
        }
      }

      const list = this.getLocalTable("artists");
      list.unshift(newArtist);
      this.saveLocalTable("artists", list);
      return newArtist;
    }

    /* -----------------------------
     * LUGARES COMPARTILHADOS (MAPA DE SONHOS)
     * ----------------------------- */
    async getDreamPlaces() {
      if (this.supabase) {
        try {
          const { data, error } = await this.supabase
            .from("dream_places")
            .select("*")
            .order("created_at", { ascending: false });
          if (!error && data && data.length > 0) return data;
        } catch (err) {
          console.warn("Supabase places fallback:", err);
        }
      }
      return this.getLocalTable("dream_places");
    }

    async addDreamPlace(name, country, imageUrl, description, visited, userId) {
      const newPlace = {
        id: "place_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        name,
        country: country || "",
        image_url: imageUrl || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80",
        description: description || "",
        visited: Boolean(visited),
        added_by: userId,
        created_at: new Date().toISOString()
      };

      if (this.supabase) {
        try {
          const { data, error } = await this.supabase
            .from("dream_places")
            .insert([newPlace])
            .select();
          if (!error && data && data.length) return data[0];
        } catch (err) {
          console.warn("Supabase add place fallback:", err);
        }
      }

      const list = this.getLocalTable("dream_places");
      list.unshift(newPlace);
      this.saveLocalTable("dream_places", list);
      return newPlace;
    }

    async updateDreamPlace(id, updates) {
      if (this.supabase) {
        try {
          await this.supabase.from("dream_places").update(updates).eq("id", id);
        } catch (err) {
          console.warn("Supabase update place fallback:", err);
        }
      }
      const list = this.getLocalTable("dream_places");
      const idx = list.findIndex(p => p.id === id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...updates, updated_at: new Date().toISOString() };
        this.saveLocalTable("dream_places", list);
        return list[idx];
      }
      return null;
    }

    async deleteDreamPlace(id) {
      if (this.supabase) {
        try {
          await this.supabase.from("dream_places").delete().eq("id", id);
        } catch (err) {
          console.warn("Supabase delete place fallback:", err);
        }
      }
      const list = this.getLocalTable("dream_places").filter(p => p.id !== id);
      this.saveLocalTable("dream_places", list);
    }

    /* -----------------------------
     * ITENS INDIVIDUAIS (FOTOS, NOTAS, CARTAS, ANIMES, FILMES, PALAVRAS)
     * Filtrados obrigatoriamente por owner_id
     * ----------------------------- */
    async getIndividualItems(table, ownerId) {
      if (!ownerId) return [];
      if (this.supabase) {
        try {
          const { data, error } = await this.supabase
            .from(table)
            .select("*")
            .eq("owner_id", ownerId)
            .order("created_at", { ascending: false });
          if (!error && data) return data;
        } catch (err) {
          console.warn(`Supabase get ${table} fallback:`, err);
        }
      }
      const list = this.getLocalTable(table);
      return list.filter(item => item.owner_id === ownerId).sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    }

    async addIndividualItem(table, itemData, ownerId) {
      if (!ownerId) throw new Error("Usuário não identificado para salvar item individual.");
      const newItem = {
        ...itemData,
        id: `${table}_` + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        owner_id: ownerId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      if (this.supabase) {
        try {
          const { data, error } = await this.supabase
            .from(table)
            .insert([newItem])
            .select();
          if (!error && data && data.length) return data[0];
        } catch (err) {
          console.warn(`Supabase add ${table} fallback:`, err);
        }
      }

      const list = this.getLocalTable(table);
      list.unshift(newItem);
      this.saveLocalTable(table, list);
      return newItem;
    }

    async updateIndividualItem(table, id, updates, ownerId) {
      if (!ownerId) throw new Error("Acesso não autorizado.");
      if (this.supabase) {
        try {
          await this.supabase.from(table).update(updates).eq("id", id).eq("owner_id", ownerId);
        } catch (err) {
          console.warn(`Supabase update ${table} fallback:`, err);
        }
      }
      const list = this.getLocalTable(table);
      const idx = list.findIndex(item => item.id === id && item.owner_id === ownerId);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...updates, updated_at: new Date().toISOString() };
        this.saveLocalTable(table, list);
        return list[idx];
      }
      return null;
    }

    async deleteIndividualItem(table, id, ownerId) {
      if (!ownerId) throw new Error("Acesso não autorizado.");
      if (this.supabase) {
        try {
          await this.supabase.from(table).delete().eq("id", id).eq("owner_id", ownerId);
        } catch (err) {
          console.warn(`Supabase delete ${table} fallback:`, err);
        }
      }
      const list = this.getLocalTable(table).filter(item => !(item.id === id && item.owner_id === ownerId));
      this.saveLocalTable(table, list);
    }
  }

  window.ParaSempreDB = new ParaSempreDB();
})();
