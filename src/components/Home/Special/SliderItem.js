import React from "react";
import {
  SliderItemWrapper,
  SliderItemTitle,
  SliderItemText,
  SliderItemLink,
  ImageBlock,
  TextBlock
} from "./styled";

const SliderItem = props => {
  return (
    <SliderItemWrapper>
      <ImageBlock>{props.children}</ImageBlock>
      <TextBlock>
        <SliderItemTitle>{props.title}</SliderItemTitle>
        <SliderItemText>{props.text}</SliderItemText>
        <SliderItemLink href={props.url}>Подробнее</SliderItemLink>
      </TextBlock>
    </SliderItemWrapper>
  );
};

export default SliderItem;
