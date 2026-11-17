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

    fill: "#03050e",
};


//creates the canvas
function setup() {
    createCanvas(1152, 864);
}


//draws the background and circle
function draw() {
    background("#a6a6a6");
    push();
    noStroke();
    fill(circle.fill)
    ellipse(circle.x, circle.y, circle.width, circle.height); 
    pop();

    push();
    fill(0);
    textSize(30);
    text('My cool title screen', width / 2, height / 2)
    pop();

    //calls the mouse event
    if (mouseIsPressed === true) {
        mousePressed();
    }


}



//when the mouse is pressed, the circle travels to the current position of the mouse with an easing motion
function mousePressed() {

    circle.x = circle.x + (mouseX - circle.x) * 0.05
    circle.y = circle.y + (mouseY - circle.y) * 0.05

}

