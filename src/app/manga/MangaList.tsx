import fetchData from "@/lib/fetchData";
import CustomPagination from "@/components/CustomPagination";
import MangaCard from "./MangaCard";
import FetchError from "@/components/FetchError";
import { Div } from "@/components/use-client";
import { SearchX } from "lucide-react";
import { MangaData } from "@/types/manga";

export default async function AnimeList({
  generatedParams,
}: {
  generatedParams: string;
}) {
  const res = await fetchData<MangaData[]>(
    `manga${generatedParams}${generatedParams ? "&" : "?"}sfw=true`
  );
  if (!res.ok) return <FetchError msg="Failed to fetch manga data" />;
  const { data: mangaList, pagination } = res;

  if (mangaList.length === 0) {
    return (
      <div className="min-h-80 grid place-items-center">
        <div>
          <SearchX size={48} className="mx-auto" />
          <h3 className="text-3xl text-center text-foreground capitalize">
            No manga found
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex max-md:flex-col justify-between items-center my-4">
        {pagination && (
          <>
            <div className="flex">
              <div className="text-lg text-foreground/80">
                Total:
                <span className="ml-1 text-foreground font-semibold">
                  {pagination.items.total}
                </span>
              </div>
              <span className="mx-3">-</span>
              <div className="text-lg text-foreground/80">
                In this page:
                <span className="ml-1 text-foreground font-semibold">
                  {pagination.items.count}
                </span>
              </div>
            </div>
            <CustomPagination
              currentPage={pagination.current_page}
              totalPages={pagination.last_visible_page}
            />
          </>
        )}
      </div>
      <div className="relative min-h-[300px]">
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {mangaList.map((manga, index) => (
            <li key={index}>
              <Div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <MangaCard manga={manga} />
              </Div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex max-md:flex-col gap-2 justify-between items-center my-4">
        {pagination && (
          <>
            <div className="flex">
              <div className="text-lg text-foreground/80">
                Total:
                <span className="ml-1 text-foreground font-semibold">
                  {pagination.items.total}
                </span>
              </div>
              <span className="mx-3">-</span>
              <div className="text-lg text-foreground/80">
                In this page:
                <span className="ml-1 text-foreground font-semibold">
                  {pagination.items.count}
                </span>
              </div>
            </div>
            <CustomPagination
              currentPage={pagination.current_page}
              totalPages={pagination.last_visible_page}
            />
          </>
        )}
      </div>
    </div>
  );
}
