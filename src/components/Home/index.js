import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";

import Hero from "./Hero";
import Features from "./Features/";
import Special from "./Special";
import Service from "../Service";

const HomePage = () => {
  const anchors = ["hero", "features", "special", "service", "cards"];
  const anchorsName = {
    features: "Особенности",
    special: "Индивидуально для вас",
    services: "Услуги Клуба",
    cards: "Клубные Карты"
  };
  let setAllowScrolling = null;

  const afterLoad = (origin, destination, direction) => {
    console.log(destination.anchor);
    const elmAnchor = destination.anchor;
    if (elmAnchor === anchors[1] || elmAnchor === anchors[2]) {
      setAllowScrolling && setAllowScrolling(false);
    } else {
      setAllowScrolling && setAllowScrolling(true);
    }
  };

  return (
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      anchors={anchors}
      slidesNavigation={true}
      afterLoad={(...args) => afterLoad(...args)}
      render={({ state, fullpageApi }) => {
        if (state.initialized === true) {
          setAllowScrolling = fullpageApi.setAllowScrolling;
        }

        return (
          <ReactFullpage.Wrapper>
            <Hero fullpage={fullpageApi} nextBlockName={anchorsName.features} />
            <Features
              fullpage={fullpageApi}
              nextBlockName={anchorsName.special}
            />
            <Special
              fullpage={fullpageApi}
              nextBlockName={anchorsName.services}
            />
            <Service
              isHome={true}
              fullpage={fullpageApi}
              nextBlockName={anchorsName.cards}
            />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default HomePage;
