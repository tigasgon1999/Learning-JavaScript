function setup() {
  createCanvas(600, 400);
  background(250, 250, 100);
}

function draw() {
  frameRate(5);
  
  fill(250, 200, 200, 150);
  ellipse(mouseX, mouseY, 100, 100, 10);

  fill(200, 250, 200, 200);
  rect(mouseY, mouseX, 50, 50);
}

function mousePressed() {
  background(250, 250, 100);
}