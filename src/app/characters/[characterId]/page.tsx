import FetchError from "@/components/FetchError";
import { HeadingClassNames } from "@/components/Heading";
import ReadMore from "@/components/ReadMore";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import fetchData from "@/lib/fetchData";
import { CharacterFull } from "@/types/character";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function CharacterDetails({
  params,
}: {
  params: { characterId: string };
}) {
  const characterEes = await fetchData<CharacterFull>(
    `characters/${params.characterId}/full`
  );
  if (!characterEes.ok) return <FetchError msg={characterEes.message} />;

  const character = characterEes.data;

  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="self-center">
          <Image
            src={character.images.webp.image_url}
            alt={character.name}
            width={225}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-2xl text-center font-bold">
            {character.name} ({character.name_kanji}){" "}
            {/* <span className="block mt-2">
              <HeartIcon
                size={30}
                className="inline stroke-none fill-current mr-2"
              />
              {character.favorites}
            </span> */}
          </h3>
          <Separator />
          <div>
            <h4 className="text-lg font-bold mt-3 mb-1">Nicknames</h4>
            {character.nicknames.map((nickname) => (
              <Badge key={nickname} variant={"outline"} className="mr-2 mb-2">
                {nickname}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="min-w-40">
              <h4 className="text-lg font-bold mt-3 mb-1">Favorites</h4>
              <p className="text-2xl text-center md:text-left">
                <HeartIcon
                  size={25}
                  className="inline stroke-none fill-current mr-2"
                />
                {character.favorites}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mt-3 mb-1">Animeography</h4>
              <div className="flex flex-wrap gap-4">
                {character.anime[0] && (
                  <div>
                    <span className="w-full">Anime</span>
                    <div className="flex gap-2">
                      <Link
                        href={`/anime/${character.anime[0].anime.mal_id}`}
                        className="hover:brightness-90 transition-[filter]"
                      >
                        <Image
                          src={
                            character.anime[0].anime.images.webp.large_image_url
                          }
                          alt={character.anime[0].anime.title}
                          width={80}
                          height={120}
                          className="rounded-lg mx-auto"
                        />
                      </Link>

                      <div>
                        <Link
                          href={`/anime/${character.anime[0].anime.mal_id}`}
                          className="hover:underline"
                        >
                          {character.anime[0].anime.title}
                        </Link>
                        <p className="text-xs text-foreground/80">
                          {character.anime[0].role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {character.manga[0] && (
                  <div>
                    <span className="w-full">Manga</span>
                    <div className="flex gap-2">
                      <Link
                        href={`/manga/${character.manga[0].manga.mal_id}`}
                        className="hover:brightness-90 transition-[filter]"
                      >
                        <Image
                          src={
                            character.manga[0].manga.images.webp.large_image_url
                          }
                          alt={character.manga[0].manga.title}
                          width={80}
                          height={120}
                          className="rounded-lg mx-auto"
                        />
                      </Link>

                      <div>
                        <Link
                          href={`/manga/${character.manga[0].manga.mal_id}`}
                          className="hover:underline"
                        >
                          {character.manga[0].manga.title}
                        </Link>
                        <p className="text-xs text-foreground/80">
                          {character.manga[0].role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <h4 className={HeadingClassNames}>About</h4>
        {character.about === null ? (
          <p className="text-foreground/60">No information available</p>
        ) : (
          <ReadMore text={character.about} maxLength={500} />
        )}
      </div>
      <div className="my-6">
        <h4 className={HeadingClassNames}>Voice Actors</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {character.voices.map((voice) => (
            <div key={voice.person.mal_id} className="flex">
              <Link
                href={`/people/${voice.person.mal_id}`}
                prefetch={false}
                className="hover:brightness-75 transition-[filter] w-[80px] h-[120px] flex flex-col justify-center"
              >
                <Image
                  src={voice.person.images.jpg.image_url}
                  alt={voice.person.name}
                  width={225}
                  height={350}
                  className="rounded-xl max-h-full w-full"
                />
              </Link>
              <div className="mx-2 text-sm font-medium text-foreground">
                <h4 className="hover:underline">
                  <Link
                    href={`/people/${voice.person.mal_id}`}
                    prefetch={false}
                  >
                    {voice.person.name}
                  </Link>
                </h4>

                <span className="block mt-1 text-xs text-foreground/80">
                  {voice.language}
                </span>
              </div>
            </div>
          ))}
          {character.voices.length === 0 && (
            <div className="col-span-full text-center text-foreground/60">
              No voice actors found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
