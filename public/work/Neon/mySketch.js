let particles = []
let neons = []
let maxAge = 30
let globalHue = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	colorMode(HSB,255)	
}

function draw() {
	blendMode(BLEND)
  background(50)
  blendMode(SCREEN)
		let neon = new Neon({
		// r: 20,
		p: createVector(mouseX,mouseY),
		// clr: color(random(20),100,100)
	})
	neons.push(neon)
		
		
	for(let idx in neons) {			
		if(neons[idx].age<=0)
		neons.splice(idx, 1)
		neons[idx].draw()
		neons[idx].update()
	}
			

	noStroke()
	
	background(0,0.05)

}