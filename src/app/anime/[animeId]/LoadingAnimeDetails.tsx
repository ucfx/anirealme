import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { HeadingClassNames } from "@/components/Heading";

export default function LoadingAnimeDetails() {
  return (
    <div className="container">
      <div className="flex-wrap grid grid-cols-1 md:grid-cols-[auto,1fr] gap-2 md:gap-0 md:gap-x-4">
        <Skeleton className="w-[240px] h-[341px] justify-self-center" />

        <div className="flex flex-col">
          <Skeleton className="h-8 w-3/4 mx-auto" />

          <Separator className="my-2" />

          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 gap-2">
            <div className="text-center">
              <h4 className="text-base">Score</h4>
              <div className="flex flex-col items-center gap-2 justify-center">
                <Skeleton className="w-24 h-10" />
                <Skeleton className="w-12 h-3" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base">Ranked</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <Skeleton className="w-24 h-10" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base">Popularity</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <Skeleton className="w-24 h-10" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-base">Members</h4>
              <div className="flex items-center justify-center flex-wrap space-x-1">
                <Skeleton className="w-24 h-10" />
              </div>
            </div>
          </div>

          <Separator className="my-2 md:my-1" />
          <div className="text-center md:text-left grid grid-cols-2 md:grid-cols-4 md:grid-rows-[auto,auto] flex-1 gap-2 capitalize text-foreground/70">
            <div>
              <h4 className="text-base text-foreground">Type</h4>
              <Skeleton className="w-3/4 h-4 mx-auto" />
              <Skeleton className="w-3/4 h-4 mt-2 mx-auto" />
              <h4 className="text-base text-foreground mt-2 mx-auto">Source</h4>
              <Skeleton className="w-3/4 h-4" />
            </div>
            <div>
              <h4 className="text-base text-foreground">Airing</h4>
              <Skeleton className="w-3/4 h-4 mx-auto" />
              <Skeleton className="w-3/4 h-4 mt-2 mx-auto" />
              <Skeleton className="w-3/4 h-4 mt-2 mx-auto" />
            </div>
            <div className="grid grid-cols-2 gap-2 col-span-2 md:block md:col-span-1">
              <div>
                <h4 className="text-base text-foreground">Episodes</h4>
                <Skeleton className="w-3/4 h-4 mx-auto" />
              </div>
              <div>
                <h4 className="text-base text-foreground md:mt-2">Studios</h4>
                <Skeleton className="w-3/4 h-4 mx-auto" />
              </div>
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 md:row-span-2 order-last md:order-none">
              <h3 className={HeadingClassNames}>Trailer</h3>
              <div className="flex-1 flex items-center justify-center w-full h-full rounded-md">
                <Skeleton className="w-[240px] h-[135px]" />
              </div>
            </div>

            <div className="flex gap-2 flex-wrap justify-center md:justify-start md:items-end col-span-2 md:col-span-3">
              <Skeleton className="w-20 h-6" />
              <Skeleton className="w-20 h-6" />
              <Skeleton className="w-20 h-6" />
            </div>
            <Separator className="my-2 md:hidden col-span-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <div className="w-3/5">
          <h3 className={HeadingClassNames}>Synopsis</h3>
          <Skeleton className="w-full h-40" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mt-4">Also Known As</h3>
          <Skeleton className="w-full h-12" />
          <h3 className="text-xl font-bold mt-4">Statistics</h3>

          <div className="grid grid-cols-3 gap-2 gap-y-6">
            <div>
              <h4 className="text-base text-foreground">Watching</h4>
              <Skeleton className="w-full h-12" />
            </div>
            <div>
              <h4 className="text-base text-foreground">Completed</h4>
              <Skeleton className="w-full h-12" />
            </div>
            <div>
              <h4 className="text-base text-foreground">On Hold</h4>
              <Skeleton className="w-full h-12" />
            </div>
            <div>
              <h4 className="text-base text-foreground">Dropped</h4>
              <Skeleton className="w-full h-12" />
            </div>
            <div>
              <h4 className="text-base text-foreground">Plan to Watch</h4>
              <Skeleton className="w-full h-12" />
            </div>
            <div>
              <h4 className="text-base text-foreground">Total</h4>
              <Skeleton className="w-full h-12" />
            </div>
            <div className="col-span-3">
              <h4 className="text-base text-foreground">Scores</h4>
              <Skeleton className="w-full h-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
