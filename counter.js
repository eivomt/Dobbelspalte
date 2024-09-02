class Counter {
    constructor(n, xOffset, yOffset) {
        this.n = n
        this.xOffset = xOffset
        this.yOffset = yOffset
    }

    show() {
        rect(this.xOffset,this.yOffset,windowWidth-2*this.xOffset, windowHeight -2*this.yOffset)
        
        for (let i=0; i<this.n; i++) {
            rect()
        }
    }
}