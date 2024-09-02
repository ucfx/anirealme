"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import React from "react";

export type MotionHeadingProps = HTMLMotionProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

const H1 = React.forwardRef<HTMLHeadingElement, MotionHeadingProps>(
  function MotionHeadingH1({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    );
  }
);

const H2 = React.forwardRef<HTMLHeadingElement, MotionHeadingProps>(
  function MotionHeadingH2({ children, ...props }, ref) {
    return (
      <motion.h2 ref={ref} {...props}>
        {children}
      </motion.h2>
    );
  }
);

const H3 = React.forwardRef<HTMLHeadingElement, MotionHeadingProps>(
  function MotionHeadingH3({ children, ...props }, ref) {
    return (
      <motion.h3 ref={ref} {...props}>
        {children}
      </motion.h3>
    );
  }
);

const H4 = React.forwardRef<HTMLHeadingElement, MotionHeadingProps>(
  function MotionHeadingH4({ children, ...props }, ref) {
    return (
      <motion.h4 ref={ref} {...props}>
        {children}
      </motion.h4>
    );
  }
);

const H5 = React.forwardRef<HTMLHeadingElement, MotionHeadingProps>(
  function MotionHeadingH5({ children, ...props }, ref) {
    return (
      <motion.h5 ref={ref} {...props}>
        {children}
      </motion.h5>
    );
  }
);

const H6 = React.forwardRef<HTMLHeadingElement, MotionHeadingProps>(
  function MotionHeadingH6({ children, ...props }, ref) {
    return (
      <motion.h6 ref={ref} {...props}>
        {children}
      </motion.h6>
    );
  }
);

// div
type MotionDivProps = HTMLMotionProps<"div">;

const Div = React.forwardRef<HTMLDivElement, MotionDivProps>(function Div(
  { children, ...props },
  ref
) {
  return (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  );
});

// span
type MotionSpanProps = HTMLMotionProps<"span">;

const Span = React.forwardRef<HTMLSpanElement, MotionSpanProps>(function Span(
  { children, ...props },
  ref
) {
  return (
    <motion.span ref={ref} {...props}>
      {children}
    </motion.span>
  );
});

export { H1, H2, H3, H4, H5, H6, Div, Span };
