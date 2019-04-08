import React, { useState, useEffect } from 'react'

import * as PIXI from "pixi.js";
import { TimelineMax, Expo } from "gsap/TweenMax";

import img from "../../../img/contact-img.jpg";
import displacementImage from "../../../img/pixijs-clouds.jpg";

const checkVisible = (elm) => {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

//Aliases Pixi
const Application = PIXI.Application,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  Container = PIXI.Container,
  Ticker = PIXI.ticker.Ticker,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  filters = PIXI.filters,
  Sprite = PIXI.Sprite;

const CanvasPixi = (props) => {
  // const [isVisible, setIsVisible] = useState(false)
  const [pixiInit, setPixiInit] = useState(false)
  let count = 0
  // useEffect(() => {
  //   if (elemForPixi !== null && props.render && !pixiInit) {
  //     console.log(count)
  //     count++;
  //     setPixiInit(true);
  //     updatePixiCnt(elemForPixi);
  //   }

  //   return () => {
  //     pixiApp.destroy();
  //   }
  //   // setIsVisible(checkVisible(pixiCnt));
  //   // testV = isVisible
  //   // console.log(isVisible)
  // })

  let elemForPixi = null;

  // let testV = isVisible;

  // useEffect(() => {
  //   if (isVisible) {
  //     console.log(pixiCnt)
  //     pixiInitialize();
  //     updatePixiCnt(pixiCnt);
  //   }
  // }, [isVisible])

  let pixiCnt = null;
  const stage = new Container();
  const pixiApp = new autoDetectRenderer({
    width: 388,
    height: 540,
    antialias: true,
    // transparent: true,
    resolution: 1
  });

  const pixiSetup = () => {
    loader
      .add("image", img)
      .add("sprite", displacementImage)
      .load(pixiInitialize)
  }

  const pixiInitialize = () => {
    console.log(pixiApp);
    // add content image
    const image = new Sprite(
      resources["image"].texture
    );

    stage.addChild(image)

    // add sprite and filter
    const displacementSprite = new Sprite(
      resources["sprite"].texture
    );

    const displacementFilter = new filters.DisplacementFilter(
      displacementSprite
    );

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    stage.filters = [displacementFilter];

    displacementSprite.anchor.set(0.5);
    displacementSprite.x = pixiApp.options.width / 2;
    displacementSprite.y = pixiApp.options.height / 2;

    displacementFilter.scale.x = 0;
    displacementFilter.scale.y = 0;

    displacementSprite.scale.x = 2;
    displacementSprite.scale.y = 2;


    stage.addChild(displacementSprite);

    // add animation for sprite
    // stage.ticker.add(delta => animationDefault(delta));

    // if (isVisible) pixiApp.ticker.update()

    const ticker = new Ticker();
    ticker.add((delta) => {
      displacementSprite.x += 1.5 * delta;
      displacementSprite.y += 0.9 * delta;
    })

    const animationDefault = (delta) => {
      // console.log(props.visible)
      // if (testV) {
      //   displacementFilter.scale.x = 0;
      //   displacementFilter.scale.y = 0;
      // } else {
      //   displacementFilter.scale.x = 30;
      //   displacementFilter.scale.y = 30;
      // }
      displacementSprite.x += 1.5 * delta;
      displacementSprite.y += 0.9 * delta;
    }

    // add animation for filter
    const tl = new TimelineMax({ paused: true });
    tl.to(displacementFilter.scale, 2, { x: 30, y: 30, ease: Expo.easeInOut });

    function animationStart() {
      tl.play()
    }

    function animationEnd() {
      tl.reverse()
    }

    stage.interactive = true;

    stage.on("mouseover", animationStart)
    stage.on("mouseout", animationEnd)
  };

  const updatePixiCnt = (element) => {
    pixiCnt = element;
    //now we are adding the application to the DOM element which we got from the Ref.
    if (pixiCnt && pixiCnt.children.length <= 0) {
      pixiCnt.appendChild(pixiApp.view);
      //The setup function is a custom function that we created to add the sprites. We will this below
      pixiSetup();
    }
  };

  return (
    <div id="canvasPixi" ref={elm => updatePixiCnt(elm)}>
      {/* <img src={img} alt="" /> */}

    </div>
  )
}

export default CanvasPixi;