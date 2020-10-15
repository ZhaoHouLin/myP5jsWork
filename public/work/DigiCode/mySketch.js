//如何垂直文字? 參考網址:https://forum.processing.org/two/discussion/16520/is-there-an-easy-way-to-display-text-vertically-in-p5-js

let lyrics = (
			'Gokigen na chou ni natte kirameku kaze ni notte' +
			'Ima sugu kimi ni ai ni yukou'+
			'Yokei na koto nante wasureta hou ga mashi sa'+
			'Kore ijou shareteru jikan wa nai'+
			'Nani ga wow wow wow wow wow kono sora ni todoku no darou'+
			'Dakedo wow wow wow wow wow ashita no yotei mo wakaranai'+
			'Mugendai na yume no ato no nanimo nai yo no naka ja'+
			'Sou sa itoshii omoi mo makesou ni naru kedo'+
			'Stay shigachi na imeeji darake no tayorinai tsubasa demo'+
			'Kitto toberu sa on my love'+
			'Ukareta chou ni natte ichizu na kaze ni notte'+
			'Doko mademo kimi ni ai ni yukou'+
			'Aimai na kotoba tte igai ni benri datte'+
			'Sakenderu hitto songu kikinagara'+
			'Nani ga wow wow wow wow wow kono machi ni hibiku no darou'+
			'Dakedo wow wow wow wow wow kitai shitetemo shikata nai'+
			'Mugendai na yume no ato no yarusenai yo no naka ja'+
			'Sou sa joushiki hazure mo waruku wa nai ka na'+
			'Stay shisou na imeeji wo someta gikochinai tsubasa demo'+
			'Kitto toberu sa on my love'+
			'Mugendai no yume no ato no nanimo nai yo no naka ja'+
			'Sou sa itoshii omoi mo makesou ni naru kedo'+
			'Stay shigachi na imeeji darake no tayorinai tsubasa demo'+
			'Kitto toberu sa oh yeah'+
			'Mugendai na yume no ato no yarusenai yo no naka ja'+
			'Sou sa joushiki hazure mo waruku wa nai ka na'+
			'Stay shisou na imeeji wo someta gikochinai tsubasa demo'+
			'Kitto toberu sa on my love'
).split(' ')

let colorRed,colorBlue,colorGreen,colorOrange,colorGold
let inputElement ,radioElement ,colorPickerElement
let lyricsArray = []
let wordsArray = []
let colors = []

function preload() {
  digiCode = loadFont('Digicode Regular.ttf')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	colorMode(HSB)
	let colorGreen 
	let colorBlue
	let colorRed
	let colorOrange
	let colorGold
	
	inputElement = createInput()
	inputElement.position(50,50)
	inputElement.input(userInput)
	inputElement.style('border','none')
	inputElement.style('backgroundColor','#eee')
	// inputElement.style('width','140px')
	
	radioElement = createRadio()
	radioElement.position(50,100)
	radioElement.style('backgroundColor','#eee')
	radioElement.style('width','140px')
	radioElement.style('border','2px solid #222')
	radioElement.style('borderRadius','4px')
	radioElement.style('padding','4px')
	radioElement.style('textAlign','center')
	radioElement.option('Normal',1)
	radioElement.option('Picker',2)
	radioElement.value('1')
	
	colorPickerElement = createColorPicker(color(47,100,100))
	colorPickerElement.position(50,150)
	colorPickerElement.style('width','140px')
	textFont(digiCode)
	
	for(let i=0;i<lyrics.length;i++) {
	 	colorGreen = color(143,100,random(50,100))
	 	colorBlue = color(195,100,random(70,100))
	 	colorRed = color(0,100,random(30,100))
	 	colorOrange = color(45,100,random(30,100))
	 	colorGold = color(55,100,random(30,100))
		colors = [colorRed,colorOrange,colorGold]
		let code = new Lyric({
			p: createVector(random(width),random(height)),
			lyrics: verticalText(lyrics[i]),
			clr: random(colors),
			size: random(10,20)
		})
		lyricsArray.push(code)
	}
}
  
function verticalText(input) {
  let output = ""  // create an empty string
  for (let i = 0; i < input.length; i += 1) {
    output += input.charAt(i) + "\n"; // add each character with a line break in between
  }
	return output
}

function userInput() {
	let word = new Word({
		p: createVector(width/2,0),
		v: createVector(random(-1,1),0.5),
		clr: random(colors),
		size: random(50,100),
		text: verticalText(this.value()),
	})
	wordsArray.push(word)
	this.value('')
}

function userKey() {
	let word = new Word({
		p: createVector(width/2,0),
		v: createVector(random(-1,1),0.5),
		clr: random(colors),
		size: random(50,100),
		text: verticalText(key),
	})
	
	wordsArray.push(word)
	// this.value('')
}


function draw() {
	
	let selectedColor = colorPickerElement.value()
	background(0)
	
	for(let lyric of lyricsArray) {
		lyric.draw(selectedColor)
		lyric.update()
	}

	for(let word of wordsArray) {
		word.draw(selectedColor)
		word.update()
	}
	
	// print(key)
	// if(keyIsPressed) {
	// 	userKey()
	// }

}