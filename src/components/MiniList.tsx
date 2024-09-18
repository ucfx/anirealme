import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function MiniList({ href, children, className }: Props) {
  return (
    <div
      className={`relative overflow-hidden min-h-[150px] max-h-[550px] ${className}`}
    >
      <div className="absolute w-full h-1/3 bottom-0 bg-gradient-to-t from-black to-transparent" />
      {children}
      <Button
        className="absolute bottom-5 left-1/2 -translate-x-1/2 uppercase"
        asChild
      >
        <Link href={href} className="flex">
          Full Page
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}
