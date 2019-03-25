import React from "react";

import { ItemWrapper, ItemText, ItemImg, DecorateBorder } from "./styled";

const SliderItem = ({ props }) => {
  const { count, title, text, bg } = props;

  if (count % 2) {
    return (
      <ItemWrapper>
        <ItemImg bgImage={bg}>
          <span>{count}</span>
        </ItemImg>
        <ItemText isOdd={true}>
          <h4>{title}</h4>
          <p>{text}</p>
        </ItemText>
        <DecorateBorder isOdd={true} />
      </ItemWrapper>
    );
  }

  return (
    <ItemWrapper>
      <ItemText isOdd={false}>
        <h4>{title}</h4>
        <p>{text}</p>
      </ItemText>
      <ItemImg bgImage={bg}>
        <span>{count}</span>
      </ItemImg>
      <DecorateBorder isOdd={false} />
    </ItemWrapper>
  );
};

export default SliderItem;
