const loadImage = (imgPath) => {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => {
            resolve(image)
        }
        image.src = imgPath
    })
}

export default loadImage
