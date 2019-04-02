import styled from "styled-components";

import BgWrapper from "../../styled/defaultArticleBg";
import { Breadcrumbs } from "../../Nav/styled";

import { BoxAnimation, ArrowAnimation, LogoWordAnimation, WaterAnimation } from "./animation";

import wavesBg from "../../../img/wavesBgBlack.png";
import mramorImg from "../../../img/mramor.png";
import arrowDown from '../../../img/icon-arrow-down.svg'

export const Wrapper = styled(BgWrapper)`
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

export const Box = styled(BoxAnimation)`
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

export const Water = styled(WaterAnimation)`
  width: 720px;
  height: 287px;
  background: url(${mramorImg}) no-repeat bottom right;
`;

export const LogoWord = styled(LogoWordAnimation)`
  width: 360px;
  height: 215px;

  & > img {
    max-width: 100%;
  }
`;

export const LikeBreadcrumb = styled(Breadcrumbs)`
  position: absolute;
  top: 42px;
  left: 72px;
`;

export const Arrow = styled(ArrowAnimation)`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-51%);
  width: 15px;
  height: 80px;
  background: url(${arrowDown}) no-repeat;
  background-position-x: center;
  background-position-y: -50px;
`