/**
 * Shaky Drawing
 * Mona Belfedhal
 *
 * Draw with shaky lines. Press any key to restart the drawing.
 * Main reference: Denied stamp by Pippin barr https://editor.p5js.org/pippinbarr/sketches/88JmODCt9
 */

"use strict";

//properties of the brush
let brush = {

    stroke: 'black',
    strokeWeight: 3,

};


//create the canvas and background color
function setup() {
  createCanvas(720, 480);
  
  background("#e5e5e8");
}

//call mouse events
function draw() {

    //constrain stroke weight size
    let maxstrokeweight = constrain(brush.strokeWeight, 2, 9);
    //add randomness to stroke weight size
    brush.strokeWeight = maxstrokeweight += random(-3,3)


            if (mouseIsPressed === true) {
                mousePressed();
            } else if (keyIsPressed === true) {
                //reset drawing
                background("#e5e5e8");
            }


}


//draw the brush at the position of the mouse
function mousePressed() {
  drawBrush(mouseX, mouseY);

}

//drawing the line
function drawBrush(x, y) {

  push();
  noFill();
  stroke(brush.stroke);
  strokeWeight(brush.strokeWeight);

  //add randomness to x and y position for shakiness
  line(pmouseX+= random(-3,3), pmouseY += random(-3,3), mouseX, mouseY);
  pop();
  
}



