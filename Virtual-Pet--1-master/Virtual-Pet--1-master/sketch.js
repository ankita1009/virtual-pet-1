//Create variables here
var dog,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  happyDogImage=loadImage("Images/happydog.png");

  dogImage=loadImage("Images/Dog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  //dog.addImage(happyDogImage);
  //setScale=0.5;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentUp(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();
  //add styles here
  text("food remaining : " + foodS,100,150)
 fill("black");
  stroke();
}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {
  database.ref('/').update({
    food:x
  })
}



