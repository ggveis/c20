var a,b;

function setup(){
  createCanvas (1200,800);
  
  a = createSprite(400,400,50,80);
  a.shapeColor = "green";
  
  b = createSprite(600,200,80,30);
  b.shapeColor = "green";
  
}

function draw (){
background (0,0,0);

b.x = World.mouseX;
b.y = World.mouseY;

console.log(a.y - b.y);

if(a.x - b.x < 65 && b.x - a.x < 65 && a.y - b.y < 54 && b.y - a.y < 54  ){
  a.shapeColor = "red";
  b.shapeColor = "red";
}
else{
  a.shapeColor = "green";
  b.shapeColor = "green";
}



drawSprites();
}