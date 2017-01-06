function Ghost (x, y) {
  this.dir = createVector(0,0);
  this.pos = createVector(x,y);
  this.color = 'red';
  this.consumable = false;
  this.consumableColor = "blue";
  this.consumedTimer = -1;

  this.setConsumable = function () {
    this.consumable = true;
    this.consumedTimer = 0;
  }

  this.checkPortal = function () {
    if (this.pos.x <= -1 && this.pos.y == 9) {
      this.pos.x = 14;
    } else if (this.pos.x >= 15 && this.pos.y == 9) {
      this.pos.x = 0;
    }
  }

  this.setDir = function (x,y) {
    this.dir.x = x;
    this.dir.y = y;
  }

  this.update = function () {
    this.stepConsumedTimer();
    this.calculateDirection();
    this.checkCollision();
    this.pos.add(this.dir);
    this.checkPortal();
  }

  this.calculateDirection = function () {
    var left = !maze.contains(this.pos.x - 1, this.pos.y);
    var right = !maze.contains(this.pos.x + 1, this.pos.y);
    var up = !maze.contains(this.pos.x, this.pos.y - 1);
    var down = !maze.contains(this.pos.x, this.pos.y + 1);

    // make is so they don't randomly turn around
    if (this.dir.x == -1 && this.dir.y == 0) {
      right = false;
    } else if (this.dir.x == 1 && this.dir.y == 0) {
      left = false;
    } else if (this.dir.x == 0 && this.dir.y == -1) {
      down = false;
    } else if (this.dir.x == 0 && this.dir.y == 1) {
      up = false;
    }

    var dirs = [];
    if (left) {
      dirs.push([-1,0]);
    }
    if (right) {
      dirs.push([1,0]);
    }
    if (up) {
      dirs.push([0,-1]);
    }
    if (down) {
      dirs.push([0,1]);
    }

    if (dirs.length > 0) {
      var dir = dirs[floor(random()*dirs.length)];
      this.setDir(dir[0],dir[1]);
    }
  }

  this.checkCollision = function () {
    var newX = this.pos.x + this.dir.x;
    var newY = this.pos.y + this.dir.y;
    if (maze.contains(newX, newY)) {
      this.setDir(0,0);
    }
  }

  this.stepConsumedTimer = function () {
    var consumedTimerLength = 25;
    if (this.consumedTimer >= 0 && this.consumedTimer < consumedTimerLength) {
      this.consumedTimer += 1;
    } else if (this.consumedTimer === consumedTimerLength) {
      this.consumable = false;
      this.consumedTimer = -1;
    }

    if (this.consumedTimer == consumedTimerLength - 5) {
      this.consumableColor = this.color;
    } else if (this.consumedTimer == consumedTimerLength - 4) {
      this.consumableColor = "blue";
    } else if (this.consumedTimer == consumedTimerLength - 3) {
      this.consumableColor = this.color;
    } else if (this.consumedTimer == consumedTimerLength - 2) {
      this.consumableColor = "blue";
    } else if (this.consumedTimer == consumedTimerLength - 1) {
      this.consumableColor = this.color;
    } else if (this.consumedTimer == consumedTimerLength) {
      this.consumableColor = "blue";
    }
  }

  this.show = function () {
    push();
    strokeWeight(3/4*scl);
    if (this.consumable === true) {
      stroke(this.consumableColor);
    } else {
      stroke(this.color);
    }
    point((this.pos.x*scl)+floor(scl/2), (this.pos.y*scl)+floor(scl/2));
    pop();
  }
}
