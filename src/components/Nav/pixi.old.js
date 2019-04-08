import * as PIXI from "pixi.js";
import { TweenMax } from "gsap/TweenMax";

import displacementImage from "../../img/pixijs-ripple.jpg";
// import img from "../../../img/contact-img.jpg";

const PixiElem = (isOutlineBtn = false) => {
  // const spriteImagesSrc = [img];

  const renderer = new PIXI.autoDetectRenderer(186, 78, { transparent: true });
  const stage = new PIXI.Container();
  const displacementSprite = new PIXI.Sprite.fromImage(displacementImage);
  const displacementFilter = new PIXI.filters.DisplacementFilter(
    displacementSprite
  );
  const alphaFilter = new PIXI.filters.AlphaFilter(0);


  // Set the filter to stage
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

  // stage.filters = [displacementFilter, alphaFilter];

  displacementSprite.anchor.set(0.5);
  displacementSprite.x = renderer.width / 2;
  displacementSprite.y = renderer.height / 2;

  displacementSprite.scale.x = 0.25;
  displacementSprite.scale.y = 0.25;
  // stage.addChild(displacementSprite);

  setInterval(() => {
    displacementSprite.scale.x = 0.25;
    displacementSprite.scale.y = 0.25;
  }, 2000)

  const btn = new PIXI.Graphics();
  const draw = () => {
    btn.clear();
    btn.beginFill(0xffffff);
    btn.drawRoundedRect(20, 20, 144, 36, 20);
    // btn.drawRoundedRect(0, 0, renderer.width, renderer.height, 20);
    btn.endFill();

    stage.addChild(btn);
  };

  draw();

  btn.filters = [displacementFilter, alphaFilter];
  btn.addChild(displacementSprite);

  if (isOutlineBtn) {
    const textStyle = new PIXI.TextStyle({
      fontFamily: "Roboto,sans-serif",
      fontSize: 14,
      fontWeight: "300",
      fill: "#444952",
      align: 'center',
    });

    const message = new PIXI.Text('Вступить в клуб', textStyle);
    message.position.set(renderer.width / 2 - 104 / 2, renderer.height / 2 - 18 / 2);

    console.log(message)

    stage.addChild(message);

    stage.interactive = true;

    const mouseEnter = () => {
      console.log("mouseEnter");
      TweenMax.to(alphaFilter, 1, { alpha: 1 });
      TweenMax.fromTo(displacementSprite.scale, 6, { x: 0.25, y: 0.25 }, { x: 1, y: 1, repeat: -1 })
    };

    const mouseLeave = () => {
      console.log("mouseLeave");
      TweenMax.to(alphaFilter, 1, { alpha: 0 });
    }
    stage.on("mouseover", mouseEnter);
    stage.on("mouseout", mouseLeave);
  } else {
    alphaFilter.alpha = 1;
  }

  var ticker = new PIXI.ticker.Ticker();
  ticker.autoStart = true;
  ticker.add(function (delta) {

    
    if (!isOutlineBtn) {
      // TweenMax.to(displacementSprite.scale, 6, { x: 1, y: 1, repeat: -1 }).delay(1)
      displacementSprite.scale.x += 0.002 * delta;
      displacementSprite.scale.y += 0.002 * delta;
    }

    // Render our stage
    renderer.render(stage);
  });

  return renderer.view;
};

export default PixiElem;
