let s,m,h 
let angleS,angleM,angleH

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100)
	// graphic = createGraphics(windowWidth, windowHeight)
}

function clockNumScale(num) {
	for(let i=1;i<=num;i++) {
		push()
		rotate(map(i,0,num,0,360)-45)
		stroke(map(i,0,num,0,360),100,100)
		line(240,240,180,180)
		// rotate(-42)
		rotate(135)
		noStroke()
		fill(map(i,0,num,0,360),100,100)
		textSize(48)
		text(i,-25,-280)
		pop()
	}
}

function clockScale() {
	for(let i=0;i<60;i++) {
		push()
		rotate(map(i,0,60,0,360)-45)
		stroke(map(i,0,60,0,360),100,100)
		line(240,240,220,220)
		pop()
	}
}

function circleOutline(lng=340,size=50) {
	for(let i=0;i<360;i++) {
		push()
		rotate(i-45+frameCount)
		stroke(i,100,90)
		// line(0,0,random(0,100),random(0,100))
		line(0,0,size,size)

		//外圈
		noStroke()
		fill(i,100,90)
		rect(lng,0,10,10)
		pop()
	}
}

function pointer(ang,lng,sW,r) {
	push()
		fill(ang,100,100)
		rotate(ang)
		rect(0,0,lng-20,1)
		circle(lng+5, 0, r-10)
		noFill()
		stroke(ang,100,100)
		strokeWeight(sW)
		circle(lng+5, 0, r)
	pop()
}

function draw() {
	
	s = second()
	m = minute()
	h = hour()
	
	angleS = map(s,0,60,0,360)
	angleM = map(m,0,60,0,360)
	angleH = map(h,0,12,0,360)
	
	angleMode(DEGREES)
	background(0,10)
	noStroke()
	colorMode(HSB, 360,100,100,0.5)

	push()
	translate(width/2, height/2)
	rotate(-90)
	
	circleOutline()
	clockNumScale(12)
	clockScale()
	
	
	if (mouseIsPressed) {
		circleOutline(angleS)
	}
	
	
	//秒針
	pointer(angleS,300,3,30)
	//分針
	pointer(angleM,220,4,40)
	//時針
	pointer(angleH%360,160,5,50)
	pop()
	
	
	// image(graphic,0,0)
	// graphic.background(0,0)
	// graphic.circle(mouseX,mouseY,100)
	
}
