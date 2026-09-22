/**
 * Numbered Die
 * Mona Belfedhal
 * 
 * A die that displays a random number from 1 to 6 whenever the mouse is pressed.
 */

"use strict";

//create canvas, background and die with random number
function setup() {
    createCanvas(720, 480);
    background("#8ac5c6");

    //variables to determine the random number and color of the number on the die
    let number = ['1', '2', '3', '4', '5', '6'];
    let current = random(number);
    let textcolor = ['#bf0e0e', '#6bac03', '#1b6492', '#5a097c', '#a20664', '#c77b00'];
    let currentcolor = random(textcolor);

    //die
    push();
    strokeWeight(5);
    stroke("#848c9a")
    rectMode(CENTER);
    square(360, 240, 100, 10);
    pop();

    //the number on the die
    textFont("comic sans ms");
    textAlign(CENTER);
    textSize(50);
    fill(currentcolor);
    text(current, 360, 260);
}


//change number on click
function mousePressed() {

    //creates another die
    push();
    strokeWeight(5);
    stroke("#848c9a")
    fill(255, 255, 255);
    rectMode(CENTER);
    square(360, 240, 100, 10);
    pop();

    //changes the number and color of it on the die
    let number = ['1', '2', '3', '4', '5', '6'];    
    let current = random(number);
    let textcolor = ['#bf0e0e', '#6bac03', '#1b6492', '#5a097c', '#a20664', '#00957c'];
    let currentcolor = random(textcolor);

    push();
    textFont("comic sans ms");
    textAlign(CENTER);
    textSize(50);
    fill(currentcolor);
    text(current, 360, 260);
    pop();

}