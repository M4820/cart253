/**
 * Growing Flower
 * Mona Belfedhal
 * 
 * 
 * Press any key to make a flower grow.
 */

"use strict";

let flower = {
  x: 0,
  y: 0,
 width: 0,
 height: 0,
};

//draw the canvas and background color
function setup() {
    createCanvas(720, 480);
    background('#3fbd52');
    angleMode(DEGREES);
}

function draw() {

let angle = frameCount * 50;


//draw the flower
 fill('pink');

 //center the flower
  translate(360,220);

  //make the ellipse rotate
  rotate(angle);

  stroke('pink');
  strokeWeight(3)
  ellipse(flower.x, flower.y, flower.width, flower.height);

//make the flower grow when a key is pressed
  if (keyIsPressed === true) {

    flower.x += 0.1;
    flower.width += 5;
    flower.height += 0.3;
}
}