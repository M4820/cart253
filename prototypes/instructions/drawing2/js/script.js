/**
 * Rubber Duck
 * Mona Belfedhal
 * 
 * A drawing of a rubber duck in water made with p5.js.
 */

"use strict";

//creates the canvas and background color
function setup() {
    createCanvas(720, 480);
    background("#1b1d89");
}

//draws the rubber duck and the water
function draw() {

//water ripple 1
push();
stroke("#152ebc");
strokeWeight(5);
fill("#1b1d89")
ellipse(360, 350, 600, 200);
pop();

//water ripple 2
push();
stroke("#449fff");
strokeWeight(5);
fill("#1b1d89")
ellipse(360, 350, 400, 150);
pop();

//beak of the rubber duck
push();
noStroke();
fill("#ed7d1b")
triangle(170, 200, 220, 170, 220, 210);
pop();

//head of the rubber duck
push();
noStroke();
fill("#ffff23")
ellipse(290, 190, 150, 150);
pop();

//body of the rubber duck
push();
noStroke();
fill("#ffff23")
rect(245, 240, 245, 165, 200, 0, 100, 100);
pop();

//eye of the rubber duck
push();
noStroke();
fill("#102747")
ellipse(280, 175, 20, 20);
pop();

}
