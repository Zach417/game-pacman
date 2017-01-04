function Pacman () {
  this.dir = createVector(0,0);
  this.pos = createVector(7, 15);

  this.checkPortal = function () {
    if (this.pos.x <= -1 && this.pos.y == 9) {
      this.pos.x = 14;
    } else if (this.pos.x >= 15 && this.pos.y == 9) {
      this.pos.x = 0;
    }
  }

  this.setDir = function (x,y) {
    if (this.dir.x == 0 && this.dir.y == 0) {
      this.dir.x = x;
      this.dir.y = y;
      return;
    }

    if (x == 0 && y == 0) {
      this.dir.x = x;
      this.dir.y = y;
      return;
    }

    var movementParallel = true;
    if (this.dir.x != x && this.dir.y == y) {
      movementParallel = false;
    } else if (this.dir.x == x && this.dir.y != y) {
      movementParallel = false;
    }

    if (!movementParallel) {
        this.dir.x = x;
        this.dir.y = y;
    } else {
      var newX = this.pos.x + x;
      var newY = this.pos.y + y;
      if (!maze.contains(newX, newY)) {
          this.dir.x = x;
          this.dir.y = y;
      }
    }
  }

  this.update = function () {
    this.checkCollision();
    this.pos.add(this.dir);
    this.checkPortal();
  }

  this.checkCollision = function () {
    var newX = this.pos.x + this.dir.x;
    var newY = this.pos.y + this.dir.y;
    if (maze.contains(newX, newY)) {
      this.setDir(0,0);
    }
  }

  this.show = function () {
    push();
    strokeWeight(3/4*scl);
    stroke('yellow');
    point((this.pos.x*scl)+floor(scl/2), (this.pos.y*scl)+floor(scl/2));
    pop();
  }
}
