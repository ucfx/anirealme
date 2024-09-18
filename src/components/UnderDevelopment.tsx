"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function UnderDevelopment() {
  const router = useRouter();
  return (
    <div className="h-[80vh] flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold">Under Development</h2>
        <Button onClick={router.back} variant={"outline"}>
          Go back
        </Button>
    </div>
  );
}
