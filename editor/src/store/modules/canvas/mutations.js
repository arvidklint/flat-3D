export const SET_CURRENT_LAYER = 'SET_CURRENT_LAYER'
export const INCREMENT_LAYER = 'INCREMENT_LAYER'
export const DECREMENT_LAYER = 'DECREMENT_LAYER'
export const SET_CANVAS_IMAGE = 'SET_CANVAS_IMAGE'
export const SET_CANVAS_CONTEXT = 'SET_CANVAS_CONTEXT'
export const SET_CANVAS_LOADED = 'SET_CANVAS_LOADED'

export default {
  [SET_CURRENT_LAYER]: (state, payload) => {
    state.currentLayer = payload.layer
  },
  [INCREMENT_LAYER]: (state) => {
    state.currentLayer++
  },
  [DECREMENT_LAYER]: (state) => {
    state.currentLayer--
  },
  [SET_CANVAS_IMAGE]: (state, payload) => {
    state.image = payload.image
  },
  [SET_CANVAS_CONTEXT]: (state, payload) => {
    state.context = payload.context
  },
  [SET_CANVAS_LOADED]: (state, payload) => {
    state.loaded = payload.loaded
  },
}
