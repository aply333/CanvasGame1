const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_CONSTANTS = {
    width: 1200,
    height: 600
}

canvas.width = CANVAS_CONSTANTS.width
canvas.height = CANVAS_CONSTANTS.height

let north = false;
let south = false;
let east = false;
let west = false;


function animate(){
    ctx.clearRect(0, 0, CANVAS_CONSTANTS.width, CANVAS_CONSTANTS.height)
    gameMap.render()
    player.update(gameMap.collisions)
    player.render()
    requestAnimationFrame(animate)
}
animate();
console.log(gameMap.collisions[0])

document.addEventListener("keydown", e => {
    if(e.key ==='w'){
        north = true;
    }
    if(e.key ==="s"){
        south = true
    }
    if(e.key ==="d"){
        east = true
    }
    if(e.key === "a"){
        west = true
    }
})

document.addEventListener("keyup", e => {
    if(e.key === 'w'){
        north = false
    }
    if(e.key === 's'){
        south = false
    }
    if(e.key === 'd'){
        east = false
    }
    if(e.key === 'a'){
        west = false
    }
})