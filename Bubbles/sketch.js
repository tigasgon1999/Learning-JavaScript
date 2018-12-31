var bubbles = [];   
var popped = false; 
var counter;

function setup() {
    createCanvas(600, 400);
    counter = 0;
}

function draw() {
    frameRate(60);
    background(0);
    
    // If user is holding Enter
    if (keyIsDown(ENTER))
        showInstructions();
    else 
        showHelp();
    
    // Moving and displaying all the bubbles
    for (let b of bubbles) {
        b.move();
        b.show();
    }
    
    // Display the bubble counter
    textSize(16);
    textStyle(BOLD);
    noStroke();
    fill(100, 200, 200);
    text('Bubble counter: ' + counter , width-150, 25);
    
    // If the user popped all the bubbles (by pressing Spacebar)
    if (popped) {
        frameRate(8);
        textSize(128);
        noStroke();
        fill(100, 180, 250);
        text('POP!', width/4, height/2);
        popped = false;
    }
}

function mousePressed() {
    // If the user pressed inside of a bubble, destroy it
    for (let i = 0; i < bubbles.length; i++) {
        let d = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);
        if (d < bubbles[i].diameter/2) {
            popBubble(i);
            return;
        }
    }
    
    // If the user pressed outside of a bubble, create a new one
    let b = new Bubble(mouseX, mouseY, second()*2);
    bubbles.push(b);
    counter++;
    // If there are more than 20 bubbles, delete the oldest one
    if (bubbles.length > 20)
        popBubble(0);
 }

function keyPressed() {
    // If spacebar is pressed, delete all bubbles
    if (keyCode === 32 && bubbles.length > 0) {
        bubbles.splice(0);
        popped = true;
        counter = 0;
    }
}

// Delete a single bubble in the given index
function popBubble(index) {
    bubbles.splice(index, 1);
    counter--;
}

// Display the instrucions
function showInstructions() {
    background(0);
    textSize(16);
    noStroke();
    fill(255);
    text('Left Click to create or delete bubbles', 10, 25);
    text('Spacebar to delete all bubbles', 10, 45);
}

// Display how to open the instructions
function showHelp() {
    background(0);
    textSize(16);
    noStroke();
    fill(200, 120);
    text('Hold Enter for intructions', 10, 25);
}