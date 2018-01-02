export const CHANGE_EDITOR_LAYER_BY = 'CHANGE_EDITOR_LAYER_BY'
export const SET_EDITOR_IMAGE = 'SET_EDITOR_IMAGE'
export const SET_EDITOR_CONTEXT = 'SET_EDITOR_CONTEXT'
export const SET_EDITOR_CANVAS = 'SET_EDITOR_CANVAS'
export const SET_EDITOR_LOADED = 'SET_EDITOR_LOADED'
export const SET_EDITOR_SCALE = 'SET_EDITOR_SCALE'

export default {
  [CHANGE_EDITOR_LAYER_BY]: (state, payload) => {
    state.layer += payload.change
  },
  [SET_EDITOR_IMAGE]: (state, payload) => {
    state.image = payload.image
  },
  [SET_EDITOR_CONTEXT]: (state, payload) => {
    state.context = payload.context
  },
  [SET_EDITOR_CANVAS]: (state, payload) => {
    state.canvas = payload.canvas
  },
  [SET_EDITOR_LOADED]: (state, payload) => {
    state.loaded = payload.loaded
  },
  [SET_EDITOR_SCALE]: (state, payload) => {
    state.transform.scale = payload.scale
  },
}
