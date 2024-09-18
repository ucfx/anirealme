import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { Person } from "@/types/person";
import fetchData from "@/lib/fetchData";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: { personId: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { personId } = params;
  const res = await fetchData<Person>(`people/${personId}/full`);
  if (!res.ok) return { title: "", description: "" };

  const person = res.data;
  return {
    title: `${person.name}`,
    description: person.about,
    keywords: `${person.name}`,
    openGraph: {
      title: `${person.name}`,
      description: person.about,
      type: "website",
      url: `https://anirealme.vercel.app/people/${personId}`,
      images: [
        {
          url: person.images.jpg.image_url,
          width: 130,
          height: 185,
        },
      ],
    },
  };
}

export default async function Layout({ children, params }: Props) {
  const { personId } = params;

  const res = await fetchData<Person>(`people/${personId}/full`);
  const personName = "data" in res ? res.data.name : undefined;

  return (
    <>
      <CustomBreadcrumb personName={personName} className="container" />
      {children}
    </>
  );
}
