/**
https://editor.p5js.org/aferriss/sketches/7M40v661y


 */

"use strict";

const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

// properties of the signal
let light = {

x: 0,
y: 0,
size: 150,

};

//draws the canvas
function setup() {
    createCanvas(800, 600);


}


function draw() {

    frameRate(30);
    background(0);
    push();
    noStroke();
    fill(255); 
    ellipse(mouseX, mouseY, light.size);
    pop();
    
    
    createLetters();

    let maxLightSize = constrain(light.size, 150, 250);

    light.size = maxLightSize -=3;
}



function createLetters() {
    for(let i = 0; i<35; i++){
    const rand = int(random(0, letters.length-1));
    fill(0);
    textSize(35);
    text(letters[rand], random(width), random(height));
    }

}


function mousePressed() {
    //lock the movement of the mouse
    // requestPointerLock()




    light.size +=5;
}

function mouseReleased() {
    //allows mouse to be moved
    exitPointerLock()


}