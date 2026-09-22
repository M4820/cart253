/**
 * Rubber Duck
 * Mona Belfedhal
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let sfx;

function preload(){
sfx = loadSound("assets/sounds/duck-toy-sound.mp3");
}

function setup() {
    createCanvas(720, 480);
    background("#1b1d89");
    sfx = loadSound("assets/sounds/duck-toy-sound.mp3");
}


function draw() {

push();
stroke("#152ebc");
strokeWeight(5);
fill("#1b1d89")
ellipse(360, 350, 600, 200);
pop();

push();
stroke("#449fff");
strokeWeight(5);
fill("#1b1d89")
ellipse(360, 350, 400, 150);
pop();

push();
noStroke();
fill("#ed7d1b")
triangle(170, 200, 220, 170, 220, 210);
pop();

push();
noStroke();
fill("#ffff23")
ellipse(290, 190, 150, 150);
pop();

push();
noStroke();
fill("#ffff23")
rect(245, 240, 245, 165, 200, 0, 100, 100);
pop();

push();
noStroke();
fill("#102747")
ellipse(280, 175, 20, 20);
pop();

}
