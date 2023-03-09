let spriteSheet;
let chronoSheet;

let walkingAnimation;
let chronoAmination;

let spriteSheetFilenames = ["Images/AdamsBug.png"];
let spriteSheets = [];
let animations = [];

const GameState = {
   Start: "Start",
   Playing: "Playing",
   GameOver: "GameOver" 
};

let game = { score: 0,maxScore: 0, maxTime: 30, elapsedTime: 0, totalSprites: 15, state: GameState.Start};

function preload() {
    for(let i=0; i < spriteSheetFilenames.length; i++)
    {
        spriteSheets[i] = loadImage(spriteSheetFilenames[i]);
    }
}


function setup() {
    createCanvas(400,400);
    imageMode(CENTER);

    reset();
}

function reset() {
    animations = [];
    game.elapsedTime = 0;
    game.score = 0;
    game.totalSprites = random(10,30);
    
    for(let i=0; i< game.totalSprites; i++)
    {
        animations[i] = new WalkingAnimation(random(spriteSheets), 80, 80, random (100,300), random (100, 300), 7, random(1, 5), 12, random([0,1]));
    }
}

function draw(){
    switch(game.state) {
        case GameState.Playing: 

            background(220);

            for(let i =0; i<animations.length; i++)
            {
                animations[i].draw();
            }
            fill(0);
            textSize(20);
            text("Score: " + game.score,20,30);
            let currentTime = game.maxTime - game.elapsedTime;
            text(ceil(currentTime), 300, 30);
            game.elapsedTime += deltaTime / 1000;
        
            if (currentTime < 0)
            {
            game.state = GameState.GameOver; 
            }
        break;
        case GameState.GameOver: 
        game.maxScore = max(game.score, game.maxScore);
        background(0);
        fill(255);
        textAlign(CENTER);
        text("Game over, your score was: " + game.score + "!!!", 200, 200);
        text("Max Score: " + game.maxScore,200,300);
        textSize(15);
        text("Press any key to continue", 200, 330);
        break;
        case GameState.Start: 
        background(0);
        fill(255);
        textSize(50);
        text("Bug Smasher", 20, 50);
        textSize(20);
        text("Press any key to start smashing bugs.", 20, 300);
        break;
    }
}

function keyPressed() {
    switch(game.state){
        case GameState.Start:
            game.state = GameState.Playing;
        break;
        case GameState.GameOver:
            reset();
            game.state = GameState.Playing;
        break;
    }
}

function mousePressed() {
    switch(game.state) {
        case GameState.Playing: 
        for (let i =0 ; i< animations.length; i++)
        {
            let contains = animations[i].contains(mouseX,mouseY);
            if (contains){
                if (animations[i].moving != 0){
                    animations[i].stop();
                    for (let j = 0; j < animations.length; j++)
                    {
                        if(animations[j] != animations[i])
                        {
                            animations[j].speed += 1;
                        }
                    }
                    game.score++;
                }
            }
        }
        break;

}
}

class WalkingAnimation {
    constructor(spriteSheet, sw, sh, dx, dy, animationLength, speed, framerate, vertical = false) {
        this.spriteSheet = spriteSheet;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.u = 0 
        this.v = 0;
        this.animationLength = animationLength;
        this.currentFrame = 0;
        this.moving = 1;
        this.xDirection = 1;
        this.speed = speed;
        this.framerate = framerate;
        this.vertical = vertical;
    }

    draw () {

    this.u = (this.moving != 0) ? this.currentFrame % this.animationLength : this.u;

    push();
    translate(this.dx, this.dy);
    if (this.vertical)
        rotate(-30);
    scale(this.xDirection, 1);
    image(this.spriteSheet, 0, 0, this.sw, this.sh, this.u*this.sw, this.v*this.sh, this.sw, this.sh); 
    pop();
    let proportionalFramerate = round(frameRate() / this.framerate);
    if (frameCount % proportionalFramerate == 0) 
    {
    this.currentFrame++;
    }

    if (this.vertical)
    {
        this.dy += this.moving*this.speed;
        this.move(this.dy, 15, width-15);
    }
    else
    {
       this.dx += this.moving*this.speed;
       this.move(this.dx, 15, width - 15);
    }
    
    
}

    move(position, lowerBounds, upperBounds) {
        
        if (position > upperBounds)
    {
        this.moveLeft();
    } else if (position < lowerBounds)
    {
        this.moveRight();
    }
    }

    moveRight() {
       this.moving = 1;
        this.xDirection = 1; 
        
    }

    moveLeft () {
        this.moving = -1;
        this.xDirection = -1;
        
    }

    keyPressed(){
        if (keyCode === RIGHT_ARROW)
    {
        this.currentFrame = 1;
    }
    else if (keyCode === LEFT_ARROW) {
        this.currentFrame = 1;
    }
    }

    keyReleased(){
        if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
            this.moving = 0;
        }
    }

    contains(x,y) {
        let insideX = x >= this.dx - this.sw/8 && x <= this.dx + this.sw/4;
        let insideY = y >= this.dy - this.sh/6 && y <= this.dy + this.sh/2.7;
        return insideX && insideY;
    }

    stop() {
        this.moving=0;
        this.u = 8;
        this.speed += 2;
    }
    }

    function delay(ms) {
        return new Promise((resolve) => {setTimeout(resolve, ms);})
    }