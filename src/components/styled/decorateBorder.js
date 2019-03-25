import styled from "styled-components";

// FIXME: заменить isOdd на isTop\isBottom
const borderStyle = "1px solid #444952";

const DecorateBorder = styled.div`
  position: absolute;
  right: 0;
  bottom: ${props => (props.isOdd ? "0" : "auto")};
  top: ${props => (props.isOdd ? "auto" : "0")};
  width: 36px;
  height: 36px;
  border-right: ${borderStyle};
  border-bottom: ${props => (props.isOdd ? borderStyle : "none")};
  border-top: ${props => (props.isOdd ? "none" : borderStyle)};
  border-top-right-radius: ${props => (props.isOdd ? "0" : "2px")};
  border-bottom-right-radius: ${props => (props.isOdd ? "2px" : "0")};
`;

export default DecorateBorder;
