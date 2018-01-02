export const GET_VIEWER_CONTEXT = 'GET_VIEWER_CONTEXT'
export const GET_VIEWER_CANVAS = 'GET_VIEWER_CANVAS'
export const GET_VIEWER_TRANSFORM = 'GET_VIEWER_TRANSFORM'
export const GET_VIEWER_POSITION = 'GET_VIEWER_POSITION'
export const GET_VIEWER_SIZE = 'GET_VIEWER_SIZE'
export const GET_VIEWER_DELTA_ROTATION = 'GET_VIEWER_DELTA_ROTATION'
export const GET_VIEWER_SCALE = 'GET_VIEWER_SCALE'

export default {
  [GET_VIEWER_CONTEXT]: (state) => {
    return state.context
  },
  [GET_VIEWER_CANVAS]: (state) => {
    return state.canvas
  },
  [GET_VIEWER_TRANSFORM]: (state) => {
    return state.transform
  },
  [GET_VIEWER_POSITION]: (state, getters) => {
    return getters[GET_VIEWER_TRANSFORM].position
  },
  [GET_VIEWER_SIZE]: (state, getters) => {
    return getters[GET_VIEWER_TRANSFORM].size
  },
  [GET_VIEWER_DELTA_ROTATION]: (state, getters) => {
    return getters[GET_VIEWER_TRANSFORM].deltaRotation
  },
  [GET_VIEWER_SCALE]: (state, getters) => {
    return getters[GET_VIEWER_TRANSFORM].scale
  }
}