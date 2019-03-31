import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";

const textAnimtaion = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "backOut", duration: 1500 },
    delay: 700
  },
  hidden: { opacity: 0, x: 100 }
};

const firstAnimtaion = {
  visible: {
    opacity: 1,
    transition: { ease: "linear", duration: 1500 },
    delay: 300
  },
  hidden: { opacity: 0 }
};

const secondAnimtaion = {
  visible: {
    opacity: 1,
    transition: { ease: "linear", duration: 1500 },
    delay: 1500
  },
  hidden: { opacity: 0 }
};

export const TextBlockAnimation = posed.div(textAnimtaion);

export const ImageBgAnimation = posed.img(firstAnimtaion);

export const ImageFrontAnimation = posed.img(secondAnimtaion);

export const ImageFrontAnimationWiFiLg = styled(
  posed.div({
    visible: {
      opacity: 1,
      transition: { ease: "linear", duration: 500 },
      delay: 2400
    },
    hidden: { opacity: 0 }
  })
)`
  width: 125px;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  background: url(${props => props.bgImg}) no-repeat center;
  background-size: 225px;
  background-position-x: 0px;
`;

export const ImageFrontAnimationWiFiMd = styled(
  posed.div({
    visible: {
      opacity: 1,
      transition: { ease: "linear", duration: 500 },
      delay: 2000
    },
    hidden: { opacity: 0 }
  })
)`
  width: 65px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate3d(-50%, -50%, 0);
  background: url(${props => props.bgImg}) no-repeat center;
  background-size: 225px;
  background-position-x: -120px;
`;

export const ImageFrontAnimationWiFiSm = styled(
  posed.div({
    visible: {
      opacity: 1,
      transition: { ease: "linear", duration: 500 },
      delay: 1600
    },
    hidden: { opacity: 0 }
  })
)`
  width: 50px;
  height: 100px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate3d(0, -50%, 0);
  background: url(${props => props.bgImg}) no-repeat center;
  background-size: 225px;
  background-position-x: -180px;
`;
