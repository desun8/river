import React from "react";
import { ServiceListItem, ListItemImage, ListItemTitle } from "./styled";
import LinkMore from "../styled/linkMore";
import DecorateBorder from "../styled/decorateBorder";

const ListItem = props => {
  return (
    <ServiceListItem>
      <ListItemImage background={props.bgImg} />
      <ListItemTitle>{props.title}</ListItemTitle>
      <LinkMore href={props.url}>Подробнее</LinkMore>
      <DecorateBorder isOdd={true} />
    </ServiceListItem>
  );
};

export default ListItem;
