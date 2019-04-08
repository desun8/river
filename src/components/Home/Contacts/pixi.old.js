import * as PIXI from "pixi.js";
import { TweenMax } from "gsap/TweenMax";

import displacementImage from "../../../img/pixijs-clouds.jpg";
import img from "../../../img/contact-img.jpg";

const PixiElem = () => {
  const spriteImagesSrc = [img];

  const renderer = new PIXI.autoDetectRenderer(388, 540, { transparent: true });
  const stage = new PIXI.Container();
  const slidesContainer = new PIXI.Container();
  const displacementSprite = new PIXI.Sprite.fromImage(displacementImage);
  const displacementFilter = new PIXI.filters.DisplacementFilter(
    displacementSprite
  );

  stage.addChild(slidesContainer);

  // Set the filter to stage
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

  stage.filters = [displacementFilter];

  displacementSprite.anchor.set(0.5);
  displacementSprite.x = renderer.width / 2;
  displacementSprite.y = renderer.height / 2;

  displacementSprite.scale.x = 0;
  displacementSprite.scale.y = 0;
  stage.addChild(displacementSprite);

  function loadPixiSprites(sprites) {
    for (var i = 0; i < sprites.length; i++) {
      var texture = new PIXI.Texture.fromImage(sprites[i]);
      var image = new PIXI.Sprite(texture);

      image.anchor.set(0.5);
      image.x = renderer.width / 2;
      image.y = renderer.height / 2;

      slidesContainer.addChild(image);
    }
  }

  loadPixiSprites(spriteImagesSrc);

  var ticker = new PIXI.ticker.Ticker();
  ticker.autoStart = true;
  ticker.add(function(delta) {
    // Optionally have a default animation
    // displacementSprite.x += 1.5 * delta;
    // displacementSprite.y += 0.9 * delta;

    // Render our stage
    renderer.render(stage);
  });

  // ticker.start()

  const mouseEnter = () => {
    // TweenMax.to(stage, 0.5, {filters: [displacementFilter]})
    TweenMax.to(displacementSprite.scale, 0, {x: 2, y: 2});
    TweenMax.to(displacementSprite, 50, {x: 1000, y: 1000})
  };
  const mouseLeave = () => {
    // TweenMax.to(stage, 0.5, {filters: []})
    TweenMax.to(displacementSprite.scale, 0, {x: 0, y: 0});
    TweenMax.to(displacementSprite, 50, {x: 0, y: 0})
  };
  slidesContainer.interactive = true;
  slidesContainer.on("pointerover", mouseEnter);
  slidesContainer.on("pointerout", mouseLeave);

  return renderer.view;
};

export default PixiElem;
