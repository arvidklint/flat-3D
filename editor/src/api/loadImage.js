const loadImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.onerror = (error) => {
      reject(`error loading image: ${error}`)
    }
    image.src = imgPath
  })
}

export default loadImage
