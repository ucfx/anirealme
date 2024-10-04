import FetchError from "@/components/FetchError";
import fetchData from "@/lib/fetchData";
import { fetchRecommendations } from "../actions";
import RecommendationsList from "./RecommendationsList";
import { MangaData } from "@/types/manga";
type Props = {
  params: { mangaId: string };
};

export default async function RecommendationPage({ params }: Props) {
  const { mangaId } = params;
  const res = await fetchData<MangaData>(`manga/${mangaId}`);
  if (!res.ok) return <FetchError msg={res.message} />;
  const manga = res.data;

  const recommendationsRes = await fetchRecommendations({ mangaId });

  return (
    <div className="container">
      <h2 className="text-2xl font-bold my-4">{manga.title} Recommendations</h2>
      {recommendationsRes.ok ? (
        <RecommendationsList initialState={recommendationsRes.data} />
      ) : (
        <FetchError msg={recommendationsRes.message} />
      )}
    </div>
  );
}
