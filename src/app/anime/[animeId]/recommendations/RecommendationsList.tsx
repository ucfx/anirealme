"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchRecommendations } from "../actions";
import type { AnimeRecommendation } from "@/types/recommendation";
import useInView from "@/hooks/useInView";
import { useParams } from "next/navigation";
import RecommendationCard from "./RecommendationCard";
import Loading from "@/app/loading";

export default function RecommendationsList({
  initialState = [],
}: {
  initialState?: AnimeRecommendation[];
}) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState<AnimeRecommendation[]>(initialState);
  const [hasNext, setHasNext] = useState(true);

  const { isInView, ref: lastRef } = useInView<HTMLDivElement>();

  const animeId = useParams<{ animeId: string }>().animeId;

  const loadMore = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    const next = page + 1;
    const res = await fetchRecommendations({ animeId, page: next });

    if (res.ok) {
      setPage(next);
      setAnime((prev) => [...prev, ...res.data]);

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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
      {anime.map((anime, index) => (
        <RecommendationCard
          key={anime.entry.mal_id}
          anime={anime}
          index={index}
        />
      ))}
      {loading && (
        <div className="col-span-full mt-4">
          <Loading />
        </div>
      )}

      {hasNext ? (
        <div ref={lastRef} className="w-full h-full"></div>
      ) : anime.length === 0 ? (
        <div className="text-center text-lg text-foreground/50 mt-4 col-span-full">
          No recommendations found.
        </div>
      ) : (
        <div className="text-center text-lg text-foreground/50 mt-4 col-span-full">
          You&#39;ve seen everything!
        </div>
      )}
    </div>
  );
}
