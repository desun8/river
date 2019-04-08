import Paper from "paper";
import { TweenMax, Bounce } from "gsap";

const TestPaper = (canvas) => {
  var paper = new Paper.PaperScope();
  paper.setup(canvas);

  var width, height, center;
  var points = 8;
  var smooth = true;
  var path = new paper.Path();
  var view = paper.view;
  var tool = new paper.Tool();
  // console.log(view);
  var mousePos = view.center;
  var pathHeight = mousePos.y;

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
    for (var i = 1; i < points; i++) {
      var point = new paper.Point(width / points * i, center.y);
      path.add(point);
    }
    path.add(view.bounds.bottomRight);

    pathHeight += (center.y - mousePos.y - pathHeight) / 10;
    for (var i = 1; i < points; i++) {
      var sinSeed = (i + i % 10) * 100;
      var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
      var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
      // path.segments[i].point.y = yPos;
      TweenMax.to(path.segments[i].point, 0.5, { y: yPos, ease: Bounce.easeIn })
    }
    // path.fullySelected = true;
  }

  view.onFrame = function (event) {
    pathHeight += (center.y - mousePos.y - pathHeight) / 10;
    for (var i = 1; i < points; i++) {
      var sinSeed = event.count + (i + i % 10) * 100;
      var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
      var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
      // path.segments[i].point.y = yPos;
      TweenMax.to(path.segments[i].point, 0.5, { y: yPos, ease: Bounce.easeIn })
    }
    if (smooth)
      path.smooth({ type: 'continuous' });
  }

  tool.onMouseMove = function (event) {
    mousePos = event.point;
  }

  // tool.onMouseDown = function (event) {
  //   path.fillColor = 'red';
  //   smooth = !smooth;
  //   if (!smooth) {
  //     // If smooth has been turned off, we need to reset
  //     // the handles of the path:
  //     for (var i = 0, l = path.segments.length; i < l; i++) {
  //       var segment = path.segments[i];
  //       segment.handleIn = segment.handleOut = null;
  //     }
  //   }
  // }

  // // Reposition the path whenever the window is resized:
  view.onResize = function (event) {
    initializePath();
  }

  console.log(view);
  console.log(tool);
}

export default TestPaper;