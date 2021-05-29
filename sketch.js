const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird1,pig1;

function preload(){
    bg = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    bird1 = new Bird(150,300,50)
    box1 = new Box(600,560);
    ground = new Ground(600,580,1200,20);
    box2 = new Box(800,560);
    pig1 = new Pig(700,560);
    log1 = new Log(700,510,250,PI);
    box3 = new Box(800,490);
    pig2 = new Pig(700,490);
    log2 = new Log(700,440,250,PI);
    box4 = new Box(600,490);
    box5 = new Box(700,420);
    log3 = new Log(750,420,100,PI/3);
    log4 = new Log(650,420,100,-PI/3)
}

function draw(){
    background(bg);
    Engine.update(engine);
    bird1.body.position.x= mouseX
    bird1.body.position.y= mouseY
    box1.display();
    ground.display();   
    box2.display();
    bird1.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
}