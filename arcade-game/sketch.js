// Things to add
// scrolling background (probably half the speed of the avatar)
// coin collection sfx
// sprites for enemies/avatar
// textured ground
// "win" criteria
// possible death song/sfx?
// Animation of text possibly
// Alternate title screen (more fleshed out)
// high score recorder
// "missle" like projectiles
// possible lives mechanic? extra lives?
// distance tracker
// difficulty setting / difficulty increases with time somehow
// better music (bitcrushed due to limitation on file size)





// Global variables
let ground;
let avatar;
let barriers;
let coins;
let isGameOver = false;
let hasGameBegun = false;
let score = 0;
let arcadeFont;
let minDistanceBetweenBarriers = 100;
let nextSpawnDistance;
let isInvincible = false;
let spacePressed = false;
let gameMusic;
let musicVolume = 0.3;
let backgroundImage;


// Preload all required assets
function preload() {
  arcadeFont = loadFont('arcadefont.ttf');
  gameMusic = loadSound('projectmusic.mp3');
  gameMusic.setVolume(musicVolume);
  backgroundImage = loadImage('background.jpg');
}





function setup() {
  createCanvas(600, 400);
  textFont(arcadeFont);
  ground = new Ground();

  resetGame();

  // stop game loop until space bar hit to begin
  noLoop();
}




// Creating score function
function drawScore() {
  fill(255);
  textAlign(LEFT);
  textSize(15);
  text('Score:' + score, 10, 20);

  if (isGameOver) {
    // Dark overlay
    fill(0, 0, 0, 100);
    rect(0, 0, width, height);

    // First line of game over text
    textAlign(CENTER);
    textSize(35);
    fill(255);
    text('OH NO!!!', width / 2, height / 3);

    // Second line of game over text
    textSize(12);
    text('YOU DIED! Press the SPACE BAR to play again!', width / 2, height / 2);
  } else if (hasGameBegun == false) {
    // Text that instructs the player that the game is over, and can be restarted

    // Dark overlay
    fill(0, 0, 0, 100);
    rect(0, 0, width, height);

    // Starting screen text
    textAlign(CENTER);
    textSize(25);
    fill(255);
    text('Stardust Speedway!', width / 2, height / 3);
    text('Press SPACE to play!', 300, height / 2);
  }
}




// Creating jumping ability
function keyPressed() {
  if (key == ' ') {
    spacePressed = true;
    if (avatar.isOnGround()) {
      avatar.jump();
    }
  }

  // Check for special states (game over / game hasn't begun)
  if (isGameOver == true && key == ' ') {
    resetGame();
  } else if (hasGameBegun == false && key == ' ') {
    hasGameBegun = true;
    loop();
  }
}





function keyReleased() {
  if (key == ' ') {
    spacePressed = false;
  }
}




// Drawing the background
function draw() {
  image(backgroundImage, 0, 0, width, height);

  // Barrier spawning mechanic
  if (barriers.length <= 0 || width - barriers[barriers.length - 1].x >= nextSpawnDistance) {
    barriers.push(new Barrier(width, ground.y));
    nextSpawnDistance = random(minDistanceBetweenBarriers, width * 1.2);
  }
  
  // Coin spawning mechanic
  if (random() < 0.01) {
    coins.push(new GameCoin(width, ground.y - random(10, 300)));
  }

  // Loop through all the barriers and update them
  for (let i = barriers.length - 1; i >= 0; i--) {
    barriers[i].update();
    barriers[i].draw();

    // Hitting barrier ends the game
    if (isInvincible != true && barriers[i].checkIfCollision(avatar)) {
      isGameOver = true;
      gameMusic.stop();
      noLoop(); // Game is over, stop game loop
    }

    // Remove barriers that have gone off the screen
    if (barriers[i].getRight() < 0) {
      barriers.splice(i, 1);
    }
  }

  // Loop through all the coins and update/draw them
  for (let i = coins.length - 1; i >= 0; i--) {
    // Check if the coin is collected by the avatar
    if (coins[i].checkIfCollected(avatar, barriers)) {
      coins.splice(i, 1);
      score += 10; // Increase score by 10 when a coin is collected
      i--; // Adjust the index to avoid skipping the next coin
    } else {
      // If the coin is not collected, update and draw it
      coins[i].update();
      coins[i].draw();
    }
  }

  avatar.update(ground.y);
  ground.draw();
  avatar.draw();
  drawScore();
}




// Restart the game if the player is dead; resets score to 0 and restarts music
function resetGame() {
  score = 0;
  isGameOver = false;

  avatar = new GameAvatar(ground.y);
  barriers = [new Barrier(width, ground.y)];
  coins = [];
  gameMusic.loop(); // Start playing the music
  loop();
}






class GameShape {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  overlaps(other) {
    return (
      this.x < other.x + other.width &&
      this.x + this.width > other.x &&
      this.y < other.y + other.height &&
      this.y + this.height > other.y
    );
  }
}


// Creating the avatar

class GameAvatar extends GameShape {
  constructor(yGround) {
    let avatarHeight = 20;
    super(64, yGround - avatarHeight, 10, 20);
    this.fillColor = color('white');
    this.gravity = 1;
    this.constantRiseVelocity = 5;
    this.yVelocity = 0;
    this.yGround = yGround;
    this.isRising = false;
  }

  
  // Creating a rising state (jumping)
  
  jump() {
    if (this.isOnGround()) {
      this.yVelocity = -this.constantRiseVelocity;
    } else {
      this.isRising = !this.isRising;
      if (this.isRising) {
        this.yVelocity = -this.constantRiseVelocity;
      }
    }
  }

  isOnGround() {
    return this.y >= this.yGround - this.height;
  }

  // Creating the "jetpack" mechanic, and ensuring ground collision.
  
  update() {
    this.yVelocity += this.gravity;
    this.yVelocity *= 0.9; // Air resistance

    // Continuous rise while the space bar is held down or re-initiate during a jump
    if (spacePressed) {
      this.jump();
    }

    this.y += this.yVelocity;

    if (this.y + this.height > this.yGround) {
      // Hitting the ground
      this.y = this.yGround - this.height;
      this.yVelocity = 0;
    }
  }

  draw() {
    push();
    noStroke();
    fill(this.fillColor);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}


// Creating physical ground for the avatar to "run" on

class Ground extends GameShape {
  constructor() {
    let yGround = height * 0.79;
    let groundHeight = ceil(height - yGround);
    super(0, yGround, width, groundHeight);
    this.fillColor = color('purple');
  }

  draw() {
    push();
    noStroke();
    fill(this.fillColor);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}


// Creating obstacles to end the game

class Barrier extends GameShape {
  constructor(x, yGround) {
    let barrierWidth = random(50, 100);
    let barrierHeight = random(50, 100);
    let y = yGround - barrierHeight;
    super(x, y, barrierWidth, barrierHeight);
    this.fillColor = color('red');
    this.speed = 6;
    this.hasScoredYet = false;
  }

  checkIfCollision(shape) {
    return this.overlaps(shape);
  }

  update() {
    this.x -= this.speed;
  }

  draw() {
    push();
    noStroke();
    fill(this.fillColor);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  getRight() {
    return this.x + this.width;
  }
}


// Creating collectible coins

class GameCoin extends GameShape {
  constructor(x, y) {
    super(x, y, 10, 10);
    this.fillColor = color(255, 255, 0);
    this.speed = 6;
  }

  checkIfCollected(avatar, barriers) {
    
    // Check if the coin overlaps with the avatar
    let coinOverlapsAvatar = this.overlaps(avatar);

    // Check if the coin overlaps with any barrier
    let coinOverlapsBarrier = barriers.some(barrier => this.overlaps(barrier));

    // Return true if the coin overlaps with the avatar and not with any barrier
    return coinOverlapsAvatar && !coinOverlapsBarrier;
  }

  update() {
    this.x -= this.speed;
  }

  draw() {
    push();
    noStroke();
    fill(this.fillColor);
    ellipse(this.x + this.width / 2, this.y + this.height / 2, this.width, this.height);
    pop();
  }

  getRight() {
    return this.x + this.width / 2;
  }
}