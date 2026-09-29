/**
 * Floating Balloon
 * Mona Belfedhal
 * 
 * A balloon floating in the air made with p5js. Click around to change its position.
 */

"use strict";


//defining the balloon shape
let balloon = {

    x: 360,
    y: 150,
    width: 100,
    height: 140,

    fill: {
    r: 227,
    g: 32,
    b: 100,
  }
};

//defining the string
let string = {
  x: 360,
  y: 200,
  w: 2,
  h: 220,
};


//creating the canvas
function setup() {
    createCanvas(720, 480);
}

//
function draw() {
    if (mouseIsPressed === true) {
    balloon.y = mouseY
    balloon.x = mouseX

    string.y = mouseY
    string.x = mouseX
  } else {
    //draws over every frame
    background("#32b4d4");

    //draws the string
    push();
    strokeWeight(2)
    stroke("white")
    rect(string.x, string.y, string.w, string.h);
    pop();

    //draws the balloon
    push();
    noStroke();
    fill(balloon.fill.r, balloon.fill.g, balloon.fill.b);
    ellipse(balloon.x, balloon.y, balloon.width, balloon.height); 
    pop();

    //makes the ballon and string follow the mouse horizontally and go up
    balloon.y -=0.5
    balloon.x = mouseX

    string.y -=0.5
    string.x = mouseX
  }
  
}
