let angleX = 0.01;
let angleY = 0.02;

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(0);
  

  translate(-150, -150);

  let spacing = 150; 

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let rotationX = angleX + i * 0.5;
      let rotationY = angleY + j * 0.5;


      let x = i * spacing;
      let y = j * spacing;

      push();
      translate(x, y);
      rotateX(rotationX);
      rotateY(rotationY);

      ambientMaterial(0, 100, 0);
      specularMaterial(0, 100, 0);

      box(100);

      noFill();
      stroke(0, 255, 0);
      box(100);

      pop();
    }
  }
  angleX += 0.01;
  angleY += 0.02;
}
