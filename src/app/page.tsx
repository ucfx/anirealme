import Heading from "@/components/Heading";
import CarouselLoading from "@/components/CarouselLoading";
import { Suspense } from "react";
import Carousel from "@/components/Carousel";
import Hero, { type HeroProps } from "@/components/Hero";
import Welcome from "@/components/Welcome";
import { scrollFade } from "@/constant/animation";
export default function Home() {
  const heroSection: HeroProps[] = [
    {
      title: "anime",
      description:
        "Immerse yourself in the vibrant world of anime, where every series brings thrilling adventures and unforgettable characters. Discover top-rated shows, explore trending titles, and dive into stories that spark your imagination and keep you on the edge of your seat.",
      linkId: "top-anime",
      bg: "bg-[url('/img/landing-1-sm.jpg')] sm:bg-[url('/img/landing-1.jpg')]",
    },
    {
      title: "manga",
      description:
        "Step into the captivating universe of manga, where every page is filled with stunning artwork and compelling narratives. Whether you're exploring popular titles or uncovering hidden gems, each story offers a unique journey that will leave you wanting more.",
      linkId: "top-manga",
      bg: "bg-[url('/img/landing-2-sm.jpg')] sm:bg-[url('/img/landing-2.jpg')]",
    },
  ];

  return (
    <>
      <Welcome />

      <div className="container">
        <Hero {...heroSection[0]} />
        <div className="pt-14" id={"top-anime"}>
          <Heading {...scrollFade}>Top Airing Anime</Heading>
        </div>
        <Suspense fallback={<CarouselLoading />}>
          <Carousel endpoint="top/anime?limit=10&filter=airing&type=tv" />
        </Suspense>

        <div className="pt-14">
          <Heading {...scrollFade}>Top Favorite Anime</Heading>
        </div>
        <Suspense fallback={<CarouselLoading />}>
          <Carousel endpoint="top/anime?limit=10&filter=favorite&type=tv" />
        </Suspense>
      </div>

      <div className="container py-14">
        <Hero {...heroSection[1]} />
        <div className="pt-14" id={"top-manga"}>
          <Heading {...scrollFade}>Top Publishing Manga</Heading>
        </div>
        <Suspense fallback={<CarouselLoading />}>
          <Carousel endpoint="top/manga?limit=10&filter=publishing" />
        </Suspense>

        <div className="pt-14">
          <Heading {...scrollFade}>Top Favorite Manga</Heading>
        </div>
        <Suspense fallback={<CarouselLoading />}>
          <Carousel endpoint="top/manga?limit=10&filter=favorite" />
        </Suspense>
      </div>
    </>
  );
}
