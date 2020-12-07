const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterImage;
var packageImage;
var helicopterSprite;
var packageSprite;
var ground;
var groundSprite;
var safePlacePart1,safePlacePart2,safePlacePart3;
var safePlaceSprite1,safePlaceSprite2,safePlaceSprite3;
var myEngine,world;
var helicopter;
var medicine;

function preload(){
	helicopterImage = loadImage("helicopter.png");
	packageImage = loadImage("package.png");
}

function setup(){
	createCanvas(800,600);

	myEngine = Engine.create();
	world = myEngine.world;

	packageSprite = createSprite(400,160,30,30);
	packageSprite.addImage(packageImage);
	packageSprite.scale = 0.16;

	helicopterSprite = createSprite(400,160,50,20);
	helicopterSprite.addImage(helicopterImage);
	helicopterSprite.scale = 0.7;

	groundSprite = createSprite(400,570,800,7);
	groundSprite.shapeColor = "brown";

	safePlaceSprite1 = createSprite(400,555,200,20);
	safePlaceSprite1.shapeColor = "red";
	safePlaceSprite2 = createSprite(310,515,20,100);
	safePlaceSprite2.shapeColor = "red";
	safePlaceSprite3 = createSprite(490,515,20,100);
	safePlaceSprite3.shapeColor = "red";

	rectMode(CENTER);
	helicopter = Bodies.rectangle(400,160,50,20,{isStatic: true});
	World.add(world,helicopter);

	medicine = Bodies.rectangle(400,160,30,30,{restitution: 0.0,isStatic: true});
	World.add(world,medicine);

	ground = Bodies.rectangle(300,570,600,10,{isStatic: true});
	World.add(world,ground);

	safePlacePart1 = Bodies.rectangle(400,555,200,20);
	World.add(world,safePlacePart1);
	safePlacePart2 = Bodies.rectangle(310,515,20,100);
	World.add(world,safePlacePart2);
	safePlacePart3 = Bodies.rectangle(490,515,20,100);
	World.add(world,safePlacePart3);
	//safePlace = new dropZone();
}

function draw(){
	background("lightblue");
	Engine.update(myEngine);

	packageSprite.x = medicine.position.x;
	packageSprite.y = medicine.position.y;

	//safePlace.display();

	dropper();
 
	drawSprites();
}

function dropper(){
	if (keyCode === DOWN_ARROW){
	  //Matter.medicine.setStatic(medicine,false);
	  Matter.Body.setStatic(medicine,false);
	}
}