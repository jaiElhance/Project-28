const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	boyImage = loadImage("sprites/Plucking mangoes/boy.png");
	treeImage = loadImage("sprites/Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(300,450,10,10);
	boy.addImage(boyImage);

	tree = createSprite(500,350,10,10);
	tree.addImage(treeImage);
	ground1 = new Ground(600,height,1200,20);
	mango1 = new Mango();
	mango2 = new Mango();
	mango3 = new Mango();
	mango4 = new Mango();
	mango5 = new Mango();


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

  drawSprites();
 
}

function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=maango.r+stone.r){
			Matter.Body.setStatic(mango.body,false)
		}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launchObject.attach(stoneObj.body);
	}
}