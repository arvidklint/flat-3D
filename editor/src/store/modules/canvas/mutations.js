export const CHANGE_CANVAS_LAYER_BY = 'CHANGE_CANVAS_LAYER_BY'
export const SET_CANVAS_IMAGE = 'SET_CANVAS_IMAGE'
export const SET_CANVAS_CONTEXT = 'SET_CANVAS_CONTEXT'
export const SET_CANVAS_CANVAS = 'SET_CANVAS_CANVAS'
export const SET_CANVAS_LOADED = 'SET_CANVAS_LOADED'

export default {
  [CHANGE_CANVAS_LAYER_BY]: (state, payload) => {
    state.layer += payload.change
  },
  [SET_CANVAS_IMAGE]: (state, payload) => {
    state.image = payload.image
  },
  [SET_CANVAS_CONTEXT]: (state, payload) => {
    state.context = payload.context
  },
  [SET_CANVAS_CANVAS]: (state, payload) => {
    state.canvas = payload.canvas
  },
  [SET_CANVAS_LOADED]: (state, payload) => {
    state.loaded = payload.loaded
  },
}
