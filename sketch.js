
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var side_wall;
var leftside_wall;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.95
	}
	//Create the Bodies Here.

	ball = Bodies.circle(200,10,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
	right = new Ground(700,680,10,100);
left = new Ground(500,680,10,100);
ground =new Ground(500,700,1100,20);
side_wall = new Ground(800,200,20,1000);
leftside_wall = new Ground(10,200,20,1000);



ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball)

rectMode(CENTER);
ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)

  ground.show();
  left.show()
  right.show();
  side_wall.show();
  leftside_wall.show();
 

  Engine.update(engine);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:200,y:200},{x:0.1,y:-0.10})	
	}

if (keyCode === RIGHT_ARROW){

Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0})
}


}


 
