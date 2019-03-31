import React from "react";
import parser from "html-react-parser";
import {
  SliderItemWrapper,
  SliderItemImage,
  SliderItemContent,
  SliderItemTitle,
  SliderItemMenu,
  SliderItemMenuItem,
  SliderItemHtml
} from "./styled";
import { DecorateBorderLeft } from "../styled/decorateBorder";

const SliderItem = props => {
  return (
    <SliderItemWrapper>
      <SliderItemImage>{props.children}</SliderItemImage>
      <SliderItemContent>
        <SliderItemTitle>{props.title}</SliderItemTitle>
        {props.list !== null && (
          <SliderItemMenu>
            {props.list.map(elm => (
              <SliderItemMenuItem key={elm.id}>{elm.name}</SliderItemMenuItem>
            ))}
          </SliderItemMenu>
        )}
        <SliderItemHtml>{parser(props.html)}</SliderItemHtml>
      </SliderItemContent>
      <DecorateBorderLeft />
    </SliderItemWrapper>
  );
};

export default SliderItem;
