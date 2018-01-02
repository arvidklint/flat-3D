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
  GET_VIEWER_SCALE,
} from './getters'

import {
  GET_CANVAS_LOADED,
  GET_CANVAS_IMAGE,
} from '../canvas'

export const RENDER_VIEWER = 'RENDER_VIEWER'
export const INIT_VIEWER = 'INIT_VIEWER'
export const START_VIEWER = 'START_VIEWER'
export const SET_VIEWER_SCALE = 'SET_VIEWER_SCALE'

let ticker = {}

export default {
  [INIT_VIEWER]: (store) => {
    const canvas = document.getElementById('viewer-canvas')
    const context = canvas.getContext('2d')
    store.commit(SET_VIEWER_CANVAS, { canvas })
    store.commit(SET_VIEWER_CONTEXT, { context })
    store.dispatch(START_VIEWER)
  },
  [START_VIEWER]: (store) => {
    store.dispatch(SET_VIEWER_SCALE)
    ticker = setInterval(() => {
      store.dispatch(RENDER_VIEWER)
    }, 1 / 60 * 1000)
  },
  [SET_VIEWER_SCALE]: (store) => {
    const ctx = store.getters[GET_VIEWER_CONTEXT]
    const scale = store.getters[GET_VIEWER_SCALE]
    ctx.scale(scale, scale)
  },
  [RENDER_VIEWER]: (store) => {
    
  },
}
