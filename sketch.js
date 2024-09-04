
let CenterX, CenterY
// let allLines = []
// let allCircles = []

// let sD, sW, sCy1, sCy2
// let bH


function setup() {
  frameRate = 34
  CenterX = windowWidth / 2
  CenterY = windowHeight /2
  
  createCanvas(windowWidth, windowHeight);
  background(225)
<<<<<<< Updated upstream
  fill(0)
=======

  stroke(255)
  drawMaxima(4)
  stroke(125)
  createGrid()
  stroke(50)
  drawBarrier()
  scale(-1,1)
>>>>>>> Stashed changes
}

function draw() {
  stroke(125)
  strokeWeight(8)
}
  
  
