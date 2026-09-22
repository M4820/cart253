/**
 * Flannel Pattern
 * Mona Belfedhal
 * 
 * A drawing of a flannel pattern made with p5.js.
 */

"use strict";

//draws the canvas and background color
function setup() {
    createCanvas(720, 720);
    background("#f90000");
}


//draws the flannel pattern
function draw() {
    //prevents it from looping
    noLoop();
    noStroke();
    //4th value dettermines opacity
    fill(0,0,0,120);
    //the grid of black rectangles
    rect(0, 0, 144, 720);
    rect(288, 0, 144, 720);
    rect(576, 0, 144, 720);
    rect(0, 0, 720, 144);
    rect(0, 288, 720, 144);
    rect(0, 576, 720, 144);
}