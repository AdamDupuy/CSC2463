function setup() {
    createCanvas(400, 400);
}

function draw() {
    background('#01358B');

    stroke('white');
    strokeWeight(5);
    fill('#028203');
    circle(200,200, 200);


    //I drew a triangle on paper and used the numbering below to know which point I was adjusting. 
    fill('red');
    beginShape(TESS);
    vertex(200,100); //1
    vertex(225,165); //2
    vertex(295,167); //3
    vertex(245,215); //4
    vertex(260,280); //5
    vertex(200,245); //6
    vertex(140,280); //7
    vertex(160,215); //8
    vertex(105,167); //9
    vertex(175,165); //10
    endShape(CLOSE);
}