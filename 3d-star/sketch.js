let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);

  rotateX(angle);
  rotateY(angle * 0.5);

  drawStar(100, 30, 5);

  angle += 0.01;
}

function drawStar(radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = cos(a) * radius2;
    let sy = sin(a) * radius2;
    vertex(sx, sy);
    sx = cos(a + halfAngle) * radius1;
    sy = sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
