/**
https://editor.p5js.org/aferriss/sketches/7M40v661y


 */

"use strict";

const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

// properties of the signal
let light = {

x: 0,
y: 0,

};

//draws the canvas
function setup() {
    createCanvas(800, 600);


}


function draw() {
    frameRate(30);
        background(0);
    push();
    noStroke();
    fill(255); 
    ellipse(mouseX, mouseY, 150);
    pop();
    
    
    for(let i = 0; i<35; i++){
    const rand = int(random(0, letters.length-1));
    fill(0);
    textSize(35);
    text(letters[rand], random(width), random(height));
    }
}

//press to change size