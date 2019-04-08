import posed from "react-pose";

export const BoxAnimation = posed.div({
  visible: {
    x: 0,
    transition: { ease: "circOut", duration: 2000 },
    delay: 1500,
    delayChildren: 2200,
    staggerChildren: 1000,
    staggerDirection: -1
  },
  hidden: { x: "-150%" }
});

export const LogoWordAnimation = posed.div({
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 1200 }
  },
  hidden: { y: -50, opacity: 0 }
});

export const WaterAnimation = posed.div({
  visible: {
    opacity: 1,
    transition: { ease: "circIn", duration: 1200 }
  },
  hidden: { opacity: 0 }
});

export const ArrowAnimation = posed.div({
  size: {
    backgroundPositionY: "100%",
    transition: {
      duration: 2100,
      // ease: 'circIn',
      ease: [0.95, 0.05, 0.795, 0.035],
      loop: Infinity
    }
  }
});
