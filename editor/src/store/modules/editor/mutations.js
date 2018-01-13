export const CHANGE_EDITOR_LAYER_BY = 'CHANGE_EDITOR_LAYER_BY'
export const SET_EDITOR_BASE_CANVAS = 'SET_EDITOR_BASE_CANVAS'
export const SET_EDITOR_BASE_CONTEXT = 'SET_EDITOR_BASE_CONTEXT'
export const SET_EDITOR_MODEL_CANVAS = 'SET_EDITOR_MODEL_CANVAS'
export const SET_EDITOR_MODEL_CONTEXT = 'SET_EDITOR_MODEL_CONTEXT'
export const SET_EDITOR_CANVAS = 'SET_EDITOR_CANVAS'
export const SET_EDITOR_LOADED = 'SET_EDITOR_LOADED'
export const SET_EDITOR_SCALE = 'SET_EDITOR_SCALE'
export const SET_EDITOR_COLOR_RGBA = 'SET_EDITOR_COLOR_RGBA'
export const SET_EDITOR_TRANSFORM_SIZE = 'SET_EDTIOR_TRANSFORM_SIZE'
export const SET_EDITOR_MAX_LAYER = 'SET_EDITOR_MAX_LAYER'
export const SET_EDTIOR_LAYER = 'SET_EDTIOR_LAYER'

export default {
  [CHANGE_EDITOR_LAYER_BY]: (state, payload) => {
    state.layer += payload.change
  },
  [SET_EDITOR_BASE_CANVAS]: (state, payload) => {
    state.baseCanvas = payload.canvas
  },
  [SET_EDITOR_BASE_CONTEXT]: (state, payload) => {
    state.baseContext = payload.context
  },
  [SET_EDITOR_MODEL_CANVAS]: (state, payload) => {
    state.modelCanvas = payload.canvas
  },
  [SET_EDITOR_MODEL_CONTEXT]: (state, payload) => {
    state.modelContext = payload.context
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
  [SET_EDITOR_COLOR_RGBA]: (state, payload) => {
    state.color = payload.color
  },
  [SET_EDITOR_TRANSFORM_SIZE]: (state, payload) => {
    state.transform.size.width = payload.width
    state.transform.size.height = payload.height
  },
  [SET_EDTIOR_LAYER]: (state, payload) => {
    state.layer = payload.layer
  },
  [SET_EDITOR_MAX_LAYER]: (state, payload) => {
    state.maxLayer = payload.maxLayer
  },
}
