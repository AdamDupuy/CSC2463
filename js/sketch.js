//Adam Dupuy 2023
//
let sound1 = new Tone.Player('Sounds/bruh.mp3');
let sound2 = new Tone.Player('Sounds/jermaMeatgrinder.mp3');
let sound3 = new Tone.Player('Sounds/omgSound.mp3');
let sound4 = new Tone.Player('Sounds/vineBoom.mp3');


function setup() {
    createCanvas(600,600);
    sound1.toDestination();
    sound2.toDestination();
    sound3.toDestination();
    sound4.toDestination();
}

function draw() {
    background(220);
    text("Hello there, please use the keys specified on the buttons or click said buttons to create music.", 75, 50);
    square(75, 75, 150);
    text("bruh.mp3\n    (w)", 125, 150);
    square(350, 75, 150);
    text("jermaMeatgrinder.mp3\n                (a)", 365, 150);
    square(75, 350, 150);
    text("omgSound.mp3\n          (s)", 110, 430);
    square(350, 350, 150);
    text("vineBoom.mp3\n          (d)", 385, 430);
    text("Type 1 for Normal Speed, 2 for Slow speed, and 3 for Fast speed.", 75, 280);
    
    
}

function mousePressed(){
    if ( 75 < mouseX && mouseX < 225){
        if (mouseY > 75 && mouseY < 225){
            sound1.start();
        }
        else if (mouseY > 350 && mouseY < 500){
            sound3.start();
        }
    }
    else if (350 < mouseX && mouseX < 500){
        if (mouseY > 75 && mouseY < 225){
            sound2.start();
        }
        else if (mouseY > 350 && mouseY < 500){
            sound4.start();
        }
    }
}

function keyPressed(){
    if (key === "1")
    {
        sound1.playbackRate = 1;
        sound2.playbackRate = 1;
        sound3.playbackRate = 1;
        sound4.playbackRate = 1;
    }
    else if (key === "2")
    {
        sound1.playbackRate = 0.75;
        sound2.playbackRate = 0.75;
        sound3.playbackRate = 0.75;
        sound4.playbackRate = 0.75;
    }
    else if (key === "3")
    {
        sound1.playbackRate = 1.25;
        sound2.playbackRate = 1.25;
        sound3.playbackRate = 1.25;
        sound4.playbackRate = 1.25;
    }
    else if (key === "w")
    {
        sound1.start();
    }
    else if (key === "a")
    {
        sound2.start();
    }
    else if (key === "s")
    {
        sound3.start();
    }
    else if (key === "d")
    {
        sound4.start();
    }
    
    
}