const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, myWorld;
var box1, box2, box3, box4, box5, box6;
var chain1, chain2, chain3, chain4,chain5;
var rock;
var bg, ground;

function preload() {
    bg=loadImage("images/bg.jpg")

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    myWorld = engine.world;


    ground = new Ground(600,height,1200,20);
    box1=new Box(50,170,50,50)
    box2=new Box(150,170,50,50)
    box3=new Box(250,170,50,50)
    box4=new Box(350,170,50,50)
    box5=new Box(450,170,50,50)
    box6=new Box(550,170,50,50)
    rock=new Rock(1100,200,100,100)
    chain1= new Connector(box1.body,box2.body)
    chain2=new Connector(box2.body,box3.body)
    chain3=new Connector(box3.body,box4.body)
    chain4= new Connector(box4.body,box5.body)
    chain5=new Connector(box5.body,box6.body)
    
   
}

function draw(){
        background(bg);
    Engine.update(engine);
    ground.show();
    box1.show();
    box2.show();
    box3.show();
    box4.show();
    box5.show();
    box6.show();
    rock.show();
    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    chain5.show();
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
        Matter.Body.applyForce(box6.body,{x:box6.body.position.x,y:box6.body.position.y},{x:0.5,y:0});

      
    }

}

