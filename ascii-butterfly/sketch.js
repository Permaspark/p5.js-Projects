// This sketch is extremely laggy (at least on my computer) so it may take a while to show up, and it may be difficult to close the page.

const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let asciiload;

function preload() {
  asciiload = loadImage("butterfly.jpg");
}

function setup() {
  createCanvas(800, 800); 
}

function draw() {
  background(0);
  
  let w = width / asciiload.width;
  let h = height / asciiload.height;
  asciiload.loadPixels();
  for (let i = 0; i < asciiload.width; i++) {
    for (let j = 0; j < asciiload.height; j++) {
      const pixelIndex = (i + j * asciiload.width) * 4;
      const r = asciiload.pixels[pixelIndex + 0];
      const g = asciiload.pixels[pixelIndex + 1];
      const b = asciiload.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(255);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      
      
      
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
      
      
    }
  }
  
  
}