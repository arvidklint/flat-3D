export const SET_VIEWER_CONTEXT = 'SET_VIEWER_CONTEXT'
export const SET_VIEWER_CANVAS = 'SET_VIEWER_CANVAS'
export const SET_VIEWER_ROTATION = 'SET_VIEWER_ROTATION'

export default {
  [SET_VIEWER_CONTEXT]: (state, payload) => {
    state.context = payload.context
  },
  [SET_VIEWER_ROTATION]: (state, payload) => {
    state.rotation += payload.deltaRotation
  },
  [SET_VIEWER_CANVAS]: (state, payload) => {
    state.canvas = payload.canvas
  },
}