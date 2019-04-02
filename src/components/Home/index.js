import React, { useState } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

import Hero from "./Hero/";
import Features from "./Features/";
import Special from "./Special";
import Service from "../Service";
import Cards from "../Cards";
import Contacts from "./Contacts";
import Nav from "../Nav";
import { FixedHomeBg } from "../styled/defaultArticleBg";

const FixedBg = () => <FixedHomeBg id="fixedBg" />;

const HomePage = () => {
  const [isSpecial, setIsSpecial] = useState(false);

  const anchors = [
    "hero",
    "features",
    "special",
    "service",
    "cards",
    "contacts"
  ];
  const anchorsName = {
    features: "Особенности",
    special: "Индивидуально для вас",
    services: "Услуги Клуба",
    cards: "Клубные Карты",
    contacts: "Контакты"
  };

  const rotateDeg = {
    hero: 0,
    features: 50,
    special: 100,
    service: 150,
    cards: 200,
    contacts: 250
  };

  let setAllowScrolling = null;

  let currentAnchor = null;

  const afterLoad = (origin, destination, direction) => {
    const elmAnchor = destination.anchor;
    if (elmAnchor === anchors[1] || elmAnchor === anchors[2]) {
      setAllowScrolling && setAllowScrolling(false);
    } else {
      setAllowScrolling && setAllowScrolling(true);
    }
  };

  const onLeave = (origin, destination, direction) => {
    currentAnchor = destination.anchor;

    if (destination.anchor === anchors[2]) {
      setIsSpecial(true);
    }
  };

  return (
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      anchors={anchors}
      lockAnchors={true}
      slidesNavigation={true}
      fixedElements={["#header", "#fixedBg"]}
      afterLoad={(...args) => afterLoad(...args)}
      onLeave={(...args) => onLeave(...args)}
      render={({ state, fullpageApi }) => {
        if (state.initialized === true) {
          setAllowScrolling = fullpageApi.setAllowScrolling;
        }

        return (
          <ReactFullpage.Wrapper>
            <FixedBg />

            <Nav logoRotateDeg={rotateDeg[currentAnchor]} />

            <Hero fullpage={fullpageApi} nextBlockName={anchorsName.features} />
            <Features
              fullpage={fullpageApi}
              nextBlockName={anchorsName.special}
            />
            <Special
              fullpage={fullpageApi}
              nextBlockName={anchorsName.services}
              isCurrent={isSpecial}
            />
            <Service
              isHome={true}
              fullpage={fullpageApi}
              nextBlockName={anchorsName.cards}
            />
            <Cards
              isHome={true}
              fullpage={fullpageApi}
              nextBlockName={anchorsName.contacts}
            />
            <Contacts isHome={true} />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default HomePage;
