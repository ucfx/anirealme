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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  const mangaId = useParams<{ mangaId: string }>().mangaId;

  const loadMore = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    const next = page + 1;
    const res = await fetchCharacters({
      mangaId: mangaId,
      page: next,
      limit: 14,
    });

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
  }, [mangaId, page, loading]);

  useEffect(() => {
    if (hasNext && isInView && !loading) {
      loadMore();
    }
  }, [isInView, loading, hasNext, loadMore]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {characters.map((c, index) => (
        <div
          key={index}
          className="flex flex-col bg-accent/40 h-full p-4 rounded-md shadow-xl border"
        >
          <Link
            href={`/characters/${c.character.mal_id}`}
            prefetch={false}
            className="w-[130px] h-[170px]
                     justify-self-center self-center max-w-full flex flex-col justify-center border cursor-pointer transition hover:brightness-90"
          >
            <Image
              src={c.character.images.webp.image_url}
              alt={c.character.name}
              width={130}
              height={170}
              className="max-h-full w-full object-cover rounded-md"
            />
          </Link>
          <div className="flex-1 flex flex-col overflow-hidden">
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger className="cursor-default">
                  <h2 className="max-w-full whitespace-nowrap overflow-ellipsis overflow-hidden text-center text-sm mt-2">
                    {c.character.name}
                  </h2>
                </TooltipTrigger>
                <TooltipContent className="text-foreground bg-background border border-foreground/20">
                  {c.character.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
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
