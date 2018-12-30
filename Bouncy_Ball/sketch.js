var diameter;
var circleY, circleX;
var up;
var right;

function setup() {
  createCanvas(400, 400);
  
  diameter = 50;
  circleY = height/2;
  circleX = width/2;
  up = false;
  right = true;
  
	fill(250, 200, 200);
}

function draw() {
  var red = map(mouseX, 0, width, 150, 255);
  var green = map(mouseY, 0, width, 125, 255);
  var blue = (red + green)/2; 
  background(red, green, blue);
  
  if (circleY + diameter/2 === height) {
		changeColour();
    up = true;
  }
  if (circleY - diameter/2 === 0) {
    changeColour();
    up = false;
  }
  
  if (circleX + diameter/2 + 1 === width) {
    changeColour();
    right = false;
  }
  if (circleX - diameter/2 + 1 === 0) {
    changeColour();
    right = true;
	}
  
  ellipse(circleX, circleY, diameter, diameter);
  
  if (up)
		circleY -= 1;
  else
    circleY += 1;
  
	if (right)
    circleX += 2;
  else
    circleX -=2;
}

function changeColour() {
    fill(floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255)));
}
