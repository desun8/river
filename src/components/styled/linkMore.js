import styled from "styled-components";
import linkIcon from "../../img/icon-link-more.svg";

const LinkMore = styled.a`
  position: relative;
  ${'' /* width: fit-content; */}
  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
  color: inherit;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: ${-(14+8)}px;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background: url(${linkIcon}) no-repeat;
    background-size: contain;
  }
`;

export default LinkMore;