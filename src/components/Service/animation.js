import posed from "react-pose";

export const listWrapper = posed.div({
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 25,
    }
  },

  hidden: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 25,
    }
  }
});

export const sliderWrapper = posed.div({
  visible: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 25,
    }
  },

  hidden: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 25,
    }
  }
});
