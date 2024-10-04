import FetchError from "@/components/FetchError";
import fetchData from "@/lib/fetchData";
import { fetchCharacters } from "../actions";
import CharactersList from "./CharactersList";
import { MangaData } from "@/types/manga";
type Props = {
  params: { mangaId: string };
};

export default async function RecommendationPage({ params }: Props) {
  const { mangaId } = params;
  const res = await fetchData<MangaData>(`manga/${mangaId}`);
  if (!res.ok) return <FetchError msg={res.message} />;
  const manga = res.data;

  const CharactersRes = await fetchCharacters({ mangaId, limit: 14 });

  return (
    <div className="container">
      <h2 className="text-2xl font-bold my-4">{manga.title} Characters</h2>
      {CharactersRes.ok ? (
        <CharactersList initialState={CharactersRes.data} />
      ) : (
        <FetchError msg={CharactersRes.message} />
      )}
    </div>
  );
}
