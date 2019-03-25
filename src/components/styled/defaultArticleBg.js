import styled from "styled-components";

import greyBg from "../../img/grey_bg.png";
import noiseBg from "../../img/noiseBg.png";

const Wrapper = styled.article`
  position: relative;
  ${'' /* background: linear-gradient(
    360deg,
    rgba(210, 210, 210, 0.4) -22.94%,
    rgba(210, 210, 210, 0.2) 79.56%
  ); */}

  background: url(${greyBg}) no-repeat;
  background-size: cover;

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

export default Wrapper;
