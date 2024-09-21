"use client";

import { useEffect, useState, useCallback } from "react";
import { fetchCharacters } from "../actions";
import type { Character } from "@/types/character";
import useInView from "@/hooks/useInView";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "lucide-react";

export default function CharactersList({
  initialState = [],
}: {
  initialState?: Character[];
}) {
  const [page, setPage] = useState(initialState.length ? 1 : 0);
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>(initialState);
  const [hasNext, setHasNext] = useState(true);

  const { isInView, ref: lastRef } = useInView<HTMLDivElement>();

  const animeId = useParams<{ animeId: string }>().animeId;

  const loadMore = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    const next = page + 1;
    const res = await fetchCharacters({ animeId, page: next });

    if (res.ok) {
      setPage(next);
      setCharacters((prev) => [...prev, ...res.data]);

      if (!res.pagination.has_next_page) {
        setHasNext(false);
      }
    }

    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [animeId, page, loading]);

  useEffect(() => {
    if (hasNext && isInView && !loading) {
      loadMore();
    }
  }, [isInView, loading, hasNext, loadMore]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
      {characters.map((c, index) => (
        <div
          key={index}
          className="bg-accent dark:bg-accent/40 shadow-lg w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-between p-6 rounded-xl"
        >
          <div>
            <h5 className="text-foreground/50 text-xs font-medium uppercase mb-2">
              character
            </h5>
            <div className="flex">
              <Link
                className="hover:brightness-75 transition-[filter] w-[80px] h-[120px] flex flex-col justify-center"
                href={`/character/${c.character.mal_id}`}
                prefetch={false}
              >
                <Image
                  src={c.character.images.webp.image_url}
                  alt={c.character.name}
                  width={225}
                  height={350}
                  className="rounded-xl max-h-full w-full"
                />
              </Link>

              <div className="mx-2 text-sm font-medium text-foreground flex flex-col h-full">
                <h4 className="hover:underline">
                  <Link
                    href={`/character/${c.character.mal_id}`}
                    prefetch={false}
                  >
                    {c.character.name}
                  </Link>
                </h4>

                <span className="mt-1 text-xs text-foreground/80">
                  {c.role}
                </span>
                <div className="flex-1 flex flex-col justify-end">
                  <span className="mt-1 text-base">
                    <HeartIcon
                      size={18}
                      className="fill-current stroke-none inline mr-1"
                    />
                    {c.favorites}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {c.voice_actors.length === 0 ? (
            <div className="flex items-center self-end">N/A</div>
          ) : (
            <div className="self-end">
              <h5 className="text-foreground/50 text-xs text-right font-medium uppercase mb-2">
                Voice Actor
              </h5>
              <div className="flex">
                <div className="mx-2 text-right text-sm font-medium text-foreground">
                  <h4 className="hover:underline">
                    <Link
                      href={`/people/${c.voice_actors[0].person.mal_id}`}
                      prefetch={false}
                    >
                      {c.voice_actors[0].person.name}
                    </Link>
                  </h4>

                  <span className="block mt-1 text-xs text-foreground/80">
                    {c.voice_actors[0].language}
                  </span>
                </div>
                <Link
                  href={`/people/${c.voice_actors[0].person.mal_id}`}
                  prefetch={false}
                  className="hover:brightness-75 transition-[filter] w-[80px] h-[120px] flex flex-col justify-center"
                >
                  <Image
                    src={c.voice_actors[0].person.images.jpg.image_url}
                    alt={c.voice_actors[0].person.name}
                    width={225}
                    height={350}
                    className="rounded-xl max-h-full w-full"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
      {loading && (
        <div className="col-span-full mt-4">
          <Loading />
        </div>
      )}

      {hasNext ? (
        <div ref={lastRef} className="w-full h-full"></div>
      ) : characters.length === 0 ? (
        <div className="text-center text-lg text-foreground/50 mt-4 col-span-full">
          No characters found.
        </div>
      ) : (
        <div className="text-center text-lg text-foreground/50 mt-4 col-span-full">
          You&#39;ve seen everything!
        </div>
      )}
    </div>
  );
}
