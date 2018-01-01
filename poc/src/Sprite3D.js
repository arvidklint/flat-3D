class Sprite3D {
    constructor({
        image,
        x = 0,
        y = 0,
        width = 32,
        height = 32,
        rotation = 0,
    }) {
        this.image = image
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.rotation = rotation
    }

    draw(ctx) {
        ctx.save()
        for(let i = 0; i < this.image.width / this.width; i++) {
            ctx.translate(this.x, this.y - i)
            ctx.rotate(this.rotation)
            ctx.drawImage(this.image, this.width * i, 0, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height)
            ctx.rotate(-this.rotation)
            ctx.translate(-this.x, -this.y + i)
        }
        ctx.restore()
    }

    deltaRotate(angle) {
        this.rotation += angle
    }

    moveForward(speed) {
        this.x += Math.cos(this.rotation) * speed
        this.y += Math.sin(this.rotation) * speed
    }
}

export default Sprite3D
