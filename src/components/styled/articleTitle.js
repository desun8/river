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
  transform: translateX(${(210 / 1440) * 100}%);
  ${'' /* transition: transform ${props => props.transTime || 2000}ms cubic-bezier(0.645, 0.045, 0.355, 1); */}
  transition: transform ${props => props.transTime || 2000}ms ease;
  will-change: transform;
`;

export default SliderTitle;
