import { Star } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import FormatNumber from "../utils/formatNumber";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { MangaData, AnimeData } from "@/types/index";
import EmblaSlide from "./carousel/EmblaSlide";
import "./carousel/embla.css";

import fetchData from "@/utils/fetchData";
import FetchError from "./FetchError";
import Image from "next/image";
import Link from "next/link";
import * as Motion from "./use-client";
import { scrollFade } from "@/constant/animation";
import { Badge } from "./ui/badge";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  duration: 50,
};

export default async function AnimeCarousel({
  endpoint,
}: {
  endpoint: string;
}) {
  const res = await fetchData<AnimeData[] | MangaData[]>(endpoint);
  if (!res.ok) return <FetchError msg={res.message} />;
  const data = res.data;

  return (
    <EmblaCarousel options={OPTIONS}>
      {data.map((anime, index) => (
        <EmblaSlide
          key={anime.mal_id}
          className="flex items-center flex-[0_0_100%] md:flex-[0_0_70%] lg:flex-[0_0_50%] embla__class-names"
        >
          <Motion.Div {...scrollFade} className="flex-1">
            <div className="w-full flex-wrap grid grid-cols-[auto,1fr] grid-rows-[auto,auto,1fr] gap-2 md:gap-0 md:gap-x-4 select-none h-full">
              <Link
                href={`/anime/${anime.mal_id}`}
                className="col-span-2 md:col-auto"
              >
                <h3 className="text-foreground text-base sm:text-lg md:text-xl font-bold capitalize hover:underline cursor-pointer">
                  <span className="text-accent-foreground/50 font-bold mr-1">
                    {index + 1}.
                  </span>
                  {anime.title}
                </h3>
              </Link>
              <Separator className="col-span-2 md:col-auto md:my-1" />
              <Link
                href={`/anime/${anime.mal_id}`}
                className="w-[130px] h-[185px]
                     sm:w-[190px] sm:h-[270px]
                     lg:w-[240px] lg:h-[341px] flex flex-col justify-center md:row-span-3 md:order-first border cursor-pointer transition hover:brightness-90"
              >
                <Image
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  width={240}
                  height={341}
                  className="max-h-full w-full"
                />
              </Link>
              <div className="flex flex-col">
                <div className="flex-1 flex justify-between flex-col text-sm sm:text-lg text-foreground/70 capitalize">
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <p>
                        {anime.type}
                        {"rating" in anime
                          ? `, ${anime.rating.split(" ")[0]}`
                          : ""}
                      </p>
                      {anime.rank && (
                        <p>
                          Ranked:{" "}
                          <span className="text-foreground">#{anime.rank}</span>
                        </p>
                      )}
                      {anime.popularity && (
                        <p>
                          Popularity:{" "}
                          <span className="text-foreground">
                            #{anime.popularity}
                          </span>
                        </p>
                      )}
                      {anime.members && (
                        <p>
                          Members:{" "}
                          <span className="text-foreground">
                            {FormatNumber(anime.members)}
                          </span>
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {anime.genres.slice(0, 3).map((genre) => (
                          <Badge
                            key={genre.mal_id}
                            variant={"outline"}
                            className="mr-1 text-xs font-medium rounded-sm"
                          >
                            {genre.name}
                          </Badge>
                        ))}
                        {anime.genres.length > 3 && (
                          <Badge
                            variant={"outline"}
                            className="text-xs font-medium"
                          >
                            +{anime.genres.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
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
                  </div>
                </div>
              </div>
            </div>
          </Motion.Div>
        </EmblaSlide>
      ))}
    </EmblaCarousel>
  );
}
