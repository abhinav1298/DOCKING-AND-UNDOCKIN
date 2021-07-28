var bg, bgimg;
var iss , issimg;
var spacecraft , spacecraftimg;
var scImg , scImg1 , scImg2, scImg3 ;
var hasDocked = false;



function preload(){

  bgimg = loadImage("spacebg.jpg")
  issimg = loadImage("iss.png")
  scImg = loadImage("spacecraft1.png")
  scImg1 = loadImage("spacecraft2.png")
  scImg2 = loadImage("spacecraft3.png")
  scImg3 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(600,350);

  spacecraft = createSprite(285,240);
  spacecraft.addImage(scImg)
  spacecraft.scale = 0.2

  iss = createSprite(330,130)
  iss.addImage(issimg);
  iss.scale = 0.7;


}


function draw() {
  background(bgimg);  
 

  if(!hasDocked){
    spacecraft.x= spacecraft.x + random(-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 2;
      spacecraft.addImage(scImg1)
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.y = spacecraft.y + 2;
      spacecraft.addImage(scImg2)
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.y = spacecraft.y - 2;
      spacecraft.addImage(scImg3)
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scImg);
    }
  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;

    textSize(25)
    fill("white")
    text("DOCKING SUCCESSFULL" , 200,300)
  }
  drawSprites();
}