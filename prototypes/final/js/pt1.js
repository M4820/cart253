/**
https://editor.p5js.org/kjhollen/sketches/rJItdyEt-


 */

"use strict";
let x = -300;
let y = -300;
let easing = 0.2; // 1.0 to 0



//draws the canvas
function setup() {
    createCanvas(800, 600);
    background(200);
}


//draws the circle and background color
function draw() {

    noCursor();

    //black transparency covers the canvas when the mouse is not being pressed
    background(0,0,0,60);
    
    let targetX = mouseX;
    x = x + ((targetX - x) * easing);
    
    let targetY = mouseY;
    y = y + ((targetY - y) * easing);

    push();
    noStroke();
    fill(255); 
    ellipse(x, y, 120);
    pop();

    push();
    noStroke();
    fill(50); 
    ellipse(mouseX, mouseY, 100);
    pop();

    frameRate(24);

    
}