/**
 * More Bubbles
 * Mona Belfedhal
 * 
 * Click to create bubbles.
 * Main reference used: Moving Stones by Pippin Barr https://editor.p5js.org/pippinbarr/sketches/zQgkBD1Y4
 */

"use strict";

//the array that will hold the bubbles
let bubbles = [];

//creates the canvas
function setup() {
    createCanvas(720, 480);
}


//draws the background and adds the bubbles
function draw() {

    background("#0c1c8e");


    for (let bubble of bubbles) {
        //the movement of the bubbles
        moveBubble(bubble);
        //the appearance of the bubbles
        drawBubble(bubble);
    }


}

function addBubble() {
    //position and size of the bubbles
    const x = mouseX;
    const y = mouseY;
    const size = random(10, 80);
    
    //adds the bubbles
    const bubble = createBubble(x, y, size);
    // adds the bubbles to the array
    bubbles.push(bubble);
}

//the appearance of the bubbles
function drawBubble(bubble) {
    push();
    noStroke();
    fill(255,255,255,40);
    stroke('white');
    strokeWeight(1.5);
    ellipse(bubble.x, bubble.y, bubble.size);
    pop();
}

//when the mouse is pressed, adds a bubble
function mousePressed() {
        if (mouseIsPressed === true) {
        addBubble();
        }
}

//small movement of the bubbles and causes them to go up
function moveBubble(bubble) {
    bubble.y = bubble.y - random(1, 2);
    bubble.x += random(-0.5, 1);
}


//creates the bubble
function createBubble(x, y, size) {
  const bubble = {
    x: x,
    y: y,
    size: size,
  };
  return bubble;
}