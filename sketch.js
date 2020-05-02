var stay;
var move1,move2,move3,move4,move5,move6,move7;
function setup() {
  createCanvas(800,400);
 stay = createSprite(400, 200, 50, 50);
 move1 = createSprite(400,100,50,50);
 move2 = createSprite(400,100,50,50);
 move3 = createSprite(400,100,50,50);
 move4 = createSprite(400,100,50,50); 
 move5 = createSprite(400,100,50,50);
 move6 = createSprite(400,100,50,50);
 move7 = createSprite(400,100,50,50);
stay.shapeColor = "cyan";
move1.shapeColor = "yellow";
move2.shapeColor = "blue";
move3.shapeColor = "white";
move4.shapeColor = "green";
move5.shapeColor = "red";
move6.shapeColor = "pink";
move7.shapeColor = "brown";
}

function draw() {
  background(0);  

move1.x = mouseX;  
move1.y = mouseY;
if(isTouching(move1,stay)){
  move1.shapeColor = "cyan";
  stay.shapeColor = "yellow";
}

else{
stay.shapeColor = "cyan";
move1.shapeColor = "yellow";
}


  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
    return true;
  }
  else {return false;}
}

