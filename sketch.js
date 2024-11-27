
let Offset
let containerX1, containerWidth, containerY1, containerHeight
let circles = []
let film = document.getElementById("film")
let filmSrc = document.getElementById("filmsrc")
// let allLines = []
// let allCircles = []

// let sD, sW, sCy1, sCy2
// let bH

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





  let switchExpression = lambdaValue.dataset.num + dValue.dataset.num
  console.log(switchExpression + " figValue:" + figValue.dataset.value)

  switch (switchExpression) {
    case '11':
      if(figValue.dataset.value == "4") {
        figImg.style.display = "none"
        film.style.display = "block"
        filmSrc.src = "./mov/01.mp4"
        film.load()
        film.play()
      }else {
        figImg.style.display = "block"
        figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 1 + "/fig" + figValue.dataset.value + "/fig.png"
      }
      break 
    case '12':
      if(figValue.dataset.value == "4") {
        figImg.style.display = "none"
        film.style.display = "block"
        filmSrc.src = "./mov/02.mp4"
        film.load()
        film.play()

      }else {
        figImg.style.display = "block"
        figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 2 + "/fig" + figValue.dataset.value + "/fig.png"
      }
      break 
    case '13':
      if(figValue.dataset.value == "4") {
        figImg.style.display = "none"
        film.style.display = "block"
        filmSrc.src = "./mov/03.mp4"
        film.load()
        film.play()

      }else {
        figImg.style.display = "block"
        figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 3 + "/fig" + figValue.dataset.value + "/fig.png"
      }
      break 
    case '21':
      if(figValue.dataset.value == "4") {
        figImg.style.display = "none"
        film.style.display = "block"
        filmSrc.src = "./mov/04.mp4"
        film.load()
        film.play()

      }else {
        figImg.style.display = "block"
        figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 4 + "/fig" + figValue.dataset.value + "/fig.png"
      }
      break 
    case '22':
      if(figValue.dataset.value == "4") {
        figImg.style.display = "none"
        film.style.display = "block"
        filmSrc.src = "./mov/05.mp4"
        film.load()
        film.play()

      }else {
        figImg.style.display = "block"
        figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 5 + "/fig" + figValue.dataset.value + "/fig.png"
      }
      break 
    case '23':
      if(figValue.dataset.value == "4") {
        figImg.style.display = "none"
        film.style.display = "block"
        filmSrc.src = "./mov/06.mp4"
        film.load()
        film.play()

      }else {
        figImg.style.display = "block"
        figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 6 + "/fig" + figValue.dataset.value + "/fig.png"
      }
      break 
    case '31':
      if(figValue.dataset.value == "4") {
        figImg.style.display = "none"
        film.style.display = "block"
        filmSrc.src = "./mov/07.mp4"
        film.load()
        film.play()

      }else {
        figImg.style.display = "block"
        figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 7 + "/fig" + figValue.dataset.value + "/fig.png"
      }
      break 
    case '32':
      if(figValue.dataset.value == "4") {
        figImg.style.display = "none"
        film.style.display = "block"
        filmSrc.src = "./mov/08.mp4"
        film.load()
        film.play()

      }else {
        figImg.style.display = "block"
        figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 8 + "/fig" + figValue.dataset.value + "/fig.png"
      }
      break 
    case '33':
      if(figValue.dataset.value == "4") {
        figImg.style.display = "none"
        film.style.display = "block"
        filmSrc.src = "./mov/09.mp4"
        film.load()
        film.play()

      }else {
        figImg.style.display = "block"
        figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/" + 9 + "/fig" + figValue.dataset.value + "/fig.png"
      }
      break
    default:
      console.log('Sorry, we are out of expression')
  }
}


let figOnClick = (ev) => {
  ev.preventDefault()
  let currentActive = document.querySelectorAll('.fig.active')
  currentActive[0].classList.remove('active')
  ev.target.classList.add('active')
  setImgSrc()
  // figImg.src = "./viPrøverIgjen/flereVariablerAvGangen/1/fig" + ev.target.dataset.value +"/fig.png" 
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

let lambdaOnClick = (ev) => {
  ev.preventDefault()
  let currentActive = document.querySelectorAll('.lambda.active')
  currentActive[0].classList.remove('active')
  ev.target.classList.add('active')
  waveLength = ev.target.dataset.value
  setImgSrc()
  doTheThing()
}

let lambdaRadio1 = document.getElementById('lambda1')
let lambdaRadio2 = document.getElementById('lambda2')
let lambdaRadio3 = document.getElementById('lambda3')

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
  // stroke(125)
  // createGrid()
  // stroke(50)
  // drawBarrier()
  // scale(-1,1)
  noStroke()
  // rect(Offset,Offset, containerWidth, containerHeight)
  stroke(125)
  createGrid()
  stroke(50)
  drawBarrier()
}

function draw() {
  stroke(25)
  strokeWeight(2)
  noFill()
  // drawMeasurement()
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

const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
