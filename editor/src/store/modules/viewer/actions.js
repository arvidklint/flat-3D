import {
  SET_VIEWER_CONTEXT,
  SET_VIEWER_CANVAS,
  SET_VIEWER_ROTATION,
} from './mutations'

import {
  GET_VIEWER_CONTEXT,
  GET_VIEWER_CANVAS,
  GET_VIEWER_POSITION,
  GET_VIEWER_SIZE,
  GET_VIEWER_ROTATION,
  GET_VIEWER_DELTA_ROTATION,
} from './getters'

import {
  GET_CANVAS_LOADED,
  GET_CANVAS_IMAGE,
} from '../canvas'

export const RENDER_VIEWER = 'RENDER_VIEWER'
export const INIT_VIEWER = 'INIT_VIEWER'

export default {
  [INIT_VIEWER]: (store) => {
    const canvas = document.getElementById('viewer-canvas')
    const context = canvas.getContext('2d')
    store.commit(SET_VIEWER_CANVAS, { canvas })
    store.commit(SET_VIEWER_CONTEXT, { context })
    store.dispatch(RENDER_VIEWER)
  },
  [RENDER_VIEWER]: (store) => {
    if (!store.getters[GET_CANVAS_LOADED]) {
      window.requestAnimationFrame(() => {
        store.dispatch(RENDER_VIEWER)
      })
      return
    }

    
    const canvas = store.getters[GET_VIEWER_CANVAS]
    const ctx = store.getters[GET_VIEWER_CONTEXT]

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const {
      x,
      y,
    } = store.getters[GET_VIEWER_POSITION]
    const {
      width,
      height,
    } = store.getters[GET_VIEWER_SIZE]
    const rotation = store.getters[GET_VIEWER_ROTATION]
    const image = store.getters[GET_CANVAS_IMAGE]

    ctx.save()
    for(let i = 0; i < image.width / width; i++) {
        ctx.translate(x, y - i)
        ctx.rotate(rotation)
        ctx.drawImage(image, width * i, 0, width, height, -width / 2, -height / 2, width, height)
        ctx.rotate(-rotation)
        ctx.translate(-x, -y + i)
    }
    ctx.restore()

    const deltaRotation = store.getters[GET_VIEWER_DELTA_ROTATION]
    store.commit(SET_VIEWER_ROTATION, { deltaRotation })

    window.requestAnimationFrame(() => {
      store.dispatch(RENDER_VIEWER)
    })
  },
}
