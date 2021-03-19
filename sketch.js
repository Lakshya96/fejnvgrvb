var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var ball,wall1,wall2,wall3,wall4;
  
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  wall1 = new Wall(400,height-20,600,20);
  wall2 = new Wall(400,0,600,20);
  wall3 = new Wall(width,400,20,600);
  wall4 = new Wall(0,400,20,600);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  textSize(20)
  text("500",25,525);
  textSize(20)
  text("500",105,525);
  textSize(20)
  text("500",185,525);
  textSize(20)
  text("500",265,525);
  textSize(20)
  text("100",340,525);
  textSize(20)
  text("100",420,525);
  textSize(20)
  text("100",500,525);
  textSize(20)
  text("200",580,525);
  textSize(20)
  text("200",660,525);
  textSize(20)
  text("200",740,525);
  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

   if (ball!=null) {
      ball.display();
      if (ball.body.position.y>750) {
        if (ball.body.position.x<320) {
          score=score+500;
          ball=null;
        }
        else if (ball.body.position.x>320&&ball.body.position.x<560) {
          score=score+100;
          ball=null;
        }
        else if (ball.body.position.x>560&&ball.body.position.x<800) {
          score=score+200;
          ball=null;
        }
      }
   }

   for (var k = 0; k < divisions.length; k++){
     divisions[k].display();
   }
   if (count===5) {
    textSize(50)
    fill("red");
    text("Jeu Terminé(Game Over)",100,275);

   }
}

function mousePressed() {
  if(count<5){
    count++;

    //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    ball= new Particle(mouseX,10,10);
  }
}