/**
 * Catch the Ball
 * Mona Belfedhal
 * 
 * Try to center the ball in the target as best as you can.
 * 
 * Screen wrap base code by Pippin Barr: https://editor.p5js.org/pippinbarr/sketches/exJrLtvvU
 * Overlapping Circles by Pippin Barr: https://editor.p5js.org/pippinbarr/sketches/NLnxtLMat
 */



//the moving ball
const ball = {
  // Position and size
  x: 0,
  y: 240,
  size: 50,
  // Velocity moves it to the right
  velocity: {
    x: 12,
  },
  fill: "#6a18bb"
};

//the target
const target = {
    //position and size
    x:360,
    y: 240,
    size: 60,
    fill: "blue",
    //colors when not being overlapped by the ball and the opposite
    fills: {
        noOverlap: "blue",
        overlap: "red",
    }
}

//create canvas
function setup() {
  createCanvas(720, 480);
}

//what is being displayed
function draw() {
  background("#d9e8cc");

  //text
  textSize(25);
  fill('black');
  text('Stop: Any Key                                      Resume: Press Mouse', 20, 40);
  
  //functions to be called
  drawTarget();
  checkTarget();
  drawball();
  moveball();
  wrapball();


  //stops the draw loop when a key is pressed
     if (keyIsPressed) {
    noLoop();
    } else {
    loop();
    }


}

//adds velocity to the ball to make it move
function moveball() {
  ball.x += ball.velocity.x;
}

//screen wrap
function wrapball() {
  // We need to check if the ball has gone off the right
  
  if (ball.x > width) {
    // In this case width minus the ball's x will move it to the
    // other side! Math!
    ball.x = width - ball.x;
//every time it goes back to the other side, set random velocity
    ball.velocity.x = random(4,19)
  }  
}

//display the ball
function drawball() {
  push();
  fill(ball.fill);
  noStroke();
  ellipse(ball.x, ball.y, ball.size);
}

//display the target
function drawTarget()
{
    push();
    noStroke();
    noFill();
    stroke(target.fill);
    strokeWeight(4);
    //dashed outline
    drawingContext.setLineDash([1,8]);
    ellipse(target.x, target.y, target.size);
    pop();
}

//check for overlap
function checkTarget()
{
    const d = dist(ball.x, ball.y, target.x, target.y);
    //check if ball is inside the target
    const overlap = (d < target.size*0.25);
    // Set fill(i.e. stroke color) based on whether they overlap
    if (overlap) {
        target.fill = target.fills.overlap;

    }
    else {
        target.fill = target.fills.noOverlap;
    }
}

//function to resume the loop
async function mousePressed() {
  await redraw();
}