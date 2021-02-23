var a,b


function setup() {
  createCanvas(800,400);
a= createSprite(400, 200, 80, 30);
a.shapeColor= "red";
b= createSprite(200,200,50,80);
b.shapeColor="red";
}

function draw() {
  background("blue");
  a.x= World.mouseX;
  a.y= World.mouseY;
  
  console.log(a.x-b.x);

  if(a.x-b.x<b.width/2+a.width/2
&&b.x-a.x<b.width/2+a.width/2
 &&a.y-b.y<b.height/2+a.height/2   
 &&b.y-a.y<b.height/2+a.height/2
    ){
    a.shapeColor="green";
    b.shapeColor="green";
  }
  else{
    a.shapeColor="red";
    b.shapeColor="red";
  }
  drawSprites();
}