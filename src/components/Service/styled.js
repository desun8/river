import styled from "styled-components";

import BgWrapper from "../styled/defaultArticleBg";
import SliderTitle from "../styled/articleTitle.js";

import btnIcon from "../../img/icon-btn-slider.svg";

export const Wrapper = styled(BgWrapper)`
  position: relative;
  display: flex;
  align-items: center;

  & .hidden {
    display: none;
  }

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;    
  }
`;

export const MainTitle = styled(SliderTitle)`
  right: 30px;
  transform: none;
`;

export const ServiceList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`;

export const SliderItemWrapper = styled.section`
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
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  & .img {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;

export const SliderItemContent = styled.div`
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
