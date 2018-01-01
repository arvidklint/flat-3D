export const GET_VIEWER_CONTEXT = 'GET_VIEWER_CONTEXT'
export const GET_VIEWER_CANVAS = 'GET_VIEWER_CANVAS'
export const GET_VIEWER_POSITION = 'GET_VIEWER_POSITION'
export const GET_VIEWER_SIZE = 'GET_VIEWER_SIZE'
export const GET_VIEWER_ROTATION = 'GET_VIEWER_ROTATION'
export const GET_VIEWER_DELTA_ROTATION = 'GET_VIEWER_DELTA_ROTATION'

export default {
  [GET_VIEWER_CONTEXT]: (state) => {
    return state.context
  },
  [GET_VIEWER_CANVAS]: (state) => {
    return state.canvas
  },
  [GET_VIEWER_POSITION]: (state) => {
    return state.position
  },
  [GET_VIEWER_SIZE]: (state) => {
    return state.size
  },
  [GET_VIEWER_ROTATION]: (state) => {
    return state.rotation
  },
  [GET_VIEWER_DELTA_ROTATION]: (state) => {
    return state.deltaRotation
  },
}