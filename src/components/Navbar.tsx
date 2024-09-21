import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavLink({
  setOpen,
}: {
  setOpen?: (_: boolean) => void;
}) {
  const handleClick = () => {
    if (setOpen) setOpen(false);
  };

  type LinkType = {
    text: string;
    href: string;
    desc: string;
    className?: string;
  };

  const AnimeTab: LinkType[] = [
    {
      text: "Top Airing",
      href: "/anime/top?filter=airing",
      desc: "Currently airing anime with the latest episodes and updates.",
    },
    {
      text: "Top Popularity",
      href: "/anime/top?filter=bypopularity",
      desc: "Discover the most popular anime series among global fans.",
    },
    {
      text: "Top Upcoming",
      href: "/anime/top?filter=upcoming",
      desc: "Anticipate the top upcoming anime series and releases soon.",
    },
    {
      text: "Top Favorite",
      href: "/anime/top?filter=favorite",
      desc: "Fan-favorite anime series loved by the community and critics.",
    },
    {
      text: "Top Characters",
      href: "/anime/top/characters",
      desc: "Explore the most iconic and beloved characters in anime.",
      className: "col-span-2",
    },
  ];

  const MangaTab: LinkType[] = [
    {
      text: "Top Publishing",
      href: "/manga/top/publishing",
      desc: "Most popular manga currently being published weekly or monthly.",
    },
    {
      text: "Top Upcoming",
      href: "/manga/top/upcoming",
      desc: "Anticipated manga set to release in the near future.",
    },
    {
      text: "Top by Popularity",
      href: "/manga/top/bypopularity",
      desc: "Manga with the highest popularity among readers worldwide.",
    },
    {
      text: "Top Favorite",
      href: "/manga/top/favorite",
      desc: "Readers’ all-time favorite manga with highest fan ratings.",
    },
  ];

  return (
    <>
      <NavigationMenu className="hidden md:flex ml-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle().concat(
                  " bg-transparent"
                )}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Anime
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] capitalize [&_li_p]:normal-case">
                <li className="col-span-2">
                  <Link href="/anime" legacyBehavior passHref>
                    <NavigationMenuLink className="block group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none transition-all group-hover:pl-1">
                        anime list
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Search and filter through a vast list of anime.
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>

                <ul className="bg-slate-200/20 dark:bg-accent/30 p-2 col-span-2 grid grid-cols-[.45fr_1fr]">
                  <p className="row-span-4 text-xl font-medium leading-none p-3 text-accent-foreground/50 rounded-md">
                    top anime
                  </p>
                  {AnimeTab.map((tab) => (
                    <li key={tab.text} className={tab.className}>
                      <Link href={tab.href} legacyBehavior passHref>
                        <NavigationMenuLink className="block group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none transition-all group-hover:pl-1">
                            {tab.text}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {tab.desc}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Manga
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] capitalize [&_li_p]:normal-case">
                <li className="col-span-2">
                  <Link href="/manga" legacyBehavior passHref>
                    <NavigationMenuLink className="block group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none transition-all group-hover:pl-1">
                        Manga List
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Search and filter through manga and manhwa collections.
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>

                <ul className="bg-slate-200/20 dark:bg-accent/30 p-2 col-span-2 grid grid-cols-[.45fr_1fr]">
                  <p className="row-span-4 text-xl font-medium leading-none p-3 text-accent-foreground/50 rounded-md">
                    top manga
                  </p>
                  {MangaTab.map((tab) => (
                    <li key={tab.text} className={tab.className}>
                      <Link href={tab.href} legacyBehavior passHref>
                        <NavigationMenuLink className="block group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none transition-all group-hover:pl-1">
                            {tab.text}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {tab.desc}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <nav
        className="flex relative mt-4 flex-col pl-6 pt-4 capitalize
                    after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2
                    after:w-[160px] after:h-[2px] after:rounded-full after:bg-foreground/10
                    text-md md:hidden font-medium"
      >
        <Link className={"hover:underline"} href="/" onClick={handleClick}>
          home
        </Link>
        <ul>
          <li>
            <p className="pl-3 py-1 text-foreground/60 font-medium border-l-[2px]">
              anime
            </p>
            <ul>
              <li>
                <Link
                  className="hover:underline"
                  href="/anime"
                  onClick={handleClick}
                >
                  anime list
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/anime/top"
                  onClick={handleClick}
                >
                  top anime
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/anime/top/characters"
                  onClick={handleClick}
                >
                  top characters
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <p className="pl-3 py-1 text-foreground/60 font-medium border-l-[2px]">
              manga
            </p>
            <ul>
              <li>
                <Link
                  className="hover:underline"
                  href="/manga"
                  onClick={handleClick}
                >
                  manga list
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/manga/top"
                  onClick={handleClick}
                >
                  top manga
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
