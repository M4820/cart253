/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let state = "title";

function setup() {
    createCanvas(960, 720);
    background("#4a4a4a");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
  if (state === "title") {
    title();
  }
  else if (state === "game1") {
    game1();
  }
}

function title() {
    background("#4a4a4a");
  
  push();
  fill("#ffffff");
  text('Click to start', width / 2, height / 2)
  pop();
}

function mousePressed() {
      state = "game1";
}