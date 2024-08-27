
let CenterX, CenterY
let allLines = []
let allCircles = []

let sD, sW, sCy1, sCy2
let bH

let speed

function setup() {
  frameRate = 34
  CenterX = windowWidth / 2
  CenterY = windowHeight /2
  sD = 100
  sW = 35
  bH = (windowHeight - (sD + sW))/2
  sCy1 = bH + sW/2
  sCy2 = sCy1 + sD
  speed = 10
  createCanvas(windowWidth, windowHeight);
  background(225)
}

function draw() {
  // set backgroundcolor
  background(225)
  stroke(125)
  strokeWeight(8)
  
  
  
  // iterate through allWaves and perform actions
  
  for (wave in allCircles) {
    thisWave = allCircles[wave]
    thisWave.checkAlive(wave)
    thisWave.move()
    thisWave.show()
    noStroke()
    fill(225)
    rect(0,0, CenterX, windowHeight)
    noFill()
    stroke(125)
  } 

 if (frameCount%17 == 0) {
  let newWave = new lineWave(0,CenterY + CenterY/2,0,0)
  allLines.push(newWave)
 }

  for(wave in allLines) {
    thisWave = allLines[wave]
    
    thisWave.checkAlive(wave)
    thisWave.move()
    thisWave.show()
  }

  stroke(50)
  drawBarrier()
}

function drawBarrier() {
  // create barrier with slits
  strokeWeight(16)
  line(CenterX,0,CenterX, bH)
  line(CenterX,windowHeight,CenterX, bH + sW + sD)
  line(CenterX, bH + sW,CenterX, windowHeight - (bH + sW))
  
}

function mouseClicked() {
  let newWave = new lineWave(mouseX,mouseY,mouseX,0)
  allLines.push(newWave)
  newWave.show()
}

function createCircularWave() {
  let newCircularWave = new circularWave(CenterX, sCy1, sCy2, 0)
  newCircularWave.show()
  allCircles.push(newCircularWave)
}

const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
