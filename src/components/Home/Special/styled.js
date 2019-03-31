import styled from "styled-components";

// FIXME: test animation library
// import posed, { PoseGroup } from "react-pose";

import BgWrapper from "../../styled/defaultArticleBg";
import linkIcon from "../../../img/icon-link-more.svg";

import { TextBlockAnimation } from "./animation";

export const Wrapper = styled(BgWrapper)`
  display: flex;

  .slick-list {
    overflow: visible;
  }

  .slick-slider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
`;

export const SliderItemWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  max-width: 1300px;
  width: 100%;
`;

export const ImageBlock = styled.div`
  position: relative;
  flex-basis: 40%;
  max-width: 500px;
  height: 450px;
  ${"" /* border: 1px solid green; */}

  .bgImg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .imgSlide1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 300px;
  }

  .imgSlide3 {
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate3d(-50%, -50%, 0);
  }

  .imgSlide2-1 {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 200px;
    z-index: 2;
  }

  .imgSlide2-2 {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate3d(-50%, -50%, 0);
    width: 225px;
    height: 338px;
    z-index: 1;
  }

  .imgSlide2-3 {
    position: absolute;
    top: 53.5%;
    right: 0;
    transform: translateY(-50%);
    z-index: 2;
  }
`;

export const TextBlock = styled(TextBlockAnimation)`
  flex-basis: 50%;
  max-width: 600px;
  padding: 0 15px;
  padding-top: 30px;
  ${"" /* border: 1px solid pink; */}
`;

export const SliderItemTitle = styled.h2`
  margin-bottom: 17px;
  font-size: 42px;
  line-height: 48px;
  font-weight: 700;
`;

export const SliderItemText = styled.p`
  margin-bottom: 23px;
  font-size: 18px;
  line-height: 32px;
`;

// FIXME: перенести в общий компонент, а этот удалить
export const SliderItemLink = styled.a`
  position: relative;
  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
  color: inherit;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: ${-(14 + 8)}px;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background: url(${linkIcon}) no-repeat;
    background-size: contain;
  }
`;
