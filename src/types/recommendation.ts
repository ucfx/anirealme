import { ImageUrls } from "./image";

export type AnimeRecommendation = {
  entry: {
    mal_id: number;
    url: string;
    images: {
      jpg: ImageUrls;
      webp: ImageUrls;
    };
    title: string;
  };
  url: string;
  votes: number;
};
