import { Suspense } from "react";
import LoadingMangaDetails from "./LoadingMangaDetails";
import MangaDetails from "./MangaDetails";

type Props = {
  params: { mangaId: string };
};

export default async function Page({ params }: Props) {
  const { mangaId } = params;
  return (
    <Suspense fallback={<LoadingMangaDetails />}>
      <MangaDetails mangaId={mangaId} />
    </Suspense>
  );
}
