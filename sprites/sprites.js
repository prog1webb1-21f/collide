// https://github.com/bmoren/p5.collide2D
// https://editor.p5js.org/p52dcollide/sketches/EKGWIHFYR

// för animerad grafik och genomskinlighet
// https://www.youtube.com/watch?v=3noMeuufLZY

let w=400;
let h=195;

function setup() {
	createCanvas(400,800);
}

function draw(){
	background(220);
	image(splash,0,0,0,0,0,h*i,w,h);
	image(splash,0,195,0,195,0,h*i,w,h);
	for(let i=0; i<5;i++){
		//image(splash,0,h*i,0,h*i,0,h*i,w,h);
}
}

function preload() {
	splash = loadImage('assets/cat-walk.png');
	
  }

