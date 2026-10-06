/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
  //check if the player lost
  lose ();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}

//conditions to lose the game
function lose() {
    //If a key is pressed, the game is over
    if (keyIsPressed === true) {
    gameOver = true;
}
    //if the mouse is pressed within the canvas, the game is over
else if (mouseIsPressed === true && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    gameOver = true;
}

}

//detect if the mouse is moving
function mouseMoved(){
    //if the mouse is moved within the canvas, the game is over
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        gameOver = true;
    }
}