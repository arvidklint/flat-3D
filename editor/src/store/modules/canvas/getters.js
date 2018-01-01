export const GET_CANVAS = 'GET_CANVAS'
export const GET_CURRENT_LAYER = 'GET_CURRENT_LAYER'
export const GET_CANVAS_WIDTH = 'GET_CANVAS_WIDTH'
export const GET_CANVAS_HEIGHT = 'GET_CANVAS_HEIGHT'
export const GET_CANVAS_LOADED = 'GET_CANVAS_LOADED'
export const GET_CANVAS_IMAGE = 'GET_CANVAS_IMAGE'

export default {
  [GET_CURRENT_LAYER]: (state) => {
    return state.currentLayer
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
}
