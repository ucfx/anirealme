import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimeData } from "@/types/anime";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AnimeCard({ anime }: { anime: AnimeData }) {
  return (
    <div className="flex flex-col bg-accent/40 h-full p-4 rounded-md shadow-[rgba(14,_30,_37,_0.12)_0px_2px_4px_0px,_rgba(14,_30,_37,_0.32)_0px_2px_16px_0px]">
      <Link
        href={`/anime/${anime.mal_id}`}
        className="w-[130px] h-[170px]
                     justify-self-center self-center max-w-full flex flex-col justify-center border cursor-pointer transition hover:brightness-90"
      >
        <Image
          src={anime.images.webp.image_url}
          alt={anime.titles[0].title}
          width={130}
          height={185}
          className="max-h-full w-full object-cover"
        />
      </Link>
      <div className="flex-1 flex flex-col overflow-hidden">
        <TooltipProvider>
          <Tooltip delayDuration={100}>
            <TooltipTrigger className="cursor-default">
              <h2 className="max-w-full whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-sm mt-2">
                {anime.title}
              </h2>
            </TooltipTrigger>
            <TooltipContent className="bg-background border border-foreground/20">
              {anime.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* <h2 className="max-w-full whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-sm mt-2">
          {anime.title}
        </h2> */}

        <div className="flex-1 flex items-end justify-center mt-2">
          <Star
            size={24}
            className="inline fill-yellow-300 stroke-yellow-300"
          />
          <span className="text-xl ml-1 font-normal">{anime.score}</span>
        </div>
      </div>
    </div>
  );
}
