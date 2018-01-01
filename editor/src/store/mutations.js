export const SET_CURRENT_LAYER = 'SET_CURRENT_LAYER'
export const INCREMENT_LAYER = 'INCREMENT_LAYER'
export const DECREMENT_LAYER = 'DECREMENT_LAYER'

export default {
  [SET_CURRENT_LAYER]: (state, payload) => {
      state.canvas.currentLayer = payload.layer
  },
  [INCREMENT_LAYER]: (state) => {
      state.canvas.currentLayer++
  },
  [DECREMENT_LAYER]: (state) => {
      state.canvas.currentLayer--
  },
}
