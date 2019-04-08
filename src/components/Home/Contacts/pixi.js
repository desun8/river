import * as PIXI from "pixi.js";
import { TimelineMax, Expo } from "gsap/TweenMax";

import displacementImage from "../../../img/pixijs-clouds.jpg";
import img from "../../../img/contact-img.jpg";

//Aliases Pixi
const Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  filters = PIXI.filters,
  Sprite = PIXI.Sprite;

const PixiElem = () => {
  const app = new Application({
    width: 388,
    height: 540,
    antialias: true,
    transparent: true,
    resolution: 1
  }
  );

  loader
    .add("image", img)
    .add("spriteClouds", displacementImage)
    .load(setup);

  function setup() {
    // add content image
    const image = new Sprite(
      resources["image"].texture
    );

    app.stage.addChild(image)

    // add sprite and filter
    const displacementSprite = new Sprite(
      resources["spriteClouds"].texture
    );

    const displacementFilter = new filters.DisplacementFilter(
      displacementSprite
    );

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    app.stage.filters = [displacementFilter];

    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;

    displacementFilter.scale.x = 0;
    displacementFilter.scale.y = 0;

    displacementSprite.scale.x = 2;
    displacementSprite.scale.y = 2;


    app.stage.addChild(displacementSprite);

    // add animation for sprite
    app.ticker.add(delta => move(delta));

    function move(delta) {
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

    app.stage.interactive = true;

    app.stage.on("mouseover", animationStart)
    app.stage.on("mouseout", animationEnd)

    // first time renderer animation
    tl.play();
    setTimeout(() => tl.reverse(), 2000)

  }

  return app.view;
};

export default PixiElem;
