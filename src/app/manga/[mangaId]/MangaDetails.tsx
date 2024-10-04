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
import { MangaData } from "@/types/manga";

export default async function MangaDetails({ mangaId }: { mangaId: string }) {
  const res = await fetchData<MangaData>(`manga/${mangaId}`);
  if (!res.ok) return <FetchError msg={res.message} />;
  const manga = res.data;

  const statisticsRes = await fetchData<AnimeStatisticsData>(
    `manga/${mangaId}/statistics`
  );
  const statistics = statisticsRes.ok ? statisticsRes.data : undefined;

  return (
    <div className="container">
      <div className="flex-wrap grid grid-cols-1 md:grid-cols-[auto,1fr] gap-2 md:gap-0 md:gap-x-4">
        <Link
          href={`/manga/${manga.mal_id}`}
          className="w-[240px] h-[341px] justify-self-center max-w-full flex flex-col justify-center border cursor-pointer transition hover:brightness-90"
        >
          <Image
            src={manga.images.webp.image_url}
            alt={manga.titles[0].title}
            width={240}
            height={341}
            className="max-h-full w-full"
          />
        </Link>

        <div className="flex flex-col">
          <h2 className="text-center text-2xl font-bold capitalize">
            {manga.titles[0].title}
          </h2>

          <Separator className="my-2" />

          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 gap-2">
            <div className="text-center">
              <h4 className="text-base">Score</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <Star size={32} className="fill-yellow-300 stroke-yellow-300" />
                <span className="text-4xl">{manga.score}</span>
                <span className="w-full text-foreground/80 text-sm">
                  {manga.scored_by}
                </span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base">Ranked</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <span className="text-4xl">#{manga.rank}</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base">Popularity</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <span className="text-4xl">#{manga.popularity}</span>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base">Members</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <span className="text-4xl">{manga.members}</span>
              </div>
            </div>
          </div>

          <Separator className="my-2 md:my-1" />
          <div className="text-center md:text-left grid grid-cols-2 md:grid-cols-4 md:grid-rows-[auto,auto] flex-1 gap-2 capitalize text-foreground/70">
            <div>
              <h4 className="text-base text-foreground">Type</h4>
              <p>{manga.type}</p>
            </div>
            <div>
              <h4 className="text-base text-foreground">Publishing</h4>
              <p>{manga.status}</p>
              <p>{manga.published.string}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 col-span-2 md:block md:col-span-1">
              <div>
                <h4 className="text-base text-foreground">Chapters</h4>
                <p>
                  {!manga.chapters ? "N/A" : manga.chapters + " chapters"}
                  {manga.volumes && <>, {manga.volumes} volumes</>}
                </p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-3">
              <h4 className="text-base text-foreground my-2">Genres</h4>
              <div className="flex gap-2 flex-wrap justify-center md:justify-start md:items-end">
                {manga.genres.map((genre) => (
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
          {manga.synopsis ? (
            <p className="text-justify [text-align-last:center] text-foreground/80">
              {manga.synopsis.replace(/\[written by mal rewrite\]/i, "")}
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
            {manga.titles.map((title) => title.title).join(", ")}
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

      <MiniList className="mb-10" href={`/manga/${mangaId}/characters`}>
        <CharactersList />
      </MiniList>

      <Motion.H3 className={HeadingClassNames}>Recommendations</Motion.H3>
      <MiniList className="mb-10" href={`/manga/${mangaId}/recommendations`}>
        <RecommendationsList />
      </MiniList>
    </div>
  );
}
