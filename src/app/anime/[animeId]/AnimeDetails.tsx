import FetchError from "@/components/FetchError";
import type { AnimeData } from "@/types/anime";
import type { AnimeStatisticsData } from "@/types/animeStatistics";
import fetchData from "@/lib/fetchData";
import Link from "next/link";
import Image from "next/image";
import { Star, CirclePlay } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { Separator } from "@/components/ui/separator";
import MiniList from "@/components/MiniList";
import RecommendationsList from "./recommendations/RecommendationsList";
import CharactersList from "./characters/CharactersList";
import { HeadingClassNames } from "@/components/Heading";
import * as Motion from "@/components/use-client";

export default async function AnimeDetails({ animeId }: { animeId: string }) {
  const res = await fetchData<AnimeData>(`anime/${animeId}`);
  if (!res.ok) return <FetchError msg={res.message} />;
  const anime = res.data;

  const statisticsRes = await fetchData<AnimeStatisticsData>(
    `anime/${animeId}/statistics`
  );
  const statistics = statisticsRes.ok ? statisticsRes.data : undefined;

  return (
    <div className="container">
      <div className="flex-wrap grid grid-cols-1 md:grid-cols-[auto,1fr] gap-2 md:gap-0 md:gap-x-4">
        <Link
          href={`/anime/${anime.mal_id}`}
          className="w-[240px] h-[341px] justify-self-center max-w-full flex flex-col justify-center border cursor-pointer transition hover:brightness-90"
        >
          <Image
            src={anime.images.webp.image_url}
            alt={anime.titles[0].title}
            width={240}
            height={341}
            className="max-h-full w-full"
          />
        </Link>

        <div className="flex flex-col">
          <h2 className="text-center text-2xl font-bold capitalize">
            {anime.titles[0].title}
          </h2>

          <Separator className="my-2" />

          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 gap-2">
            <div className="text-center">
              <h4 className="text-base">Score</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <Star size={32} className="fill-yellow-300 stroke-yellow-300" />
                <span className="text-4xl">{anime.score}</span>
                <span className="w-full text-foreground/80 text-sm">
                  {anime.scored_by}
                </span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base">Ranked</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <span className="text-4xl">#{anime.rank}</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base">Popularity</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <span className="text-4xl">#{anime.popularity}</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base">Members</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <span className="text-4xl">{anime.members}</span>
              </div>
            </div>
          </div>

          <Separator className="my-2 md:my-1" />
          <div className="text-center md:text-left grid grid-cols-2 md:grid-cols-4 md:grid-rows-[auto,auto] flex-1 gap-2 capitalize text-foreground/70">
            <div>
              <h4 className="text-base text-foreground">Type</h4>
              <p>
                {anime.type}
                {!(anime.season || anime.year) || ", "}
                {anime.season} {anime.year}
              </p>
              <p>{anime.rating}</p>
              <h4 className="text-base text-foreground mt-2">Source</h4>
              <p>{anime.source}</p>
            </div>
            <div>
              <h4 className="text-base text-foreground">Airing</h4>
              <p>{anime.status}</p>
              <p>{anime.aired.string}</p>
              <p>{anime.broadcast.string}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 col-span-2 md:block md:col-span-1">
              <div>
                <h4 className="text-base text-foreground">Episodes</h4>
                <p>
                  {!anime.episodes ? "N/A" : anime.episodes + " eps"}
                  <span>, {anime.duration}</span>
                </p>
              </div>
              <div>
                <h4 className="text-base text-foreground md:mt-2">Studios</h4>
                <p>
                  {anime.studios.length > 0
                    ? anime.studios.map((studio) => studio.name).join(", ")
                    : "N/A"}
                </p>
              </div>
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 md:row-span-2 order-last md:order-none">
              <Motion.H3 className={`${HeadingClassNames} mt-4`}>
                Trailer
              </Motion.H3>
              <div className="flex-1 flex items-center justify-center w-full h-full rounded-md">
                {anime.trailer.youtube_id ? (
                  <Link
                    href={`/anime/${anime.mal_id}/trailer`}
                    className="relative group cursor-pointer"
                  >
                    <CirclePlay
                      size={48}
                      className="z-[1] stroke-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <Image
                      src={anime.trailer.images.medium_image_url}
                      alt={`${anime.titles[0].title} trailer`}
                      width={240}
                      height={135}
                      className="rounded-md transition-[filter] group-hover:brightness-90"
                    />
                  </Link>
                ) : (
                  <p className="text-foreground/80">Trailer not available</p>
                )}
              </div>
            </div>
            <div className="col-span-2 md:col-span-3">
              <h4 className="text-base text-foreground my-2">Genres</h4>
              <div className="flex gap-2 flex-wrap justify-center md:justify-start md:items-end">
                {anime.genres.map((genre) => (
                  <Badge variant={"outline"} key={genre.mal_id}>
                    {genre.name}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="my-2 md:hidden col-span-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <div className="w-full md:w-3/5">
          <Motion.H3 className={`${HeadingClassNames} mt-4`}>
            Synopsis
          </Motion.H3>
          {anime.synopsis ? (
            <p className="text-justify [text-align-last:center] text-foreground/80">
              {anime.synopsis.replace(/\[written by mal rewrite\]/i, "")}
              <span className="block text-foreground/60">
                [Written by MAL Rewrite]
              </span>
            </p>
          ) : (
            <p className="text-foreground/80">N/A</p>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mt-4">Also Known As</h3>
          <p className="text-foreground/80">
            {anime.titles.map((title) => title.title).join(", ")}
          </p>
          <h3 className="text-xl font-bold mt-4">Statistics</h3>
          {statistics ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 gap-y-6">
              <div>
                <h4 className="text-base text-foreground">Watching</h4>
                <p>{statistics.watching}</p>
              </div>
              <div>
                <h4 className="text-base text-foreground">Completed</h4>
                <p>{statistics.completed}</p>
              </div>
              <div>
                <h4 className="text-base text-foreground">On Hold</h4>
                <p>{statistics.on_hold}</p>
              </div>
              <div>
                <h4 className="text-base text-foreground">Dropped</h4>
                <p>{statistics.dropped}</p>
              </div>
              <div>
                <h4 className="text-base text-foreground">Plan to Watch</h4>
                <p>{statistics.plan_to_watch}</p>
              </div>
              <div>
                <h4 className="text-base text-foreground">Total</h4>
                <p>{statistics.total}</p>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <h4 className="text-base text-foreground">Scores</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {statistics.scores.map((score) => (
                    <div
                      key={score.score}
                      className="flex items-center gap-1 flex-col sm:flex-row"
                    >
                      <Badge
                        variant={"outline"}
                        className="w-20 justify-center"
                      >
                        <Star className="text-yellow-500 mr-2" />
                        <span>{score.score}</span>
                      </Badge>
                      <p>
                        {score.votes} ({score.percentage}%)
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <FetchError msg="Failed to fetch statistics" />
          )}
        </div>
      </div>

      <Motion.H3 className={`${HeadingClassNames} mt-6`}>Characters</Motion.H3>

      <MiniList className="mb-10" href={`/anime/${animeId}/characters`}>
        <CharactersList />
      </MiniList>

      <Motion.H3 className={HeadingClassNames}>Recommendations</Motion.H3>
      <MiniList className="mb-10" href={`/anime/${animeId}/recommendations`}>
        <RecommendationsList />
      </MiniList>
    </div>
  );
}
