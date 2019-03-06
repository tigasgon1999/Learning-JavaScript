var start = 0.0;
var increment = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  
  beginShape();
  var offset = start;
  for (var x = 0; x < width; x++) {
    stroke(255);
    var y = map(noise(offset), 0, 1, 0, height);
    vertex(x, y);
    offset += increment;
  }
  endShape();

  start += increment
}