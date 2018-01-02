import loadImage from '../../../api/loadImage'

import {
  GET_EDITOR_CANVAS,
  GET_EDITOR_CONTEXT,
  GET_EDITOR_IMAGE,
  GET_EDITOR_TRANSFORM,
  GET_EDITOR_LOADED,
  GET_EDITOR_LAYER,
  GET_EDITOR_MAX_LAYER,
  GET_EDITOR_MIN_LAYER,
  GET_EDITOR_SCALE,
} from './getters'

import {
  SET_EDITOR_IMAGE,
  SET_EDITOR_CONTEXT,
  SET_EDITOR_CANVAS,
  SET_EDITOR_LOADED,
  SET_EDITOR_SCALE,
  CHANGE_EDITOR_LAYER_BY,
} from './mutations'

export const INIT_EDITOR = 'INIT_EDITOR'
export const SET_EDITOR_CONTEXT_SMOOTH = 'SET_EDITOR_CONTEXT_SMOOTH'
export const RENDER_EDITOR = 'RENDER_EDITOR'
export const INCREMENT_LAYER = 'INCREMENT_LAYER'
export const DECREMENT_LAYER = 'DECREMENT_LAYER'
export const SCALE_EDITOR_CANVAS = 'SCALE_EDITOR_CANVAS'

export default {
  [INIT_EDITOR]: (store) => {
    const canvas = document.getElementById('editor-canvas')
    const context = canvas.getContext('2d')
    store.commit(SET_EDITOR_CANVAS, { canvas })
    store.commit(SET_EDITOR_CONTEXT, { context })
    store.dispatch(SET_EDITOR_CONTEXT_SMOOTH, { smooth: false })

    loadImage('./static/sliced-boat.png')
      .then((image) => {
        store.commit(SET_EDITOR_IMAGE, { image })
        store.commit(SET_EDITOR_LOADED, { loaded: true })
        store.dispatch(RENDER_EDITOR)
      }).catch((error) => {
        console.log(error)
      })
  },
  [SET_EDITOR_CONTEXT_SMOOTH]: (store, payload) => {
    const ctx = store.getters[GET_EDITOR_CONTEXT]
    ctx.webkitImageSmoothingEnabled = payload.smooth;
    ctx.mozImageSmoothingEnabled = payload.smooth;
    ctx.imageSmoothingEnabled = payload.smooth;
  },
  [INCREMENT_LAYER]: (store) => {
    const getters = store.getters
    const maxLayer = getters[GET_EDITOR_MAX_LAYER]
    const layer = getters[GET_EDITOR_LAYER]
    if (layer + 1 > maxLayer) {
      return
    }
    store.commit(CHANGE_EDITOR_LAYER_BY, { change: 1 })
    store.dispatch(RENDER_EDITOR)
  },
  [DECREMENT_LAYER]: (store) => {
    const getters = store.getters
    const minLayer = getters[GET_EDITOR_MIN_LAYER]
    const layer = getters[GET_EDITOR_LAYER]
    if (layer - 1 < minLayer) {
      return
    }
    store.commit(CHANGE_EDITOR_LAYER_BY, { change: -1 })
    store.dispatch(RENDER_EDITOR)
  },
  [SCALE_EDITOR_CANVAS]: (store, payload) => {
    const currentScale = store.getters[GET_EDITOR_SCALE]
    store.commit(SET_EDITOR_SCALE, { scale: payload.scale + currentScale })
    store.dispatch(RENDER_EDITOR)
  },
  [RENDER_EDITOR]: (store) => {
    if (!store.getters[GET_EDITOR_LOADED]) {
      return
    }

    const {
      getters
    } = store
    const canvas = getters[GET_EDITOR_CANVAS]
    const ctx = getters[GET_EDITOR_CONTEXT]

    
    const image = getters[GET_EDITOR_IMAGE]
    const {
      position: {
        x,
        y,
      },
      size: {
        width,
        height,
      },
      scale,
    } = getters[GET_EDITOR_TRANSFORM]
    
    const layer = getters[GET_EDITOR_LAYER]
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(scale, scale)
    ctx.drawImage(image, width * layer, 0, width, height, -width / 2, -height / 2, width, height)
    ctx.beginPath()
    ctx.rect(-width / 2, -height / 2, width, height)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  },
}
