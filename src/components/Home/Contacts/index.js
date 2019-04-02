import React, { useState, useEffect } from "react";
import { Wrapper, InnerWrapper, CenterBlock } from "./styled";
import Footer from "../../Footer";
import { MainTitle } from "../../Service/styled";

import img from "../../../img/contact-img.jpg";
import PixiElem from "./pixi";

const Contacts = props => {
  const [isRender, setIsRender] = useState(false)
  useEffect(() => {
    if (canvas !== null && !isRender) {
      setIsRender(true);
      canvas.appendChild(PixiElem());
    }
  });

  // console.log(PixiElem());
  let canvas = null;

  return (
    <Wrapper className="section">
      <MainTitle>Контакты</MainTitle>
      <CenterBlock>
        <InnerWrapper>
          <div className="img">
            <div id="canvasPixi" ref={ref => (canvas = ref)}>
              {/* {PixiElem().map(elm => elm)} */}
              {/* <img src={img} alt="" /> */}
            </div>
            <div className="border" />
          </div>
          <div className="content">
            <ul>
              <li className="mb30">
                Советская, 1 к4
                <br />
                Кировский район, Хабаровск
              </li>
              <li className="mb30">
                <a>Google Maps</a>
              </li>
              <li>T: +7 (999) 824 17 29</li>
              <li className="mb30">E: info@riverclub.com</li>
              <li>Пн - Пт: 7:00 - 22:00</li>
              <li className="mb30">Сб - Вс: 8:00 - 23:00</li>
            </ul>
          </div>
        </InnerWrapper>
      </CenterBlock>

      <Footer isHome={props.isHome} />
    </Wrapper>
  );
};

export default Contacts;
