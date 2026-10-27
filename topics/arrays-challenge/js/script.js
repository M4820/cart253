/**
 * Smoothie Blender
 * 
 * 
 * Mona and Kiki
 * Boingo Base code by Pippin Barr
 * 
 * 
 * Add fruits and veggies to a blender by clicking.
 */

let ball1 = undefined; // Will create it with createBall()
let fruits = ['🍓', '🥝', '🍉', '🍈', '🍍', '🍑', '🍇', '🍊', '🍌', '🫐', '🌝', '🍏', '🍐', '🍒', '🥭', '🥥', '🥑', '🍋', '🍅', '🥕', '🌽', '🥦', '🥬'];


const balls = [];

/**
 * Create the canvas and the ball
 */
function setup() {
  // Create the canvas
  createCanvas(400, 400);
}

/**
 * Creates a random ball
 */
function createBall() {
  // Create a ball object with appropriate properties
  const newBall = {
    // Position and dimensions
    x: mouseX,
    y: mouseY,
    size: random(50, 100),
    choice: random(fruits),
    // Colour
    // fill: "#000000",
    // Movement
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
  };
  return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
  background("#41bdee");
  
  for (let ball of balls) {
    moveBall(ball);
    bounceBall(ball);
    drawBall(ball);
  }
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) {
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {
  // Check if the ball has reached the left or right
  const bounceX = (ball.x > width || ball.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (ball.y > height || ball.y < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    ball.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    ball.velocity.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
  push();
  noStroke();
  // fill(ball.fill);
  textSize(ball.size);
  text(ball.choice, ball.x, ball.y);
  pop();
}

function mousePressed() {
  const newBall = createBall();
  balls.push(newBall);
}