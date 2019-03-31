import styled from "styled-components";

import BgWrapper from "../styled/defaultArticleBg";
import SliderTitle from "../styled/articleTitle.js";

export const Wrapper = styled(BgWrapper)`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled(SliderTitle)`
  right: 30px;
  transform: none;
`;

export const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 780px;
  width: 100%;
  height: 510px;

  & .card-vip {
    &:before {
      top: -70px;
      left: -60px;
      background-position: center;
      background-size: 460px;
    }
  }

  & .card-standart {
    &:before {
      top: 0;
      right: -25px;
      background-position: right 10px;
      background-size: 180px;
    }

    &:after {
      opacity: 0.07;
      background-size: 120%;
      background-position: center top;
    }
  }

  & .card-junior {
    &:before {
      top: -10%;
      right: -30px;
      height: 120%;
      background-position: right center;
      background-size: 200px;
    }

    &:after {
      opacity: 0.07;
      background-size: 120%;
      background-position: center;
    }
  }

  & .card-children {
    &::before {
      top: 0;
      right: -45px;
      background-position: right center;
      background-size: 180px;
    }
    &:after {
      opacity: 0.07;
      background-size: 120%;
      background-position: center;
    }
  }
`;

const black = "linear-gradient(180deg, #2A2A2A 0%, #272727 100%);";
const pink = "linear-gradient(131.15deg, #FF7F7F 9.38%, #FF9D7E 97.52%)";
const green = "#5AEF84";
const yellow = "linear-gradient(131.15deg, #FFCC7F 9.38%, #FFB47E 97.52%)";

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.vip ? "flex-end" : "space-between")};
  align-items: flex-start;
  width: 318px;
  height: ${props => (props.vip ? "488px" : "145px")};
  padding: 20px;
  color: ${props => (props.vip ? "#fff" : "#444952")};
  background: ${props => {
    if (props.vip) return black;
    if (props.colorBg === "pink") return pink;
    if (props.colorBg === "green") return green;
    if (props.colorBg === "yellow") return yellow;
  }};
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  transition: all 300ms ease;

  &:hover {
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.25);
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.imgCnt});
    background-repeat: no-repeat;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.imgBg});
    background-repeat: no-repeat;
  }

  & h3 {
    margin-bottom: 10px;
    font-size: ${props => (props.vip ? "28px" : "18px")};
    font-weight: ${props => (props.vip ? "500" : "400")};
  }
`;
