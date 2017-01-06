var scl = 30;
var maze;
var button;

function setup() {
  createCanvas(15*scl, 21*scl);
  maze = new Maze();
  maze.initialize();

  button = createButton('Start/Reset');
  button.position(0, height+scl);
  button.mousePressed(reset);
}

function draw() {
  background(0);
  maze.update();
  maze.show();
}

function reset() {
  maze.start();
}

function keyPressed() {
  var arrowKeyCodes = [37,38,39,40];

  if (arrowKeyCodes.includes(keyCode) && maze.status != "start") {
    maze.start();
  }

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
