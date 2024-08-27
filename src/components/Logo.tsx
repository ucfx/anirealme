import Link from "next/link";
import LogoSM from "@/assets/img/logo-sm";
import LogoLG from "@/assets/img/logo-lg";

export default function Logo({ size }: { size: "sm" | "lg" }) {
  const SIZE = {
    lg: {
      link: "flex-col transition-transform justify-center",
      logoSM: "h-[100px]",
      logoLG: "h-[28px]",
    },
    sm: {
      link: "gap-2",
      logoSM: "h-9",
      logoLG: "hidden lg:inline-block h-9",
    },
  };
  return (
    <Link href={"/"} className={`flex mb-2 items-center ${SIZE[size].link}`}>
      <LogoSM className={SIZE[size].logoSM} />
      <LogoLG className={SIZE[size].logoLG} fill="fill-primary" />
    </Link>
  );
}
