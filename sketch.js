
let Offset
let containerX1, containerWidth, containerY1, containerHeight
let circles = []
// let allLines = []
// let allCircles = []

// let sD, sW, sCy1, sCy2
// let bH


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(225)

  Offset = 200
  ContainerX1 = Offset
  ContainerY1 = Offset
  containerWidth = windowWidth-(Offset *2)
  containerHeight = windowHeight-(Offset *2)
  // stroke(255)
  // drawMaxima(4)
  // stroke(125)
  // createGrid()
  // stroke(50)
  // drawBarrier()
  // scale(-1,1)
  noStroke()
  rect(Offset,Offset, containerWidth, containerHeight)
}

function draw() {
  stroke(25)
  strokeWeight(2)
  noFill()
  drawMeasurement()
}

function drawMeasurement() {
  let diameter = 20
  let randomX = Math.random() * (windowWidth - 2*Offset) + Offset
  let randomY = Math.random() * (windowHeight -2*Offset) + Offset

  circle(randomX,randomY, diameter)
  // let circle = circle(randomX,randomY, diameter)
  // circles.push(circle)
}
  
  
