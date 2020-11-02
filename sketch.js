var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation('moving',monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  console.log(ground.x)
  
}


function draw() {
  background(250)
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
      if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12
    }
  
  var survivalTime=0
  stroke('white')
  textSize(20)
  fill('white')
  text('score:'+score,500,50)
  
  stroke('black')
  textSize(20)
  fill('black')
  survivalTime=Math.ceil(frameCount/frameRate())
  text('survivalTime:'+survivalTime,100,50);
  
  
      ground.velocityX = -2;
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  
  food()
  
  obstacles()
  
drawSprites();
  
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(400,Math.round(random(120,200)),10,10)
    banana.addImage(bananaImage);
    banana.velocityX=-4
    banana.lifetime=100
    banana.scale=0.1
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,320,10,10)
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3
    obstacle.lifetime=133
    obstacle.scale=0.15
  }
}





