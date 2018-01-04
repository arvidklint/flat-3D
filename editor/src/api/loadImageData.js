const loadImageData = (imgPath) => {
  return new Promise((resolve, reject) => {
    if (!document) {
      reject('document is not loaded')
    }
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const image = new Image()
    image.onload = () => {
      ctx.drawImage(image, 0, 0)
      let imageData = ctx.createImageData(image.width, image.height)
      imageData.data = ctx.getImageData(0, 0, image.width, image.height)
      resolve(imageData)
    }
    image.onerror = (error) => {
      reject(`error loading image: ${error}`)
    }
    image.src = imgPath
  })
}

export default loadImageData
