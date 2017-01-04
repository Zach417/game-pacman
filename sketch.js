var scl = 40;
var maze;

function setup() {
  createCanvas(600, 840);
  maze = new Maze();
  maze.initialize();
}

function draw() {
  background(0);

  maze.update();
  maze.show();
}

function keyPressed() {
  var arrowKeyCodes = [37,38,39,40];
  if (keyCode == LEFT_ARROW) {
    maze.pacman.setDir(-1,0);
  } else if (keyCode == RIGHT_ARROW) {
    maze.pacman.setDir(1,0);
  } else if (keyCode == DOWN_ARROW) {
    maze.pacman.setDir(0,1);
  } else if (keyCode == UP_ARROW) {
    maze.pacman.setDir(0,-1);
  }
}
