import { Star, MonitorPlay } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";

import FormatNumber from "../utils/formatNumber";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { AnimeData } from "@/types/index";
import EmblaSlide from "./carousel/EmblaSlide";
import "./carousel/embla.css";

import fetchData from "@/utils/fetchData";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  duration: 50,
};

export default async function TopAnime({ q }: { q?: string }) {
  const res = await fetchData<AnimeData[]>(`top/anime${q}`);
  if (res.ok === false) return <div>{res.message}</div>;

  const topAnime = res.data;

  return (
    <EmblaCarousel options={OPTIONS}>
      {topAnime.map((anime, index) => (
        <EmblaSlide
          key={anime.mal_id}
          className="flex items-center flex-[0_0_100%] sm:flex-[0_0_70%] lg:flex-[0_0_50%] embla__class-names"
        >
          <div className="flex-1">
            <div className="w-full flex-wrap flex gap-2 md:gap-4 select-none h-full">
              <div
                className="w-[130px] h-[185px]
                     sm:w-[190px] sm:h-[270px]
                     lg:w-[240px] lg:h-[341px] border cursor-pointer transition hover:brightness-90"
              >
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  className="max-w-full w-full h-full"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-foreground text-[1.25rem] font-bold mb-1 capitalize hover:underline cursor-pointer">
                  <span className="text-accent-foreground/50 text-[1.25rem] font-bold mr-1">
                    {index + 1}.
                  </span>
                  {anime.title}
                </h3>
                <Separator />
                <div className="flex-1 flex justify-between flex-col text-sm sm:text-lg text-foreground/70 capitalize">
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <p>
                        {anime.type}, {anime.rating.split(" ")[0]}
                      </p>
                      <p>{anime.status}</p>
                      <p>{anime.broadcast.string}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} fill="#FFD700" />
                      {anime.score}{" "}
                      <TooltipProvider>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger>
                            ({FormatNumber(anime.scored_by)})
                          </TooltipTrigger>
                          <TooltipContent className="bg-background border border-foreground/20">
                            {anime.scored_by}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center flex-wrap justify-between gap-2">
                    <Separator />
                    <Button variant={"outline"}>Explore</Button>
                    <Button>
                      <MonitorPlay className="mr-3" />
                      Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:hidden mt-2 flex-1 items-center flex-wrap justify-between gap-2">
              <Separator />
              <Button variant={"outline"}>Explore</Button>
              <Button>
                <MonitorPlay className="mr-3" />
                Trailer
              </Button>
            </div>
          </div>
        </EmblaSlide>
      ))}
    </EmblaCarousel>
  );
}
