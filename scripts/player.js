class Player {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.speed = 10;
  }

  update(limits) {
    if (north) {
      if (this.y > 0) {
        let check = 0;
        for (let i = 0; i < limits.length; i++) {
          if (
            limits[i].y === this.y - 50 &&
            limits[i].x <= this.x &&
            this.x <= limits[i].x + 50
          ) {
            check++;
          }
        }
        if (check === 0) {
          this.y -= this.speed;
        }
      }
    }
    if (south) {
      if (this.y < 550) {
        let check = 0;
        for (let i = 0; i < limits.length; i++) {
          if (
            limits[i].y === this.y + 50 &&
            limits[i].x <= this.x &&
            this.x <= limits[i].x + 50
          ) {
            check++;
          }
        }
        if (check === 0) {
          this.y += this.speed;
        }
      }
    }

    if (east) {
      if (this.x < 1150) {
        let check = 0;
        for (let i = 0; i < limits.length; i++) {
          if (
            limits[i].x === this.x + 50 &&
            limits[i].y <= this.y &&
            this.y <= limits[i].y + 50
          ) {
            check++;
          }
        }
        if (check === 0) {
          this.x += this.speed;
        }
      }
    }
    if (west) {
      if (this.x > 0) {
        let check = 0;
        for (let i = 0; i < limits.length; i++) {
          if (
            limits[i].x === this.x - 50 &&
            limits[i].y <= this.y &&
            this.y <= limits[i].y + 50
          ) {
            check++;
          }
        }
        if(check===0){
        this.x -= this.speed;
}      }
    }
  }
  render() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const player = new Player();
