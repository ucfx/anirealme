import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import React, { FormEventHandler } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { DialogTitle } from "./ui/dialog";
import { AnimeTab, MangaTab } from "./Navbar";
import { useRouter } from "next/navigation";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearch: FormEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.currentTarget.value);
  };

  const handleClick = (href: string) => {
    router.push(href);
    setOpen(false);
    setSearchText("");
  };

  return (
    <>
      <Button
        variant="ghost"
        size="lg"
        onClick={() => setOpen((open) => !open)}
        className="inline-flex items-center whitespace-nowrap transition-colors 
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 border border-input 
        hover:text-accent-foreground py-2 px-1 relative h-8 w-fit
        justify-start rounded-[0.5rem] text-sm font-normal 
        text-muted-foreground shadow-none group"
      >
        <Search className="h-4" />
        <kbd className="pointer-events-none right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 md:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle title="Search" />
        <CommandInput
          placeholder="Type a command or search..."
          value={searchText}
          onInput={handleSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Anime Suggestions">
            <CommandItem
              key={"Anime List"}
              onSelect={() => handleClick("/anime")}
            >
              {"Anime List"}
            </CommandItem>
            {AnimeTab.map((tab) => (
              <CommandItem
                key={tab.href}
                onSelect={() => handleClick(tab.href)}
              >
                {tab.text}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Manga Suggestions">
            <CommandItem
              key={"Manga List"}
              onSelect={() => handleClick("/manga")}
            >
              {"Manga List"}
            </CommandItem>
            {MangaTab.map((tab) => (
              <CommandItem
                key={tab.href}
                onSelect={() => handleClick(tab.href)}
              >
                {tab.text}
              </CommandItem>
            ))}
          </CommandGroup>
          {searchText.trim() !== "" && (
            <CommandGroup heading="Search Results">
              <CommandItem
                onSelect={() => handleClick(`/anime?q=${searchText}`)}
              >
                Search for &quot;{searchText}&quot; in Anime
              </CommandItem>
              <CommandItem
                onSelect={() => handleClick(`/manga?q=${searchText}`)}
              >
                Search for &quot;{searchText}&quot; in Manga
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
