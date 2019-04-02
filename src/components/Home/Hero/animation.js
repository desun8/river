import posed from "react-pose";

const boxChildrenAnimation = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "circIn", duration: 1500 }
  },
  hidden: { x: -120, opacity: 0 }
};

export const BoxAnimation = posed.div({
  visible: {
    x: 0,
    transition: { ease: "circOut", duration: 2000 },
    delay: 1500,
    delayChildren: 2000
  },
  hidden: { x: "-150%" }
});

export const LogoWordAnimation = posed.div(boxChildrenAnimation);

export const WaterAnimation = posed.div(boxChildrenAnimation);

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
