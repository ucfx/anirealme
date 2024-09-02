import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import * as Motion from "./use-client";
import { scrollFade } from "@/constant/animation";
export type HeroProps = {
  title: string;
  description: string;
  linkId: string;
  bg: string;
};

export default function Hero({ title, description, linkId, bg }: HeroProps) {
  return (
    <Motion.Div
      {...scrollFade}
      className={`relative h-[min(768px,calc(100vh-56px))] overflow-hidden ${bg} bg-cover bg-right-top`}
    >
      <div className="absolute inset-0 [background-image:linear-gradient(to_top,white_2%,transparent_40%)] dark:[background-image:linear-gradient(to_top,black,transparent)]"></div>
      <div className="absolute p-4 inset-0 flex flex-col items-start justify-center text-center text-white">
        <div className="w-full md:w-1/2 bg-black/20 backdrop-blur-sm supports-[backdrop-filter]:bg-black/20 p-4">
          <h1 className="text-[42px] md:text-7xl w-full px-6 font-bold uppercase">
            {title}
          </h1>
          <p className="text-base sm:text-xl font-medium text-white text-justify [text-align-last:center]  rounded-md">
            {description}
          </p>
          <div className="flex justify-between w-full mt-5">
            <Button
              variant={"ghost"}
              className="px-3 hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href={`#${linkId}`}>
                <ChevronDown size={24} className="mr-2" />
                Summary
              </Link>
            </Button>
            <Button asChild>
              <Link href={`/${title}`}>{title} List</Link>
            </Button>
          </div>
        </div>
      </div>
    </Motion.Div>
  );
}
