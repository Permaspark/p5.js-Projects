let hexagons = [];
let hexSize = 40; 
let cols, rows;   

function setup() {
  createCanvas(800, 600);
  cols = floor(width / (hexSize * 1.3));
  rows = floor(height / (hexSize * 1.5));

  let dx = hexSize * 1.5;
  let dy = hexSize * sqrt(3);


  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      let x = col * dx;
      let y = row * dy;

      if (col % 2 === 1) {
        y += dy / 2;
      }

      let hex = {
        x: x,
        y: y,
        color: color(random(255), random(255), random(255)),
        speed: 1
      };

      hexagons.push(hex);
    }
  }
}

function draw() {
  background(220);

  for (let hex of hexagons) {

    drawHexagon(hex.x, hex.y, hexSize, hex.color);


    hex.x += hex.speed;

    if (hex.x > width + hexSize) {
      hex.x = -hexSize;
    }
  }
}

function drawHexagon(x, y, size, fillColor) {
  push();
  translate(x, y);
  fill(fillColor);
  stroke(0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let xOffset = size * cos(angle);
    let yOffset = size * sin(angle);
    vertex(xOffset, yOffset);
  }
  endShape(CLOSE);
  pop();
}
