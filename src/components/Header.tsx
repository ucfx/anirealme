"use client";
import ThemeDropdown from "@/components/ThemeDropdown";
import { Button } from "./ui/button";
import { CommandMenu } from "./CommandMenu";
import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "./ui/drawer";

import Navbar from "./Navbar";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background backdrop-blur-sm supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="hidden md:flex">
          <Logo size="sm" />
          <Navbar />
        </div>
        <Drawer direction="left" open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              variant={"ghost"}
              className="md:hidden text-foreground w-fit h-fit px-0 hover:bg-trnsparent"
            >
              <HamburgerMenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent
            className="md:hidden flex justify-between p-4 rounded-[0px] rounded-r-xl flex-row-reverse
                        h-full max-w-[250px] fixed bottom-0 left-0 
                        [&>div:first-child]:hidden"
          >
            <DrawerDescription></DrawerDescription>

            <div className="w-full flex flex-col">
              <DrawerTitle
                className="relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2
                            after:w-[170px] after:h-[2px] after:rounded-full after:bg-foreground/10"
              >
                <DrawerClose asChild>
                  <Logo size="lg" />
                </DrawerClose>
              </DrawerTitle>
              <Navbar setOpen={setOpen} />
            </div>
          </DrawerContent>
        </Drawer>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <div>
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Button variant={"ghost"} size={"icon"} asChild>
              <a target="_blank" href="https://github.com/ucfx/anirealme">
                <GitHubLogoIcon className="w-4 h-4" />
              </a>
            </Button>
            <ThemeDropdown />
          </nav>
        </div>
      </div>
    </header>
  );
}
