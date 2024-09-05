import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { AnimeData } from "@/types";
import fetchData from "@/utils/fetchData";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { animeId: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { animeId } = params;
  const res = await fetchData<AnimeData>(`anime/${animeId}`);
  if (!res.ok) return { title: "", description: "" };

  const anime = res.data;
  return {
    title: {
      default: anime.title,
      template: "%s | Anime | AniRealme",
    },
    description: anime.synopsis,
    keywords: anime.titles.map((_) => _.title),
    openGraph: {
      title: anime.title,
      description: anime.synopsis == null ? "" : anime.synopsis,
      type: "website",
      url: `https://anirealme.vercel.app/anime/${animeId}`,
      images: [
        {
          url: anime.images.jpg.image_url,
          width: 130,
          height: 185,
        },
      ],
    },
  };
}

export default async function Layout({ children, modal, params }: Props) {
  const { animeId } = params;

  const res = await fetchData<AnimeData>(`anime/${animeId}`);
  const animeName = "data" in res ? res.data.titles[0].title : undefined;

  return (
    <>
      {modal}
      <CustomBreadcrumb animeName={animeName} className="container" />
      {children}
    </>
  );
}
