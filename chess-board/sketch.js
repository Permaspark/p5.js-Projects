let pawn;

function setup() {
  createCanvas(400, 400);
  pawn = new ChessPiece(2, 6, 'white');
}

function draw() {
  background(255);

  drawBoard();

  pawn.display();
}

function drawBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      fill((i + j) % 2 === 0 ? 0 : 255);
      rect(i * 50, j * 50, 50, 50);
    }
  }
}

function mousePressed() {
  pawn.clicked(mouseX, mouseY);
}

function mouseDragged() {
  pawn.drag(mouseX, mouseY);
}

function mouseReleased() {
  pawn.release();
}

function ChessPiece(x, y, color) {
  this.position = createVector(x, y);
  this.color = color;
  this.active = true;
  this.size = 40;
  this.validMoves = [];

  this.isValidMove = function(newX, newY) {
    let dx = abs(newX - this.position.x);
    let dy = newY - this.position.y;

    if (this.color === 'white' && dy === -1 && (dx === 0 || (dx === 1 && board[newX][newY] !== null))) {
      return true;
    } else if (this.color === 'black' && dy === 1 && (dx === 0 || (dx === 1 && board[newX][newY] !== null))) {
      return true;
    }

    return false;
  };

  this.move = function(newX, newY) {
    if (this.isValidMove(newX, newY)) {
      this.position.set(newX, newY);
    }
  };

  this.display = function() {
    if (this.active) {
      fill(this.color);
      ellipse(this.position.x * 50 + 25, this.position.y * 50 + 25, this.size, this.size);
    }

    fill(0, 255, 0, 150);
    for (let move of this.validMoves) {
      ellipse(move.x * 50 + 25, move.y * 50 + 25, this.size, this.size);
    }
  };

  this.clicked = function(mx, my) {
    let d = dist(mx, my, this.position.x * 50 + 25, this.position.y * 50 + 25);
    if (d < this.size / 2) {
      this.calculateValidMoves();
      this.dragging = true;
    }
  };

  this.drag = function(mx, my) {
    if (this.dragging) {
      this.position.x = floor(mx / 50);
      this.position.y = floor(my / 50);
    }
  };

  this.release = function() {
    this.dragging = false;
  };

  this.calculateValidMoves = function() {
    this.validMoves = [];

    if (this.color === 'white') {
      this.validMoves.push(createVector(this.position.x, this.position.y - 1));
    } else {
      this.validMoves.push(createVector(this.position.x, this.position.y + 1));
    }
  };
}
