import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { CharacterFull } from "@/types/character";
import fetchData from "@/lib/fetchData";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: { characterId: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { characterId } = params;
  const res = await fetchData<CharacterFull>(`characters/${characterId}/full`);
  if (!res.ok) return { title: "", description: "" };

  const character = res.data;
  return {
    title: `${character.name} (${character.anime[0].anime.title})`,
    description: character.about || `Learn more about ${character.name}`,
    keywords: `${character.name}, ${
      character.name_kanji
    }, ${character.nicknames.join(", ")}`,
    openGraph: {
      title: `${character.name} (${character.anime[0].anime.title})`,
      description: character.about || `Learn more about ${character.name}`,
      type: "website",
      url: `https://anirealme.vercel.app/character/${characterId}`,
      images: [
        {
          url: character.images.webp.image_url,
          width: 130,
          height: 185,
        },
      ],
    },
  };
}

export default async function Layout({ children, params }: Props) {
  const { characterId } = params;

  const res = await fetchData<CharacterFull>(`characters/${characterId}`);
  const characterName = "data" in res ? res.data.name : undefined;

  return (
    <>
      <CustomBreadcrumb characterName={characterName} className="container" />
      {children}
    </>
  );
}
