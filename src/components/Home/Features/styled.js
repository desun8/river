import styled from "styled-components";

// Стили слайдера
export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  ${'' /* padding-left: 210px; */}

  .slick-list {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 210px;
  }

  .slick-slide{
    &:nth-child(2n) {
      padding-top: 90px;
    }
  }
`;

// TODO: удалить?
// export const SliderList = styled.ul`
//   display: flex;
// `;

// export const SliderTitle = styled.h1`
//   position: absolute;
//   top: -150px;
//   color: #fff;
//   ${'' /* color: #ff0000; */}
//   font-size: 274px;
//   font-weight: 700;
//   transition: transform 500ms ease;
//   transform: translateX(${210/1440 * 100}%);
//   will-change: transform;
// `;

// Стили элементов слайдера
export const ItemWrapper = styled.div`
  position: relative;
  width: 290px;
`;

export const ItemImg = styled.div`
  position: relative;
  width: 100%;
  height: 388px;
  background-image: ${props =>
    props.bgImage !== null ? `url(${props.bgImage})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  transition: all 300ms ease;

  &:nth-child(2n-1) {
    margin-bottom: 35px;
  }

  &:hover {
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.25);
  }

  & span {
    position: absolute;
    left: 20px;
    bottom: 0;
    color: #fff;
    font-size: 110px;
    font-weight: 200;
  }
`;

export const ItemText = styled.div`
  position: relative;
  padding-right: 30px;
  color: #444952;
  font-weight: 300;

  & h4 {
    margin-bottom: 13px;
    padding-top: ${props => (props.isOdd ? "0" : "13px")};
    font-size: 18px;
    line-height: 24px;
  }

  & p {
    margin-bottom: ${props => (props.isOdd ? "15px" : "30px")};
    font-size: 14px;
    line-height: 16px;
  }
`;

/* 
  TODO: Перенести в общие компоненты

  т.к. есть вероятность, что такой элемент будет использоваться в нескольких местах проекта
*/
const borderStyle = "1px solid #444952";

export const DecorateBorder = styled.div`
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
