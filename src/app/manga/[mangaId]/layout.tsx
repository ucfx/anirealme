import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import fetchData from "@/lib/fetchData";
import type { Metadata } from "next";
import { MangaData } from "@/types/manga";

type Props = {
  children: React.ReactNode;
  params: { mangaId: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mangaId } = params;
  const res = await fetchData<MangaData>(`manga/${mangaId}`);
  if (!res.ok) return { title: "", description: "" };

  const manga = res.data;
  return {
    title: {
      default: manga.title,
      template: "%s | Manga | AniRealme",
    },
    description: manga.synopsis,
    keywords: manga.titles.map((_) => _.title),
    openGraph: {
      title: manga.title,
      description: manga.synopsis == null ? "" : manga.synopsis,
      type: "website",
      url: `https://anirealme.vercel.app/manga/${mangaId}`,
      images: [
        {
          url: manga.images.jpg.image_url,
          width: 130,
          height: 185,
        },
      ],
    },
  };
}

export default async function Layout({ children, params }: Props) {
  const { mangaId } = params;

  const res = await fetchData<MangaData>(`manga/${mangaId}`);
  const mangaName = "data" in res ? res.data.titles[0].title : undefined;

  return (
    <>
      <CustomBreadcrumb animeName={mangaName} className="container" />
      {children}
    </>
  );
}
