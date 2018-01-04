export const GET_EDITOR_BASE_CANVAS = 'GET_EDITOR_BASE_CANVAS'
export const GET_EDITOR_BASE_CONTEXT = 'GET_EDITOR_BASE_CONTEXT'
export const GET_EDITOR_MODEL_CANVAS = 'GET_EDITOR_MODEL_CANVAS'
export const GET_EDITOR_MODEL_CONTEXT = 'GET_EDITOR_MODEL_CONTEXT'
export const GET_EDITOR_LAYER = 'GET_EDITOR_LAYER'
export const GET_EDITOR_MAX_LAYER = 'GET_EDITOR_MAX_LAYER'
export const GET_EDITOR_MIN_LAYER = 'GET_EDITOR_MIN_LAYER'
export const GET_EDITOR_WIDTH = 'GET_EDITOR_WIDTH'
export const GET_EDITOR_HEIGHT = 'GET_EDITOR_HEIGHT'
export const GET_EDITOR_LOADED = 'GET_EDITOR_LOADED'
export const GET_EDITOR_TRANSFORM = 'GET_EDITOR_TRANSFORM'
export const GET_EDITOR_SIZE = 'GET_EDITOR_SIZE'
export const GET_EDITOR_POSITION = 'GET_EDITOR_POSITION'
export const GET_EDITOR_SCALE = 'GET_EDITOR_SCALE'
export const GET_EDITOR_CANVAS_WIDTH = 'GET_EDITOR_CANVAS_WIDTH'
export const GET_EDITOR_CANVAS_HEIGHT = 'GET_EDITOR_CANVAS_HEIGHT'
export const GET_EDITOR_COLOR = 'GET_EDITOR_COLOR'

export default {
  [GET_EDITOR_BASE_CANVAS]: (state) => {
    return state.baseCanvas
  },
  [GET_EDITOR_BASE_CONTEXT]: (state) => {
    return state.baseContext
  },
  [GET_EDITOR_MODEL_CANVAS]: (state) => {
    return state.modelCanvas
  },
  [GET_EDITOR_MODEL_CONTEXT]: (state) => {
    return state.modelContext
  },
  [GET_EDITOR_LAYER]: (state) => {
    return state.layer
  },
  [GET_EDITOR_MAX_LAYER]: (state) => {
    return state.maxLayer
  },
  [GET_EDITOR_MIN_LAYER]: (state) => {
    return state.minLayer
  },
  [GET_EDITOR_WIDTH]: (state, getters) => {
    return state.width
  },
  [GET_EDITOR_HEIGHT]: (state, getters) => {
    return state.height
  },
  [GET_EDITOR_TRANSFORM]: (state) => {
    return state.transform
  },
  [GET_EDITOR_POSITION]: (state, getters) => {
    return getters[GET_EDITOR_TRANSFORM].position
  },
  [GET_EDITOR_SIZE]: (state, getters) => {
    return getters[GET_EDITOR_TRANSFORM].size
  },
  [GET_EDITOR_SCALE]: (state, getters) => {
    return getters[GET_EDITOR_TRANSFORM].scale
  },
  [GET_EDITOR_CANVAS_WIDTH]: (state, getters) => {
    return getters[GET_EDITOR_SIZE].width
  },
  [GET_EDITOR_CANVAS_HEIGHT]: (state, getters) => {
    return getters[GET_EDITOR_SIZE].height
  },
  [GET_EDITOR_LOADED]: (state) => {
    return state.loaded
  },
  [GET_EDITOR_COLOR]: (state) => {
    return state.color
  },
}
