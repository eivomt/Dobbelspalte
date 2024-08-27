class lineWave {
    constructor(x1,y1, x2, y2) {
      this.x1 = x1
      this.y1 = y1
      this.x2 = x2
      this.y2 = y2
    }
  
    show() {
        line(this.x1,this.y1,this.x2,this.y2)
    }
  
    move() {
      this.x1 += speed
      this.x2 += speed
      stroke(mapNumRange(this.x1,0, CenterX,125,225))
    }
  
    checkAlive(id) {
      if (this.x1 >= CenterX) {
        allLines.splice(id, 1)
        createCircularWave()
      } 
    }
  }
  