var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {

  background(0,0,0);  
 
  BounceOff(movingRect,fixedRect);

  if (isTouching(movingRect,fixedRect)){

    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";
  }

  drawSprites();
}

function BounceOff(x1,x2){

  if (x1.x - x2.x < x2.width/2 + x1.width/2
    && x2.x - x1.x < x2.width/2 + x1.width/2) {
  x1.velocityX = x1.velocityX * (-1);
  x2.velocityX = x2.velocityX * (-1);
}
if (x1.y - x2.y < x2.height/2 + x1.height/2
  && x2.y - x1.y < x2.height/2 + x1.height/2){
  x1.velocityY = x1.velocityY * (-1);
  x2.velocityY = x2.velocityY * (-1);
}

}

function isTouching(s1,s2){

  if (s1.x - s2.x < s2.width/2 + s1.width/2
    && s2.x - s1.x < s2.width/2 + s1.width/2
    && s1.y - s2.y < s2.height/2 + s1.height/2
    && s2.y - s1.y < s2.height/2 + s1.height/2) {
  return true;
}
else {
  return false;
}

}
