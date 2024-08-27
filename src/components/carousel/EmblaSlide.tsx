import { HtmlHTMLAttributes } from "react";

export default function EmblaSlide({
  children,
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`embla__slide ${className}`} {...rest}>
      {children}
    </div>
  );
}
