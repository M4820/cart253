/**
 * Meteor Shower
 * Mona Belfedhal
 * 
 * Click to make meteors appear in the sky.
 * Main reference used: Moving Stones by Pippin Barr https://editor.p5js.org/pippinbarr/sketches/zQgkBD1Y4
 */

"use strict";

let meteors = [];

//creates the canvas and background
function setup() {
    createCanvas(720, 480);
    background(0);
}


//draws the meteors
function draw() {

//slightly fades the canvas to black in order to have the meteors "disappear"
     background(0,0,0,20);
    
    for (let meteor of meteors) {
        //Adds the meteors
        drawmeteor(meteor);

    //make them fall diagonally
        meteor.y += 2;
        meteor.x += 7;

        //slightly increase size and lighten them as they fall
        meteor.fill += 5;
        meteor.size += 0.2;
    }

}

//adds the meteors
function addmeteor() {
    //position and size of the meteors
    const x = random(-720,500);
    const y = random(-20,0);
    const size = random(1,10);
    
    const meteor = createmeteor(x, y, size);
    // adds the meteors to the array
    meteors.push(meteor);
    
}

//appearance of the meteors
function drawmeteor(meteor) {
    fill(meteor.fill);
    noStroke();
    circle(meteor.x, meteor.y, meteor.size);
}

//when the mouse is pressed, add the meteors
function mousePressed() {
        if (mouseIsPressed === true) {
        addmeteor();
        }
}

//creates the meteors
function createmeteor(x, y, size) {
  const meteor = {
    x: x,
    y: y,
    size: size,
    fill: 0,
  };
  return meteor;
  
}