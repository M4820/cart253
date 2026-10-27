/**
 * Signal
 * Mona Belfedhal
 *
 * Click to make a signal on a radar!
 * 
 * Base code by Pippin Barr: https://editor.p5js.org/pippinbarr/sketches/88JmODCt9
 */

"use strict";

// properties of the signal
let signal = {

    stroke: ("#00f531"),
    
    //initial size
    size: 10,
    
    strokeWeight: 2,

};


//create canvas and set background color to black
function setup() {
    createCanvas(720, 480);
    background(0);
}

//change framerate and call mouse events
function draw() {
    
        frameRate(12);

            if (mouseIsPressed === true) {
                mousePressed();
            } else {
                mouseReleased();
            }
        
        //black transparency covers the canvas when the mouse is not being pressed
        background(0,0,0,60);
}


 //draws the signal
function drawSignal(x, y) {

    push();
    fill(0,0,0,0);
    stroke(signal.stroke);
    strokeWeight(signal.strokeWeight);
    ellipse(x, y, signal.size);
    pop();
        
}

function mouseReleased() {
    //allows mouse to be moved
    exitPointerLock()

    //starting size of the signal
    signal.size = 10
}

function mousePressed() {
    //lock the movement of the mouse
    requestPointerLock()

    //draw the signal at the position of the mouse
    drawSignal(mouseX, mouseY);

    //make the signal increase in size as the mouse is being pressed
    signal.size +=25
}