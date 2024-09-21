"use client";
import { useEffect, useState } from "react";
import fetchData from "@/lib/fetchData";
import { AnimeData } from "@/types/anime";
import CustomPagination from "@/components/CustomPagination";

import { PaginationType } from "@/types/pagination";
import Loading from "@/app/loading";
import AnimeCard from "./AnimeCard";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimeList() {
  const [animeList, setAnimeList] = useState<AnimeData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState<PaginationType | null>(null);

  const fetchAnimeData = async (p?: number) => {
    setLoading(true);
    const res = await fetchData<AnimeData[]>(
      `anime?q=${search.trim()}&limit=25&page=${p ? p : page}`
    );
    if (!res.ok) return;
    setAnimeList(res.data);
    setPagination(res.pagination);

    setLoading(false);
  };

  useEffect(() => {
    fetchAnimeData();
  }, [page]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchAnimeData(1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search anime..."
        className="block w-full max-w-[500px] p-2 my-6 mx-auto transition-colors bg-transparent border-b-2 border-accent/50 focus:border-foreground text-foreground outline-none"
      />

      <div className="flex max-md:flex-col justify-between items-center my-4">
        {pagination && (
          <>
            <label className="text-lg font-bold">
              Total: {pagination.items.total}
            </label>
            <CustomPagination
              currentPage={pagination.current_page}
              totalPages={pagination.last_visible_page}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
      <div className="relative min-h-[300px]">
        <AnimatePresence>
          {loading ? (
            <>
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex flex-col gap-10 justify-center items-center bg-background/80 z-10"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
              >
                <Loading />
                <Loading />
                <Loading />
              </motion.div>
            </>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
              {animeList.map((anime, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={index}
                >
                  <AnimeCard anime={anime} />
                </motion.li>
              ))}
            </ul>
          )}
        </AnimatePresence>
      </div>

      <div className="flex max-md:flex-col gap-2 justify-between items-center my-4">
        {pagination && (
          <>
            <label className="text-lg font-bold">
              Total Results: {pagination.items.total}
            </label>
            <CustomPagination
              currentPage={pagination.current_page}
              totalPages={pagination.last_visible_page}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
    </div>
  );
}
