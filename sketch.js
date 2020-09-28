const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup() {
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);


  ground = new Ground(1100,350,1200,20);
}

function draw() {
  background(255,255,255);  


  ground.display();
  //drawSprites();
}