var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6059a726-831e-434c-bde3-3cac01205922"],"propsByKey":{"6059a726-831e-434c-bde3-3cac01205922":{"name":"kid_8_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2awrE08DyLIkEuVyTjHEgOP8jAg6gCCs/category_characters/kid_8.png","frameSize":{"x":239,"y":342},"frameCount":1,"looping":true,"frameDelay":2,"version":"2awrE08DyLIkEuVyTjHEgOP8jAg6gCCs","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":342},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2awrE08DyLIkEuVyTjHEgOP8jAg6gCCs/category_characters/kid_8.png"}}};
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


var Sofia = createSprite(20,25,18,18);  
Sofia.shapeColor = "orange";


  wall1=createSprite(65,150,20,150)
wall1.shapeColor="blue";
wall2=createSprite(130,50,110,20)
wall2.shapeColor="blue";
wall3=createSprite(170,100,135,25)
wall3.shapeColor="blue"
wall4=createSprite(250,100,20,150)
wall4.shapeColor='blue'
wall5=createSprite(25,125,20,150)
wall5.shapeColor='blue'
wall6=createSprite(160,190,20,150)
wall6.shapeColor='blue'
wall7=createSprite(40,300,20,150)
wall7.shapeColor='blue'

wall8=createSprite(100,300,110,20)
wall8.shapeColor='blue'
wall9=createSprite(300,60,20,150)
wall9.shapeColor='blue'
wall10=createSprite(350,55,100,20)
wall10.shapeColor='blue'
wall11=createSprite(360,135,20,150)
wall11.shapeColor='blue'
wall12=createSprite(335,250,20,150)
wall12.shapeColor='blue'
wall13=createSprite(305,260,90,20)
wall13.shapeColor='blue'
wall14=createSprite(200,350,20.190)
wall14.shapeColor='blue'
wall15=createSprite(200,300,80,20)
wall15.shapeColor='blue'
 


var cup=createSprite(395,375,10,50);
cup.shapeColor = "yellow";
  
function draw() {
 
  background("pink");
  
    Sofia.velocityX=0;
    Sofia.velocityY=0;
   
  
    if (keyDown("UP_ARROW")) 
    {
        Sofia.velocityX=0;
        Sofia.velocityY=-4;
    }
    if (keyDown(DOWN_ARROW)) 
    {
        Sofia.velocityX=0;
        Sofia.velocityY=4;
    }
    if (keyDown(LEFT_ARROW)) 
    {
        Sofia.velocityX=-4;
        Sofia.velocityY=0;
    }
    if (keyDown(RIGHT_ARROW)) 
    {
        Sofia.velocityX=4;
        Sofia.velocityY=0;
    }



createEdgeSprites();





  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);



  if ( Sofia.collide(cup))  
{
  background("white")

  }
    drawSprites();

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}






}

























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
