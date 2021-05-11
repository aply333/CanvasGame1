const playerSprite = {};
playerSprite.img = new Image();
playerSprite.img.src = "./scripts/assets/sprites/pc.png";
playerSprite.frames = {
  idle: { layer: 0, length: 9 },
  run: { layer: 1, length: 7 },
  runL: { layer: 7, length: 7 },
  jump: { layer: 2, length: 9 },
  jumpL: { layer: 8, length: 9 },
};

class Player {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.width = 80;
    this.weight = 10;
    this.height = 90;
    this.speed = 5;
    this.jump = 0;
    this.frame = 0;
    this.rate = 4;
    this.animation = playerSprite.frames.idle;
  }

  collision(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].x < this.x + this.width &&
        arr[i].x + arr[i].width > this.x &&
        arr[i].y < this.y + this.speed + this.height &&
        arr[i].y + arr[i].height > this.y
      ) {
        callback(arr[i]);
      }
    }
  }
  limitCheck(arr, direction) {
    let check = true;
    if (direction === "east") {
      this.collision(arr, (point) => {
        if (
          point.x > this.x &&
          point.y > this.y &&
          point.y < this.y + this.height
        ) {
          ctx.fillStyle = "red";
          ctx.fillRect(point.x, point.y, 10, 10);
          check = false;
        }
      });
    }
    if (direction === "west") {
      this.collision(arr, (point) => {
        if (
          point.x < this.x &&
          point.y > this.y &&
          point.y < this.y + this.height
        ) {
          ctx.fillStyle = "red";
          ctx.fillRect(point.x, point.y, 10, 10);
          check = false;
        }
      });
    }
    if (direction === "south") {
      this.collision(arr, (point) => {
        if (
          point.y > this.y &&
          point.x > this.x &&
          point.x < this.x + this.width
        ) {
          ctx.fillStyle = "red";
          ctx.fillRect(point.x, point.y, 10, 10);
          grounded = true;
          this.speed=5
          check = false;
        } else{
          this.speed=8
        }
      });
    }
    return check;
  }

  update(limits) {
    console.log(this.grounded)
    if (sprint) {
      this.speed = 11;
      this.rate = 2;
    } else {
      this.rate = 6;
      this.speed = 5;
    }
    if (north) {
      // if (this.grounded) {
        this.animation = playerSprite.frames.jump;
        this.y -= this.speed;
        if (gameTime % 2.5 === 0) {
          this.jump++;
        }
        if (this.jump === this.animation.length) {
          this.jump = 0;
          north = false;
          south = true;
        }
      }
    // }else{
    //   north = false
    // }

    if (
      south &&
      this.y < 600 - this.height &&
      this.limitCheck(limits, "south")
    ) {
      this.y += this.speed;
    }

    if (east && this.x < 1200 - this.width && this.limitCheck(limits, "east")) {
      this.x += this.speed;
      this.animation = playerSprite.frames.run;
      if (north) {
        this.animation = playerSprite.frames.jump;
      }
    }
    if (west && this.x > 0 && this.limitCheck(limits, "west")) {
      this.x -= this.speed;
      this.animation = playerSprite.frames.runL;
      if (north) {
        this.animation = playerSprite.frames.jumpL;
      }
    }
    if (!east && !west && !north) {
      this.animation = playerSprite.frames.idle;
    }
  }

  render() {
    if (gameTime % this.rate === 0) {
      if (this.frame < this.animation.length) {
        this.frame++;
      } else {
        this.frame = 0;
      }
    }
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      playerSprite.img,
      100 * this.frame,
      100 * this.animation.layer,
      100,
      100,
      this.x,
      this.y,
      100,
      100
    );

    ctx.fillStyle = "black";
  }
}

const player = new Player();
