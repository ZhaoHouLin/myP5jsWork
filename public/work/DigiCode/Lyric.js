class Lyric {
	constructor(args) {
		this.p = args.p || createVector(width/2,0)
		this.v = args.v || createVector(random(-1,0.5),0)
		this.lyrics = args.lyrics
		this.clr = args.clr
		this.size = args.size || 20
	}
	
	draw() {
		// let mode = radioElement.value()
		// if(mode=='2') {
			// fill(selectedColor)
		// } else {
			fill(this.clr)
		// }
		
		textSize(this.size)
		text(this.lyrics,this.p.x,this.p.y)
	}
	
	update() {
		this.p.add(this.v)
		let d = dist(mouseX,mouseY,this.p.x,this.p.y)
		this.v.y+=0.05
		this.v.mult(0.99)
		// if(d<200) {
		// 	this.v = p5.Vector.random2D().mult(5)
		// }
		
		if(this.p.y>height) {
			this.p.y = 0
		}
		if(this.p.y<0) {
			this.v.y = height
		}
		
	}
	
}

