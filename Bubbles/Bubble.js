class Bubble {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

    // Change the x and the y of the bubble, randomly
    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5); 
    }

    // Display the bubble
    show() {
        var r = random(0, 150);
        stroke((millis()/(r*2)), r*2, 200);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}