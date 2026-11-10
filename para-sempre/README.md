# Para Sempre — Plataforma Privada de Relacionamento (Gustavo & Dudinha)

Plataforma exclusiva criada para guardar momentos inesquecíveis, músicas, cartinhas, notas, filmes, animes e sonhos de **Gustavo (Darling)** e **Dudinha**.

---

## 🎨 Identidade Visual e Áreas do Site

- **Login**: Autenticação romântica e minimalista, com bloqueio progressivo contra ataques de força bruta.
- **Área do Gustavo (Darling)**: Identidade visual azul-escuro (`#071629`), com saudações, mensagem e dedicatória final *"Te amo, Dudinha. / Você faz parte das minhas melhores histórias."*
- **Área da Dudinha**: Identidade visual vermelho-escuro (`#26090E`), com saudações, mensagem e dedicatória final *"Te amo, Darling. / Que a nossa história continue sendo escrita, um momento de cada vez."*

---

## 👥 Contas Autorizadas

| Perfil | Usuário | Senha Inicial | Rota |
|---|---|---|---|
| Gustavo (Darling) | `Darling` | `Gu527723*` | `#/gustavo` |
| Dudinha | `Dudinha` | `DudaSilva2812` | `#/dudinha` |

*Observação: Não há tela de cadastro público ou alteração de contas pela interface, garantindo a privacidade absoluta do casal.*

---

## ⚡ Funcionalidades

### 🌟 Compartilhadas (Gustavo & Dudinha)
1. **Nossa Playlist**: Player incorporado do YouTube IFrame sem abrir janelas externas, com 10 músicas iniciais pré-carregadas e suporte para adicionar novos links do YouTube com extração e validação do ID.
2. **Nossas Bandas**: Artistas favoritos (The Neighbourhood, Cigarettes After Sex, Arctic Monkeys, Charlie Brown Jr., Legião Urbana) com botão para ouvir no Spotify (`open.spotify.com/search/...`) e cadastro de novos artistas.
3. **Nosso Mapa de Sonhos**: Destinos pelo mundo com status ("Já Conhecemos" ou "Queremos Conhecer"), foto e anotações de viagem.

### 🔒 Individuais (Coleções privadas por usuário)
1. **Nossas Fotografias**: Fotos guardadas com legenda, data e visualizador ampliado em lightbox.
2. **Nossas Notas**: Pensamentos e pequenos acontecimentos com CRUD completo.
3. **Cartinhas**: Cartas românticas estilizadas como folhas de papel antigas e botão animado "Abrir cartinha".
4. **Animes**: Catálogo com status de desejado ou assistido.
5. **Filmes**: Interface inspirada em streaming com cartões de pôsteres e status visto/desejado.
6. **Palavras que Ficam**: Frases, citações e declarações de amor em destaque.

---

## 🚀 Como Executar Localmente

Como a aplicação é uma Single Page Application moderna e estática, basta iniciar qualquer servidor web local na pasta:

```bash
# Na raiz do repositório
npx serve para-sempre -p 3000
# ou com python
python3 -m http.server 3000 --directory para-sempre
```

Abra no navegador em `http://localhost:3000`.

---

## 🗄️ Integração com Supabase (Opcional para Nuvem)

A aplicação conta com um sistema inteligente de fallback: funciona de imediato com **LocalStorage persistente** (sem necessidade de chaves externas para testes ou demonstração).

Para conectar a um projeto Supabase próprio em nuvem:
1. Crie um projeto no [Supabase](https://supabase.com).
2. Vá no **SQL Editor** do Supabase e execute o script contido em `para-sempre/supabase/schema.sql`.
3. Edite o arquivo `para-sempre/config.js` inserindo suas credenciais:
   ```javascript
   window.SUPABASE_URL = "https://seu-projeto.supabase.co";
   window.SUPABASE_ANON_KEY = "sua-anon-key-publica";
   ```
4. As tabelas compartilhadas e individuais serão sincronizadas automaticamente com o PostgreSQL e Storage do Supabase via RLS.
