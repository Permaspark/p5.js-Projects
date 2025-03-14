/********************
This is a static diagram of a simple circuit, demonstrating how a voltage source (i.e a battery, generator, etc) transfers power to a load (such as a light bulb or a motor) through the usage of wires as well as a switch. 

Source image: https://mammothmemory.net/images/user/base/Physics/How%20to%20remember%20+%20or%20-/simple-electrical-circuits-picture-5.0c0c8ba.jpg


Press the button underneath the diagram to see the circuit be complete on in real time.
********************/
let animateButton;
let isAnimating = false;
let brightness = 0;
let x1, y1, x2, y2;
let angle = -1;
let speed = 0.05;


function setup() {
  createCanvas(400, 400);
  
  x1 = 200;
  y1 = 110;
  x2 = x1;
  y2 = y1;

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
  text('Switch', 140, 75);
  text('Light', 275, 180);
  text('Bulb', 275, 200);
  text('Wire', 175, 300);
  // Animating the line of the switch
fill(255);
  rect(208,108,73,3)
  stroke(0)
  
    x2 = x1 + cos(angle) * 80.5;
  y2 = y1 + sin(angle) * 80;

  line(x1, y1, x2, y2);

  if (isAnimating && angle < 0) {
    angle += speed;

  }
  
  
  // Creating animation for light bulb
  if (isAnimating) {
    brightness += 2;
    if (brightness > 255) {
      brightness = 255;
    }
  }

  fill(255, brightness); 
  circle(340, 185, 25); 
}

function startAnimation() {
  isAnimating = true;
  brightness = 0; 
  loop();
}