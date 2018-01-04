const setSmoothContext = (ctx, smooth) => {
  ctx.webkitImageSmoothingEnabled = smooth;
  ctx.mozImageSmoothingEnabled = smooth;
  ctx.imageSmoothingEnabled = smooth;
  return ctx
}

export default setSmoothContext
