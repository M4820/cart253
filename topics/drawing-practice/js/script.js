/**
 * Draws a bright red vinyl record on the canvas.
 * Template by Pippin Barr
 * Uses:
 * p5.js
 * https://p5js.org/
 */


"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
  createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(150, 150, 150);
    push();
    fill(255, 0, 0);
    stroke(255, 255, 255);
    ellipse(250, 250, 480, 480);
    pop();

    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(250, 250, 140, 140);
    pop();

    push();
    fill(150, 150, 150);
    stroke(50, 50, 50);
    ellipse(250, 250, 20, 20);
    pop();
}