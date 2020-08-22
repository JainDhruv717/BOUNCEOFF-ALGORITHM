var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,50,50,50);
  fixedRect = createSprite(200,300,100,30);
  fixedRect.shapeColor ="yellow";
  movingRect.shapeColor = "yellow";
  fixedRect.velocityY = -3;
  movingRect.velocityY = 5;
}

function draw() {
  background(0); 
 
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    &&fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
movingRect.velocityY = movingRect.velocityY * -1;
fixedRect.velocityY = fixedRect.velocityY * -1;



  }




  drawSprites();
}