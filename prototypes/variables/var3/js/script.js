/**
 * Rainy Cloud
 * Mona Belfedhal
 * 
 * A cloud that rains and turns darker as the mouse is being pressed.
 * Made with p5js.
 */

"use strict";

//the initial brightness of the cloud
let cloudWhite = 100

//create canvas and set color mode to HSB
function setup() {
createCanvas(720, 480);
colorMode(HSB);
}


//draw the image
function draw() {
//update the background for every frame
background('#93cce4')

//everything that happens as the mouse is being pressed
if (mouseIsPressed === true) {

    //determine random positions of the rain so that it fits under the cloud
    let x = random(220, 490);
    let y = random(180, 480);

    //draw the rain
  push();
    stroke('blue')
    strokeWeight(10);
    point(x, y);
  pop();

  //draw the cloud
    push();
        fill(0,0, cloudWhite);

        //make the brightness of the cloud go down
        cloudWhite = (cloudWhite - 0.5);

        rect(360, 180, 300, 100, 50, 50, 50, 50);
        rect(320, 120, 120, 100, 100, 50, 50, 50);
        rect(375, 140, 170, 100, 50, 50, 50, 50);
    pop();
    
    //everything that happens when the mouse is not being pressed
  } else {

    //draw the cloud
    rectMode(CENTER)
    noStroke();
    fill(0,0, cloudWhite);

    //make the cloud turn back white
    cloudWhite = (cloudWhite + 0.3);

    rect(360, 180, 300, 100, 50, 50, 50, 50);
    rect(320, 120, 120, 100, 100, 50, 50, 50);
    rect(375, 140, 170, 100, 50, 50, 50, 50);

  }


}

