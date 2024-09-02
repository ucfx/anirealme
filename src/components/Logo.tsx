import Link from "next/link";
import LogoIcon from "@/assets/img/logo-icon";
import LogoName from "@/assets/img/logo-name";

export default function Logo({
  size,
  linkClassName,
  logoIconHeight = "h-[100px]",
  logoNameHeight = "h-8",
}: {
  size: "sm" | "lg";
  linkClassName?: string;
  logoIconHeight?: string;
  logoNameHeight?: string;
}) {
  const SIZE = {
    lg: {
      link: "flex-col transition-transform justify-center",
      logoIcon: logoIconHeight,
      logoName: logoNameHeight,
    },
    sm: {
      link: "gap-2 mb-2",
      logoIcon: "h-8",
      logoName: "hidden lg:inline-block h-8",
    },
  };
  return (
    <Link
      href={"/"}
      className={`flex items-center ${SIZE[size].link} ${linkClassName}`}
    >
      <LogoIcon className={SIZE[size].logoIcon} />
      <LogoName className={SIZE[size].logoName} fill="fill-primary" />
    </Link>
  );
}
