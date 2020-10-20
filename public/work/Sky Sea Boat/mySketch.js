let particles = []

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	rectMode(CENTER)
	createCanvas(windowWidth, windowHeight);
	background(0);
	
	for(let i=0;i<width;i+=30){
		for(let j=height/2;j<height;j+=10){
			particles.push(
				{
			 		x: i-20,
				 	y: j,
				 	clr: color(noise(i/200,j/200)*10,random(0,200),255),
			 	}
			)
		}
	}
	
}

function drawSea() {
	for(let i=0;i<particles.length;i++){
		let p = particles[i]
		// fill(p.clr)
		noFill()
		strokeWeight(3)
		stroke(p.clr)
		push()
		translate(p.x,p.y)
		beginShape()
		let rId = random(5)
		for(let i=0;i<50;i+=10) {
		vertex(i*2,sin(i/5+-frameCount/10)*10+rId/10)
		}
		endShape()
		pop()

	}
}

function drawSky() {
	noStroke()
	
	for(let i=0;i<width;i+=10){
		for(let j=0;j<height/2;j+=10){
			fill(noise(i/100,j/100,frameCount/50)*400,255,255)
			ellipse(i,j,20,20)
		}
	}
}

function draw() {
	
	// noStroke()
	background(0,0.5)
	drawSea()
	
	// image(graphicSky,0,0)
	drawSky()
	
	let delta = noise(frameCount)*10
	fill('#fcbf0a')
	// rect(frameCount,height/2,100,30)
	arc(frameCount*2,height/2-10+delta,100,50,0,-PI)
	stroke(100)
	strokeWeight(1)
	
	line(frameCount*2,height/2+delta,frameCount*2-45,height/2+delta)
	line(frameCount*2,height/2+delta,frameCount*2+45,height/2+delta)
	
	line(frameCount*2,height/2+10+delta,frameCount*2-30,height/2+10+delta)
	line(frameCount*2,height/2+10+delta,frameCount*2+30,height/2+10+delta)
	
	strokeWeight(2)
	line(frameCount*2,height/2-10+delta,frameCount*2,height/2-100+delta)
	noStroke()
	// arc(frameCount*2,height/2-100,60,80,PI/2,-PI/2)
	fill('#ed2323')
	triangle(frameCount*2,height/2-100+delta,frameCount*2,height/2-60,frameCount*2-60+delta,height/2-60+delta)
	
	
}