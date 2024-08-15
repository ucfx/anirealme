import Link from "next/link";
export default function NavLink({
  setOpen,
}: {
  setOpen?: (_: boolean) => void;
}) {
  const handleClick = () => {
    if (setOpen) setOpen(false);
  };
  const className =
    "transition-colors text-foreground hover:underline md:hover:no-underline md:hover:text-foreground/80 md:text-foreground/60";
  return (
    <nav
      className="flex relative mt-4 flex-col pl-6 pt-4 capitalize
    after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 
    after:w-[160px] after:h-[2px] after:rounded-full after:bg-foreground/10
    gap-4 text-md font-medium md:pl-3 md:mt-0 md:pt-0 md:flex-row md:items-center md:after:content-none
    "
    >
      <Link className={className} href="/" onClick={handleClick}>
        home
      </Link>
      <Link className={className} href="/top" onClick={handleClick}>
        top anime
      </Link>
      <Link className={className} href="/popular" onClick={handleClick}>
        popular
      </Link>
    </nav>
  );
}

{
  /* <nav className="flex items-center gap-4 text-sm">
  <Link
    className="transition-colors hover:text-foreground/80 text-foreground/60"
    href="/about"
  >
    About
  </Link>
  <Link
    className="transition-colors hover:text-foreground/80 text-foreground/60"
    href="/blog"
  >
    Blog
  </Link>
  <Link
    className="transition-colors hover:text-foreground/80 text-foreground/60"
    href="/projects"
  >
    Projects
  </Link>
</nav>; */
}
