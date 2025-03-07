let inputText;
let totalWords = 0;
let averageLength = 0;

function setup() {
  createCanvas(400, 200);
  inputText = createInput('Enter text here', 'text');
  inputText.input(calculateAverageWordLength);
  noLoop();
}

function calculateAverageWordLength() {
  background(240);
  let textInput = inputText.value();
  let words = textInput.split(/\s+/);
  totalWords = words.length;
  let totalLength = 0;

  for (let word of words) {
    totalLength += word.length;
  }

  if (totalWords > 0) {
    averageLength = totalLength / totalWords;
  } else {
    averageLength = 0;
  }

  textSize(20);
  textAlign(CENTER, CENTER);
  text(`Total Words: ${totalWords}`, width / 2, height / 2 - 20);
  text(`Average Length: ${averageLength.toFixed(2)}`, width / 2, height / 2 + 20);
}
