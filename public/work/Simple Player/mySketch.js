// 參考網址
// https://discourse.processing.org/t/p5js-sound-and-safari/20880
// TR808 PATTERN https://freesound.org/people/XHALE303/sounds/535919/
// Hip-Hop Beat https://freesound.org/people/ArtGuildSounds/sounds/535831/
// SCATTERED DRONE https://freesound.org/people/XHALE303/sounds/535749/
// https://www.youtube.com/watch?v=jEwAMgcCgOA&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=9&ab_channel=TheCodingTrain
// https://www.youtube.com/watch?v=h_aTgOl9J5I&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=10&ab_channel=TheCodingTrain

let mic , fft
let div
let volumeIcon
let playButton ,stopButton ,pauseButton ,forwardButton ,previousButton
let sliderElement ,time
let music
let musics = ['Hip-Hop Beat.mp3','DRONES.mp3','TR808 PATTERN.mp3']
let tracks = []
let musicIsPlaying = false
let cover 
let spectrum 
let center
let currentMusic = 0

let amp
let volHistory = []

function preload() {
	for(let music of musics) {
		tracks.push(loadSound(music))
	}
	cover = loadImage('cover.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)

	// 引入icon
	div = createDiv('<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">')
		
	fft = new p5.FFT()
	fft.setInput(music)
	amp = new p5.Amplitude()
	
	angleMode(DEGREES)
	
	playButton = createButton('')
	stopButton = createButton('')
	forwardButton = createButton('')
	previousButton = createButton('')
	playButton.mousePressed(isPlayPause)
	stopButton.mousePressed(isStopPlay)
	forwardButton.mousePressed(forwardMusic)
	previousButton.mousePressed(previousMusic)
	
	
	sliderElement = createSlider(0,1,0.5,0.01)
	sliderElement.position(width/2+36,height-42)
	
	volumeIcon = createDiv()
	volumeIcon.attribute('class','fas fa-volume-up')
	volumeIcon.style('color','#eee')
	volumeIcon.position(width/2,height-40)
	
	playBtnStyle()
	stopBtnStyle()
	forwardBtnStyle()
	previousBtnStyle()
	
}

// 按鈕功能
function adjustSlider() {
	let cT = tracks[currentMusic].duration()
	time.value(map(cT,0,cT,0,1))
	// tracks[currentMusic].currentTime()
}

function forwardMusic() {
	playButton.attribute('class','fas fa-pause')
	musicIsPlaying = true
	if(currentMusic < tracks.length-1) {
		tracks[currentMusic].stop()
		currentMusic+=1
		tracks[currentMusic].loop()
	} else {
		tracks[currentMusic].stop()
		currentMusic = 0
		tracks[currentMusic].loop()
	}
}

function previousMusic() {
	playButton.attribute('class','fas fa-pause')
	musicIsPlaying = true
	if(currentMusic > 0 ) {
		tracks[currentMusic].stop()
		currentMusic-=1
		tracks[currentMusic].loop()
		
	} else {
		tracks[currentMusic].stop()
		currentMusic = tracks.length-1
		tracks[currentMusic].loop()
	}
}

function isPlayPause() {
	if (musicIsPlaying) {
		playButton.attribute('class','fas fa-play')
		tracks[currentMusic].pause()
		musicIsPlaying = false
	} else {
		playButton.attribute('class','fas fa-pause')
		tracks[currentMusic].loop()
		musicIsPlaying = true
	}
}

function isStopPlay() {
	musicIsPlaying = false
	tracks[currentMusic].stop()
	playButton.attribute('class','fas fa-play')
}
// 按鈕功能 end


function draw() {
	background(0)
	spectrum = fft.analyze()
	center = fft.getCentroid()
	fill(map(center,500,8000,0,255),100,100)
	text(musics[currentMusic], width/2, height-180);
	textSize(24)
	
	let vol = amp.getLevel()
	// ellipse(width/2,height/2,200,vol*200)
	
// 	振幅波紋
	ampCircle(vol)
	ampLine(vol)

	if(volHistory.length>width/2) {
		volHistory.splice(0,1)
	}
	
	stroke(255)
	line(volHistory.length,0,volHistory.length,height-220)
	
	tracks[currentMusic].setVolume(sliderElement.value())
	
	colorMode(HSB)
	fill(map(center,500,8000,0,255),100,100,0.3)
	noStroke()
	image(cover,width/2-200-72,height-200,200,200)

	
	beginShape()
		translate(0,height)
		for(let i=0;i<spectrum.length;i+=5) {
			// rect(i,0,5,spectrum[i]*2)
			// vertex(i,-spectrum[i])
			rect(i*5,-spectrum[i]*2-220,20,spectrum[i]*2)
		}
	endShape()
		
}