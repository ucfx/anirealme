import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import MangaList from "./MangaList";
import FormFilter from "./FormFilter";
import {
  generateSearchParams,
  type FilterStateType,
} from "./generateSearchParams";
import { Suspense } from "react";
import Loading from "../loading";
import fetchData from "@/lib/fetchData";
import FetchError from "@/components/FetchError";
import { GenreType } from "@/types/genre";
export default async function AnimePage({
  searchParams,
}: {
  searchParams: FilterStateType;
}) {
  const generatedParams = generateSearchParams(searchParams);

  const genresRes = await fetchData<GenreType[]>("genres/manga");
  if (!genresRes.ok) return <FetchError msg="Failed to fetch genres data" />;
  const genres = genresRes.data;

  return (
    <div className="container">
      <CustomBreadcrumb />
      <div>
        <FormFilter searchParams={searchParams} genres={genres} />
      </div>

      <Suspense fallback={<Loading />}>
        <MangaList generatedParams={generatedParams} />
      </Suspense>
    </div>
  );
}
