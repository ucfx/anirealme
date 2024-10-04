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
type LinkType = {
  text: string;
  href: string;
  desc: string;
  className?: string;
};

const AnimeTab: LinkType[] = [
  {
    text: "Top Airing Anime",
    href: "/anime?type=tv&status=airing&order_by=score&sort=desc",
    desc: "Watch the best anime currently airing with fresh episodes and updates.",
  },
  {
    text: "Most Popular Anime",
    href: "/anime?type=tv&order_by=popularity&sort=asc",
    desc: "Uncover the most popular anime series loved by global fans.",
  },
  {
    text: "Upcoming Anime Hits",
    href: "/anime?type=tv&status=upcoming&order_by=members&sort=desc",
    desc: "Get excited for the top upcoming anime titles and releases.",
  },
  {
    text: "Fan-Favorite Anime",
    href: "/anime?type=tv&order_by=favorites&sort=desc",
    desc: "Discover anime series highly rated by both fans and critics.",
  },
  {
    text: "Top Anime Characters",
    href: "/characters",
    desc: "Meet the most iconic and beloved characters in anime history.",
    className: "col-span-2",
  },
];

const MangaTab: LinkType[] = [
  {
    text: "Top Publishing Manga",
    href: "/manga?status=publishing&order_by=members&sort=desc",
    desc: "Explore the most popular manga currently published on a weekly or monthly basis.",
  },
  {
    text: "Most Anticipated Manga",
    href: "/manga?status=upcoming",
    desc: "Check out the most awaited manga releases coming soon.",
  },
  {
    text: "Most Popular Manga",
    href: "/manga?order_by=popularity&sort=asc",
    desc: "Discover manga titles with the highest popularity worldwide.",
  },
  {
    text: "Fan-Favorite Manga",
    href: "/manga?order_by=favorites&sort=desc",
    desc: "Readers' all-time favorite manga with top fan ratings.",
  },
];
export default function NavLink({
  setOpen,
}: {
  setOpen?: (_: boolean) => void;
}) {
  const handleClick = () => {
    if (setOpen) setOpen(false);
  };

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
      <nav className="flex relative flex-col pl-2 pt-8 capitalize text-md md:hidden font-medium overflow-y-scroll">
        <ul>
          <li>
            <Link className={"hover:underline"} href="/" onClick={handleClick}>
              home
            </Link>
          </li>
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
              {AnimeTab.map((tab) => (
                <li key={tab.text}>
                  <Link
                    className="hover:underline"
                    href={tab.href}
                    onClick={handleClick}
                  >
                    {tab.text}
                  </Link>
                </li>
              ))}
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
              {MangaTab.map((tab) => (
                <li key={tab.text}>
                  <Link
                    className="hover:underline"
                    href={tab.href}
                    onClick={handleClick}
                  >
                    {tab.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export { AnimeTab, MangaTab };
