import * as Motion from "./use-client";
import type { MotionHeadingProps } from "./use-client";
export const HeadingClassNames =
  "relative text-2xl font-bold text-foreground mb-6 px-4 w-fit after:content-[''] after:absolute after:w-1 after:h-full after:top-0 after:left-0 after:bg-foreground after:rounded";
export default function Heading({
  children,
  className,
  ...rest
}: MotionHeadingProps) {
  return (
    <Motion.H2 className={`${HeadingClassNames} ${className}`} {...rest}>
      {children}
    </Motion.H2>
  );
}
