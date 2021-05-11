const testMap = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 14, 15, 15, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 14, 15, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 15, 16, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

const tile1 = new Image();
tile1.src = "./scripts/assets/Tiles/Tile(1).png"
const tile2 = new Image();
tile2.src = "./scripts/assets/Tiles/Tile(2).png"
const tile3 = new Image();
tile3.src = "./scripts/assets/Tiles/Tile(3).png"
const tile4 = new Image();
tile4.src = "./scripts/assets/Tiles/Tile(4).png"
const tile5 = new Image();
tile5.src = "./scripts/assets/Tiles/Tile(5).png"
const tile6 = new Image();
tile6.src = "./scripts/assets/Tiles/Tile(6).png"
const tile7 = new Image();
tile7.src = "./scripts/assets/Tiles/Tile(7).png"
const tile8 = new Image();
tile8.src = "./scripts/assets/Tiles/Tile(8).png"
const tile9 = new Image();
tile9.src = "./scripts/assets/Tiles/Tile(9).png"
const tile10 = new Image();
tile10.src = "./scripts/assets/Tiles/Tile(10).png"
const tile11 = new Image();
tile11.src = "./scripts/assets/Tiles/Tile(11).png"
const tile12 = new Image();
tile12.src = "./scripts/assets/Tiles/Tile(12).png"
const tile13 = new Image();
tile13.src = "./scripts/assets/Tiles/Tile(13).png"
const tile14 = new Image();
tile14.src = "./scripts/assets/Tiles/Tile(14).png"
const tile15 = new Image();
tile15.src = "./scripts/assets/Tiles/Tile(15).png"
const tile16 = new Image();
tile16.src = "./scripts/assets/Tiles/Tile(16).png"

const tileLibrary = {
  0 : undefined,
  1 : tile1,
  2 : tile2,
  3 : tile3,
  4 : tile4,
  5 : tile5,
  6 : tile6,
  7 : tile7,
  8 : tile8,
  9 : tile9,
  10 : tile10,
  11 : tile11,
  12 : tile12,
  13 : tile13,
  14 : tile14,
  15 : tile15,
  16 : tile16
}


function matrixLoop(arr, ret, callback) {
  let newArr = [];
  for (let y = 0; y < arr.length; y++) {
    let rowX = [];
    if (ret === true) {
      for (let x = 0; x < arr[y].length; x++) {
        rowX.push(callback(arr, y, x));
      }
      newArr.push(rowX);
    } else {
      for (let x = 0; x < arr[y].length; x++) {
        callback(arr, y, x);
      }
    }
  }
  return newArr;
}

class Tile{
    constructor(xY){
        this.x = xY.x;
        this.y = xY.y;
        this.width = 50;
        this.height = 50;
    }
}

class Map {
  constructor(blueprint) {
    this.blueprint = blueprint;
    this.size = 50;
    this.collisions = []
  }
  render() {
    this.collisions = []
    matrixLoop(this.blueprint, false, (arr, y, x) => {
      if (arr[y][x] !== 0) {
        let xY = {x: this.size*x, y: this.size*y}
        this.collisions.push(new Tile(xY))
        ctx.fillRect(xY.x, xY.y, this.size, this.size);
        ctx.drawImage(tileLibrary[arr[y][x]], xY.x, xY.y, this.size, this.size)
      }
    });
  }
}

const gameMap = new Map(testMap);
