// https://github.com/bmoren/p5.collide2D
// https://editor.p5js.org/p52dcollide/sketches/EKGWIHFYR

// för animerad grafik och genomskinlighet
// https://www.youtube.com/watch?v=3noMeuufLZY

let smileys = [];
let player;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 3; i++) {
    smileys.push(new Smiley(i * 128 + 25, 50));
  }
  console.table(smileys);
  player = new Player();
}

function draw() {
  background(220);

  player.update();
  player.draw();

  for (let i = 0; i < smileys.length; i++) {
    player.scares(smileys[i]);
    if (player.eats(smileys[i])) {
      smileys.splice(i, 1);
      break;
    }
    smileys[i].draw();
  }
}

function preload() {
  smile = loadImage("assets/smile.png");
  shocked = loadImage("assets/shocked.png");
}

class Smiley {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.d = 100;
    this.isHappy = true;
  }
  draw() {
    if (this.isHappy) {
      image(smile, this.x, this.y, this.d, this.d);
    } else {
      image(shocked, this.x, this.y, this.d, this.d);
    }
  }
}

class Player {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.d = 20;
  }
  update() {
    this.x = mouseX;
    this.y = mouseY;
  }
  draw() {
    circle(this.x, this.y, this.d);
  }
  scares(smiley) {
    if (
      collideRectCircle(
        smiley.x,
        smiley.y,
        smiley.d,
        smiley.d,
        this.x,
        this.y,
        this.d * 5
      )
    ) {
      smiley.isHappy = false;
      return true;
    } else {
      smiley.isHappy = true;
      return false;
    }
  }
  eats(smiley) {
    if (
      collideRectCircle(
        smiley.x,
        smiley.y,
        smiley.d,
        smiley.d,
        this.x,
        this.y,
        this.d
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
