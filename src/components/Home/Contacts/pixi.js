import * as PIXI from "pixi.js";

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

  displacementSprite.scale.x = 2;
  displacementSprite.scale.y = 2;
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
    displacementSprite.x += 1.5 * delta;
    displacementSprite.y += 0.9 * delta;

    // Render our stage
    renderer.render(stage);
  });

  return renderer.view;
};

export default PixiElem;
