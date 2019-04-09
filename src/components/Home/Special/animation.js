export const textAnimtaion = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "backOut", duration: 1200 },
    delay: 200
  },
  hidden: { opacity: 0, x: 100 }
};

export const firstAnimtaion = {
  visible: {
    opacity: 1,
    transition: { ease: "linear", duration: 1200 }
    // delay: 200
  },
  hidden: { opacity: 0 }
};

export const secondAnimtaion = {
  visible: {
    opacity: 1,
    transition: { ease: "linear", duration: 1000 },
    delay: 1000
  },
  hidden: { opacity: 0 }
};

export const braceAnimation = {
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    left: "12%",
    transition: {
      x: { ease: "linear", duration: 0 },
      opacity: { ease: "easeIn", duration: 1500 },
      default: { ease: "linear", duration: 1000 }
    },
    delay: 1000
  },
  resize: {
    x: 0,
    opacity: 1,
    scale: 0.6,
    left: 0,
    transition: { ease: [0.645, 0.045, 0.355, 1], duration: 2500 }
  },
  hidden: {
    x: -500,
    opacity: 0,
    transition: { ease: [0.645, 0.045, 0.355, 1], duration: 800 }
  }
};

export const animationWiFiLg = {
  visible: {
    opacity: 1,
    transition: { ease: "linear", duration: 500 },
    delay: 1600
  },
  hidden: { opacity: 0 }
};

export const animationWiFiMd = {
  visible: {
    opacity: 1,
    transition: { ease: "linear", duration: 500 },
    delay: 1300
  },
  hidden: { opacity: 0 }
};

export const animationWiFiSm = {
  visible: {
    opacity: 1,
    transition: { ease: "linear", duration: 500 },
    delay: 1000
  },
  hidden: { opacity: 0 }
};

export const iconAnimation = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "backOut", duration: 600 },
    delay: 1600
  },
  hidden: { opacity: 0, y: -20 }
};
