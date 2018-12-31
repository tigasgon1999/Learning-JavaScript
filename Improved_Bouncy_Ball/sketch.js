var circle = {
  x : 200,
  y : 200,
	xSpeed : 2,
  ySpeed: 2,
};

var radius;
var red, green, blue;

function setup() {
  createCanvas(600, 400);
  
  radius = 25;
  fill(250, 200, 200, 50);
}

function draw() {
	changeBackground();
  bounce();
  move();
  ellipse(circle.x, circle.y, radius*2, radius*2);
  if (mouseIsPressed)
    clicking();
}

function move() {
  circle.x += circle.xSpeed;
  circle.y += circle.ySpeed;
}

function bounce() {
  if (circle.x + radius >= width || circle.x - radius <= 0) {
    circle.xSpeed *= -1;
    changeColour();
  }
  if (circle.y + radius >= height || circle.y - radius <= 0) {
    circle.ySpeed *= -1;
    changeColour();
	}
}

function changeColour() {
    fill(floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255)), 150);
}

function changeBackground() {
  red = map(mouseX, 0, width, 150, 255);
	green = map(mouseY, 0, width, 125, 255);
  blue = (red + green)/2; 
  background(red, green, blue);
}

function clicking() {
  var xPos = map(mouseX, 0, 600, 191, 327);
  textSize(64);
  text('Clicking', xPos, height/2+15, 50);
}