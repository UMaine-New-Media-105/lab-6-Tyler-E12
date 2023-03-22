let pacX, pacY;
let cherryX, cherryY;
let notEaten;
numberOfTimesEaten = 0;

function setup() {
  createCanvas(400, 400);
  pacX = 70;
  pacY = -20;
  cherryX = random(0, 350);
  cherryY = random(0, 350);
  notEaten = true;
}

function draw() {
  background("black");
  drawPac(pacX, pacY);

  d = dist(pacX, pacY, cherryX, cherryY);
  if (d < 40) {
    notEaten = false;
  } else {
    notEaten = true;
  }
  console.log("The distance is " + d);

  if (numberOfTimesEaten < 5 && notEaten) {
    drawCherry(cherryX, cherryY);
  }
}
function drawPac(x, y, size) {
  if (notEaten == true) {
    push();
    translate(x, y);
    rotate(1);
    scale(size);
    fill("yellow");
    arc(50, 50, 80, 80, 0, PI + HALF_PI, PIE);
    pop();
  } else {
    push();
    translate(x, y);
    rotate(1);
    scale(size);
    fill("red");
    arc(50, 50, 80, 80, 0, PI + HALF_PI, PIE);
    pop();
  }
}
function drawCherry(x, y, size) {
  translate(x, y);
  scale(size);

  if (notEaten == true) {
    fill("red");
    ellipse(30, 60, 30);
    ellipse(50, 65, 30);
    push();
    stroke("brown");
    strokeWeight(2);
    beginShape(line);
    vertex(30, 52);
    vertex(65, 25);
    endShape(line);
    beginShape(line);
    vertex(65, 25);
    vertex(50, 63);
    endShape(line);
    pop();
  } else {
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    pacY -= 5;
  }
  if (keyCode == DOWN_ARROW) {
    pacY += 5;
  }
  if (keyCode == LEFT_ARROW) {
    pacX -= 5;
  }
  if (keyCode == RIGHT_ARROW) {
    pacX += 5;
  }
}
