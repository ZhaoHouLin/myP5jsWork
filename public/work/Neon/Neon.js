class Neon {
	constructor(args) {
		this.r = args.r || 0
		this.p = args.p || createVector(random(width),random(height))
		this.v = args.v || createVector(random(-width/2,width/2),random(-height/2,height/2))
		this.a = args.a || createVector(random(-1,1),random(-1,1))
		this.color = args.clr||color(random('f9c80e-f86624-ea3546-662e9b-43bccd'.split('-').map(code=>'#'+code)))

		this.offsetVariance = random(0.5, 3)
		this.sizeVariance = random(0.5, 1.5)
		this.age = maxAge
		this.hue = globalHue
	}
	
	draw() {
		if (frameCount % 30 == 0) {
			globalHue = random(255)
			this.hue = globalHue
		}
		
		let ang = this.v.heading()
		let delta = sqrt(dist(pmouseX,pmouseY,mouseX,mouseY))*5
		push()
		translate(this.p.x,this.p.y)
		
		let opacity = map(this.age, 0, maxAge, 0, 255)
		let offset = (1 - (this.age / float(maxAge))) * 50  * this.offsetVariance
		
		drawingContext.shadowColor = color(this.hue, 100, 200, opacity)
		drawingContext.shadowBlur = map(this.age, 0, maxAge, 60 *this.sizeVariance, 1)
		this.age -= 0.5

		stroke(this.color, opacity)
		strokeWeight(map(this.age, 0, maxAge, 100, 10) * this.sizeVariance)
		
		noFill()
		ellipse(0,0,this.r)
		// ellipse(random(-delta,delta),random(-delta,delta),this.r)
		// rotate(ang)
		// rect(0,0,20,20)
		// line(0,0,mouseX%200,mouseY%200)
		
		pop()
	}
	
	update() {
		this.p.add(this.v)
		this.v.add(this.a)
		this.v.mult(-0.99)
	}
	
	
}