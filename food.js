function Food (x,y) {
  this.x = x;
  this.y = y;
  this.strokeWeight = 1/10*scl;
  this.type = "normal";

  this.mega = function () {
    this.strokeWeight = 4/10*scl;
    this.type = "mega";
  }

  this.show = function () {
    push();
    strokeWeight(this.strokeWeight);
    stroke('white');
    point((this.x*scl)+floor(scl/2), (this.y*scl)+floor(scl/2));
    pop();
  }
}
