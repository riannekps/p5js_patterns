var res = 0
var recursion = 4;
var siz = 100

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    seed = random(1000);
    res = PI / 2;

}


function draw() {

    background(0);
    randomSeed(seed)
    strokeWeight(0.15)
    stroke(255)
    fill(255, 25)
    //noFill()

    for (var i = siz; i < windowWidth - siz/2; i += siz) {
        for (var j = siz; j < windowHeight - siz/2; j += siz) {
            res = PI / (int(random(1, 8)) * 2)
    recursion = int(random(1, 6))
            push()
            translate(i, j)
            drawMe(siz/2, res, recursion)
            pop()
        }
    }
}





function drawMe(sz, angle, level) {


    for (var i = 0; i < TWO_PI; i += angle) {
        rotate(i);

        push();
        beginShape();
        vertex(0 - sz, 0);
        vertex(0, 0 + sz * 2 / 3);
        vertex(0 + sz, 0);
        vertex(0, 0 + sz * 1 / 3);
        vertex(0 - sz, 0);
        endShape();
        pop();

    }

    if (level > 1) {
        level -= 1;
        drawMe(sz - (sz/level) , res, level)
    }
}


function mousePressed() {
    siz = random(50, 350)
    seed = random(10000)



}
