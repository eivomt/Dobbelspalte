
let CenterX, CenterY
let allLines = []
let allCircles = []

let slitDistance, slitHeight, slitCenterY1, slitCenterY2
let barrierHeight
let maxRadius

// let speed
let frequency

let L

function setup() {
  frameRate = 34
  CenterX = windowWidth / 2
  CenterY = windowHeight /2
  slitDistance = 100
  slitHeight = 35
  barrierHeight = (windowHeight - (slitDistance + slitHeight))/2
  slitCenterY1 = barrierHeight + slitHeight/2
  slitCenterY2 = slitCenterY1 + slitDistance
  // speed = 10
  maxRadius = new createVector(windowWidth/2, slitCenterY2)

  frequency = 30
  L = 500

  background(225)
  stroke(125)
  strokeWeight(2)
  
  



  createCanvas(windowWidth, windowHeight);
  background(225)

  createGrid()
  drawMaxima(30)
}

function draw() {
  stroke(50)
  drawBarrier()
}

function drawBarrier() {
  // create barrier with slits
  strokeWeight(16)
  line(CenterX,0,CenterX, barrierHeight)
  line(CenterX,windowHeight,CenterX, barrierHeight + slitHeight + slitDistance)
  line(CenterX, barrierHeight + slitHeight,CenterX, windowHeight - (barrierHeight + slitHeight))
}

function drawMaxima(n) {
  for(let i=n*-1; i<n;i++) {
    line(CenterX, slitCenterY1,CenterX + L, (i*L*(frequency +2))/slitDistance)
    line(CenterX, slitCenterY2,CenterX + L, (i*L*(frequency +2))/slitDistance)
  }
}

// function mouseClicked() {
//   let newWave = new lineWave(mouseX,mouseY,mouseX,0)
//   allLines.push(newWave)
//   newWave.show()
// }

function createGrid() {
  for (let i = 0; i < maxRadius.mag(); i++) {
    let cWave = new circularWave(windowWidth/2, slitCenterY1, slitCenterY2, i*frequency*2)
    cWave.show()
  }

  // noStroke()
  // fill(225)
  // rect(0,0, CenterX, windowHeight)
  // noFill()
  // stroke(125)

  for (let i = 0; i < windowWidth/(frequency*2); i++) {
    let wave = new lineWave(i*frequency, 0, i*frequency, windowHeight)
    wave.show()
  }
}

function createCircularWave() {
  let newCircularWave = new circularWave(CenterX, slitCenterY1, slitCenterY2, 0)
  newCircularWave.show()
  allCircles.push(newCircularWave)
}

const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
