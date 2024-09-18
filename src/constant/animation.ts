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
  viewport: {
    once: true,
  },
};

export const scrollFade = {
  ...fadeBlur,
  initial: {
    opacity: 0.5,
    filter: "blur(10px)",
  },
  animate: {},
  whileInView: fadeBlur.animate,
  transition: {
    duration: 0.5,
  },

  // initial: {
  //   y: 50,
  //   filter: "blur(10px)",
  // },
  // whileInView: {
  //   y: 0,
  //   filter: "blur(0px)",
  // },
  // // viewport: {
  // //   once: true,
  // // },
  // transition: {
  //   duration: 0.5,
  // },
};
