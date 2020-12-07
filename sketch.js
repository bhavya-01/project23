var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side, side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	side = createSprite(width/2,height-50,200,20);
	side.shapeColor = "red";
	
	side2 = createSprite(490,height-120,20,150);
	side2.shapeColor = "red";

	side2 = createSprite(310,height-120,20,150);
	side2.shapeColor = "red";


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
	 World.add(world, ground);
	 
	side= Bodies.rectangle(width/2, height - 50, 200, 20 , {isStatic:true} );
 	World.add(world, side);


	Engine.run(engine);
  

	
}


function draw() {
  rectMode(CENTER);
  background(0);


  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  
	

  drawSprites();
  keyPressed();

 

 
}
function keyPressed(){
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		 packageSprite.x = packageBody.position.x;
		packageSprite.y = packageBody.position.y;

		// packageSprite.velocityY = 6
	 
	Matter.Body.setStatic(packageBody,false)
	
	
	}

	

}





