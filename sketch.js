var scl = 40;
var pacman;
var maze;

function setup() {
  createCanvas(600, 840);
  pacman = new Pacman();
  maze = new Maze();
}

function draw() {
  background(0);

  if (frameCount % 15 == 0) {
    pacman.update();
  }

  pacman.checkPortal();
  pacman.show();
  maze.show();
}

function keyPressed() {
  var arrowKeyCodes = [37,38,39,40];
  if (keyCode == LEFT_ARROW) {
    pacman.setDir(-1,0);
  }

  if (keyCode == RIGHT_ARROW) {
    pacman.setDir(1,0);
  }

  if (keyCode == DOWN_ARROW) {
    pacman.setDir(0,1);
  }

  if (keyCode == UP_ARROW) {
    pacman.setDir(0,-1);
  }
}
