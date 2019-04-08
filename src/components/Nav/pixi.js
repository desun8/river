import * as PIXI from "pixi.js";
import { TimelineMax, Power0 } from "gsap/TweenMax";

import displacementImage from "../../img/pixijs-ripple.jpg";

// Aliases Pixi
const Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  filters = PIXI.filters,
  Sprite = PIXI.Sprite;

export const PixiElem = () => {
  const app = new Application({
    width: 186,
    height: 78,
    antialias: true,
    transparent: true,
    resolution: 1
  });
  
  loader
    .add("spriteRipple", displacementImage)
    .load(setup);


  function setup() {
    // add sprite and filter
    const displacementSprite = new Sprite(
      resources["spriteRipple"].texture
    );

    const displacementFilter = new filters.DisplacementFilter(
      displacementSprite
    );

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    app.stage.filters = [displacementFilter];

    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;

    displacementSprite.scale.x = 0.25;
    displacementSprite.scale.y = 0.25;

    app.stage.addChild(displacementSprite);

    // draw btn
    const btn = new PIXI.Graphics();
    const drawBtn = () => {
      btn.clear();
      btn.beginFill(0xffffff);
      btn.drawRoundedRect(20, 20, 144, 36, 20);
      // btn.drawRoundedRect(0, 0, renderer.width, renderer.height, 20);
      btn.endFill();

      app.stage.addChild(btn);
    };

    drawBtn();

    // add animation for filter
    const tl = new TimelineMax({ repeat: -1, paused: false });
    tl.to(displacementSprite.scale, 2, { x: 1, y: 0.5, ease: Power0.easeNone });
  }

  return app.view;
};


export const PixiElem1 = () => {
  const app = new Application({
    width: 186,
    height: 78,
    antialias: true,
    transparent: true,
    resolution: 1
  });

  
  loader
    .load(setup);

  function setup() {
    // add sprite and filter
    const displacementSprite = new Sprite(
      resources["spriteRipple"].texture
    );

    const displacementFilter = new filters.DisplacementFilter(
      displacementSprite
    );

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    app.stage.filters = [displacementFilter];

    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;

    displacementSprite.scale.x = 0.25;
    displacementSprite.scale.y = 0.25;

    app.stage.addChild(displacementSprite);

    // draw btn
    const btn = new PIXI.Graphics();
    const drawBtn = () => {
      btn.clear();
      btn.beginFill(0xffffff);
      btn.drawRoundedRect(20, 20, 144, 36, 20);
      // btn.drawRoundedRect(0, 0, renderer.width, renderer.height, 20);
      btn.endFill();

      app.stage.addChild(btn);
    };

    drawBtn();

    // add animation for filter
    const tl = new TimelineMax({ repeat: -1, paused: false });
    tl.to(displacementSprite.scale, 2, { x: 1, y: 0.5, ease: Power0.easeNone });
  }

  return app.view;
};

export const PixiElem2 = () => {
  const app = new Application({
    width: 186,
    height: 78,
    antialias: true,
    transparent: true,
    resolution: 1
  });

  
  loader
    .load(setup);

  function setup() {
    // add sprite and filter
    const displacementSprite = new Sprite(
      resources["spriteRipple"].texture
    );

    const displacementFilter = new filters.DisplacementFilter(
      displacementSprite
    );

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    app.stage.filters = [displacementFilter];

    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;

    displacementSprite.scale.x = 0.25;
    displacementSprite.scale.y = 0.25;

    app.stage.addChild(displacementSprite);

    // draw btn
    const btn = new PIXI.Graphics();
    const drawBtn = () => {
      btn.clear();
      btn.beginFill(0xffffff);
      btn.drawRoundedRect(20, 20, 144, 36, 20);
      // btn.drawRoundedRect(0, 0, renderer.width, renderer.height, 20);
      btn.endFill();

      app.stage.addChild(btn);
    };

    drawBtn();

    // add animation for filter
    const tl = new TimelineMax({ repeat: -1, paused: false });
    tl.to(displacementSprite.scale, 2, { x: 1, y: 0.5, ease: Power0.easeNone });
  }

  return app.view;
};


// export default PixiElem;