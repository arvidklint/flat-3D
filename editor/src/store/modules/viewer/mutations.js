export const SET_VIEWER_CONTEXT = 'SET_VIEWER_CONTEXT'
export const SET_VIEWER_EDITOR = 'SET_VIEWER_EDITOR'
export const SET_VIEWER_ROTATION = 'SET_VIEWER_ROTATION'
export const SET_VIEWER_SCALE = 'SET_VIEWER_SCALE'

export default {
  [SET_VIEWER_CONTEXT]: (state, payload) => {
    state.context = payload.context
  },
  [SET_VIEWER_ROTATION]: (state, payload) => {
    state.transform.rotation += payload.deltaRotation
  },
  [SET_VIEWER_EDITOR]: (state, payload) => {
    state.canvas = payload.canvas
  },
  [SET_VIEWER_SCALE]: (state, payload) => {
    state.transform.scale = payload.scale
  },
}