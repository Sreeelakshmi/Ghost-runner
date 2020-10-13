var climber,door,ghost,tower,dg,cd,gamestate,play,end;
var ci,di,gi,ti;
function preload(){
ci=loadImage("climber.png");
di=loadImage("door.png");
gi=loadImage("ghost-standing.png");
ti=loadImage("tower.png");
}
function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(ti);
  ghost=createSprite(200,200);
  ghost.addImage(gi);
  ghost.scale=0.5;
  dg=new Group();
  cd=new Group();
  play=1;
  end=0;
  gamestate=play;
}
function draw(){
  
  background("blue");
  if(gamestate==play){
  tower.velocityY=+4;
  if(tower.y>600){
    tower.y=300;
  }
  if(keyDown("space")){
    ghost.velocityY=-4;
  
  }
  if(keyDown("RIGHT_ARROW")){
    ghost.velocityX=+4;
  }
   if(keyDown("LEFT_ARROW")){
    ghost.velocityX=-4;
  }
  ghost.velocityY=ghost.velocityY+0.1;
        windows();
  if(ghost.isTouching(dg)||ghost.y>600){
   gamestate=end;
    
  }drawSprites();
}
 
if(gamestate==end){tower.velocityY=0;
    ghost.velocityY=0;
    ghost.velocityX=0;
   dg.setVelocityYEach(0);
   cd.setVelocityYEach(0);
  ghost.destroy();
                  
  dg.destroyEach();
  cd.destroyEach();
  textSize(20);
  fill("white")                 
   text("YOU LOOSE",250,300)               }

}
function windows(){
  if(frameCount%80==0){
     door = createSprite(random(100,400),200);
    door.addImage(di);
    door.velocityY=+4;
  climber=createSprite(door.x,door.y+50) ;
 climber.addImage(ci);
  climber.velocityY=+4;
  dg.add(door);
 cd.add(climber);
door.lifetime=700;
climber.lifetime=700;}
  }