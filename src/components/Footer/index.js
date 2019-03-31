import React from "react";
import styled from "styled-components";

import waLogo from "../../img/wa-logo.svg";

const Wrapper = styled.footer`
  position: ${props => props.isHome ? 'absolute' : 'relative'};
  bottom: ${props => props.isHome ? '0' : 'auto'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 50px;
  background-color: #fff;

  & .copyright {
    font-size: 14px;
    font-weight: 300;
  }

  & img {
    width: 140px;
  }
`;

const Footer = (props) => (
  <Wrapper isHome={props.isHome}>
    <span className="copyright">Все права защищены ©</span>
    <img src={waLogo} alt="web-alternative" />
  </Wrapper>
);

export default Footer;
