import FetchError from "@/components/FetchError";
import fetchData from "@/lib/fetchData";
import { AnimeData } from "@/types/anime";
import { fetchCharacters } from "../actions";
import CharactersList from "./CharactersList";
type Props = {
  params: { animeId: string };
};

export default async function RecommendationPage({ params }: Props) {
  const { animeId } = params;
  const res = await fetchData<AnimeData>(`anime/${animeId}`);
  if (!res.ok) return <FetchError msg={res.message} />;
  const anime = res.data;

  const CharactersRes = await fetchCharacters({ animeId });

  return (
    <div className="container">
      <h2 className="text-2xl font-bold my-4">{anime.title} Characters</h2>
      {CharactersRes.ok ? (
        <CharactersList initialState={CharactersRes.data} />
      ) : (
        <FetchError msg={CharactersRes.message} />
      )}
    </div>
  );
}
