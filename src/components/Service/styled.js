import styled from "styled-components";

import BgWrapper from "../styled/defaultArticleBg";
import SliderTitle from "../styled/articleTitle.js";

import btnIcon from "../../img/icon-btn-slider.svg";
import btnIconGrid from "../../img/icon-btn-grid.svg";

import iconRange from "../../img/icon-range.svg";
import { listWrapper, sliderWrapper } from "./animation";

export const Wrapper = styled(BgWrapper)`
  position: relative;
  display: flex;
  align-items: center;

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  align-items: center;

  & .slick-slider {
    width: 100%;
  }
`;

export const ListWrapper = styled(listWrapper)`
  flex: 1 0 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SliderWrapper = styled(sliderWrapper)`
  flex: 1 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MainTitle = styled(SliderTitle)`
  right: 30px;
  transform: none;
`;

export const ServiceList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

export const ServiceListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 270px;
  cursor: pointer;
`;

export const ListItemImage = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 18px;
  background: url(${props => props.background || ""}) no-repeat center;
  background-size: cover;
  border-bottom: 1px solid rgba(68, 73, 82, 0.5);
  transition: all 300ms ease;

  ${ServiceListItem}:hover & {
    border-bottom: 1px solid rgba(68, 73, 82, 1);
  }
`;

export const ListItemTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 38px;
  font-weight: 900;
`;

export const ButtonToSlider = styled.button`
  position: absolute;
  left: 50%;
  bottom: 90px;
  transform: translateX(-50%);
  padding-left: 24px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  background-color: transparent;
  border: none;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background: url(${btnIcon}) no-repeat center;
    background-size: 18.5px;
  }

  &:focus {
    outline: none;
  }
`;

export const SliderControl = styled.div`
  position: absolute;
  left: 50%;
  bottom: 52px;
  transform: translateX(-50%);
  max-width: 1100px;
  width: 100%;
  height: 90px;
`;

export const ButtonToList = styled(ButtonToSlider)`
  top: 0;
  left: 0;
  bottom: auto;
  transform: none;
  z-index: 2;

  &:before {
    background: url(${btnIconGrid}) no-repeat center;
    background-size: 16.5px;
  }
`;

export const SliderRange = styled.input.attrs(({ length }) => ({
  type: "range",
  min: 0,
  max: length
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  appearance: none;
  width: 100%;
  height: 2px;
  background: #444952;
  border-radius: 3px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 88px;
    height: 76px;
    border: 0;
    background: url(${iconRange});
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const SliderItemWrapper = styled.section`
  position: relative;
  display: flex;
  max-width: 1100px;
  width: 100%;

  & > * {
    flex: 1 0 5em;
  }
`;

export const SliderItemImage = styled.div`
  position: relative;
  width: 504px;
  height: 504px;

  & .bg {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
  }

  & .img {
    position: absolute;
    ${"" /* top: 45%; */}
    top: 30%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;

export const SliderItemContent = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;
export const SliderItemTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 32px;
  line-height: 38px;
  font-weight: 700;
`;

export const SliderItemMenu = styled.ul`
  margin-bottom: 30px;
`;

export const SliderItemMenuItem = styled.li`
  margin-bottom: 25px;
  font-size: 22px;
  line-height: 26px;
  font-weight: 300;
`;

// TODO: скорее всего будет глобальным компонентом для html с сервера
export const SliderItemHtml = styled.div`
  blockquote,
  .blockquote {
    position: relative;
    padding-left: 10px;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #6c6c6c;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 100%;
      background-color: #444952;
    }
  }
`;
