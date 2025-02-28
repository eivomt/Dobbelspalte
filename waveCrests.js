let waveCrests = function(p) {
  let Offset
  let film = document.getElementById("film")
  let filmSrc = document.getElementById("filmsrc")
  let dFeedback = false
  let dStroke = 250
  let isWaiting = false

  onresize = (event) => {
    if (isWaiting) {
      return
    }

    isWaiting = true

    setTimeout(() => {
      windowWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      windowHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      sketchWidth = (windowWidth/100)*63
      CenterX = (sketchWidth / 63) * 20
      CenterY = windowHeight /2
      barrierHeight = (windowHeight - (slitDistance + slitHeight))/2
      slitCenterY1 = barrierHeight + slitHeight/2
      slitCenterY2 = slitCenterY1 + slitDistance
      maxRadius = new p.createVector(83 * sketchWidth/63, CenterY)
      ContainerX1 = Offset
      ContainerY1 = Offset
      containerWidth = windowWidth-(Offset *2)
      containerHeight = windowHeight-(Offset *2)
      p.resizeCanvas(sketchWidth, windowHeight)
  
      reDraw()
      isWaiting = false
    }, 250)

    waveLength = document.querySelectorAll('.active')[0].innerHTML * p.windowWidth / 1800
    d = document.querySelectorAll('.active')[1].innerHTML
    updateVariables(d)
  }

  let updateVariables = (d) => {
    console.log('slitDistance: ' + slitDistance)
    console.log('barrierHeight: ' + barrierHeight)
    console.log('slitCenterY1: ' + slitCenterY1)
    console.log('slitCenterY2: ' + slitCenterY2)
    console.log('slitHeight: ' + slitHeight)
    console.log('windowHeight: ' + p.windowHeight)
    console.log('----------------------------------------')
    
    slitDistance = parseFloat(d) * p.windowWidth / 1800
    // slitDistance = 1200
    console.log(barrierHeight)
    barrierHeight = slitDistance + slitHeight
    console.log(barrierHeight)
    barrierHeight = barrierHeight / 2
    console.log(barrierHeight)
    barrierHeight = p.windowHeight / 2 - barrierHeight
    console.log(barrierHeight)
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
    console.log('windowHeight: ' + p.windowHeight)
    console.log('sketchWidth: ' + sketchWidth)
  }

  let setImgSrc = () => {
    let activeList = document.querySelectorAll('.active')
    let lambdaValue = activeList[0]
    let dValue = activeList[1]
    let figValue = activeList[2]

    let switchExpression = lambdaValue.dataset.num + dValue.dataset.num

    switch (switchExpression) {
      case '11':
        if(figValue.dataset.value == "4") {
          figImg.style.display = "none"
          film.style.display = "block"
          filmSrc.src = "./mov/01.mp4"
          film.load()
          film.play()
        }else {
          film.style.display = "none"
          figImg.style.display = "block"
          figImg.src = "./figurer/" + 1 + "/fig" + figValue.dataset.value + "/fig.png"
          currentMeasurements = 1
          newMeasurement = true
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
          film.style.display = "none"
          figImg.style.display = "block"
          figImg.src = "./figurer/" + 2 + "/fig" + figValue.dataset.value + "/fig.png"
          currentMeasurements = 2
          newMeasurement = true
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
          film.style.display = "none"
          figImg.style.display = "block"
          figImg.src = "./figurer/" + 3 + "/fig" + figValue.dataset.value + "/fig.png"
          currentMeasurements = 3
          newMeasurement = true
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
          film.style.display = "none"
          figImg.style.display = "block"
          figImg.src = "./figurer/" + 4 + "/fig" + figValue.dataset.value + "/fig.png"
          currentMeasurements = 4
          newMeasurement = true
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
          film.style.display = "none"
          figImg.style.display = "block"
          figImg.src = "./figurer/" + 5 + "/fig" + figValue.dataset.value + "/fig.png"
          currentMeasurements = 5
          newMeasurement = true
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
          film.style.display = "none"
          figImg.style.display = "block"
          figImg.src = "./figurer/" + 6 + "/fig" + figValue.dataset.value + "/fig.png"
          currentMeasurements = 6
          newMeasurement = true
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
          film.style.display = "none"
          figImg.style.display = "block"
          figImg.src = "./figurer/" + 7 + "/fig" + figValue.dataset.value + "/fig.png"
          currentMeasurements = 7
          newMeasurement = true
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
          film.style.display = "none"
          figImg.style.display = "block"
          figImg.src = "./figurer/" + 8 + "/fig" + figValue.dataset.value + "/fig.png"
          currentMeasurements = 8
          newMeasurement = true
        }
        break 
      case '33':
        if(figValue.dataset.value == "4") {
          figImg.style.display = "none"
          film.style.display = "block"
          filmSrc.src = "./mov/09.mp4"
          film.load()
          film.play()

        } else {
          film.style.display = "none"
          figImg.style.display = "block"
          figImg.src = "./figurer/" + 9 + "/fig" + figValue.dataset.value + "/fig.png"
          currentMeasurements = 9
          newMeasurement = true
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
  }

  let dOnClick = (ev) => {
    ev.preventDefault()
    let currentActive = document.querySelectorAll('.d.active')
    currentActive[0].classList.remove('active')
    ev.target.classList.add('active')
    updateVariables(ev.target.dataset.value)
    setImgSrc()
    reDraw()
    dFeedback = true
  }

  let lambdaOnClick = (ev) => {
    ev.preventDefault()
    let currentActive = document.querySelectorAll('.lambda.active')
    currentActive[0].classList.remove('active')
    ev.target.classList.add('active')
    waveLength = ev.target.dataset.value
    setImgSrc()
    reDraw()
  }

  let yI = 0
  window.document.body.addEventListener('keydown', (event) => {
    if (event.key == 'e') {
      yI++
    } else {
      yI = 0
    }
    if(yI == 10) {
      alert('ek var hir')
    }
  })

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

  p.setup = function() {
    frameRate = 34
    let windowWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let windowHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    sketchWidth = (windowWidth/100)*63
    CenterX = (sketchWidth / 63) * 20
    CenterY = windowHeight /2
    slitDistance = 200
    slitHeight = 35
    barrierHeight = (windowHeight - (slitDistance + slitHeight))/2
    slitCenterY1 = barrierHeight + slitHeight/2
    slitCenterY2 = slitCenterY1 + slitDistance
    let canvas = p.createCanvas(sketchWidth, windowHeight)
    maxRadius = new p.createVector(83 * sketchWidth/63, CenterY)
    p.frameRate = 30
    waveLength = 50 * windowWidth / 1800
    L = 500

    p.stroke(125)
    p.strokeWeight(2)

    canvas.id("sketch1")
    p.background(25)
    Offset = 200
    ContainerX1 = Offset
    ContainerY1 = Offset
    containerWidth = windowWidth-(Offset *2)
    containerHeight = windowHeight-(Offset *2)
    p.noStroke()
    p.stroke(125)
    createGrid()
    p.stroke(50)
    drawBarrier()
  }

  p.draw = function() {
    if(dFeedback) {
      barrierFeedback(dStroke)
      dStroke --

      if(dStroke == 180) {
        dFeedback = false
        dStroke = 250
      }
    }
  }


  function reDraw() {
    p.background(25)
    createGrid()
    drawBarrier()
  }

  function drawBarrier() {
    // create barrier with slits
    p.strokeWeight(16)
    p.stroke(25)
    p.line(CenterX,0,CenterX,p.windowHeight)
    p.stroke(180)
    p.line(CenterX,0,CenterX, barrierHeight)
    p.line(CenterX,p.windowHeight,CenterX, barrierHeight + slitHeight + slitDistance)
    p.line(CenterX, barrierHeight + slitHeight,CenterX, p.windowHeight - (barrierHeight + slitHeight))

    p.strokeWeight(32)
    p.stroke(200)
    p.line(sketchWidth,0,sketchWidth,p.windowHeight)
  }

  function drawMaxima(n) {
    for(let i=0; i<=n;i++) {
      p.line(CenterX, slitCenterY1,CenterX + L, (i*L*(waveLength +2))/slitDistance)
      p.line(CenterX, slitCenterY2,CenterX + L, (i*L*(waveLength +2))/slitDistance)
    }
  }

  function createGrid() {
    for (let i = 0; i < (maxRadius.mag() / waveLength); i++) {
      let cWave = new circularWave(CenterX, slitCenterY1, slitCenterY2, i*waveLength*2, p)
      cWave.show()
    }

    p.noStroke()
    p.fill(25)
    p.rect(0,0,CenterX,p.windowHeight)

    p.strokeWeight(2)
    p.stroke(80)

    for (let i = 0; i < (sketchWidth/63)*40/(waveLength*2); i++) {
      let wave = new lineWave(i*waveLength, 0, i*waveLength, p.windowHeight, p)
      wave.show()
    }
  }

  function barrierFeedback(s) {
    p.strokeWeight(16)
    p.stroke(s)
    p.line(CenterX,0,CenterX, barrierHeight)
    p.line(CenterX,p.windowHeight,CenterX, barrierHeight + slitHeight + slitDistance)
    p.line(CenterX, barrierHeight + slitHeight,CenterX, p.windowHeight - (barrierHeight + slitHeight))
  }

  function createCircularWave() {
    let newCircularWave = new circularWave(CenterX, slitCenterY1, slitCenterY2, 0, p)
    newCircularWave.show()
    allCircles.push(newCircularWave)
  }

}
const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;