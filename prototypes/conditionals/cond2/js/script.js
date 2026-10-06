/**
 * Falling Ball
 * Mona Belfedhal
 *
 * Press to make the ball higher. Try not to make it fall off the screen...
 * 
 * 
 * Base code by Pippin Barr: https://editor.p5js.org/pippinbarr/sketches/cpmo2ac1V
 */




//defining the ball
let ball = {
  x: 360,
  y: 240,
  size: 100,
};

// Text to display for the title and ending
let titletext = "Don't let the ball fall !!!";
let endingtext = "Game over...";


// display the TITLE when the program runs
let state = "title";


// Create the canvas, set up text
function setup() {
  createCanvas(720, 480);

  // Text settings
  textSize(40);
  textAlign(CENTER, CENTER);
}


// Depending on the current state, run the function to handle the state.

function draw() {
  // Check the state and call the appropriate function
  if (state === "title") {
    title();
  }
  else if (state === "game") {
    game();
  }
  else if (state === "ending") {
    ending();
  }
}


// Displays the title and waits for the user to press the mouse

function title() {
//title background color
  background("#037678");
  
  //title text
  push();
  fill("#ffffff");
  text(titletext, width / 2, height / 2)
  pop();
  
  //change states
  if (mouseIsPressed) {
    state = "game";
  }
}

//the game part
function game() {


  background("#edf85c");


  if (mouseIsPressed === true) {

    //raise the ball when the mouse is being pressed
    ball.y -=1.5;


        push();
        noStroke();
        //when the mouse is pressed, the ball turns pink.
        fill("#fd6583");
        ellipse(ball.x, ball.y, ball.size);
        pop();


    } else {

        push();
        noStroke();
        //when the ball is not being pressed, it turns teal.
        fill("#008883");
        ellipse(ball.x, ball.y, ball.size);
        pop();
        
        //ball falls when the mouse is not being pressed
        ball.y +=5;



//switch to ending once the ball reaches the lower edge
  if (ball.y > width-130) {
    state = "ending";
  }
}

}


//Displays the ending text
function ending() {
//ending background color
  background("#1e0260");
  
  //ending text
  push();
  fill("#ffffff");
  text(endingtext, width / 2, height / 2)
  pop();

}
