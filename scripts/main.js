const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_CONSTANTS = {
    width: 1200,
    height: 600
}

canvas.width = CANVAS_CONSTANTS.width
canvas.height = CANVAS_CONSTANTS.height

let gameTime = 0;
const fps = 64;
let grounded = false;
let north = false;
let south = true;
let east = false;
let west = false;

let sprint = false;

function animate(){
    ctx.clearRect(0, 0, CANVAS_CONSTANTS.width, CANVAS_CONSTANTS.height)
    if(gameTime < fps){
        gameTime++
    }else{
        gameTime = 0
    }
    gameMap.render()
    player.update(gameMap.collisions)
    player.render(gameTime)
    requestAnimationFrame(animate)
}
animate();


document.addEventListener("keydown", e => {

    // if(e.key ==="s"){
    //     south = true
    // }
    if(e.key ==="d"){
        east = true
    }
    if(e.key === "a"){
        west = true
    }
    if(e.key === "Shift"){
        sprint = true
    }
})

document.addEventListener("keyup", e => {
    if(e.key ==='w'){
        north = true;
        south = false;
        grounded = false;
    }
    // if(e.key === 'w'){
    //     north = false
    //     south = true
    // }
    // if(e.key === 's'){
    //     south = false
    // }
    if(e.key === 'd'){
        east = false
    }
    if(e.key === 'a'){
        west = false
    }
    if(e.key === "Shift"){
        sprint = false
    }
})