import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DotsList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  width: 100%;
`;

export const Paging = styled.button`
  .slick-active > & {
    opacity: 1;

    &:after {
      height: 3px;
    }
  }

  position: relative;
  padding: 0;
  padding-bottom: 14px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  background-color: transparent;
  border: none;
  outline: none;
  opacity: 0.5;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #444952;
  }
`;

export const CustomDots = props => (
  <Wrapper>
    <DotsList>{props.children}</DotsList>
  </Wrapper>
);
