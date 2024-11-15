let starX = [];
let starY = [];
let starAlpha = [];
let color1;
let color2;
let x = 400;
let y = -100;


function setup() {
  createCanvas(1600, 900);
  setupStars();
  frameRate(60);

}

function setupStars() {
  for (let i=0;i<300;i++) {
    const x = Math.floor(Math.random() * 1600);
    const y = Math.floor(Math.random() * 700);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
  }
}

function drawCharacter(x,y) {
  // Cloud 
  noStroke();
  fill(0);
  ellipse(x+40,y-30,100,100);
  ellipse(x-10,y-45,100,100);
  ellipse(x-60,y-30,110,100);
  ellipse(x-90,y,120,120);
  ellipse(x-70,y+20,110,120);
  ellipse(x-5,y+30,120,100);
  ellipse(x+60,y+20,120,100);
  ellipse(x+55,y-10,120,100);
  
  //  Body 
  noStroke(0);
  fill(0);
  ellipse(x-15,y-80,90,80);   
  ellipse(x-20,y-110,80,80);
  rect(x-60,y-110,5,40);
  ellipse(x+4,y-120,40,40);
  ellipse(x+12,y-75,50,120);
  ellipse(x+15,y-65,50,120);

  // Neck
  fill(0,0,0);
  ellipse(x-15,y-150,40,55);
 
  // Head 
  noStroke();
  fill(0);
  ellipse(x-15,y-190,80,80);
  ellipse(x+2,y-175,60,50);
  ellipse(x-28,y-208,50,55);

  // Hair 
  fill(0);
  beginShape();
  vertex(x-30,y-220);
  bezierVertex(x-30,y-220,x-35,y-280,x+10,y-300);
  bezierVertex(x-10,y-220,x,y-220,x,y-220);
  endShape();

  beginShape();
  vertex(x-10,y-240);
  bezierVertex(x-10,y-240,x+20,y-270,x+50,y-260);
  bezierVertex(x+50,y-260,x+20,y-240,x+20,y-190);
  endShape();

  beginShape();
  vertex(x+20,y-220);
  bezierVertex(x+20,y-220,x+40,y-240,x+60,y-220);
  bezierVertex(x+50,y-220,x+30,y-210,x+20,y-190);
  endShape();

  beginShape();
  vertex(x+20,y-220);
  bezierVertex(x+20,y-210,x+30,y-215,x+50,y-205);
  bezierVertex(x+40,y-200,x+20,y-190,x+20,y-170);
  endShape();

  beginShape();
  vertex(x-50,y-210);
  bezierVertex(x-50,y-210,x-85,y-210,x-100,y-190);
  bezierVertex(x-50,y-200,x-55,y-180,x-55,y-190);
  endShape();

  beginShape();
  vertex(x-50,y-200);
  bezierVertex(x-50,y-200,x-80,y-180,x-100,y-165);
  bezierVertex(x-40,y-165,x-40,y-160,x-40,y-160);
  endShape();

  beginShape();
  vertex(x-35,y-180);
  bezierVertex(x-35,y-180,x-70,y-165,x-85,y-150);
  bezierVertex(x-30,y-160,x-40,y-160,x-40,y-160);
  endShape();

  // Tail 
  noFill();
  stroke(0);
  strokeWeight(7);
  bezier(x-140,y-180,x-140,y-90,x-70,y-90,x-50,y-60);

  // Weapon
  stroke(0);
  strokeWeight(5);
  line(x,y,x-80,y-220);
 
}

function drawBackground() {
  color1 = color(20,30,85);
  color2 = color(140,170,190);
  
  for(let y=0; y<700; y++) {
    c = map(y,0,700,0,1);
    let newcolor = lerpColor(color1,color2,c);
    stroke(newcolor);
    line(0,y,1600,y);  
  }

  color1 = color(10,10,45);
  color2 = color(75,95,165);
  
  for(let y=700; y<900; y++) {
    c = map(y,700,900,0,1);
    let newcolor = lerpColor(color1,color2,c);
    stroke(newcolor);
    line(0,y,1600,y);
  }

  drawStars();
}

function drawStars() {
  for (let index in starX) {
    fill(255, 255, 255, Math.sin(starAlpha[index]) * 255);
    noStroke();
    ellipse(starX[index], starY[index], 4);
    starAlpha[index] = starAlpha[index] + 0.05; 
  }
}

function draw() {  
  
  drawBackground();
  drawCharacter(x,y);

  // Movement stop at this position
  if ( y <= 700) {
      y = y + 5;
  } 

  // Character movement with arrow keys
  if (keyCode === 38) {
      y = y - 10;
  } else if (keyCode === 40) {
      y = y + 0;
  }

  if (keyCode === 37) {
      x = x - 5;
  } else if (keyCode === 39) {
      x = x + 5;
  }   
}

// Spacebar key to reset character position
function keyPressed()  {
  if (keyCode === 32) {
      y = -100;
      x = 400;
  }
}

