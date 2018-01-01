import loadImage from './util/loadImage'
import Sprite3D from './Sprite3D'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let loaded = false
let sprite

loadImage('./imgs/sliced-boat.png').then((image) => {
    loaded = true
    sprite = new Sprite3D({
        image,
        x: 100,
        y: 100,
        width: 64,
        height: 32,
    })
    window.requestAnimationFrame(loop)
})

let turnRight = false
let turnLeft = false
let moveForward = false

window.onkeydown = (key) => {
    switch(key.key) {
        case 'ArrowRight':
            turnRight = true
            break
        case 'ArrowLeft':
            turnLeft = true
            break
        case 'ArrowUp':
            moveForward = true
    }
}

window.onkeyup = (key) => {
    switch(key.key) {
        case 'ArrowRight':
            turnRight = false
            break
        case 'ArrowLeft':
            turnLeft = false
            break
        case 'ArrowUp':
            moveForward = false
    }
}

const input = () => {
    if (turnRight) {
        sprite.deltaRotate(0.05)
    }

    if (turnLeft) {
        sprite.deltaRotate(-0.05)
    }

    if (moveForward) {
        sprite.moveForward(2)
    }
}

const loop = () => {
    input()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    sprite.draw(ctx)
    window.requestAnimationFrame(loop)
}
