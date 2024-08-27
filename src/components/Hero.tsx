import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export type HeroProps = {
  title: string;
  description: string;
  linkId: string;
  bg: string;
};

export default function Hero({ title, description, linkId, bg }: HeroProps) {
  return (
    <div className="relative h-[min(768px,calc(100vh-56px))]">
      <div
        className={`w-full h-full overflow-hidden ${bg} bg-cover bg-right-top`}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent dark:from-black to-transparent"></div>
      <div className="absolute p-4 inset-0 flex flex-col items-start justify-center text-center text-white">
        <div className="w-full md:w-1/2">
          <h1 className="text-[42px] md:text-7xl w-full px-6 font-bold uppercase">
            {title}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-foreground px-6 py-3 text-justify [text-align-last:center] bg-white/5 backdrop-blur-sm supports-[backdrop-filter]:bg-white/5">
            {description}
          </p>
          <div className="flex justify-between w-full mt-2">
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
    </div>
  );
}
