const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const constraint = Matter.Constraint;

var world; //engine;
var ground1,ground2,polygon1;
//var G1box1,G1box2,G1box3,G1box4,G1box5,G1box6,G1box7,G1box8,G1box9,G1box10,G1box11,G1box12,G1box13,G1box14,G1box15,G1box16;
//var G2G1box1,G2G1box2,G2G1box3,G2G1box4,G2G1box5,G2G1box6,G2G1box7,G2G1box8,G2G1box9,
//var constrainedLog;
var launcherObj, launchingForce=100; 

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	polygon1=new polygon(250,350,30);

	Ground1box1=new box(500,507,50,70);
	Ground1box2=new box(550,507,50,70);
	Ground1box3=new box(600,507,50,70);
	Ground1box4=new box(650,507,50,70);
	Ground1box5=new box(700,507,50,70);
	Ground1box6=new box(750,507,50,70);
	Ground1box7=new box(800,507,50,70);
	Ground1box8=new box(550,437,50,70);
	Ground1box9=new box(600,437,50,70);
	Ground1box10=new box(650,437,50,70);
	Ground1box11=new box(700,437,50,70);
	Ground1box12=new box(750,437,50,70);
	Ground1box13=new box(600,367,50,70);
	Ground1box14=new box(650,367,50,70);
	Ground1box15=new box(700,367,50,70);
	Ground1box16=new box(650,297,50,70);
	Ground2box1=new box(1000,260,50,70);
	Ground2box2=new box(1050,260,50,70);
	Ground2box3=new box(1100,260,50,70);
	Ground2box4=new box(1150,260,50,70);
	Ground2box5=new box(1200,260,50,70);
	Ground2box6=new box(1050,190,50,70);
	Ground2box7=new box(1100,190,50,70);
	Ground2box8=new box(1150,190,50,70);
	Ground2box9=new box(1100,120,50,70);
	Ground1=new ground(650,550,400,15);
	Ground2=new ground(1100,303,300,15);	
    launcher=new Chain(polygon1.body,{x:175,y:350})
    
	var render = Render.create({
    	element: document.body,
    	engine: engine,
    	options: {
      		width: 1500,
      		height: 600,
      		wireframes: false
    	}
  	});

	Engine.run(engine);  
}


function draw() {
  	background("black");
	textSize(25);
	text("Press the Space key to play again!",50 ,50);

	polygon1.display();
	Ground1box1.display();
	Ground1box2.display();
	Ground1box3.display();
	Ground1box4.display();
	Ground1box5.display();
	Ground1box6.display();
	Ground1box7.display();
	Ground1box8.display();
	Ground1box9.display();
	Ground1box10.display();
	Ground1box11.display();
	Ground1box12.display();
	Ground1box13.display();
	Ground1box14.display();
	Ground1box15.display();
	Ground1box16.display();
	Ground2box1.display();
	Ground2box2.display();
	Ground2box3.display();
	Ground2box4.display();
	Ground2box5.display();
	Ground2box6.display();
	Ground2box7.display();
	Ground2box8.display();
	Ground2box9.display();
	
	Ground1.display();
	Ground2.display();
	
	launcher.display();

	detectcollision(polygon1,Ground1box1);
	detectcollision(polygon1,Ground1box2);
	detectcollision(polygon1,Ground1box3);
	detectcollision(polygon1,Ground1box4);
	detectcollision(polygon1,Ground1box5);
	detectcollision(polygon1,Ground1box6);
	detectcollision(polygon1,Ground1box7);
	detectcollision(polygon1,Ground1box8);
	detectcollision(polygon1,Ground1box9);
	detectcollision(polygon1,Ground1box10);
	detectcollision(polygon1,Ground1box11);
	detectcollision(polygon1,Ground1box12);
	detectcollision(polygon1,Ground1box13);
	detectcollision(polygon1,Ground1box14);
	detectcollision(polygon1,Ground1box15);
	detectcollision(polygon1,Ground1box16);

	detectcollision(polygon1,Ground2box1);
	detectcollision(polygon1,Ground2box2);
	detectcollision(polygon1,Ground2box3);
	detectcollision(polygon1,Ground2box4);
	detectcollision(polygon1,Ground2box5);
	detectcollision(polygon1,Ground2box6);
	detectcollision(polygon1,Ground2box7);
	detectcollision(polygon1,Ground2box8);
    detectcollision(polygon1,Ground2box9);
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}	

function detectcollision(polygon,box){
	boxBodyPosition=box.body.position;
	polygonBodyPosition=polygon.body.position;
	var distance=dist(polygonBodyPosition.x, polygonBodyPosition.y, boxBodyPosition.x, boxBodyPosition.y);
	if(distance <= box.w+polygon.r){
		Matter.Body.setStatic(box.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon1.body, {x:250, y:350})
		launcher.attach(polygon1.body);		
	}
}
