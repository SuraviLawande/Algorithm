var fixedrect, movingrect;

function setup() {
  createCanvas(1200,800);
  
  fixedrect=createSprite(200,200,30,60);
  movingrect=createSprite(400,200,20,90);

  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="yellow";

  fixedrect.debug=true;
  movingrect.debug=true;

  movingrect.velocityX=-3;
  fixedrect.velocityX=3;
}

function draw() {
  background(0);  

  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;
 
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 && 
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 && 
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){

    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  else{
    fixedrect.shapeColor="yellow";
    movingrect.shapeColor="yellow";
  }

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){

  movingrect.velocityX=movingrect.velocityX*-1;
  fixedrect.velocityX=fixedrect.velocityX*-1;

    }
  if( movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 && 
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){

      movingrect.velocityY=movingrect.velocityY*-1;
      fixedrect.velocityY=fixedrect.velocityY*-1;
    }

  drawSprites();
}
