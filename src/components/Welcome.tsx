import Logo from "./Logo";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import * as Motion from "./use-client";
import { fadeBlur } from "@/constant/animation";
export default function Welcome() {
  const words =
    "Your gateway to the captivating worlds of anime and manga. Dive into a rich collection of series, discover new favorites, and stay updated with the latest in the anime and manga universe. Whether you're a seasoned fan or just starting your journey, AniRealme offers everything you need to explore and enjoy these vibrant storytelling mediums.";
  return (
    <div className="container mb-[1px]">
      <BackgroundBeamsWithCollision className="[background-image:none] bg-background h-[min(768px,calc(100vh-56px))]">
        <div className=" w-full h-full md:max-w-[70%] grid gap-7 grid-rows-[auto,auto,1fr] md:gap-0 md:grid-rows-none md:grid-cols-2 items-center justify-items-center">
          <div className="md:justify-self-start">
            <Motion.Span
              initial={{ ...fadeBlur.initial, x: 25 }}
              animate={{ ...fadeBlur.animate, x: 0 }}
              transition={{ ...fadeBlur.transition }}
              className="text-lg sm:text-xl lg:text-2xl font-bold inline-block"
            >
              Welcome to
            </Motion.Span>
            <Motion.H1
              initial={{ ...fadeBlur.initial, y: 25 }}
              animate={{ ...fadeBlur.animate, y: 0 }}
              transition={{ ...fadeBlur.transition, delay: 0.7 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold"
            >
              AniRealme
            </Motion.H1>
          </div>
          <Motion.Div
            initial={{ ...fadeBlur.initial, y: -25 }}
            animate={{ ...fadeBlur.animate, y: 0 }}
            transition={{
              ...fadeBlur.transition,
              delay: 0.7,
            }}
            className="order-first sm:order-none md:justify-self-end"
          >
            <Logo
              size="lg"
              linkClassName="w-fit transition-all shadow-lg bg-transparent rounded-full shadow-primary"
              logoIconHeight="h-[100px] sm:h-[150px] lg:h-[200px]"
              logoNameHeight="h-[25px] sm:h-[39px] lg:h-[50px]"
            />
          </Motion.Div>
          <TextGenerateEffect
            words={words}
            className="self-start text-lg sm:text-xl sm:col-span-2 text-justify [text-align-last:center]"
            startDelay={1.4}
          />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
