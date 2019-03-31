import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BgWrapper from "../styled/defaultArticleBg";

import { BtnNext, BtnPrev } from "./NavBtnFullpage";

import wavesBg from "../../img/wavesBgBlack.png";
import mramorImg from "../../img/mramor.png";
import logoImg from "../../img/logoWord.svg";

import arrowDown from '../../img/icon-arrow-down.svg'

// FIXME: test animation library
import posed, { PoseGroup } from "react-pose";
import { Breadcrumbs } from "../Nav/styled";

const Wrapper = styled(BgWrapper)`
  display: flex;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: url(${wavesBg}) 50% 100%;
    background-size: contain;
    background-repeat-y: no-repeat;
  }
`;

const BoxAnimation = {
  visible: {
    x: 0,
    transition: { ease: "linear", duration: 1000 },
    delay: 1500
  },
  hidden: { x: "-100%" }
};

const Box = styled(posed.div(BoxAnimation))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 434px;
  padding: 72px 0;
  padding-right: 55px;
  background-color: #fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const Water = styled.div`
  width: 720px;
  height: 287px;
  background: url(${mramorImg}) no-repeat bottom right;
`;

const LogoWord = styled.div`
  width: 360px;
  height: 215px;

  & > img {
    max-width: 100%;
  }
`;

const LikeBreadcrumb = styled(Breadcrumbs)`
  position: absolute;
  top: 42px;
  left: 72px;
`;

const Arrow = styled(posed.div({
  size: {
    height: 0,
    transition: {
      duration: 3000,
      ease: "linear",
      loop: Infinity
    }
  }
}))`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-51%);
  width: 15px;
  height: 50px;
  background: url(${arrowDown}) no-repeat center bottom;

`

const Hero = props => {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
  });

  const moveSectionDown = props.fullpage
    ? props.fullpage.moveSectionDown
    : null;

  const moveSectionUp = props.fullpage ? props.fullpage.moveSectionUp : null;
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
