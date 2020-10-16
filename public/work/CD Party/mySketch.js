let graphic
let arcLines
let graphicWidth
let graphicheight

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255)
	
	//數字越小產出的畫布越多會當掉
	graphicWidth = 120
	graphicheight = 120
	
	graphic = createGraphics(graphicWidth,graphicheight)
	graphic.angleMode(DEGREES)
	graphic.background(0)
	graphic.textAlign(CENTER, CENTER)
	graphic.colorMode(HSB)
	graphic.rectMode(CENTER)
}

//畫布內的弧線形成圓
function drawArcLine(count,x,y) {
		graphic.noFill()
		graphic.rotate(frameCount+x+y)
		graphic.scale(0.5)
		graphic.stroke(map(x+y,0,width,0,360),100,100)
		graphic.strokeWeight(2)
		graphic.arc(0,0,graphicWidth/2+count*10,graphicWidth/2+count*10,0,135)
}

//畫布內的小圖形
function drawManyShape(count,x,y) {
	graphic.push()
	graphic.translate(graphicWidth/2,graphicheight/2)
	graphic.noFill()
	graphic.noStroke()
	graphic.rotate(map(count,0,20,0,360))
	graphic.scale(0.5)
	if(count%2==0) {
		graphic.fill(map(x+y,0,width,0,360)/5,100,100)
		graphic.rotate(noise(frameCount))
		graphic.circle(0,100+(sin(frameCount/20)*10),10)
	} else if(count%3==0) {
		graphic.stroke(map(x+y,0,width,0,360),100,100)
		graphic.rect(0,100,y,30)
	} else {
		graphic.noStroke()
		graphic.fill(map(x+y,0,width,0,360),100,100)
		graphic.rect(0,100,30,30)
		graphic.fill(0,0,0)
		graphic.circle(0,100,20)
		
	}
	graphic.pop()
}

//畫布內容
function drawGraphic(x,y) {
	for(let count=0;count<10;count++) {
		graphic.push()
		graphic.translate(graphicWidth/2,graphicheight/2)
		drawArcLine(count,x,y)
		graphic.pop()
	}
	for(let count=0;count<20;count++) {
		drawManyShape(count,x,y)
	}	
		
		image(graphic,x,y)
}

//產生小畫布
function graphicLoop() {
	for(let x=0;x<width;x+=graphicWidth) {
		for(let y=0;y<height;y+=graphicheight) {
			drawGraphic(x,y)
		}
	}
}

function draw() {
	// graphic.background(0)
	graphic.background(0,0.5)
	
	graphicLoop()
}