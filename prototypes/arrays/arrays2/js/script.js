/**
 * Bar Gradient
 * Mona Belfedhal
 * 
 * Click to create bars that will make a black-white gradient.
 * Main reference used: Moving Stones by Pippin Barr https://editor.p5js.org/pippinbarr/sketches/zQgkBD1Y4
 */

"use strict";

//the array that will hold the bars
let bars = [];

//creates the canvas and background
function setup() {
    createCanvas(1000, 200);
    background('grey');
}


//draws the bars
function draw() {
    //lowers the framerate
    frameRate(24);


    
    for (let bar of bars) {
        //Adds the bars
        drawBar(bar);
        //push them to the right
        bar.x += 20
        //lighten them
        bar.fill += 5;
    }

}

//adds the bars
function addBar() {
    //position and size of the bars
    const x = 0;
    const y = 0;
    const width = 55;
    const height = 200;
    
    const bar = createBar(x, y, width, height);
    // adds the bars to the array
    bars.push(bar);
    
}

//appearance of the bars
function drawBar(bar) {
    fill(bar.fill);
    noStroke();
  rect(bar.x, bar.y, bar.width, bar.height);
}

//when the mouse is pressed, add the barrs
function mousePressed() {
        if (mouseIsPressed === true) {
        addBar();
        }
}

//creates the bars
function createBar(x, y, width, height) {
  const bar = {
    x: x,
    y: y,
    width: width,
    height: height,
    fill: 0,
  };
  return bar;
  
}