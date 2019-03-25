import React from "react";
import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import HomePage from "./components/Home";
import Gallery from "./components/Gallery";

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&subset=cyrillic');
    font-family: 'Roboto', sans-serif !important;
    color: #444952;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Route exact path="/" component={HomePage} />
      <Route path="/gallery" component={Gallery} />
    </React.Fragment>
  );
};

export default App;
