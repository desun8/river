import React, { useState, useEffect } from "react";

import Logo from "./Logo";
import {
  Header,
  Breadcrumbs,
  ButtonCircle,
  Button,
  ButtonOutline,
  ButtonWithAnimation,
  IconPhone,
  LinkTel
} from "./styled";
import MenuBtn from "./MenuBtn";
import { PixiElem, PixiElem1 } from "./pixi";

const hasElemPixi = (elem) => Array.from(elem.children).some(e =>
  e.nodeName === "CANVAS" ? e : false
)

const Nav = props => {
  const [btnIsHover, setBtnIsHover] = useState(false);

  const [addPixi, setAddPixi] = useState(false);

  // const pixi = PixiElem()

  useEffect(() => {
    // console.log(hasElemPixi(btnOutlineRef));
    if (btnOutlineRef && !hasElemPixi(btnOutlineRef)) btnOutlineRef.appendChild(PixiElem())

    if (btnFreezeRef && !hasElemPixi(btnFreezeRef)) btnFreezeRef.appendChild(PixiElem1())

    if (btnPhoneRef && !hasElemPixi(btnPhoneRef)) btnPhoneRef.appendChild(PixiElem1())
  })


  let btnOutlineRef = null;
  let btnFreezeRef = null;
  let btnPhoneRef = null
  const handleMouseEnter = e => {
    if (!addPixi) {
      setAddPixi(true);
      e.currentTarget.appendChild(PixiElem());
    }
  };

  const handleMouseLeave = e => {
    if (addPixi) {
      setAddPixi(false);
      const canvas = Array.from(e.currentTarget.children).find(elm =>
        elm.nodeName === "CANVAS" ? elm : false
      );

      if (canvas) e.currentTarget.removeChild(canvas);
    }
  };

  return (
    <Header id="header">
      <Logo rotateDeg={props.logoRotateDeg} />
      <Breadcrumbs />

      <ButtonCircle
        ref={ref => btnPhoneRef = ref}
        onMouseEnter={e => {
          setBtnIsHover(true);
          // handleMouseEnter(e);
        }}
        onMouseLeave={e => {
          setBtnIsHover(false);
          // handleMouseLeave(e);
        }}
        pose={btnIsHover ? "hover" : "init"}
      >
        <IconPhone />
        <LinkTel href={`tel:+7 (4212) 99-99-99`}>+7 (4212) 99-99-99</LinkTel>
      </ButtonCircle>

      <Button
        ref={ref => btnFreezeRef = ref}
        // onMouseEnter={e => handleMouseEnter(e)}
        // onMouseLeave={e => handleMouseLeave(e)}
        mLeft="20px"
      >
        <span>Заморозить карту</span>
        <i className="icon-freeze" />
      </Button>
      <ButtonOutline
        ref={ref => btnOutlineRef = ref}
        // onMouseEnter={e => handleMouseEnter(e)}
        // onMouseLeave={e => handleMouseLeave(e)}
        mLeft="20px"
      >
        <span>Вступить в клуб</span>
      </ButtonOutline>
      <MenuBtn />
    </Header>
  );
};

export default Nav;
