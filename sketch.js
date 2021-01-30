const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var b1,b2,b3,b4,b5;
var b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15;
var b16,b17,b18,b19,b20;
var ground,rope,ball;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(200, 200, 80, 80);

  ground = new Ground(700,700,1000,20);

  b1 = new Box(580,100,50,50);
  b2 = new Box(580,100,50,50);
  b3 = new Box(580,100,50,50);
  b4 = new Box(580,100,50,50);
  b5 = new Box(580,100,50,50);
  b6 = new Box(580,100,50,50);

  b7 = new Box(650,100,50,50);
  b8 = new Box(650,100,50,50);
  b9 = new Box(650,100,50,50);
  b10 = new Box(650,100,50,50);
  b11 = new Box(650,100,50,50);
  b12 = new Box(650,100,50,50);
  b13 = new Box(650,100,50,50);

  b14 = new Box(700,100,50,50);
  b15 = new Box(700,100,50,50);
  b16 = new Box(700,100,50,50);
  b17 = new Box(700,100,50,50);
  b18 = new Box(700,100,50,50);
  b19 = new Box(700,100,50,50);
  b20 = new Box(700,100,50,50);


  rope = new Rope(ball.body,{x:330,y:150})


}

function draw() {
  background(29,146,170);
  Engine.update(engine);

  ball.display();
  rope.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}