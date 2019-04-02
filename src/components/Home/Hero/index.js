import React, { useState, useEffect } from "react";

import { BtnNext } from "../NavBtnFullpage";

import logoImg from "../../../img/logoWord.svg";
import { Wrapper, LikeBreadcrumb, Box, Water, LogoWord, Arrow } from "./styled";

const Hero = props => {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
  });

  const moveSectionDown = props.fullpage
    ? props.fullpage.moveSectionDown
    : null;

  return (
    <Wrapper className="section">
      <LikeBreadcrumb>ФИТНЕС клуб премиум Класса</LikeBreadcrumb>
      <Box pose={play ? "visible" : "hidden"}>
        <Water />
        <LogoWord>
          <img src={logoImg} alt="River Club" />
        </LogoWord>
      </Box>
      <Arrow initialPose="none" pose="size" />
      <BtnNext name={props.nextBlockName} toDown={moveSectionDown} />
    </Wrapper>
  );
};

export default Hero;
