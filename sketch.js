var nonplayer
var nonplayer1
var nonplayer2
var player1
var finish
var edges

function preload(){
  nonplayerimg=loadImage("player1.png");
  nonplayer1img=loadImage("nonplayer1.png");
  nonplayer2img=loadImage("nonplayer2.jpg");
  player1img=loadImage("nonplayer.png");
}


function setup() {
  createCanvas(800,700);
  nonplayer=createSprite(100,100,10,10);
  nonplayer1=createSprite(300,100,10,10);
  nonplayer2=createSprite(500,100,10,10);
  player1=createSprite(700,100,10,10);


  finish=createSprite(10,600,20,100);
  finish.shapeColor="yellow"

  nonplayer.addImage(nonplayerimg);
  nonplayer1.addImage(nonplayer1img);
  nonplayer2.addImage(nonplayer2img);
  player1.addImage(player1img);
}

function draw() {
  background("black");
  edges=createEdgeSprites()  
  if(keyDown("UP_ARROW")){
    player1.y=player1.y-2;
  }
  if(keyDown("DOWN_ARROW")){
    player1.y=player1.y+2;
  }
  if(keyDown("LEFT_ARROW")){
    player1.x=player1.x-2;
  }
  if(keyDown("RIGHT_ARROW")){
    player1.x=player1.x+2;
  }
  if(player1.isTouching(nonplayer)
  ||player1.isTouching(nonplayer1)
  ||player1.isTouching(nonplayer2)){
    player1.x=700;
    player1.y=100;
  }
  if(player1.isTouching(finish)){
    textSize(24);
    fill("blue");
    strokeWeight(6);
    text("YOU WON",400,350);
  }
  drawSprites();
}