"use client";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";
export default function Video({
  youtube_id,
  className,
}: {
  youtube_id: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`relative ${className}`}>
      {loading && <Skeleton className="absolute w-full h-full" />}
      <iframe
        src={`https://www.youtube.com/embed/${youtube_id}`}
        allowFullScreen
        title="Anime Trailer"
        className={`relative w-full h-full`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
