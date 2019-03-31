import React from "react";
import styled from "styled-components";

import logoImg from "../../img/logo.svg";

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;

const ImgLogo = styled.img.attrs(() => ({
  src: logoImg
}))`
  width: 30px;
`;

const CircleBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #86f3a4;
  border-right-color: transparent;
  border-bottom-color: transparent;
  transform: rotate(${props => `${props.rotate}deg` || "0deg"});
  transition: all 700ms ease;
`;

const Logo = props => {
  return (
    <Box>
      <ImgLogo />
      <CircleBorder rotate={props.rotateDeg} />
    </Box>
  );
};

export default Logo;
