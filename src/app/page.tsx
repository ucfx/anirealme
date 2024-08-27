import Heading from "@/components/Heading";
import CarouselLoading from "@/components/CarouselLoading";
import { Suspense } from "react";
import TopAnime from "@/components/TopAnime";
import TopManga from "@/components/TopManga";
import Hero from "@/components/Hero";

export default function Home() {
  const bg = [
    "bg-[url('/img/landing-sm.jpg')] sm:bg-[url('/img/landing.jpg')]",
    "bg-[url('/img/landing1.jpg')] sm:bg-[url('/img/landing1.jpg')]",
  ];

  return (
    <main>
      <div className="container">
        <Hero
          title={"anime"}
          description="Welcome to AniRealme - Your Ultimate Anime Universe! Dive into a world of endless adventures, epic battles, and unforgettable characters. Whether you're a seasoned otaku or just starting your anime journey, AniRealme has something for everyone."
          linkId={"top-anime"}
          bg={bg[0]}
        />
      </div>

      <div className="container pt-14" id={"top-anime"}>
        <div>
          <Heading>Top Airing Anime</Heading>
        </div>
        <Suspense fallback={<CarouselLoading />}>
          <TopAnime q="?limit=10&filter=airing&type=tv" />
        </Suspense>
      </div>

      <div className="container pt-14">
        <div>
          <Heading>Top Favorite Anime</Heading>
        </div>
        <Suspense fallback={<CarouselLoading />}>
          <TopAnime q="?limit=10&filter=favorite&type=tv" />
        </Suspense>
      </div>

      <div className="container pt-14">
        <Hero
          title={"manga"}
          description="Discover Endless Manga Adventures! AniRealme brings you a rich selection of manga, from epic adventures to heartwarming tales. Whether you're new to manga or a devoted fan, explore captivating stories and stunning artwork that will keep you hooked. Start your manga journey with AniRealme today!"
          linkId={"top-manga"}
          bg={bg[1]}
        />
      </div>

      <div className="container pt-14" id={"top-manga"}>
        <div>
          <Heading>Top Publishing Manga</Heading>
        </div>
        <Suspense fallback={<CarouselLoading />}>
          <TopManga q="?limit=10&filter=publishing" />
        </Suspense>
      </div>

      <div className="container pt-14">
        <div>
          <Heading>Top Favorite Manga</Heading>
        </div>
        <Suspense fallback={<CarouselLoading />}>
          <TopManga q="?limit=10&filter=favorite" />
        </Suspense>
      </div>
    </main>
  );
}
