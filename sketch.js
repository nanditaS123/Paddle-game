var ball,img,paddle;
function preload() {
  ball_image = loadImage("ball.png");
  paddle_image = loadImage("paddle.png");
  /* preload your images here of the ball and the paddle */
}

function setup() {
  createCanvas(400, 400);
  ball = createSprite(10,200,50,50);
  paddle = createSprite(390,200,50,50);
   /* create the Ball Sprite and the Paddle Sprite */
  ball.addImage("ballimage", ball_image);
  paddle.addImage("paddleimage", paddle_image);
  /* assign the images to the sprites */
  ball.velocityX = 9;
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  edge = createEdgeSprites();
  /* create Edge Sprites here */
  ball.bounceOff(edge[2]);
  ball.bounceOff(edge[3]);
  ball.bounceOff(edge[0]);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(paddle, randomVelocity());
  
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
   paddle.bounceOff(edge);
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 20;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY = random(-6,6);
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

