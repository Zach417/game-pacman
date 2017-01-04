function Food (x,y) {
  this.x = x;
  this.y = y;

  this.show = function () {
    push();
    strokeWeight(1/10*scl);
    stroke('white');
    point((this.x*scl)+floor(scl/2), (this.y*scl)+floor(scl/2));
    pop();
  }
}
