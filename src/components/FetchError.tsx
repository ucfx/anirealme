"use client";
import { RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";

export default function FetchError({ msg }: { msg: string }) {
  return (
    <div className="flex items-center justify-center h-[50vh] bg-accent/30">
      <div className="text-center">
        <h3 className="text-foreground text-3xl font-bold mb-3 text-red-400">
          {msg}
        </h3>
        <p className="text-foreground/70 mb-3">
          Please try refreshing the page.
        </p>
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={() => window.location.reload()}
        >
          <RefreshCcw size={25} className="pr-2" />
          Reload
        </Button>
      </div>
    </div>
  );
}
