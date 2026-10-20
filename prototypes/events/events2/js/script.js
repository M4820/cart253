/**
 * Following Circle
 * Mona Belfedhal
 * 
 * By pressing down on the mouse, the circle will follow its position.
 * 
 * Main reference used: simple easing by aferriss https://editor.p5js.org/aferriss/sketches/H1ain8JFG 
 */

"use strict";

//defining the circle
let circle  = {

    x: 360,
    y: 240,
    width: 50,
    height: 50,

    fill: "#333f72",
};


//creates the canvas
function setup() {
    createCanvas(720, 480);
}


//draws the background and circle
function draw() {
    background("#daec18");
    push();
    noStroke();
    fill(circle.fill)
    ellipse(circle.x, circle.y, circle.width, circle.height); 
    pop();

    //calls the mouse event
    if (mouseIsPressed === true) {
        mousePressed();
    }
}



//when the mouse is pressed, the circle travels to the current position of the mouse with an easing motion
function mousePressed() {

    circle.x = circle.x + (pmouseX - circle.x) * 0.05
    circle.y = circle.y + (pmouseY - circle.y) * 0.05

}

