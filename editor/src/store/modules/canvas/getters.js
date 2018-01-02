export const GET_CANVAS_CANVAS = 'GET_CANVAS_CANVAS'
export const GET_CANVAS_CONTEXT = 'GET_CANVAS_CONTEXT'
export const GET_CANVAS_LAYER = 'GET_CANVAS_LAYER'
export const GET_CANVAS_MAX_LAYER = 'GET_CANVAS_MAX_LAYER'
export const GET_CANVAS_MIN_LAYER = 'GET_CANVAS_MIN_LAYER'
export const GET_CANVAS_WIDTH = 'GET_CANVAS_WIDTH'
export const GET_CANVAS_HEIGHT = 'GET_CANVAS_HEIGHT'
export const GET_CANVAS_LOADED = 'GET_CANVAS_LOADED'
export const GET_CANVAS_IMAGE = 'GET_CANVAS_IMAGE'
export const GET_CANVAS_TRANSFORM = 'GET_CANVAS_TRANSFORM'

export default {
  [GET_CANVAS_CANVAS]: (state) => {
    return state.canvas
  },
  [GET_CANVAS_CONTEXT]: (state) => {
    return state.context
  },
  [GET_CANVAS_LAYER]: (state) => {
    return state.layer
  },
  [GET_CANVAS_MAX_LAYER]: (state) => {
    return state.maxLayer
  },
  [GET_CANVAS_MIN_LAYER]: (state) => {
    return state.minLayer
  },
  [GET_CANVAS_WIDTH]: (state) => {
    return state.width
  },
  [GET_CANVAS_HEIGHT]: (state) => {
    return state.height
  },
  [GET_CANVAS_LOADED]: (state) => {
    return state.loaded
  },
  [GET_CANVAS_IMAGE]: (state) => {
    return state.image
  },
  [GET_CANVAS_TRANSFORM]: (state) => {
    return state.transform
  },
}
