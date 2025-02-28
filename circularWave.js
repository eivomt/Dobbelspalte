class circularWave {
    constructor(x,y1, y2, width, p) {
      this.x = x
      this.y1 = y1
      this.y2 = y2
      this.width = width
      this.p = p
    }
  
    show() {
      this.p.noFill()
      this.p.strokeWeight(2)
      this.p.stroke(mapNumRange(this.width,0, 1380,80,225))
      this.p.circle(this.x,this.y1, this.width)
      this.p.circle(this.x,this.y2, this.width)
    }
  
    move() {
      this.width += speed
    }
  
    checkAlive(id) {
      if(this.width > 1.3 * windowWidth) {
        allCircles.splice(id, 1)
        console.log(this.width)
      }
    }
  }