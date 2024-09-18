type Props = {
  params: { animeId: string };
};

import fetchData from "@/lib/fetchData";
import FetchError from "@/components/FetchError";
import { AnimeData } from "@/types/anime";
import Video from "@/components/Video";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { animeId } = params;
  const res = await fetchData<AnimeData>(`anime/${animeId}`);
  if (!res.ok) return { title: "", description: "" };

  const anime = res.data;
  return {
    title: `Trailer: ${anime.title}`,
    description: anime.synopsis,
  };
}

export default async function TrailerPage({ params }: Props) {
  const { animeId } = params;
  const res = await fetchData<AnimeData>(`anime/${animeId}`);
  if (!res.ok) {
    return <FetchError msg={res.message} />;
  }

  const anime = res.data;

  const youtube_id = anime.trailer.youtube_id;

  if (!youtube_id) {
    return (
      <p className="text-center text-foreground/70">
        No trailer available for this anime.
      </p>
    );
  }

  return (
    <div className="container">
      <h2 className="py-5 text-3xl font-bold text-center">
        Trailer: <span>{anime.titles[0].title}</span>
      </h2>
      <Video
        youtube_id={youtube_id}
        className="w-full max-w-[800px] h-[250px] sm:h-[400px] md:h-[500px] mx-auto"
      />
    </div>
  );
}
