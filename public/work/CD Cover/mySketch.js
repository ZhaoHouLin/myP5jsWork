let colorList = ["#ef798a","#f7a9a8","#7d82b8","#613f75","#e5c3d1"]

let colorHList = [351,1,235,278,335]
let colorSList = [79,83,29,30,40]
let colorBList = [71,82,61,35,83]

function preload() {
  fontLV = loadFont('Lemonada-VariableFont_wght.ttf');
	fontAR = loadFont('Anton-Regular.ttf');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(255,30);
	graphic = createGraphics(windowWidth, windowHeight)
	drawingContext.shadowOffsetX = random(2,4);
	drawingContext.shadowOffsetY = random(2,4);
	drawingContext.shadowBlur = random(4);

	colorMode(HSB)
	angleMode(DEGREES)
	
	graphic.background(255,0)
	graphic.textAlign(CENTER, CENTER)
	graphic.fill(0)
	
	graphic.textSize(160)
	graphic.textFont(fontLV)
	graphic.text('Street',width/2,height/2-100)
	graphic.textSize(40)
	graphic.text('Original Sound Track',width/2,height/2+60)
		
	drawBackground()
}

function drawBackground() {
	push()
	let count = 0
	rotate(map(mouseY,0,height,0,360))
	for (let x=0;x<width;x+=random(50)) {
		for (let y=0;y<height;y+=random(50)) {
			count+=1
			// fill(random(colorHList),random(colorSList),random(colorBList),1)
			stroke(random(colorHList),random(colorSList),random(colorBList),1)
			rect(x,y,random(100),random(100))
			drawingContext.shadowColor = color(random(colorHList),random(colorSList),random(colorBList),0.3)
		}
	}
	pop()
}

function mousePressed() {
	// rotate(map(mouseX,0,width,0,360))
	// drawBackground()
	
	colorHList.push(int(random(0,360)))
	colorSList.push(int(random(0,100)))
	colorBList.push(int(random(0,100)))
}

function draw() {
	// background(255,20)
	drawBackground()
	

	image(graphic,0,0)
}