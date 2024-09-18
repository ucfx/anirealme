import { Suspense } from "react";
import LoadingAnimeDetails from "./LoadingAnimeDetails";
import AnimeDetails from "./AnimeDetails";

type Props = {
  params: { animeId: string };
};

export default async function Page({ params }: Props) {
  const { animeId } = params;
  return (
    <Suspense fallback={<LoadingAnimeDetails />}>
      <AnimeDetails animeId={animeId} />
    </Suspense>
  );
}
