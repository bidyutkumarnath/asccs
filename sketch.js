const Engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies;
var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  var options1 = {
    isStatic: true
  }
  ground = bodies.rectangle(200,390,200,20,options1)
  World.add(world,ground)
  var option2={
     restitution:1
  }
  ball = bodies.circle(200,200,20,option2);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

}