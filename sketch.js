var canvas;
var music;
var redsurface;
var bluesurface;
var greensurface;
var orangesurface;

var player;

var borderleft;
var borderright;
var topborder;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    redsurface = createSprite (75,595,150,30);
    redsurface.shapeColor = "red";

    bluesurface = createSprite (225,595,150,30);
    bluesurface.shapeColor = "blue";
    
    greensurface = createSprite (375,595,150,30);
    greensurface.shapeColor = "green";
    
    orangesurface = createSprite (525,595,150,30);
    orangesurface.shapeColor = "orange";
    
    
    //create box sprite and give velocity
    player = createSprite (300,100,30,30);   
    player.shapeColor = "white";
    player.velocityX = -5;
    player.velocityY = 4;
}

function draw() {
    background(0);
    //create edgeSprite
    borderleft = createSprite (1,300,2,600);
    borderleft.shapeColor = "black"

    borderright = createSprite (599,300,2,600);
    borderright.shapeColor = "black"
    
    topborder = createSprite (300,1,600,2);
    topborder.shapeColor = "black"
    
    player.bounceOff(borderleft);
    player.bounceOff(borderright);
    player.bounceOff(topborder);
    
    
     //add condition to check if box touching surface and make it box
    if(redsurface.isTouching(player) && player.bounceOff(redsurface)) {
        player.shapeColor = "red";
        music.play();
    }
   
    if(greensurface.isTouching(player) && player.bounceOff(greensurface)) {
        player.shapeColor = "green";
        music.play();
    }
   
    if(orangesurface.isTouching(player) && player.bounceOff(orangesurface)) {
        player.shapeColor = "orange";
        music.play();
    }
   
    //additional goal
    if(bluesurface.isTouching(player) ) {
        player.shapeColor = "blue";
        player.velocityX = 0;
        player.velocityY = 0;
        music.stop();
    }
    
    
    drawSprites();
}
