import React from "react";
import { Route } from "react-router-dom";
import { css, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import greyBg from "./img/grey_bg.png";

import HomePage from "./components/Home";
import Gallery from "./components/Gallery";

const GlobalFont = css`
  body {
    @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&subset=cyrillic");
    font-family: "Roboto", sans-serif !important;
    color: #444952;
  }
`;

const GlobalButton = css`
  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset};

  ${GlobalFont}
  ${GlobalButton}

  * {
    box-sizing: border-box;
  }

  #root {
    position: relative;
    z-index: 10;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <HomePage />
      {/* <Route exact path="/" component={HomePage} />
      <Route path="/gallery" component={Gallery} /> */}
    </React.Fragment>
  );
};

export default App;
