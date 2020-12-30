const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

var canvasmouse, mConstraint;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
  canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  pendulum1 = new Pendulum(300,500,"black");
  sling1 = new Sling(pendulum1.body, {x:300, y: 200});
  pendulum2 = new Pendulum(360,500,"black");
  sling2 = new Sling(pendulum2.body, {x:360, y: 200});
  pendulum3 = new Pendulum(420,500,"black");
  sling3 = new Sling(pendulum3.body, {x:420, y: 200});
  pendulum4 = new Pendulum(480,500,"black");
  sling4 = new Sling(pendulum4.body, {x:480, y: 200});
  pendulum5 = new Pendulum(540,500,"black");
  sling5 = new Sling(pendulum5.body, {x:540, y: 200});
}

function draw() {
  background("blue");
  Engine.update(engine);
  pendulum1.display();
  sling1.display();
  pendulum2.display();
  sling2.display();
  pendulum3.display();
  sling3.display();
  pendulum4.display();
  sling4.display();
  pendulum5.display();
  sling5.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y:mouseY});
}

/*function mouseDragged2(){
  Matter.Body.setPosition(pendulum2.body, {x: mouseX, y:mouseY});
}

function mouseDragged3(){
  Matter.Body.setPosition(pendulum3.body, {x: mouseX, y:mouseY});
}

function mouseDragged4(){
  Matter.Body.setPosition(pendulum4.body, {x: mouseX, y:mouseY});
}

function mouseDragged5(){
  Matter.Body.setPosition(pendulum5.body, {x: mouseX, y:mouseY});
}*/

