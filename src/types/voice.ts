import { AnimeInfo } from "./anime";
import { ImageJpg, ImageWebp } from "./image";

export type Voice = {
  role: string;
  anime: AnimeInfo;
  character: {
    mal_id: number;
    url: string;
    images: {
      jpg: ImageJpg;
      webp: ImageWebp;
    };
    name: string;
  };
};

export type Voices = {
  voices: Voice[];
};
