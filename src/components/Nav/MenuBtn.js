import React from "react";
import styled, { keyframes } from "styled-components";

import posed from "react-pose";

import iconText from "../../img/icon-menu-text.svg";

const PulseAnimation = posed.i({
  pulse: {
    opacity: 0.1,
    scale: 1.5,
    transition: {
      duration: 2000,
      ease: "backOut",
      loop: Infinity
    }
  }
});

const Pulse = styled(PulseAnimation)`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1;
  border-radius: 50%;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  opacity: 0.8;
`;

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: none;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  z-index: 5;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.i`
  width: 14px;
  height: 25px;
  background: url(${iconText}) no-repeat;
`;

const Wrapper = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  margin-left: 68px;
`;

const MenuBtn = () => {
  return (
    <Wrapper>
      <Button>
        <Icon />
      </Button>
      <Pulse initialPose="none" pose="pulse" />
    </Wrapper>
  );
};

export default MenuBtn;
