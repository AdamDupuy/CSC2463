let selectedColor, red, orange, yellow, green, blue, white, pink, black;

function setup() {
    createCanvas(800, 800);
    background(255);
    selectedColor = 0;
    red = new selectShade(0, "red");
    orange = new selectShade(50, "orange");
    yellow = new selectShade(100, "yellow");
    green = new selectShade(150, "green");
    blue = new selectShade(200, "blue");
    white = new selectShade(250, "white");
    pink = new selectShade(300, "pink")
    black = new selectShade(350, "black");
}

function draw(){
    if(mouseIsPressed){
        drawing();
    }
    red.appear();
    red.mouseClicked();
    orange.appear();
    yellow.appear();
    green.appear();
    blue.appear();
    white.appear();
    pink.appear();
    black.appear();
}

class selectShade {
    constructor(whichColor, shade){
        this.x = 0;
        this.y = whichColor;
        this.width = 50;
        this.height = 50;
        this.shade = shade;
    }

    appear(){
        push();

            if(this.shade != "white")
            {
                noStroke();
            }

            fill(this.shade);
            rect(this.x, this.y, this.width, this.height);
        pop();
    }

    mouseClicked(){
        if(mouseIsPressed)
        {
            if (mouseX < 50)
            {
                if (mouseY > 0 && mouseY < 50)
                {
                    selectedColor = "red";
                }
                else if (mouseY > 50 && mouseY < 100)
                {
                    selectedColor = "orange";
                }
                else if (mouseY > 100 && mouseY < 150)
                {
                    selectedColor = "yellow";
                }
                else if (mouseY > 150 && mouseY < 200)
                {
                    selectedColor = "green";
                }
                else if (mouseY > 200 && mouseY < 250)
                {
                    selectedColor = "blue";
                }
                else if (mouseY > 250 && mouseY < 300)
                {
                    selectedColor = "white";
                }
                else if (mouseY > 300 && mouseY < 350)
                {
                    selectedColor = "pink";
                }
                else if (mouseY > 350 && mouseY < 400)
                {
                    selectedColor = "black";
                }
            }
        }
    }
}

function drawing() {
    push();
    strokeWeight(15);
    stroke(selectedColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
    pop();   
}
