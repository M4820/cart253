/**
 * Orbiting Moon
 * Mona Belfedhal
 * 
 * A moon orbiting around a planet made with p5js.
 */

"use strict";

//define the shape of the planet
let planet = {
    x: 360,
    y: 240,
    size: 100,
};

//define the shape of the moon
let moon = {
    x: 0,
    y: 200,
    size: 50,
};

//creates the canvas
function setup() {
createCanvas(720, 480);
}


//draws the images
function draw() {
//draws the background over every frame
background("#0b0527")

//draw the planet
push();
noStroke();
fill('#1942e4')
ellipse(planet.x, planet.y, planet.size)
pop();

//define angle
let angle = frameCount * 0.02;

push();

//change origin so that it's at the center of the canvas
translate(360, 240)

//makes it rotate
rotate(angle);

//draw the moon
fill('#969cb3')
ellipse(moon.x, moon.y, moon.size)
noStroke();

pop();


}