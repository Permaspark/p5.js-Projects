/***
This is an exercise demonstrating my initials, JGW, created with crude letters (such as rectangles, triangles, etc.) 
***/

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(100,200,90);
  
  /*
  start creating J in top left
  */
  
  noStroke()
  fill(0,0,0);
  rect(100,50,100,20)
  rect(140,70,20,120)
  
  arc(110, 190, 100, 80, 0, PI,PI+QUARTER_PI);
  
  /*
  fill an ellipse to create the curve in the J
  */
  
  noStroke()
  fill(100,200,90);
  ellipse(110,190,60,40);
  
/*
create an arc to build the foundation of G, with a circle to cut off the end
*/
  
  fill(0,0,0)
  arc(350,350,200,200,0,PI+HALF_PI,PIE) 
  circle(350,300,100);
  
  /*
  put a circle in the midle of the arc to fill in the space, with a rectangle to finish the G
  */
  
  fill(100,200,90)
  circle(350,345,135)
  
  
  fill(0,0,0)
   rect(380,350,95,20)
  
  /*
  use triangles to create a W shape, or rather 2 V's
  */
  
  triangle(470,550,518,680,575,550)
  triangle(520,550,585,680,635,550)
  
  /*
  filled in triangle on the left to thin the line
  */
  
  fill(100,200,90);
  triangle(490,550,518,640,550,550);
  
  /*
  right filled triangle
  */
  
  fill(100,200,90);
  triangle(550,550,583,640,615,550)
  
  /*
  ta da!
  */
}
