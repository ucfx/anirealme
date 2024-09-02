export const fadeBlur = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
  },
  transition: {
    duration: 1,
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
  },
};

export const scrollFade = {
  ...fadeBlur,
  animate: {},
  whileInView: fadeBlur.animate,
  transition: {
    duration: 0.5,
  },
};
