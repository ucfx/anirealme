import { AnimeRecommendation } from "@/types/recommendation";
import Link from "next/link";
import React from "react";
import { Div } from "@/components/use-client";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
const RecommendationCard = function RecommendationCard({
  anime,
  index,
}: {
  anime: AnimeRecommendation;
  index: number;
}) {
  return (
    <Div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: (index % 10) * 0.1,
      }}
      key={anime.entry.mal_id}
      className="w-full bg-accent/50 p-4 rounded-xl flex flex-col items-center"
    >
      <Link
        href={`/anime/${anime.entry.mal_id}`}
        prefetch={false}
        className="w-[130px] h-[185px] bg-secondary rounded-xl
                     sm:w-[190px] sm:h-[250px]
                     lg:w-[240px] lg:h-[321px] max-w-full justify-self-center flex flex-col justify-center border cursor-pointer transition hover:brightness-90"
      >
        <Image
          src={anime.entry.images.webp.image_url}
          alt={anime.entry.title}
          width={240}
          height={341}
          className="max-h-full w-full rounded-xl"
        />
      </Link>
      <div className="flex-1 flex flex-col justify-between w-full">
        <h4 className="text-center">{anime.entry.title}</h4>
        <span className="text-center flex items-center justify-center text-lg mt-2">
          <ThumbsUp size={20} className="inline-block mr-1" />
          {anime.votes} votes
        </span>
      </div>
    </Div>
  );
};

export default RecommendationCard;
