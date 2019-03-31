import React, { useState } from "react";

import Logo from "./Logo";
import {
  Header,
  Breadcrumbs,
  ButtonCircle,
  Button,
  ButtonOutline,
  ButtonWithAnimation
} from "./styled";
import MenuBtn from "./MenuBtn";

const Nav = props => {
  const [btnActive, setBtnActive] = useState(false);

  // const handleClick

  return (
    <Header id="header">
      <Logo rotateDeg={props.logoRotateDeg} />
      <Breadcrumbs></Breadcrumbs>
      {btnActive === false && (
        <ButtonCircle onMouseEnter={() => setBtnActive(true)}>
          <i className="icon-phone" />
        </ButtonCircle>
      )}
      {btnActive && (
        <ButtonWithAnimation
          onMouseLeave={() => setTimeout(() => setBtnActive(false), 250)}
        >
          <a href={`tel:+7 (4212) 99-99-99`}>+7 (4212) 99-99-99</a>
        </ButtonWithAnimation>
      )}
      <Button mLeft="20px">
        Заморозить карту
        <i className="icon-freeze" />
      </Button>
      <ButtonOutline mLeft="20px">Вступить в клуб</ButtonOutline>
      <MenuBtn />
    </Header>
  );
};

export default Nav;
