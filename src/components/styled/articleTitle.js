import styled from "styled-components";

const SliderTitle = styled.h1`
  position: absolute;
  ${'' /* top: -150px; */}
  top: 30px;
  display: inline-block;
  ${'' /* overflow: hidden; */}
  white-space: nowrap;
  color: #fff;
  font-size: 274px;
  font-weight: 700;
  transition: transform 500ms ease;
  transform: translateX(${(210 / 1440) * 100}%);
  will-change: transform;
`;

export default SliderTitle;
