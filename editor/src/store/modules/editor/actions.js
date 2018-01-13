import loadImage from '../../../api/loadImage'

import setSmoothContext from '../../../util/setSmoothContext'

import {
  GET_EDITOR_BASE_CANVAS,
  GET_EDITOR_BASE_CONTEXT,
  GET_EDITOR_MODEL_CANVAS,
  GET_EDITOR_MODEL_CONTEXT,
  GET_EDITOR_IMAGE_DATA,
  GET_EDITOR_TRANSFORM,
  GET_EDITOR_LOADED,
  GET_EDITOR_LAYER,
  GET_EDITOR_MAX_LAYER,
  GET_EDITOR_MIN_LAYER,
  GET_EDITOR_SCALE,
} from './getters'

import {
  SET_EDITOR_BASE_CANVAS,
  SET_EDITOR_BASE_CONTEXT,
  SET_EDITOR_MODEL_CANVAS,
  SET_EDITOR_MODEL_CONTEXT,
  SET_EDITOR_LOADED,
  SET_EDITOR_SCALE,
  CHANGE_EDITOR_LAYER_BY,
} from './mutations'

export const INIT_EDITOR = 'INIT_EDITOR'
export const RENDER_EDITOR = 'RENDER_EDITOR'
export const INCREMENT_LAYER = 'INCREMENT_LAYER'
export const DECREMENT_LAYER = 'DECREMENT_LAYER'
export const SCALE_EDITOR_CANVAS = 'SCALE_EDITOR_CANVAS'
export const SET_EDITOR_PIXEL = 'SET_EDITOR_PIXEL'
export const SET_EDITOR_IMAGE = 'SET_EDITOR_IMAGE'

export default {
  [INIT_EDITOR]: (store, payload) => {
    const baseCanvas = document.getElementById('editor-canvas')
    const baseContext = baseCanvas.getContext('2d')
    setSmoothContext(baseContext, false)
    store.commit(SET_EDITOR_BASE_CANVAS, { canvas: baseCanvas })
    store.commit(SET_EDITOR_BASE_CONTEXT, { context: baseContext })

    loadImage('./static/sliced-boat.png')
      .then((image) => {
        store.dispatch(SET_EDITOR_IMAGE, { image })
      }).catch((error) => {
        console.log(error)
      })
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
  [SET_EDITOR_PIXEL]: (store, payload) => {
    const {
      x,
      y,
      color,
    } = payload
    const modelContext = store.getters[GET_EDITOR_MODEL_CONTEXT]
    const {
      size: {
        width,
      },
    } = store.getters[GET_EDITOR_TRANSFORM]
    const layer = store.getters[GET_EDITOR_LAYER]

    modelContext.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a / 255})`
    modelContext.fillRect(x + width * layer, y, 1, 1)
    store.dispatch(RENDER_EDITOR)
  },
  [SET_EDITOR_IMAGE]: (store, payload) => {
    const modelCanvas = document.createElement('canvas')
    const modelContext = modelCanvas.getContext('2d')
    const image = payload.image
    modelCanvas.width = image.width
    modelCanvas.height = image.height
    modelContext.drawImage(image, 0, 0)
    store.commit(SET_EDITOR_MODEL_CANVAS, { canvas: modelCanvas })
    store.commit(SET_EDITOR_MODEL_CONTEXT, { context: modelContext })
    store.commit(SET_EDITOR_LOADED, { loaded: true })
    store.dispatch(RENDER_EDITOR)
  },
  [RENDER_EDITOR]: (store) => {
    if (!store.getters[GET_EDITOR_LOADED]) {
      return
    }

    const {
      getters
    } = store
    const baseCanvas = getters[GET_EDITOR_BASE_CANVAS]
    const baseContext = getters[GET_EDITOR_BASE_CONTEXT]
    const modelCanvas = getters[GET_EDITOR_MODEL_CANVAS]

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

    baseContext.clearRect(0, 0, baseCanvas.width, baseCanvas.height)
    baseContext.save()
    baseContext.translate(x, y)
    baseContext.scale(scale, scale)
    baseContext.drawImage(modelCanvas, width * layer, 0, width, height, -width / 2, -height / 2, width, height)
    baseContext.beginPath()
    baseContext.rect(-width / 2, -height / 2, width, height)
    baseContext.stroke()
    baseContext.closePath()
    baseContext.restore()
  },
}
