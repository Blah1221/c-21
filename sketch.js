var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
    isStatic:false,
	restitution:0.3,
	friction:0,
	density:3
}

ball = Bodies.circle(260,450, 30, ball_options)

World.add(world,ball)
groundObj=new Ground(width/2,670,width,20); 
leftSide = new Ground(1100,600,20,120);
rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ellipse(ball.position.x, ball.position.y, 30, 30)
  groundObj.display()
leftSide.display()
rightSide.display()
if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:1,y:-20})
}
  drawSprites();
 
}



