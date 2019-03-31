import React from "react";
import styled from "styled-components";

const COLOR = "#4c4e55";

const Button = styled.button`
  position: absolute;
  bottom: 30px;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;

const ArrowNext = styled(Button)`
  left: 30px;
  padding-bottom: 60px;
  background-color: transparent;
  border: none;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 13px;
    width: 1px;
    height: 40px;
    background: ${COLOR};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 8px;
    width: 10px;
    height: 10px;
    border-right: 1px solid ${COLOR};
    border-bottom: 1px solid ${COLOR};
    transform: rotate(45deg);
  }

  & span {
    color: ${COLOR};
    font-size: 14px;
    line-height: 16px;
    font-weight: 300;
    writing-mode: vertical-lr;
    text-orientation: mixed;
  }
`;

const ArrowPrev = styled(Button)`
  right: 30px;
  width: 36px;
  height: 36px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    width: 1px;
    height: 100%;
    background: ${COLOR};
  }

  &:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 13px;
    width: 10px;
    height: 10px;
    border-top: 1px solid ${COLOR};
    border-left: 1px solid ${COLOR};
    transform: rotate(45deg);
  }
`;

export const BtnNext = props => {
  /**
   *
   * @param {func} fn fullpage.js method moveSectionDown()
   */
  const handleClick = fn => {
    fn();
  };
  return (
    <ArrowNext onClick={() => handleClick(props.toDown)}>
      <span>{props.name}</span>
    </ArrowNext>
  );
};

export const BtnPrev = props => {
  /**
   *
   * @param {func} fn fullpage.js method moveSectionUp()
   */
  const handleClick = fn => {
    fn();
  };
  return <ArrowPrev onClick={() => handleClick(props.toUp)} />;
};
