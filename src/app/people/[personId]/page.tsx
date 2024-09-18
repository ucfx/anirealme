import FetchError from "@/components/FetchError";
import { HeadingClassNames } from "@/components/Heading";
import ReadMore from "@/components/ReadMore";
import { Separator } from "@/components/ui/separator";
import fetchData from "@/lib/fetchData";
import { Person } from "@/types/person";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import VoicesList from "./VoicesList";

export default async function CharacterDetails({
  params,
}: {
  params: { personId: string };
}) {
  const parsonRes = await fetchData<Person>(`people/${params.personId}/full`);
  if (!parsonRes.ok) return <FetchError msg={parsonRes.message} />;

  const person = parsonRes.data;

  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="self-center">
          <Image
            src={person.images.jpg.image_url}
            alt={person.name}
            width={225}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-2xl text-center md:text-left font-bold">
            {person.name}
          </h3>
          <Separator />

          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="min-w-40">
              <h4 className="text-lg font-bold mt-3 mb-1">Favorites</h4>
              <p className="text-2xl text-center md:text-left">
                <HeartIcon
                  size={25}
                  className="inline stroke-none fill-current mr-2"
                />
                {person.favorites}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex gap-2">
                <div className="flex flex-col">
                  {person.family_name && (
                    <>
                      <h4 className="text-lg font-bold mt-3 mb-1">
                        Family Name
                      </h4>
                      <p className="text-sm text-foreground">
                        {person.family_name}
                      </p>
                    </>
                  )}

                  {person.given_name && (
                    <>
                      <h4 className="text-lg font-bold mt-3 mb-1">
                        Given Name
                      </h4>
                      <p className="text-sm text-foreground">
                        {person.given_name}
                      </p>
                    </>
                  )}
                  {person.alternate_names.length > 0 && (
                    <>
                      <h4 className="text-lg font-bold mt-3 mb-1">
                        Alternate Names
                      </h4>
                      <p className="text-sm text-foreground">
                        {person.alternate_names.join(", ")}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold mt-3 mb-1">Birthday</h4>
                  <p className="text-sm text-foreground">
                    {new Date(person.birthday).toLocaleDateString()}
                  </p>
                  {person.website_url && (
                    <>
                      <h4 className="text-lg font-bold mt-3 mb-1">Website</h4>
                      <p className="text-sm text-foreground">
                        <Link
                          href={person.website_url}
                          prefetch={false}
                          className="hover:underline"
                        >
                          {person.website_url}
                        </Link>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <h4 className={HeadingClassNames}>About</h4>
        <ReadMore text={person.about} maxLength={500} />
      </div>
      <div className="my-6">
        <h4 className={HeadingClassNames}>Voices</h4>
        <VoicesList />
      </div>
    </div>
  );
}
