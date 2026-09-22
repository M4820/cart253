function setup() {
    // Create the canvas
    createCanvas(640, 640);
}

function draw() {
    background(0);
    
    // Draw a circle that changes colour based on the mouse position
    push();
    noStroke();
    // We use the variable names mouseX and mouseY instead
    // of numbers for the red and green of the circle's fill
    fill(mouseX, mouseY, 0);
    ellipse(width/2, height/2, 100, 100);
    pop();
}