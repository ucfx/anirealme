import { ImageUrls, TrailerImages } from "./image";
export type AnimeImages = {
  jpg: ImageUrls;
  webp: ImageUrls;
};

export type AnimeInfo = {
  mal_id: number;
  url: string;
  images: AnimeImages;
  title: string;
};

type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: TrailerImages;
};

type Nullify<T> = {
  [K in keyof T]: null;
};

export type Title = {
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

export type Aired = {
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

export type Genre = {
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
  trailer: Trailer | Nullify<Trailer>;
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
