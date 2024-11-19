//  The following 31 to 41 and 156 to 163 lines of code was copy form Garrit
//  The following 139 to 153 and 179 to 223 lines of code was inspired from p5js.org

let starX = [];
let starY = [];
let starAlpha = [];
let color1;
let color2;
let x = 450;
let y = 150;
let seaWave1 = 0;
let seaWave2 = 0;
let seaWave3 = 0;
let verticalVelocity = 0;  
let horizontalVelocity = 0;
let gameOver = false; 
let win = false; 
let realWin = false;
let gameState = "start"; 
let realWinTimer = 0;

// Setup
function setup() {
  createCanvas(900, 900);
  setupStars();
  frameRate(60);

}

// Setup starsbackground
function setupStars() {
  for (let i = 0; i < 300 ; i++ ) {
    const x = Math.floor(Math.random() * 1600);
    const y = Math.floor(Math.random() * 700);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
  }
}

// Draw character
function drawCharacter(x, y) {
  // Scaling factor
  let scale = 0.6;

  // Cloud 
  noStroke();
  fill(0);
  ellipse(x + 40 * scale, y - 30 * scale, 100 * scale, 100 * scale);
  ellipse(x - 10 * scale, y - 45 * scale, 100 * scale, 100 * scale);
  ellipse(x - 60 * scale, y - 30 * scale, 110 * scale, 100 * scale);
  ellipse(x - 90 * scale, y, 120 * scale, 120 * scale);
  ellipse(x - 70 * scale, y + 20 * scale, 110 * scale, 120 * scale);
  ellipse(x - 5 * scale, y + 30 * scale, 120 * scale, 100 * scale);
  ellipse(x + 60 * scale, y + 20 * scale, 120 * scale, 100 * scale);
  ellipse(x + 55 * scale, y - 10 * scale, 120 * scale, 100 * scale);

  // Body 
  noStroke(0);
  fill(0);
  ellipse(x - 15 * scale, y - 80 * scale, 90 * scale, 80 * scale);   
  ellipse(x - 20 * scale, y - 110 * scale, 80 * scale, 80 * scale);
  rect(x - 60 * scale, y - 110 * scale, 5 * scale, 40 * scale);
  ellipse(x + 4 * scale, y - 120 * scale, 40 * scale, 40 * scale);
  ellipse(x + 12 * scale, y - 75 * scale, 50 * scale, 120 * scale);
  ellipse(x + 15 * scale, y - 65 * scale, 50 * scale, 120 * scale);

  // Neck
  fill(0, 0, 0);
  ellipse(x - 15 * scale, y - 150 * scale, 40 * scale, 55 * scale);

  // Head 
  noStroke();
  fill(0);
  ellipse(x - 15 * scale, y - 190 * scale, 80 * scale, 80 * scale);
  ellipse(x + 2 * scale, y - 175 * scale, 60 * scale, 50 * scale);
  ellipse(x - 28 * scale, y - 208 * scale, 50 * scale, 55 * scale);

  // Hair 
  fill(0);
  beginShape();
  vertex(x - 30 * scale, y - 220 * scale);
  bezierVertex(x - 30 * scale, y - 220 * scale, x - 35 * scale, y - 280 * scale, x + 10 * scale, y - 300 * scale);
  bezierVertex(x - 10 * scale, y - 220 * scale, x, y - 220 * scale, x, y - 220 * scale);
  endShape();

  beginShape();
  vertex(x - 10 * scale, y - 240 * scale);
  bezierVertex(x - 10 * scale, y - 240 * scale, x + 20 * scale, y - 270 * scale, x + 50 * scale, y - 260 * scale);
  bezierVertex(x + 50 * scale, y - 260 * scale, x + 20 * scale, y - 240 * scale, x + 20 * scale, y - 190 * scale);
  endShape();

  beginShape();
  vertex(x + 20 * scale, y - 220 * scale);
  bezierVertex(x + 20 * scale, y - 220 * scale, x + 40 * scale, y - 240 * scale, x + 60 * scale, y - 220 * scale);
  bezierVertex(x + 50 * scale, y - 220 * scale, x + 30 * scale, y - 210 * scale, x + 20 * scale, y - 190 * scale);
  endShape();

  beginShape();
  vertex(x + 20 * scale, y - 220 * scale);
  bezierVertex(x + 20 * scale, y - 210 * scale, x + 30 * scale, y - 215 * scale, x + 50 * scale, y - 205 * scale);
  bezierVertex(x + 40 * scale, y - 200 * scale, x + 20 * scale, y - 190 * scale, x + 20 * scale, y - 170 * scale);
  endShape();

  beginShape();
  vertex(x - 50 * scale, y - 210 * scale);
  bezierVertex(x - 50 * scale, y - 210 * scale, x - 85 * scale, y - 210 * scale, x - 100 * scale, y - 190 * scale);
  bezierVertex(x - 50 * scale, y - 200 * scale, x - 55 * scale, y - 180 * scale, x - 55 * scale, y - 190 * scale);
  endShape();

  beginShape();
  vertex(x - 50 * scale, y - 200 * scale);
  bezierVertex(x - 50 * scale, y - 200 * scale, x - 80 * scale, y - 180 * scale, x - 100 * scale, y - 165 * scale);
  bezierVertex(x - 40 * scale, y - 165 * scale, x - 40 * scale, y - 160 * scale, x - 40 * scale, y - 160 * scale);
  endShape();

  beginShape();
  vertex(x - 35 * scale, y - 180 * scale);
  bezierVertex(x - 35 * scale, y - 180 * scale, x - 70 * scale, y - 165 * scale, x - 85 * scale, y - 150 * scale);
  bezierVertex(x - 30 * scale, y - 160 * scale, x - 40 * scale, y - 160 * scale, x - 40 * scale, y - 160 * scale);
  endShape();

  // Tail 
  noFill();
  stroke(0);
  strokeWeight(7);
  bezier(x - 140 * scale, y - 180 * scale, x - 140 * scale, y - 90 * scale, x - 70 * scale, y - 90 * scale, x - 50 * scale, y - 60 * scale);

  // Weapon
  stroke(0);
  strokeWeight(5);
  line(x, y, x - 80 * scale, y - 220 * scale);

}

// gradiant backgorund
function drawBackground() {
  color1 = color(20, 30, 85);
  color2 = color(140, 170, 190);
  
  for(let y = 0; y < 750 ; y++ ) {
    c = map(y, 0, 700, 0, 1);
    let newcolor = lerpColor(color1, color2, c);
    stroke(newcolor);
    line(0, y, 900, y);  
  }

  drawStars();
  drawMoon(450, height / 4, 250); 
  drawSea();
}

// Blink stars
function drawStars() {
  for (let index in starX) {
    noStroke();
    fill(255, 255, 255, Math.sin(starAlpha[index]) * 255);
    ellipse(starX[index], starY[index], 4);
    starAlpha[index] = starAlpha[index] + 0.05; 
  }
}

// Draw moon 
function drawMoon(x, y, size) {
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(255, 255, 200);

  noStroke();
  fill(255, 255, 200);
  ellipse(x,y,size,size);

  drawingContext.shadowBlur = 0;
  
}

// Draw sea wave
function drawSea() {
  // seawave 1
  noStroke();
  fill(45, 75, 145); 
  beginShape();
  for (let i = 0; i <= 1600; i += 10) {
    let waveHeight = sin((i + seaWave1) * 0.03) * 10;
    vertex(i, 710 + waveHeight); 
  }
  vertex(900, height);
  vertex(0, height);
  endShape(CLOSE);

  // seawave 2
  noStroke();
  fill(30, 50, 135); 
  beginShape();
  for (let i = 0; i <= 900; i += 10) {
    let waveHeight = sin((i + seaWave2) * 0.02) * 15;
    vertex(i, 730 + waveHeight); 
  }
  vertex(900, height);
  vertex(0, height);
  endShape(CLOSE);

  // seawave 3
  noStroke();
  fill(10, 10, 115); 
  beginShape();
  for (let i = 0; i <= 900; i += 10) {
    let waveHeight = sin((i + seaWave3) * 0.01) * 20;
    vertex(i, 750 + waveHeight); 
  }
  vertex(900, height);
  vertex(0, height);
  endShape(CLOSE);

  fill(10, 10, 115); 
  rect(0, 850, 900, height); 

  // seawave speed
  seaWave1 += 1; 
  seaWave2 += 2; 
  seaWave3 += 3; 
}

// Main draw loop
function draw() {
  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "play") {
    playGame();
  } else if (gameState === "reset") {
    drawResetScreen();
  }
}

// Game logic
function playGame() {  

  if (gameOver && !realWin) {
    gameState = "reset";
    return;
  }

  drawBackground();
  drawCharacter(x, y);

  // When have a safe ladning that show a text 
  if (realWin) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);  
    text("Oops i don't need to swim :<", width / 2, height / 2);

    // Move player out of screen after landing safe
    x += 3; 
    if (x > width + 900) { 
      noLoop();
    }
    
    // Auto-reset after a delay
    realWinTimer++;
    if (realWinTimer > 300) {
      gameState = "reset";
      realWinTimer = 0; 
    }
    return; 
  }

  // Movement and Gravity 
  verticalVelocity += 0.075; 
  if (keyIsDown(38)) {  
    verticalVelocity -= 0.2;  
  } 
  if (keyIsDown(40)) {  
    verticalVelocity += 0.2;  
  }
  if (keyIsDown(37)) {  
    horizontalVelocity -= 0.2; 
  } 
  if (keyIsDown(39)) {  
    horizontalVelocity += 0.2;  
  }

  y += verticalVelocity;
  x += horizontalVelocity;
  
  // The range for win / lose landing 
  if (y > 750) {
    y = 750;
    horizontalVelocity = 0; 

    if (verticalVelocity > 2) {  
      gameOver = true;
      win = false; 
    } else if (verticalVelocity <= 2 && verticalVelocity >= -2) { 
      realWin = true;
      gameOver = false;
      win = true;
    }

    verticalVelocity = 0; 
  }
}

// Draw a start screen 
function drawStartScreen() {
  background(45, 75, 145);
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("You shouldn't fall too quickly :V", width / 2, height / 2 - 50);
  textSize(32);
  text("Press ENTER to Start", width / 2, height / 2 + 50);
}

// Draw a reset screen
function drawResetScreen() {
  background(30, 50, 135);
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  if (win) {
    text("You're safe!", width / 2, height / 2 - 50);
  } else {
    text("Why do you want to swim?", width / 2, height / 2 - 50);
  }
  textSize(32);
  text("Press R to Restart", width / 2, height / 2 + 50);
}

// Key function
function keyPressed() {
  if (gameState === "start" && keyCode === ENTER) {
    gameState = "play"; // Start the game
    resetGame();
  } else if (gameState === "reset" && key === "r") {
    gameState = "start"; // Reset the game
    resetGame();
  }
}

// Reset the state of the game 
function resetGame() {
  x = 450;
  y = 150;
  verticalVelocity = 0;
  horizontalVelocity = 0;
  gameOver = false;
  win = false;
  realWin = false;
  realWinTimer = 0;
  loop();
}
