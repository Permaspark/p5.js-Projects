function setup() {
  createCanvas(600, 600);
}

function draw() {
  line(width / 2, 0, width / 2, height);
  
  
  if (mouseX < 300) {
    rect(300,0,300,600);
    fill(0);
    rect(0,0,300,600);
    fill(255);
    textSize(50)
    text('Left',100,300)
    
    
  } else if (mouseX > 300) {
    rect(0,0,300,600);
    fill(0);
    rect(300,0,300,600);
    fill(255);
    
    text('Right',400,300)

  }
}