
let animateButton;
let isAnimating = false;
let brightness = 0;

function setup() {
  createCanvas(400, 400);

  animateButton = createButton('Complete the Circuit'); 
  animateButton.position(10, height + 10); 
  animateButton.mousePressed(startAnimation);
}

function draw() {
  background(255);

  // Creating an empty rectangle to signify wires and an open space
  stroke(0);
  fill(255);
  rect(50, 110, 290, 160);

  // Inserting lines to denote where a battery is located
  fill(0);
  line(30, 180, 70, 180);
  line(40, 200, 60, 200);

  fill(255);
  noStroke();
  rect(45, 181, 10, 18);

  // Adding a switch
  stroke(0);
  fill(0, 0, 0);
  circle(340, 185, 25);

  stroke(0);
  fill(0);
  circle(200, 110, 15);


  // Adding positive and negative polarity on the battery
  line(25, 160, 25, 140);
  line(15, 150, 35, 150);

  line(15, 220, 35, 220);

  // Labelling all parts of the diagram
  fill(0);
  noStroke();
  textFont('Calibri');
  textSize(20);
  text('Battery', 80, 195);
  text('Switch', 200, 75);
  text('Light', 275, 180);
  text('Bulb', 275, 200);
  text('Wire', 175, 300);


}

function startAnimation() {
  

  if (isAnimating) {
    brightness += 5;
    if (brightness > 255) {
      brightness = 255;
    }
  }
  fill(255, brightness); 
  circle(340, 185, 25); 
  isAnimating = true;
  brightness = 0; 
  loop();
}
