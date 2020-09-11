const Engine=Matter.Engine,
World=Matter.World, 
Bodies=Matter.Bodies;
var engine,world;
var object,ground, box, box2;

function setup() {
  createCanvas(600,600);
  engine=Engine.create();
  world = engine.world;

  var ball_options={ 
  'restitution': 1.5
  }

  box=new Box(200,100,50,50);
  box2=new Box(175,50,50,50);
  ground = new Ground(200,350,400,20);
  //object=Bodies.circle(200,100,50,ball_options);
  //World.add(world,object);

  console.log(object);

}
function draw() {
  background(0,0,0);
  Engine.update(engine);
  box.display();
  ground.display();
  box2.display();
  //ellipseMode(RADIUS);
  //ellipse(object.position.x,object.position.y,50);

}