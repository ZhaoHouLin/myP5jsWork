class Word {
	constructor(args) {
		this.p = args.p
		this.v = args.v || createVector(-1,0)
		this.size = args.size || 100
		this.text = args.text
		this.clr = args.clr || random(colors)
	}
	
	draw(selectedColor) {
		let mode = radioElement.value()
		if(mode =='2') {
			fill(selectedColor)
		} else if (mode =='1') {
			fill(this.clr)
		}
		textSize(this.size)
		text(this.text,this.p.x,this.p.y)
	}
	
	update() {
		this.p.add(this.v)
		let d = dist(mouseX,mouseY,this.p.x,this.p.y)
		this.v.y+=0.1
		this.v.mult(0.99)
	
		if(d<200) {
			this.v = p5.Vector.random2D().mult(5)
		}
		
		if(this.p.y>height) {
			this.p.y = 0
		}
		if(this.p.y<0) {
			this.v.y = height
		}
		
	}
}