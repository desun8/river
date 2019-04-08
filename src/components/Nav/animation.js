export const BtnAnimation = {
  outline: {
    hoverable: true,
    hover: {
      background: "#fff",
      color: "#444952"
    }
  }
};

export const BtnCircleAnimation = {
  // hoverable: true,
  init: {
    width: 36,
    borderRadius: 50,
  },
  hover: {
    width: 144,
    borderRadius: 200,
    transition: { ease: "circOut", duration: 800 },
    delayChildren: 400,
  }
};
