var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background("pink");
line(140, 300, 135, 360);
line(180, 305, 180, 345);
line(225, 305, 220, 360);
line(255, 300, 290, 375);
var sidecircle = randomNumber(175, 245);
fill(rgb(255, 16, 240));
ellipse(275, sidecircle, 110, 110);
ellipse(130, sidecircle, 110, 110);
fill("darkred");
rect(125, 110, 150, 200);
fill("red");
rect(135, 120, 130, 180);
var eyesize = randomNumber(25, 40);
fill(rgb(204, 255, 204));
ellipse(175, 170, eyesize, eyesize);
ellipse(230, 170, eyesize, eyesize);
var pupil = randomNumber(10, 20);
fill("yellow");
ellipse(175, 170, pupil, pupil);
ellipse(230, 170, pupil, pupil);
fill("black");
rect(155, 220, 90, 50);
fill(rgb(255, 153, 0));
regularPolygon(172, 260, 3, 20);
regularPolygon(228, 260, 3, 20);
fill("green");
regularPolygon(155, 95, 3, 35);
regularPolygon(200, 95, 3, 35);
regularPolygon(245, 95, 3, 35);
var antenna = randomNumber(10, 25);
fill("blue");
ellipse(135, 365, antenna, antenna);
ellipse(180, 340, antenna, antenna);
ellipse(220, 355, antenna, antenna);
ellipse(290, 370, antenna, antenna);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
