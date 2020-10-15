function ampCircle(vol) {
	volHistory.push(vol)
	stroke(map(center,500,8000,0,255),100,100)
	noFill()

	push()
		translate(width/2,height/2-110)
		beginShape()
			for(let i=0;i<360;i++) {
				let r = map(volHistory[i],0,1,100,width/2)
				let x = r * cos(i)
				let y = r * sin(i)
				vertex(x,y)
			}
		endShape()
	pop()
}