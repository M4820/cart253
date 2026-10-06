/**
 * Color Change
 * Mona Belfedhal
 * 
 * Move with the arrow keys to change the color of the circle and background.
 * 
 * Main reference used: https://p5js.org/reference/p5/keyIsDown/
 * 
 */

"use strict";

//defining the circle and its initial color
let circle = {

    x: 360,
    y: 240,
    width: 100,
    height: 100,

    fill: {
    r: 150,
    g: 150,
    b: 150,
  }
};

//defining the initial color of the background
let backgroundcolor = {
    
    fill: {
    r: 150,
    g: 150,
    b: 150,
  }
}

//draws the canvas
function setup() {
    createCanvas(720, 480);
}


//draws the circle and background color
function draw() {
    //the background color
    background(backgroundcolor.fill.r,backgroundcolor.fill.g,backgroundcolor.fill.b);
    

    //the circle
    push();
    noStroke();
    fill(circle.fill.r, circle.fill.g, circle.fill.b);
    ellipse(circle.x, circle.y, circle.width, circle.height); 
    pop();

    
    //movement and color change whenever arrow key is pressed
    if (keyIsDown(LEFT_ARROW) === true) {
        circle.x -= 2;
        circle.fill.r -= 2;
        backgroundcolor.fill.g += 2;
    }

    if (keyIsDown(RIGHT_ARROW) === true) {
        circle.x += 2;
        circle.fill.g -= 2;
        backgroundcolor.fill.b += 2;
    }

    if (keyIsDown(UP_ARROW) === true) {
        circle.y -= 2;
        circle.fill.b -= 2; 
        backgroundcolor.fill.r += 2;
    }

    if (keyIsDown(DOWN_ARROW) === true) {
        circle.y += 2;
        circle.fill.r -= 2; 
        backgroundcolor.fill.g += 2;
    }
    


    //constraining the maximum value of the colors. when an arrow key is not being pressed, the circle turns white, and the background turns black.
    let maxcolorCircler = constrain(circle.fill.r, 0, 255);
    let maxcolorCircleg = constrain(circle.fill.g, 0, 255);
    let maxcolorCircleb = constrain(circle.fill.b, 0, 255);

    let maxcolorBgr = constrain(backgroundcolor.fill.r, 0, 255);
    let maxcolorBgg = constrain(backgroundcolor.fill.g, 0, 255);
    let maxcolorBgb = constrain(backgroundcolor.fill.b, 0, 255);

    //turns the circle white
    circle.fill.r = maxcolorCircler +=1;
    circle.fill.g = maxcolorCircleg +=1;
    circle.fill.b = maxcolorCircleb +=1;

    //turns the background black
    backgroundcolor.fill.r = maxcolorBgr -=1;
    backgroundcolor.fill.g = maxcolorBgg -=1;
    backgroundcolor.fill.b = maxcolorBgb -=1;


}