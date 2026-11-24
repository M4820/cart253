/**
https://pippinbarr.com/cart253/topics/arrays/sequential-arrays-in-practice.html
 */

"use strict";
let speech = ["⏹", "⬤", "▲", "⬟"];
let speechIndex = 0;

function setup() {
    createCanvas(800, 600);

}
function draw() {

    background(200);

    // Get the current line of our speech
    let currentLine = speech[speechIndex];
    
    // Display it
    push();
    fill(0);
    textSize(100);
    textAlign(CENTER, CENTER);
    text(currentLine, mouseX, mouseY);
    pop();
}


function mousePressed() {
    // Increase the index
    speechIndex = speechIndex + 1;
    // Check if the index is too high for the array's length!
    if (speechIndex >= speech.length) {
        // If so, reset it to 0 (go back to the beginning)
        speechIndex = 0;
    }
    
    // If you wanted to be very fancy you can use modulo instead:
    // speechIndex = (speechIndex + 1) % speech.length;
}