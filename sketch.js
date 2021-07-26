var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(500, 50, 50, 80);
  rect1.shapeColor = "blue";

  rect2 = createSprite(300, 200, 50, 80);
  rect2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching (rect1,movingRect)){
    movingRect.shapeColor="red"

    rect1.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"

    rect1.shapeColor="blue"

  }
  drawSprites();
}

