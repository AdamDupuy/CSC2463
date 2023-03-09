function setup() {
    createCanvas(800, 400);
}

function draw() {
    background('black');

    noStroke();
    fill('yellow');
    circle(200,200,350);

    fill('black');
    triangle(0,400,0,0,200,200);

    fill('red');
    arc(585, 200, 350, 350, PI , TWO_PI);
    rect(410, 200, 350, 175);

    fill('white');
    circle(515,175,100);
    circle(670,175,100);

    fill('blue');
    circle(515,175,50);
    circle(670,175,50);
}