export const GET_CANVAS = 'GET_CANVAS'
export const GET_CURRENT_LAYER = 'GET_CURRENT_LAYER'
export const GET_CANVAS_WIDTH = 'GET_CANVAS_WIDTH'
export const GET_CANVAS_HEIGHT = 'GET_CANVAS_HEIGHT'

export default {
  [GET_CANVAS]: state => {
      return state.canvas
  },
  [GET_CURRENT_LAYER]: (state, getters) => {
      return getters[GET_CANVAS].currentLayer
  },
  [GET_CANVAS_WIDTH]: (state, getters) => {
    return getters[GET_CANVAS].width
  },
  [GET_CANVAS_HEIGHT]: (state, getters) => {
    return getters[GET_CANVAS].height
  },
}
