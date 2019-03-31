import styled from "styled-components";

import posed from "react-pose";
import { spring } from "popmotion";

import iconPhone from "../../img/icon-phone.svg";
import iconFreeze from "../../img/icon-freeze.svg";

export const Header = styled.header`
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
`;

export const Breadcrumbs = styled.div`
  flex-grow: 2;
  padding: 0 50px;
  color: #3b3d43;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
`;

// TODO: общий компонент
export const Button = styled.button`
  margin-left: ${props => props.mLeft || 0};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 36px;
  color: #444952;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  background: #fff;
  border: none;
  border-radius: 200px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);

  overflow: hidden;

  &:focus {
    outline: none;
  }

  & .icon-freeze {
    display: block;
    width: 10px;
    height: 10px;
    margin-left: 5px;
    background: url(${iconFreeze}) no-repeat;
    background-position: center;
  }

  & a {
    font-size: 14px;
    font-weight: 300;
    color: inherit;
    text-decoration: none;
  }
`;

// FIXME: в отдельный файл?
const ButtonAnimtaion = posed.button({
  hoverable: true,
  init: {
    width: 50,
    color: '#fff',
    fontSize: 0,
  },
  hover: {
    width: 144,
    color: '#444952',
    fontSize: '14px',
    transition: {
      fontSize: { ease: 'easeIn', duration: 600 },
      default: { ease: 'circOut', duration: 800 }
    }
  }
});

export const ButtonWithAnimation = styled(ButtonAnimtaion)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 36px;
  color: #444952;
  font-weight: 300;
  font-size: 14px;
  line-height: 12px;
  background: #fff;
  border: none;
  border-radius: 200px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);

  overflow: hidden;

  &:focus {
    outline: none;
  }

  & a {
    ${'' /* position: absolute; */}
    ${'' /* width: 130px; */}
    font-size: inherit;
    font-weight: 300;
    color: inherit;
    text-decoration: none;
  }
`;

export const ButtonOutline = styled(Button)`
  font-size: 14px;
  background: transparent;
  border: 1px solid #444952;
  box-shadow: none;
`;

export const ButtonCircle = styled(Button)`
  padding: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;

  & .icon-phone {
    display: block;
    width: 18px;
    height: 18px;
    background: url(${iconPhone}) no-repeat;
  }
`;
