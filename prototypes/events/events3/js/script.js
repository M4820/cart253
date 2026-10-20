/**
 * Strange Staircase
 * Mona Belfedhal
 * 
 * Hold the mouse to change the framerate and create an expanding staircase.
 */

"use strict";


//define the stairs (a repeating square)
let stairs ={

    x: 0,
    y: 0,
    s: 0,
};


//create the canvas
function setup() {
    createCanvas(720, 480);
    angleMode(DEGREES);
    background("#8d8d8d");
}


//draw the staircase
function draw() {


    //initial framerate
    frameRate(5)

    //to make the square rotate
    let angle = frameCount * 1


    //to be called when the mouse is pressed
    if (mouseIsPressed === true) {
        mousePressed();
    }


    //the staircase

    //center it initially
    translate(360,240);

    //make it rotate
    rotate(angle);

    //the square itself
    rectMode(CENTER);
    noStroke();
    strokeWeight(2);
    //4th value to make it a bit translucent
    stroke(0,0,0,50);
    fill(255,255,255,25);
    square(stairs.x, stairs.y, stairs.s);

}

//when the mouse is pressed
function mousePressed() {
        
    //the square follows a set path
    stairs.x = 100 * cos(frameCount * 5) + 2
    stairs.y = 10 * sin(frameCount * 2) + 2

    //grow in size
    stairs.s +=1

    //change the framerate
    frameRate(30)
}