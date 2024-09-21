import { Skeleton } from "./ui/skeleton";

export default function CarouselLoading() {
  const randomWidth = () => Math.floor(Math.random() * (90 - 25 + 1)) + 25;
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex gap-5 py-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={`embla__slide !opacity-100 !blur-0 flex items-center flex-[0_0_100%] sm:flex-[0_0_70%] lg:flex-[0_0_50%] embla__class-names`}
          >
            <div className="flex-1">
              <div className="w-full flex-wrap flex gap-2 md:gap-4 h-full">
                <div
                  className="w-[130px] h-[185px]
                     sm:w-[190px] sm:h-[270px]
                     lg:w-[240px] lg:h-[341px]"
                >
                  <Skeleton className="w-full h-full" />
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="mb-1">
                    <Skeleton className="h-8 w-full" />
                  </h3>
                  <Skeleton className="h-[2px] w-full" />
                  <div className="flex-1 flex justify-between flex-col">
                    <div className="flex flex-col justify-between flex-1 gap-4">
                      <div>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <div key={index}>
                            <Skeleton
                              className="h-4 my-3"
                              style={{
                                width: `${randomWidth()}%`,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-[100px]" />
                      </div>
                    </div>

                    <div className="hidden mt-2 sm:flex items-center flex-wrap justify-between gap-2">
                      <Skeleton className="h-[2px] w-full" />
                      <Skeleton className="h-9 w-[100px] rounded-sm" />
                      <Skeleton className="h-9 w-[100px] rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:hidden mt-2 flex-1 items-center flex-wrap justify-between gap-2">
                <Skeleton className="h-[2px] w-full" />

                <Skeleton className="h-9 w-[100px] rounded-sm" />
                <Skeleton className="h-9 w-[100px] rounded-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:flex justify-between items-center mt-7">
        <Skeleton className="h-14 w-full md:w-[150px]" />
        <div className="flex justify-between gap-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-6 rounded-full" />
          ))}
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center mt-7">
        <Skeleton className="h-14 w-14" />
        <Skeleton className="h-14 w-14" />
        <Skeleton className="h-14 w-14" />
      </div>
    </div>
  );
}
