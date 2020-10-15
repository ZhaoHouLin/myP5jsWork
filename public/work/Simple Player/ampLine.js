function ampLine(vol) {
	push()
		let currentY = map(vol,0,1,height,0)
		// translate(0,height/2-currentY-110)
		translate(0,-height/2-110)
		// translate(width/2,height/2)
		beginShape()
			stroke(255)
			for(let i=0;i<volHistory.length;i++) {
				let y = map(volHistory[i],0,1,height,0)
				vertex(i,y)
			}
		endShape()
	pop()
}	

