
var paperObject;
var ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1= createSprite(400,650,200,20);
	box1.shapeColor=color("red");

	box2= createSprite(490,600,20,100);
	box2.shapeColor=color("red");

	box3= createSprite(310,600,20,100);
	box3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
 if (keyCode===UP_ARROW){
	 Mattter.Body.applyForce(paper)
 }
}


