// https://github.com/bmoren/p5.collide2D

var hit = false;
const poly = []; // stores the vertices for our polygon.

function setup() {
  createCanvas(400, 400);

  // Set x,y positions as vecs:
  poly[0] = createVector(50, 50);
  poly[1] = createVector(350, 40);
  poly[2] = createVector(350, 200);
  poly[3] = createVector(270, 220);
  poly[4] = createVector(300, 75);
  poly[5] = createVector(100, 100);
  poly[6] = createVector(150, 200);
  poly[7] = createVector(75, 200);
}

function draw() {
  background(220);

  // Draw the polygon by iterating over the 4 created vectors{x, y} stored in poly[]:
  beginShape();
  for (const { x, y } of poly) {
    vertex(x, y);
  }
  endShape(CLOSE);

  circle(mouseX, mouseY, 45);

  hit = collideCirclePoly(mouseX, mouseY, 45, poly);

  // Enable the hit detection if the circle is wholly inside the polygon:
  // hit = collideCirclePoly(mouseX, mouseY, 45, poly, true);

  // Use vectors as input:
  // const mouse = createVector(mouseX, mouseY);

  // hit = collideCirclePolyVector(mouse, 45, poly);
  // Or:
  // hit = collideCirclePolyVector(mouseX, mouseY, 45, poly, true);

  stroke(hit ? color("red") : 0);
  print("colliding?", hit);
}
