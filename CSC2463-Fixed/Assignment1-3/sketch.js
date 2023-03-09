let spriteSheet1, spriteSheet2, spriteSheet3;

let walkingAnimation1;

function preload() {
 spriteSheet1 = loadImage('Images/spelunkyGuy.png');
 spriteSheet2 = loadImage('Images/greenGirl.png');
 spriteSheet3 = loadImage('Images/roundGirl.png');
}


function setup() {
    createCanvas(400,400);
    imageMode(CENTER);

    walkingAnimation1 = new WalkingAnimation(spriteSheet1, 80, 80, 200, 200, 9);
    walkingAnimation2 = new WalkingAnimation(spriteSheet2, 80, 80, 100, 100, 9);
    walkingAnimation3 = new WalkingAnimation(spriteSheet3, 80, 80, 300, 300, 9);
}

function draw(){
    background(220);

    walkingAnimation1.draw();
    walkingAnimation2.draw();
    walkingAnimation3.draw();
}

function keyPressed(){
    walkingAnimation1.keyPressed();
    walkingAnimation2.keyPressed();
    walkingAnimation3.keyPressed();
}

function keyReleased(){
    walkingAnimation1.keyReleased();
    walkingAnimation2.keyReleased();
    walkingAnimation3.keyReleased();
}

class WalkingAnimation {
    constructor(spriteSheet, sw, sh, dx, dy, animationLength) {
        this.spriteSheet = spriteSheet;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.u = 0 
        this.v = 0;
        this.animationLength = animationLength;
        this.currentFrame = 0;
        this.moving = 0;
        this.xDirection = 1;
    }

    draw () {
    this.u = (this.moving != 0) ? this.currentFrame % this.animationLength : 0;

    push();
    translate(this.dx, this.dy);
    scale(this.xDirection, 1);

    image(this.spriteSheet, 0, 0, this.sw, this.sh, this.u*this.sw, this.v*this.sh, this.sw, this.sh); 
    pop();
    if (frameCount % 6 == 0) 
    {
    this.currentFrame++;
    }
    this.dx += this.moving;
    }

    keyPressed(){
        if (keyCode === RIGHT_ARROW)
    {
        this.moving = 1;
        this.xDirection = 1;
        this.currentFrame = 1;
    }
    else if (keyCode === LEFT_ARROW) {
        this.moving = -1;
        this.xDirection = -1;
        this.currentFrame = 1;
    }
    }

    keyReleased(){
        if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
            this.moving = 0;
        }
    }
}