type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};

type ImageUrls = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

type TrailerImages = {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
};

type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: TrailerImages;
};

type Title = {
  type: string;
  title: string;
};

type AiredDate = {
  day: number;
  month: number;
  year: number;
};

type AiredProp = {
  from: AiredDate;
  to: AiredDate;
};

type Aired = {
  from: string;
  to: string | null;
  prop: AiredProp;
  string: string;
};

type Producer = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Studio = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type AnimeData = {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageUrls;
    webp: ImageUrls;
  };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number | null;
  popularity: number | null;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: Producer[];
  licensors: any[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
};

type Author = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Serialization = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type MangaData = {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageUrls;
    webp: ImageUrls;
  };
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string;
  chapters: number | null;
  volumes: number | null;
  status: string;
  publishing: boolean;
  published: Aired;
  score: number;
  scored: number;
  scored_by: number;
  rank: number | null;
  popularity: number | null;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  authors: Author[];
  serializations: Serialization[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
};

export type MangaApiResponse = {
  pagination: Pagination;
  data: MangaData[];
};

export type AnimeApiResponse = {
  pagination: Pagination;
  data: AnimeData[];
};
