import { AnimeInfo } from "./anime";
import { ImageJpg, ImageWebp } from "./image";

export type VoiceActor = {
  person: {
    mal_id: number;
    url: string;
    images: {
      base64: string;
      jpg: ImageJpg;
    };
    name: string;
  };
  language: string;
};

export type CharacterInfo = {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageJpg;
    webp: ImageWebp;
  };
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string | null;
};

type AnimeRole = {
  role: string;
  anime: AnimeInfo;
};

type MangaRole = {
  role: string;
  manga: AnimeInfo;
};

export type CharacterFull = {
  anime: AnimeRole[];
  manga: MangaRole[];
  voices: VoiceActor[];
} & CharacterInfo;

export type Character = {
  character: CharacterInfo;
  role: string;
  voice_actors: VoiceActor[];
  favorites: number;
};
