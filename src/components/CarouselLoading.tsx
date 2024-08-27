import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { Skeleton } from "./ui/skeleton";
const OPTIONS: EmblaOptionsType = {
  loop: true,
  duration: 50,
};
export default function CarouselLoading() {
  const randomWidth = () => Math.floor(Math.random() * (90 - 25 + 1)) + 25;
  return (
    <EmblaCarousel options={OPTIONS}>
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
                        <p key={index}>
                          <Skeleton
                            className="h-4 my-3"
                            style={{
                              width: `${randomWidth()}%`,
                            }}
                          />
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-3 w-[100px]" />
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
    </EmblaCarousel>
    // <div className="py-6 overflow-hidden">
    //   <div className="flex justify-center items-center gap-10">
    //     <div className="flex gap-3 w-[70%]">
    //       <Skeleton className="w-[130px] h-[185px] sm:w-[190px] sm:h-[270px] lg:w-[240px] lg:h-[341px]" />
    //       <div className="flex flex-col flex-1">
    //         <Skeleton className="h-12 w-full mb-4" />
    //         <div className="flex-1 flex flex-col">
    //           <div className="flex-1 flex flex-col gap-4">
    //             {Array.from({ length: 4 }).map(() => (
    //               <Skeleton
    //                 className={`h-4`}
    //                 style={{
    //                   width: `${randomWidth()}%`,
    //                 }}
    //               />
    //             ))}
    //           </div>
    //           <Skeleton className="h-4 w-1/4" />
    //         </div>
    //         <div className="flex justify-between mt-4">
    //           <Skeleton className="h-12 w-[100px]" />
    //           <Skeleton className="h-12 w-[100px]" />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex gap-3 w-[70%]">
    //       <Skeleton className="w-[130px] h-[185px] sm:w-[190px] sm:h-[270px] lg:w-[240px] lg:h-[341px]" />
    //       <div className="flex flex-col flex-1">
    //         <Skeleton className="h-12 w-full mb-4" />
    //         <div className="flex-1 flex flex-col">
    //           <div className="flex-1 flex flex-col gap-4">
    //             {Array.from({ length: 4 }).map(() => (
    //               <Skeleton
    //                 className={`h-4`}
    //                 style={{
    //                   width: `${randomWidth()}%`,
    //                 }}
    //               />
    //             ))}
    //           </div>
    //           <Skeleton className="h-4 w-1/4" />
    //         </div>
    //         <div className="flex justify-between mt-4">
    //           <Skeleton className="h-12 w-[100px]" />
    //           <Skeleton className="h-12 w-[100px]" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex justify-between items-center mt-14">
    //     <Skeleton className="h-16 w-full md:w-[20%]" />
    //     <div className="flex justify-between gap-2">
    //       {Array.from({ length: 10 }).map(() => (
    //         <Skeleton className="h-6 w-6 rounded-full" />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
