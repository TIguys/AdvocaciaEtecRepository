
-- ============================================================
--             PROJETO PARA SEMPRE
--       BANCO DE DADOS COMPLETO - SUPABASE
-- ============================================================
-- Execute em um projeto Supabase NOVO.
-- Backend exclusivo: Supabase PostgreSQL + Auth + Storage.
-- ============================================================

begin;

-- ============================================================
-- 01. EXTENSOES
-- ============================================================

create extension if not exists pgcrypto;

-- ============================================================
-- 02. PERFIS DOS USUARIOS
-- ============================================================

create table public.profiles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid unique references auth.users(id) on delete cascade,
    username text not null unique,
    display_name text not null,
    role text not null unique
        check (role in ('gustavo', 'dudinha')),
    avatar_url text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

insert into public.profiles
(username, display_name, role)
values
('Darling', 'Gustavo', 'gustavo'),
('Dudinha', 'Dudinha', 'dudinha');

-- ============================================================
-- 03. FUNCOES DE SEGURANCA
-- ============================================================

create or replace function public.is_authorized_user()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
    select exists (
        select 1
        from public.profiles p
        where p.user_id = (select auth.uid())
    );
$$;

create or replace function public.update_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

revoke all on function public.is_authorized_user() from public;
grant execute on function public.is_authorized_user() to authenticated;

-- ============================================================
-- 04. MUSICAS COMPARTILHADAS
-- ============================================================

create table public.music_tracks (
    id uuid primary key default gen_random_uuid(),
    title text not null default 'Nova musica',
    youtube_url text not null,
    video_id text not null unique,
    thumbnail_url text,
    added_by uuid references auth.users(id) on delete set null,
    created_at timestamptz not null default now()
);

-- ============================================================
-- 05. BANDAS E ARTISTAS
-- ============================================================

create table public.artists (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    image_url text,
    spotify_url text,
    added_by uuid references auth.users(id) on delete set null,
    created_at timestamptz not null default now()
);

-- ============================================================
-- 06. FOTOGRAFIAS INDIVIDUAIS
-- ============================================================

create table public.photos (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users(id) on delete cascade,
    title text,
    description text,
    image_path text not null,
    created_at timestamptz not null default now()
);

-- ============================================================
-- 07. NOTAS INDIVIDUAIS
-- ============================================================

create table public.notes (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users(id) on delete cascade,
    title text not null,
    content text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ============================================================
-- 08. CARTAS INDIVIDUAIS
-- ============================================================

create table public.letters (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users(id) on delete cascade,
    title text not null,
    content text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ============================================================
-- 09. ANIMES INDIVIDUAIS
-- ============================================================

create table public.anime_watchlist (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users(id) on delete cascade,
    title text not null,
    image_url text,
    description text,
    watched boolean not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ============================================================
-- 10. FILMES INDIVIDUAIS
-- ============================================================

create table public.movie_watchlist (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users(id) on delete cascade,
    title text not null,
    image_url text,
    description text,
    watched boolean not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ============================================================
-- 11. PALAVRAS ROMANTICAS INDIVIDUAIS
-- ============================================================

create table public.romantic_words (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users(id) on delete cascade,
    content text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ============================================================
-- 12. LUGARES DO MUNDO COMPARTILHADOS
-- ============================================================

create table public.dream_places (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    country text,
    image_url text,
    description text,
    visited boolean not null default false,
    added_by uuid references auth.users(id) on delete set null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ============================================================
-- 13. TRIGGERS DE ATUALIZACAO
-- ============================================================

create trigger profiles_updated_at
before update on public.profiles
for each row execute function public.update_updated_at();

create trigger notes_updated_at
before update on public.notes
for each row execute function public.update_updated_at();

create trigger letters_updated_at
before update on public.letters
for each row execute function public.update_updated_at();

create trigger anime_updated_at
before update on public.anime_watchlist
for each row execute function public.update_updated_at();

create trigger movies_updated_at
before update on public.movie_watchlist
for each row execute function public.update_updated_at();

create trigger words_updated_at
before update on public.romantic_words
for each row execute function public.update_updated_at();

create trigger places_updated_at
before update on public.dream_places
for each row execute function public.update_updated_at();

-- ============================================================
-- 14. INDICES PARA DESEMPENHO
-- ============================================================

create index photos_owner_idx on public.photos(owner_id);
create index notes_owner_idx on public.notes(owner_id);
create index letters_owner_idx on public.letters(owner_id);
create index anime_owner_idx on public.anime_watchlist(owner_id);
create index movies_owner_idx on public.movie_watchlist(owner_id);
create index words_owner_idx on public.romantic_words(owner_id);
create index music_created_idx on public.music_tracks(created_at);
create index artists_created_idx on public.artists(created_at);
create index places_created_idx on public.dream_places(created_at);

-- ============================================================
-- 15. ROW LEVEL SECURITY
-- ============================================================

alter table public.profiles enable row level security;
alter table public.music_tracks enable row level security;
alter table public.artists enable row level security;
alter table public.photos enable row level security;
alter table public.notes enable row level security;
alter table public.letters enable row level security;
alter table public.anime_watchlist enable row level security;
alter table public.movie_watchlist enable row level security;
alter table public.romantic_words enable row level security;
alter table public.dream_places enable row level security;

-- ============================================================
-- 16. POLITICAS DOS PERFIS
-- ============================================================

create policy "Visualizar proprio perfil"
on public.profiles
for select
to authenticated
using (user_id = (select auth.uid()));

-- ============================================================
-- 17. POLITICAS DAS TABELAS COMPARTILHADAS
-- ============================================================

create policy "Musicas compartilhadas"
on public.music_tracks
for all
to authenticated
using (public.is_authorized_user())
with check (public.is_authorized_user());

create policy "Artistas compartilhados"
on public.artists
for all
to authenticated
using (public.is_authorized_user())
with check (public.is_authorized_user());

create policy "Lugares compartilhados"
on public.dream_places
for all
to authenticated
using (public.is_authorized_user())
with check (public.is_authorized_user());

-- ============================================================
-- 18. POLITICAS DAS TABELAS INDIVIDUAIS
-- ============================================================

create policy "Fotos privadas"
on public.photos
for all
to authenticated
using (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
)
with check (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
);

create policy "Notas privadas"
on public.notes
for all
to authenticated
using (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
)
with check (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
);

create policy "Cartas privadas"
on public.letters
for all
to authenticated
using (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
)
with check (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
);

create policy "Animes privados"
on public.anime_watchlist
for all
to authenticated
using (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
)
with check (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
);

create policy "Filmes privados"
on public.movie_watchlist
for all
to authenticated
using (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
)
with check (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
);

create policy "Palavras privadas"
on public.romantic_words
for all
to authenticated
using (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
)
with check (
    public.is_authorized_user()
    and owner_id = (select auth.uid())
);

-- ============================================================
-- 19. PERMISSOES DE ACESSO
-- ============================================================

grant usage on schema public to authenticated;

grant select on public.profiles to authenticated;

grant select, insert, update, delete
on public.music_tracks,
   public.artists,
   public.photos,
   public.notes,
   public.letters,
   public.anime_watchlist,
   public.movie_watchlist,
   public.romantic_words,
   public.dream_places
to authenticated;

-- ============================================================
-- 20. STORAGE DE FOTOGRAFIAS
-- ============================================================

insert into storage.buckets (id, name, public)
values (
    'para-sempre-photos',
    'para-sempre-photos',
    false
)
on conflict (id) do nothing;

create policy "Ler fotografias proprias"
on storage.objects
for select
to authenticated
using (
    bucket_id = 'para-sempre-photos'
    and public.is_authorized_user()
    and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "Enviar fotografias proprias"
on storage.objects
for insert
to authenticated
with check (
    bucket_id = 'para-sempre-photos'
    and public.is_authorized_user()
    and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "Atualizar fotografias proprias"
on storage.objects
for update
to authenticated
using (
    bucket_id = 'para-sempre-photos'
    and public.is_authorized_user()
    and (storage.foldername(name))[1] = (select auth.uid())::text
)
with check (
    bucket_id = 'para-sempre-photos'
    and public.is_authorized_user()
    and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "Excluir fotografias proprias"
on storage.objects
for delete
to authenticated
using (
    bucket_id = 'para-sempre-photos'
    and public.is_authorized_user()
    and (storage.foldername(name))[1] = (select auth.uid())::text
);

-- ============================================================
-- 21. DADOS INICIAIS - PLAYLIST
-- ============================================================

insert into public.music_tracks
(title, youtube_url, video_id)
values
('Musica 01', 'https://youtu.be/pqrUQrAcfo4', 'pqrUQrAcfo4'),
('Musica 02', 'https://youtu.be/x47TgeRJtH0', 'x47TgeRJtH0'),
('Musica 03', 'https://youtu.be/Jir-WItz1OI', 'Jir-WItz1OI'),
('Musica 04', 'https://youtu.be/ggG9ySCChYw', 'ggG9ySCChYw'),
('Musica 05', 'https://youtu.be/eG4mIKjrOq0', 'eG4mIKjrOq0'),
('Musica 06', 'https://youtu.be/6IOiB1gJrqA', '6IOiB1gJrqA'),
('Musica 07', 'https://youtu.be/M4uG1MmZVl0', 'M4uG1MmZVl0'),
('Musica 08', 'https://youtu.be/iggmiF7DNoM', 'iggmiF7DNoM'),
('Musica 09', 'https://youtu.be/BI9HQCzpDgQ', 'BI9HQCzpDgQ'),
('Musica 10', 'https://youtu.be/wbpCa2SDr_I', 'wbpCa2SDr_I')
on conflict (video_id) do nothing;

-- ============================================================
-- 22. DADOS INICIAIS - BANDAS
-- ============================================================

insert into public.artists (name, spotify_url)
values
('The Neighbourhood', 'https://open.spotify.com/search/The%20Neighbourhood'),
('Cigarettes After Sex', 'https://open.spotify.com/search/Cigarettes%20After%20Sex'),
('Arctic Monkeys', 'https://open.spotify.com/search/Arctic%20Monkeys'),
('Charlie Brown Jr.', 'https://open.spotify.com/search/Charlie%20Brown%20Jr'),
('Legiao Urbana', 'https://open.spotify.com/search/Legiao%20Urbana');

-- ============================================================
-- 23. PUBLICACAO NO REALTIME
-- ============================================================

do $$
declare
    t text;
begin
    foreach t in array array[
        'music_tracks',
        'artists',
        'dream_places'
    ]
    loop
        if not exists (
            select 1
            from pg_publication_tables
            where pubname = 'supabase_realtime'
            and schemaname = 'public'
            and tablename = t
        ) then
            execute format(
                'alter publication supabase_realtime add table public.%I',
                t
            );
        end if;
    end loop;
end;
$$;

commit;

-- ============================================================
-- FIM DO BANCO DE DADOS PARA SEMPRE
-- ============================================================
