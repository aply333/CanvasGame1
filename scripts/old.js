
  update(limits) {
    if (north) {
      if (this.y > 0) {
        let check = 0;
        for (let i = 0; i < limits.length; i++) {
          if (
            (limits[i].y === this.y - this.bind &&
              limits[i].x <= this.x &&
              this.x <= limits[i].x + this.bind) ||
            (limits[i].y === this.y - this.bind &&
              limits[i.x] <= this.x + this.bind &&
              this.x + this.bind <= limits[i].x)
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
            limits[i].y <=  .y &&
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
        if (check === 0) {
          this.x -= this.speed;
        }
      }
    }
  }

  function limitCheck(dir, approach, x, y) {
    let check = 0;
    if (dir === "north" || dir === "south") {
      for (let i = 0; limits.length; i++) {
        console.log(limits[i]);
        if (
          limits[i].y === limits[i].sizeY * approach + y &&
          limits[i].x <= x &&
          x <= limits[i].x + limits[i].sizeY * approach
        ) {
          check++;
        }
      }
    } else {
      for (let i = 0; limits.length; i++) {}
    }
    return check > 0 ? false : true;
  }



        // if(
        //   arr[i].x === this.x + arr[i].sizeX * approach &&
        //   arr[i].y <= this.y + this.sizeY &&
        //   arr[i].y + arr[i].sizeY >= this.y + this.sizeY
        // ){
        //   console.log("trigger")
        //   check++
        // }



//  Old Collision:
if (dir === "vert") {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].y === this.y + arr[i].sizeY * approach &&
      arr[i].x < this.x &&
      arr[i].x + arr[i].sizeX > this.x
    ) {
      check++;
    } else if (
      arr[i].y === this.y + arr[i].sizeY * approach &&
      arr[i].x < this.x + this.width &&
      arr[i].x + arr[i].sizeX >= this.x + this.width
    ) {
      check++;
    }
  }
} else {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].x === this.x + arr[i].sizeX * approach &&
      arr[i].y <= this.y &&
      arr[i].y + arr[i].sizeY > this.y
    ) {
      check++;
    } else if (
      arr[i].x === this.x + arr[i].sizeX * approach &&
      arr[i].y < this.y + this.height &&
      arr[i].y + arr[i].sizeY >= this.y + this.height
    ) {
      check++;
    }
  }
}