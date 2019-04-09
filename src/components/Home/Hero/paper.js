import Paper from "paper";
import { TweenMax, Bounce } from "gsap";

const PaperLiquide = (canvas) => {
  const paper = new Paper.PaperScope();
  paper.setup(canvas);

  const path = new paper.Path();
  const view = paper.view;
  const tool = new paper.Tool();
  const points = 6;

  let width, height, center;
  let mousePos = view.center;
  let pathHeight = mousePos.y;
  let smooth = true;

  path.fillColor = {
    gradient: {
      stops: [['#6E85FD', 0.3], '#86F3D2']
    },
    origin: view.bounds.topCenter,
    destination: view.bounds.bottomCenter
  };

  initializePath();

  function initializePath() {
    center = view.center;
    width = view.size.width;
    height = view.size.height / 2;
    path.segments = [];
    path.add(view.bounds.bottomLeft);
    for (let i = 1; i < points; i++) {
      const point = new paper.Point(width / points * i, center.y);
      path.add(point);
    }
    path.add(view.bounds.bottomRight);
  }

  let isStart = false;

  view.onFrame = function (event) {
    if (!isStart) {
      pathHeight += (center.y - mousePos.y * event.delta - pathHeight) / 10;
    } else {
      pathHeight += (center.y - mousePos.y - pathHeight) / 10;
    }
    for (let i = 1; i < points; i++) {
      const sinSeed = event.count + (i + i % 10) * 100;
      const sinHeight = Math.sin(sinSeed / 200) * pathHeight;
      const yPos = Math.sin(sinSeed / 100) * sinHeight + height;
      // path.segments[i].point.y = yPos;
      TweenMax.to(path.segments[i].point, 0.5, { y: yPos, ease: Bounce.easeIn })
    }
    if (smooth)
      path.smooth({ type: 'continuous' });
  }

  tool.onMouseMove = function (event) {
    isStart = true;
    mousePos = event.point;
  }

  view.onResize = function (event) {
    initializePath();
  }
}

export default PaperLiquide;