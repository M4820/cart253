/**
 * Function Calls
 * MB
 * 
 * A grey square and a white rectangle. A program testing function calls using p5.js.
 * 
 * 
 * Template by Pippin Barr
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Creates a 300px by 300px canvas
*/
function setup() {
 createCanvas(300, 300);
}


/**
 * Adds a white rectangle at the bottom of the canvas
*/
function draw() {
      // A grey background
 background(150, 150, 150);
     // The white rectangle
  rect(150, 220, 100, 100);
}