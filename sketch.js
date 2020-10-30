
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground; 
var tree;
var slinshot;
var Stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boyImg,mangoImg,stoneImg,treeImg;

function preload()
{
boyIMG=loadImage("Plucking mangoes/boy.png");

}
function setup(){
	createCanvas(800, 700);
	
	boySprite=createSprite(150, 620, 10,10);
    boySprite.addImage(boyIMG);
	boySprite.scale=0.1;

	engine = Engine.create();
    world = engine.world;
	Stone=new stone(100,550,30);
	//Create the Bodies Here.
	//ground=createSprite(400,680,800,20);
	
	mango1= new Mango(600,240,400);
	mango2 = new Mango(500,280,20);
	mango3 = new Mango(550,320,20);
	mango4 = new Mango(600,360,20);
	mango5 = new Mango(650,320,20);
	mango6 = new Mango(500,380,20);
	mango7 = new Mango(700,380,20);
	tree = new Tree(600,300);
	ground = new Ground(400,680,800,20);
	slingshot=new SlingShot(Stone.body,{x:100,y:560});

	Engine.run(engine);
}

function draw(){
	//rectMode(CENTER);
	//Engine.update(engine);
    
	background("pink");
    textSize(25);
    text("Press Space to Play again!!",50 ,50);
	ground.display();
	tree.display();
	slingshot.display();
	
	Stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	detectollision(mango1,Stone);
	detectollision(mango2,Stone);
	detectollision(mango3,Stone);
	detectollision(mango4,Stone);
	detectollision(mango5,Stone);
	detectollision(mango6,Stone);
	detectollision(mango7,Stone);
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(Stone.body, {x:100, y:560}) 
	slingshot.attach(Stone.body);
	}

  }

function detectollision(lmango,lstone) {
MangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y);
if (distance<=lmango.r+lstone.r) {
	Matter.Body.setStatic(lmango.body,false);
}

}



