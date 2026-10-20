/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 10
    }
};

// Our second ball
const ball2 = {
    x: 200,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 5,
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the balls and paddle
*/
function draw() {
    background("#afe8ff");

    movePaddle(paddle);
    moveBall(ball);
    moveBall(ball2);

    handleBounce(ball, paddle);
    handleBounce(ball2, paddle);

    drawPaddle(paddle);
    drawBall(ball);
    drawBall(ball2);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
paddle.x = mouseX;
}

/**
 * Moves the balls passed in as a parameter
 */
function moveBall(ball) {
ball.x += ball.velocity.x;
ball.y += ball.velocity.y; 
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {

//If the ball hits the left side of the paddle, it bounces to the left
if  (checkOverlapLeft(ball, paddle)) {
    ball.velocity.y *= -1;
    ball.velocity.x += -1;

//If the ball hits the right side of the paddle, it bounces to the right
}else if (checkOverlapRight(ball, paddle)) {
    ball.velocity.y *= -1;
    ball.velocity.x += 1;
}

//if the ball hits the top of the canvas, it bounces down
if (ball.y < 0) {
    ball.velocity.y *= -1;
}

//if the ball hits the sides of the canvas, it bounces to the opposite side
if (ball.x < 0 || ball.x > 600) {
    ball.velocity.x *= -1;
}
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA overlaps with the left side of rectB, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlapLeft(rectA, rectB) {
  return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 &&
          rectA.x - rectA.width/2 < rectB.x &&
          rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}

/**
 * Returns true if rectA overlaps with the right side of rectB, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlapRight(rectA, rectB) {
  return (rectA.x + rectA.width/2 > rectB.x &&
          rectA.x - rectA.width/2 < rectB.x + rectB.width/2 &&
          rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}