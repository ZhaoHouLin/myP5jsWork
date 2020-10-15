let riverImg
let sound

let particles = []
let soundTs = 0



function preload() {
	riverImg = loadImage('river.jpg')
	sound = loadSound('kasa90__loop5.wav')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
	sound.play()
	sound.loop()
	setScene(30)
	
	let intervalInSeconds = 0.2;

}

function setScene(span) {
	noStroke()
	for(let i=0;i<riverImg.width;i+=span) {
		for(let j=0;j<riverImg.height;j+=span) {
			let c = riverImg.get(i,j)
			let clrArray
			if((c[0]+c[1]+c[2])>200 && mouseX<width/4) {
				clrArray = [c[0]+150,c[1],c[2]]
			} else if((c[0]+c[1]+c[2])>200 && mouseX<width/4*2) {
				clrArray = [c[0]+200,c[1]+50,c[2]]
			} else if((c[0]+c[1]+c[2])>200 && mouseX<width/4*3) {
				clrArray = [c[0]+80,c[1]+50,c[2]]
			} else {
				clrArray = [c[0]-100,c[1],c[2]+50]
			}
			particles.push({
				x:i,
				y:j,
				clr: clrArray
			})
		}
	}
	
}


function mousePressed() {
	sound.stop()
	sound.play()
	setScene(30)
	soundTs = frameCount
}


function drawScene(size) {
	translate(0,20)
	scale(0.4)

	let delta = frameCount - soundTs
	let ratio = map(delta,0,50,1,0,true)
	let easeFn = easeOutCubic(1-ratio)
	for(let p of particles) {
		rectMode(CENTER)
		fill(p.clr[0]*easeFn,p.clr[1]*easeFn,p.clr[2]*easeFn)

		rect(p.x,p.y,size,size,8)
		p.x +=( noise(p.x/200,p.y/200,1000)-0.5)*3
		p.y +=( noise(p.x/200,p.y/200,1000)-0.5)*3
	}
	
	
}


function draw() {
	noStroke()
	background(0,0.5)
	drawScene(36)
}