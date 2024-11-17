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


function setup() {
  createCanvas(900, 900);
  setupStars();
  frameRate(60);

}

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

function drawStars() {
  for (let index in starX) {
    noStroke();
    fill(255, 255, 255, Math.sin(starAlpha[index]) * 255);
    ellipse(starX[index], starY[index], 4);
    starAlpha[index] = starAlpha[index] + 0.05; 
  }
}

function drawMoon(x, y, size) {
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(255, 255, 200);

  noStroke();
  fill(255, 255, 200);
  ellipse(x,y,size,size);

  drawingContext.shadowBlur = 0;
  
}

function drawSea() {

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

  seaWave1 += 1; 
  seaWave2 += 2; 
  seaWave3 += 3; 
}


function draw() {  

  if (gameOver && !realWin) {
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255);
    if (win) {
      text("", width / 2, height / 2);
    } else {
      text("You Lose!", width / 2, height / 2);
    }
    return; 
  }

  drawBackground();
  drawCharacter(x, y);

  if (realWin) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text("I can go home now", width / 2, height / 2);

    x += 2; 
    if (x > width + 100) { 
      noLoop();
    }
    return; 
  }


  verticalVelocity += 0.05; 
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
