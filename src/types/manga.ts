import { Aired, Genre, Title } from "./anime";
import { ImageUrls } from "./image";

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
    base64: string;
    // info: ImageInfo;
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
