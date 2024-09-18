import FetchError from "@/components/FetchError";
import fetchData from "@/lib/fetchData";
import { AnimeData } from "@/types/anime";
import { fetchRecommendations } from "../actions";
import RecommendationsList from "./RecommendationsList";
type Props = {
  params: { animeId: string };
};

export default async function RecommendationPage({ params }: Props) {
  const { animeId } = params;
  const res = await fetchData<AnimeData>(`anime/${animeId}`);
  if (!res.ok) return <FetchError msg={res.message} />;
  const anime = res.data;

  const recommendationsRes = await fetchRecommendations({ animeId });

  return (
    <div className="container">
      <h2 className="text-2xl font-bold my-4">{anime.title} Recommendations</h2>
      {recommendationsRes.ok ? (
        <RecommendationsList initialState={recommendationsRes.data} />
      ) : (
        <FetchError msg={recommendationsRes.message} />
      )}
    </div>
  );
}
