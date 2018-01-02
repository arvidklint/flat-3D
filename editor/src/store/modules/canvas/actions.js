import loadImage from '../../../api/loadImage'

import {
  GET_CANVAS_CANVAS,
  GET_CANVAS_CONTEXT,
  GET_CANVAS_IMAGE,
  GET_CANVAS_TRANSFORM,
  GET_CANVAS_LOADED,
  GET_CANVAS_LAYER,
  GET_CANVAS_MAX_LAYER,
  GET_CANVAS_MIN_LAYER,
} from './getters'

import {
  SET_CANVAS_IMAGE,
  SET_CANVAS_CONTEXT,
  SET_CANVAS_CANVAS,
  SET_CANVAS_LOADED,
  CHANGE_CANVAS_LAYER_BY,
} from './mutations'

export const INIT_CANVAS = 'INIT_CANVAS'
export const RENDER_CANVAS = 'RENDER_CANVAS'
export const INCREMENT_LAYER = 'INCREMENT_LAYER'
export const DECREMENT_LAYER = 'DECREMENT_LAYER'

export default {
  [INIT_CANVAS]: (store) => {
    const canvas = document.getElementById('editor-canvas')
    const context = canvas.getContext('2d')
    store.commit(SET_CANVAS_CANVAS, { canvas })
    store.commit(SET_CANVAS_CONTEXT, { context })

    loadImage('./static/sliced-boat.png')
      .then((image) => {
        store.commit(SET_CANVAS_IMAGE, { image })
        store.commit(SET_CANVAS_LOADED, { loaded: true })
        store.dispatch(RENDER_CANVAS)
      }).catch((error) => {
        console.log(error)
      })
  },
  [INCREMENT_LAYER]: (store) => {
    const getters = store.getters
    const maxLayer = getters[GET_CANVAS_MAX_LAYER]
    const layer = getters[GET_CANVAS_LAYER]
    if (layer + 1 > maxLayer) {
      return
    }
    store.commit(CHANGE_CANVAS_LAYER_BY, { change: 1 })
    store.dispatch(RENDER_CANVAS)
  },
  [DECREMENT_LAYER]: (store) => {
    const getters = store.getters
    const minLayer = getters[GET_CANVAS_MIN_LAYER]
    const layer = getters[GET_CANVAS_LAYER]
    if (layer - 1 < minLayer) {
      return
    }
    store.commit(CHANGE_CANVAS_LAYER_BY, { change: -1 })
    store.dispatch(RENDER_CANVAS)
  },
  [RENDER_CANVAS]: (store) => {
    if (!store.getters[GET_CANVAS_LOADED]) {
      return
    }

    const {
      getters
    } = store
    const canvas = getters[GET_CANVAS_CANVAS]
    const ctx = getters[GET_CANVAS_CONTEXT]

    
    const image = getters[GET_CANVAS_IMAGE]
    const {
      x,
      y,
      width,
      height,
    } = getters[GET_CANVAS_TRANSFORM]
    
    const layer = getters[GET_CANVAS_LAYER]
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.translate(x, y)
    ctx.drawImage(image, width * layer, 0, width, height, -width / 2, -height / 2, width, height)
    ctx.restore()
  },
}
