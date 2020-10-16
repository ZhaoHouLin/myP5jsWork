let mountainImg
let noiseImg

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function preload() {
	mountainImg = loadImage('mountain.jpg')
	noiseImg = loadImage('noiseTexture.jpg')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100)
	// image(mountainImg,0,0)
	// noLoop()
}

function draw() {
	// background(0)
	noStroke()
	// scale(1.3)
	// translate(0,-100)
	let span = map(0,0,width,20,100)
	let mouseC = mountainImg.get(mouseX,mouseY)
	// let span = 50
	for(let i=0;i<mountainImg.width;i+=span) {
		for(let j=0;j<mountainImg.height;j+=span) {
			let c = mountainImg.get(i,j)
			// print(c)
			// fill(c[0],c[1],c[2]+random(-30,mouseX/10))
			fill(c)
			push()
				translate(i,j)
				// rotate(j/100)
				// scale(random(2))
				// rect(0,0,random(30),random(30))
				
				rect(0,0,30)
			pop()

			fill(mouseC)
			ellipse(mouseX,mouseY,30)
		}
	}
	push()
	// blendMode(MULTIPLY)
	// image(noiseImg,0,0,width,height)
	pop()
	
	
}