var canvas;
var music;
var block1, block2, block3, block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0, 580, 360, 30)
    block1.shapeColor = "blue";

    block2 = createSprite(295, 580, 200, 30 );
    block2.shapeColor = "yellow";

    block3 = createSprite(515, 580, 200, 30);
    block3.shapeColor = "red";

    block4 = createSprite(740, 580, 220, 30);
    block4.shapeColor = "green";

    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = "rgb";
    ball.velocityY = 4;
    ball.velocityX = 4;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball)){
    ball.shapeColor = "blue";
    music.play();
    }
    if(block2.isTouching(ball)){
    ball.shapeColor = "yellow";
    music.play();
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
        music.play();
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor = "green"
        music.play();
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
 