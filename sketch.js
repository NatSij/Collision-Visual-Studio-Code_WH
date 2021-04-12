var fixedRectangle, movingRectangle

function setup() {
  createCanvas(800,400);

fixedRectangle = createSprite(300, 100, 50, 20);
fixedRectangle.shapeColor = "red";

movingRectangle = createSprite(100, 200, 50, 20);
movingRectangle.shapeColor = "red";
}

function draw() {
  background("black");  
movingRectangle.y = mouseY;
movingRectangle.x = mouseX;

console.log(movingRectangle.x - fixedRectangle.x);

if(movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2  &&  
fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 &&
fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 &&
movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2){
movingRectangle.shapeColor = "blue";
fixedRectangle.shapeColor = "green";
fixedRectangle.velocityY = 7;
}
else{
  movingRectangle.shapeColor = "red";
  fixedRectangle.shapeColor = "red";
  fixedRectangle.velocityY = 0;
}

  drawSprites();
}