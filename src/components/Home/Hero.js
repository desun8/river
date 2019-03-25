import React from "react";
import styled from "styled-components";

import BgWrapper from "../styled/defaultArticleBg";

import { BtnNext, BtnPrev } from "./NavBtnFullpage";

import wavesBg from "../../img/wavesBgBlack.png";
import mramorImg from "../../img/mramor.png";
import logoImg from "../../img/logoWord.svg";

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

const Box = styled.div`
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

const Hero = (props) => {
  const moveSectionDown = props.fullpage ? props.fullpage.moveSectionDown : null;

  const moveSectionUp = props.fullpage ? props.fullpage.moveSectionUp : null;
  return (
    <Wrapper className="section">
      <Box>
        <Water />
        <LogoWord>
          <img src={logoImg} alt="River Club" />
        </LogoWord>
      </Box>
      <BtnNext name={props.nextBlockName} toDown={moveSectionDown} />
    </Wrapper>
  );
};

export default Hero;
