let count = 0

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#081326');
	colorMode(HSB, 15, 50, 100)
	// manyCircle()
	mouseClicked()
	mousePressed()
}

function draw() {
	// ellipse(mouseX, mouseY, 20, 20);
}

function mouseClicked() {
	manyCircle()
}

function mousePressed() {
	manyCircle()
}

// function drawGradient(x, y) {
//   let radius = dim / 2;
//   let h = random(0, 360);
//   for (let r = radius; r > 0; --r) {
//     fill(h, 90, 90);
//     ellipse(x, y, r, r);
//     h = (h + 1) % 360;
//   }
// }


function manyCircle() {
	noStroke()
	angleMode(DEGREES)
	fill(random(200,255),random(255),random(255))
	circle(width/2,height/2,600)
	
	// let h = random(200, 360)
	for (let i=600;i>0;i-=int(random(10,50))) {
		count+=1
		if (count%2==0) {
			fill(random(200,255),random(255),random(255))
			circle(width/2,height/2,i)
			
		} else if (count%3==0){
			for (let j=0;j<360;j+=10) {
				fill(random(200,255),random(255),random(255),100)
				push()
				translate(width/2,height/2)
				rotate(j)
				circle(i/4+60,i/4+60,5)
				pop()
			}
		} else {
			fill(random(200,255),random(255),random(255))
			arc(width/2,height/2, i, i,i/10,i+10 )
		}
	}
}
