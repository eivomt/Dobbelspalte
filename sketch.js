
let CenterX, CenterY
let allLines = []
let allCircles = []

let slitDistance, slitHeight, slitCenterY1, slitCenterY2
let barrierHeight
let maxRadius

// let speed
let waveLength

let L

let lambdaSlider = document.getElementById('lambda')
let lOutput = document.getElementById('lambdaText')
// lOutput.innerHTML = lambdaSlider.value

let lambdaRadio1 = document.getElementById('lambda1')
let lambdaRadio2 = document.getElementById('lambda2')
let lambdaRadio3 = document.getElementById('lambda3')

let figImg = document.getElementById('figImg')

let figOnClick = (ev) => {
  ev.preventDefault()
  let currentActive = document.querySelectorAll('.fig.active')
  currentActive[0].classList.remove('active')
  ev.target.classList.add('active')
  setImgSrc()
  // figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/1/fig" + ev.target.dataset.value +"/fig.png" 
}

let lambdaOnClick = (ev) => {
  ev.preventDefault()
  let currentActive = document.querySelectorAll('.lambda.active')
  currentActive[0].classList.remove('active')
  ev.target.classList.add('active')
  waveLength = ev.target.dataset.value
  setImgSrc()
  doTheThing()
}

let dOnClick = (ev) => {
  ev.preventDefault()
  let currentActive = document.querySelectorAll('.d.active')
  currentActive[0].classList.remove('active')
  ev.target.classList.add('active')
  // waveLength = ev.target.dataset.value
  updateVariables(ev.target.dataset.value)
  setImgSrc()
  doTheThing()
}


let updateVariables = (d) => {
  console.log('slitDistance: ' + slitDistance)
  console.log('barrierHeight: ' + barrierHeight)
  console.log('slitCenterY1: ' + slitCenterY1)
  console.log('slitCenterY2: ' + slitCenterY2)
  console.log('slitHeight: ' + slitHeight)
  console.log('windowHeight: ' + windowHeight)
  console.log('----------------------------------------')
  
  slitDistance = parseInt(d)
  console.log(barrierHeight)

  barrierHeight = slitDistance + slitHeight
  console.log(barrierHeight)

  barrierHeight = barrierHeight / 2
  console.log(barrierHeight)

  barrierHeight = windowHeight / 2 - barrierHeight
  console.log(barrierHeight)
  // barrierHeight = Math.floor(windowHeight - (slitDistance + slitHeight)/2)
  slitCenterY1 = barrierHeight + slitHeight/2
  slitCenterY2 = slitCenterY1 + slitDistance

  console.log('----------------------------------------')

  console.log('Y center = ' + CenterY)

  console.log('----------------------------------------')

  console.log('slitDistance: ' + slitDistance)
  console.log('barrierHeight: ' + barrierHeight)
  console.log('slitCenterY1: ' + slitCenterY1)
  console.log('slitCenterY2: ' + slitCenterY2)
  console.log('slitHeight: ' + slitHeight)
  console.log('windowHeight: ' + windowHeight)
}

let setImgSrc = () => {
  // let activeList = document.querySelectorAll('.active:not(.fig)')
  let activeList = document.querySelectorAll('.active')
  let lambdaValue = activeList[0]
  let dValue = activeList[1]
  let figValue = activeList[2]
  console.log(lambdaValue.dataset.num + dValue.dataset.num)

  let switchExpression = lambdaValue.dataset.num + dValue.dataset.num

  switch (switchExpression) {
    case '11':
      figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 1 + "/fig" + figValue.dataset.value + "/fig.png"
      break 
    case '12':
      figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 2 + "/fig" + figValue.dataset.value + "/fig.png"
      break 
    case '13':
      figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 3 + "/fig" + figValue.dataset.value + "/fig.png"
      break 
    case '21':
      figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 4 + "/fig" + figValue.dataset.value + "/fig.png"
      break 
    case '22':
      figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 5 + "/fig" + figValue.dataset.value + "/fig.png"
      break 
    case '23':
      figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 6 + "/fig" + figValue.dataset.value + "/fig.png"
      break 
    case '31':
      figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 7 + "/fig" + figValue.dataset.value + "/fig.png"
      break 
    case '32':
      figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 8 + "/fig" + figValue.dataset.value + "/fig.png"
      break 
    case '33':
      figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 9 + "/fig" + figValue.dataset.value + "/fig.png"
      break
    default:
      console.log('Sorry, we are out of expression')
  }
}

lambdaRadio1.addEventListener("click", lambdaOnClick)
lambdaRadio2.addEventListener("click", lambdaOnClick)
lambdaRadio3.addEventListener("click", lambdaOnClick)

let figRadioList = document.querySelectorAll('.fig')

for (let i = 0; i<figRadioList.length; i++) {
  figRadioList[i].addEventListener("click", figOnClick)
} 

let dRadioList = document.querySelectorAll('.d')

for (let i = 0; i<dRadioList.length; i++) {
  dRadioList[i].addEventListener("click", dOnClick)
} 



function setup() {
  frameRate = 34
  sketchWidth = (windowWidth/100)*63
  CenterX = (sketchWidth / 63) * 20
  CenterY = windowHeight /2
  slitDistance = 200
  slitHeight = 35
  barrierHeight = (windowHeight - (slitDistance + slitHeight))/2
  slitCenterY1 = barrierHeight + slitHeight/2
  slitCenterY2 = slitCenterY1 + slitDistance
  // speed = 10
  maxRadius = new createVector(43 * sketchWidth/63, CenterY)

  waveLength = 50
  L = 500

  stroke(125)
  strokeWeight(2)

  createCanvas(sketchWidth, windowHeight);
  background(25)

  Offset = 200
  ContainerX1 = Offset
  ContainerY1 = Offset
  containerWidth = windowWidth-(Offset *2)
  containerHeight = windowHeight-(Offset *2)
  // stroke(255)
  // drawMaxima(4)
  stroke(125)
  createGrid()
  stroke(50)
  drawBarrier()
}

function draw() {
}


function doTheThing() {
  background(25)
  createGrid()
  drawBarrier()
}

function drawBarrier() {
  // create barrier with slits
  strokeWeight(16)
  stroke(25)
  line(CenterX,0,CenterX,windowHeight)
  stroke(225)
  line(CenterX,0,CenterX, barrierHeight)
  line(CenterX,windowHeight,CenterX, barrierHeight + slitHeight + slitDistance)
  line(CenterX, barrierHeight + slitHeight,CenterX, windowHeight - (barrierHeight + slitHeight))

  strokeWeight(32)
  stroke(225)
  line(sketchWidth,0,sketchWidth,windowHeight)
}

function drawMaxima(n) {
  for(let i=0; i<=n;i++) {
    line(CenterX, slitCenterY1,CenterX + L, (i*L*(waveLength +2))/slitDistance)
    line(CenterX, slitCenterY2,CenterX + L, (i*L*(waveLength +2))/slitDistance)
  }
}

// function mouseClicked() {
//   let newWave = new lineWave(mouseX,mouseY,mouseX,0)
//   allLines.push(newWave)
//   newWave.show()
// }

function createGrid() {
  for (let i = 0; i < (maxRadius.mag() / waveLength); i++) {
    let cWave = new circularWave(CenterX, slitCenterY1, slitCenterY2, i*waveLength*2)
    cWave.show()
  }

  noStroke()
  fill(25)
  rect(0,0,CenterX,windowHeight)

  // noStroke()
  // fill(225)
  // rect(0,0, CenterX, windowHeight)
  // noFill()
  // stroke(125)

  strokeWeight(2)
  stroke(80)

  for (let i = 0; i < (sketchWidth/63)*40/(waveLength*2); i++) {
    let wave = new lineWave(i*waveLength, 0, i*waveLength, windowHeight)
    wave.show()
  }
}

function createCircularWave() {
  let newCircularWave = new circularWave(CenterX, slitCenterY1, slitCenterY2, 0)
  newCircularWave.show()
  allCircles.push(newCircularWave)
}
  
  
