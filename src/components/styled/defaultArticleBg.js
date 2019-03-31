import styled from "styled-components";

import greyBg from "../../img/grey_bg.png";
import noiseBg from "../../img/noiseBg.png";

import wavesBg from "../../img/wavesBgBlack.png";

const Wrapper = styled.article`
  position: relative;
  ${"" /* background: linear-gradient(
    360deg,
    rgba(210, 210, 210, 0.4) -22.94%,
    rgba(210, 210, 210, 0.2) 79.56%
  ); */}

  ${"" /* background: url(${greyBg}) no-repeat;
  background-size: cover; */}

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: url(${noiseBg}) 50% 50%;
    background-size: contain;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

export const WrapperWave = styled(Wrapper)`
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

export const FixedHomeBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${greyBg}) no-repeat;
  background-size: cover;
  z-index: 1;
`;

export default Wrapper;
