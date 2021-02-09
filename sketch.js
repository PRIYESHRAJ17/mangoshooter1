var mango,stone,tree,boy,mango_image,stone_image,tree_img,boy_img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	tree_img = loadImage("tree.png");
	stone_img = loadImage("stone.png");
	boy_img = loadImage("boy.png");
	mango_img = loadImage("mango.png");

	


}

function setup() {
	createCanvas(1000,400);
    tree=createSprite(830, 200, 80, 80);
	mango=createSprite(830, 200, 20, 20);
	mango.shapeColor=("yellow");
	boy=createSprite(200,200,50,50);
    boy.shapeColor=("blue");
	stone=createSprite(225,200,10,10);
	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  if(keyWentDown("enter")){
	  stone.x=stone.x+200;
  }

  if(stone.isTouching(mango)){
	  text("YOU WON THE GAME",500,200);
	  textSize(1000);

  }

  drawSprites();
 
}



