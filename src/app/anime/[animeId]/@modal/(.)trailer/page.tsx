import Modal, { ModalTitle } from "@/components/Modal";
import type { Metadata } from "next";
import fetchData from "@/utils/fetchData";
import FetchError from "@/components/FetchError";
import { AnimeData } from "@/types";
import Video from "@/components/Video";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

type Props = {
  params: { animeId: string };
};

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
    return (
      <Modal>
        <ModalTitle>Error</ModalTitle>
        <FetchError msg={res.message} />
      </Modal>
    );
  }

  const youtube_id = res.data.trailer.youtube_id;

  if (!youtube_id) {
    return (
      <Modal>
        <ModalTitle>No Trailer Available</ModalTitle>
        <p className="text-center text-foreground/70 py-6">
          No trailer available for this anime
        </p>
      </Modal>
    );
  }

  return (
    <Modal>
      <ModalTitle className="flex items-center gap-2 text-xl">
        Trailer: {res.data.titles[0].title}
        <Button
          variant="link"
          className="w-6 h-6 p-[4px] text-foreground/70 hover:text-foreground"
          asChild
        >
          <a href={`/anime/${animeId}/trailer`}>
            <SquareArrowOutUpRight size={16} />
          </a>
        </Button>
      </ModalTitle>
      <Video youtube_id={youtube_id} className="h-[300px]" />
    </Modal>
  );
}
