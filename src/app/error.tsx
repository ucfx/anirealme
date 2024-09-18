"use client";

import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">
          Something went wrong
        </h1>
        <p className="text-lg font-medium text-gray-500">
          {"An error occurred. Please try again later."}
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
