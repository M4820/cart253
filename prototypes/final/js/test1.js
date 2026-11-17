/**

 */

"use strict";

//draws the canvas
function setup() {
    createCanvas(1152, 864);
    background(200);
}


//draws the circle and background color
function draw() {
   push();
    fill(0);
    textSize(30);
    text('My cool prototype', width / 2, height / 2)
    pop();
}