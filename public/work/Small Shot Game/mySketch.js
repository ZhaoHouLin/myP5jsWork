let myFlower
let bricks = []
let bullet
let bullets = []
let score = 0
let colorList = 'f9c80e-f86624-ea3546-662e9b-43bccd'.split('-').map(code=>'#'+code)

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES)
	colorMode(HSB)
	rectMode(CENTER)

	brickPosition()

}

function brickPosition() {
	//產生磚塊屬性
	for (let x = 100; x <width-100; x+= 50) {
		for (let y = 100; y < height/2; y+= 50) {
			bricks.push(brick(x, y, 40, 10))
		}
	}
}

//磚塊屬性
function brick(x, y, w, h) {
	return {
		x: x,
		y: y,
		w: w,
		h: h,
		col: random(colorList)
	}
}

//畫出磚塊
function drawBrick(brick) {
	fill(brick.col)
	rect(brick.x, brick.y, brick.w, brick.h)
}

//畫出子彈
function drawBullet(bullet) {
	push()
	translate(bullet.x, bullet.y)
	ellipse(0, 0, 10, 10)
	pop()
}


//子彈屬性
function generateBullet() {
	return {
		x: mouseX ,
		y: height - 50 ,
		vy: -0.5
	}
}

//發射子彈
function mousePressed() {
	let bullet = generateBullet()
	bullets.push(bullet)
}

function drawAll() {
	for (let i = 0; i < bricks.length; i++) {
		let brick = bricks[i]
		drawBrick(brick) 
		
		for (let j = 0; j < bullets.length; j++) {
			fill('red')
			let bullet = bullets[j]
			drawBullet(bullet)
			bullet.y += bullet.vy
			bullet.vy =-0.5
			//子彈碰觸目標的判斷
			if (dist(bullet.x, bullet.y, brick.x, brick.y) <= 30) {
				bullets.splice(j, 1)
				bricks.splice(i, 1)
				score+=10
				
			}
			if( bullet.y<0){
				bullets.splice(j, 1)
			}
			
		}
		
	}
}

function draw() {
	background(0)
	noStroke()
	drawAll()
	// bricks.length==0
	if(bricks.length==0) {
		score=0
		brickPosition()
	}
	
	fill(255)
	textSize(24)
	text('Score:'+score,30,40)
	triangle(mouseX, height-40, mouseX-20, height-20, mouseX, height-60)
	triangle(mouseX, height-40, mouseX+20, height-20, mouseX, height-60)
}