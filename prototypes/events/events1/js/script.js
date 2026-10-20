/**
 * Blow Bubbles
 * Mona Belfedhal
 * 
 * Click and hold to make a bubble grow in size.
 */

"use strict";

//defining the properties of the bubble
let bubble = {

    x: 360,
    y: 240,
    width: 0,
    height: 0,
    strokeWeight: 1,

};


//creates the canvas
function setup() {
    createCanvas(720, 480);
}


//calls the mouse events and draws the bubble
function draw() {

    if (mouseIsPressed === true) {
 mousePressed();

  } else {
    mouseReleased();
}

background("#72a2ef");
drawBubble();

}

//when the mouse is being pressed
function mousePressed() {
    //lock the movement of the mouse
    requestPointerLock()

    //draw the bubble at the position of the mouse
    bubble.y = mouseY
    bubble.x = mouseX

    //make the bubble increase in size
    bubble.width +=1
    bubble.height +=1


}

//when the mouse is not being pressed
function mouseReleased() {
    //unlock the movement of the mouse
    exitPointerLock()

    //make the bubble go up
    bubble.y -=1
}

//draw the bubble
function drawBubble()
{
    push();
    noStroke();
    fill(255,255,255,40);
    stroke('white');
    strokeWeight(bubble.strokeWeight);
    ellipse(bubble.x, bubble.y, bubble.width, bubble.height);
    pop();
}