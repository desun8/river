import React from "react";
import { CardWrapper } from "./styled";
import LinkMore from "../styled/linkMore";

const Card = props => {
  return (
    <CardWrapper
      className={props.class}
      vip={props.vip}
      imgBg={props.imgBg}
      imgCnt={props.imgCnt}
      colorBg={props.colorBg}
    >
      <h3>{props.title}</h3>
      <LinkMore theme={props.vip ? "white" : ""}>Подробнее</LinkMore>
    </CardWrapper>
  );
};

export default Card;
