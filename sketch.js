
var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  car = createSprite(30, 400, 50, 10);
  car.shapeColor = "blue";
  car.velocityX = 2;

  wall = createSprite(1150, 400, 10, 80);
  wall.shapeColor = "green";
  
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;



  if(isTouching(car, wall)){
    car.shapeColor = "green";
    car.velocityX = -1*0.1;
   
  }

 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(Object1, Object2){
  if (Object2.x - Object1.x < Object1.width/2 +Object2.width/2
    && Object1.x - Object2.x < Object1.width/2 + Object2.width/2
    && Object2.y - Object1.y < Object1.height/2 + Object2.height/2
    && Object1.y - Object1.y < Object1.height/2 + Object2.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}




