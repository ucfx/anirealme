"use client";
import Heading from "@/components/Heading";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import "@/components/carousel/embla.css";
import { useEffect, useState } from "react";
import { AnimeArray } from "@/types";
import { Star, MonitorPlay } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  duration: 50,
};

export default function Home() {
  const [popular, setPopular] = useState<AnimeArray>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPopular = async () => {
      const res = await fetch("/api/top?limit=10");
      const data = await res.json();
      setPopular(data?.data);
    };
    fetchPopular();
  }, []);

  useEffect(() => {
    if (popular.length > 0) {
      setLoading(false);
    }
  }, [popular]);
  return (
    <main>
      <div className="container relative py-6">
        <Heading>Popular</Heading>
        {!loading ? (
          <EmblaCarousel options={OPTIONS}>
            {popular.map((anime, index) => (
              <div
                className={`embla__slide flex items-center flex-[0_0_100%] sm:flex-[0_0_70%] lg:flex-[0_0_50%] embla__class-names`}
                key={anime.mal_id}
              >
                <div className="flex-1">
                  <div className="w-full flex-wrap flex gap-2 md:gap-4 select-none h-full">
                    <div
                      className="w-[130px] h-[185px]
                     sm:w-[190px] sm:h-[270px]
                     lg:w-[240px] lg:h-[341px] border cursor-pointer transition hover:brightness-110"
                    >
                      <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        className="max-w-full w-full h-full"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <p className="text-foreground text-[1.25rem] font-bold mb-1 capitalize hover:underline cursor-pointer">
                        {anime.title}{" "}
                        <span className="text-foreground/40">#{index + 1}</span>
                      </p>
                      <Separator />
                      <div className="flex-1 flex justify-between flex-col text-sm sm:text-lg text-foreground/70 capitalize">
                        <div className="flex flex-col justify-between flex-1">
                          <div>
                            <p>
                              {anime.type}, {anime.rating.split(" ")[0]}
                            </p>

                            <p>#{anime.rank}</p>
                            <p>{anime.status}</p>
                          </div>
                          <p className="flex items-center gap-2">
                            <Star size={16} fill="#FFD700" />
                            {anime.score}{" "}
                            <TooltipProvider>
                              <Tooltip delayDuration={100}>
                                <TooltipTrigger>
                                  {anime.scored_by > 1000000
                                    ? `(${(anime.scored_by / 1000000).toFixed(
                                        1
                                      )}M)`
                                    : `(${(anime.scored_by / 1000).toFixed(1)}
                            K)`}
                                </TooltipTrigger>
                                <TooltipContent className="bg-background border border-foreground/20">
                                  {anime.scored_by}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </p>
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
              </div>
            ))}
          </EmblaCarousel>
        ) : (
          <>loading...</>
        )}
      </div>
      <div className="h-[100vh]"></div>
    </main>
  );
}
