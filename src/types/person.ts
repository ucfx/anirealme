import { AnimeInfo } from "./anime";
import { Voices } from "./voice";

export type Person = {
  mal_id: number;
  url: string;
  website_url: string | null;
  images: {
    jpg: {
      image_url: string;
    };
  };
  name: string;
  given_name: string | null;
  family_name: string | null;
  alternate_names: string[];
  birthday: string;
  favorites: number;
  about: string;
  anime: AnimeInfo[];
  //   manga: MangaInfo[];
} & Voices;
