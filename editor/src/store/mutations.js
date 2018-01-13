export const SET_NEW_MODAL_IS_OPEN = 'SET_NEW_MODAL_IS_OPEN'

export default {
  [SET_NEW_MODAL_IS_OPEN]: (state, payload) => {
    state.newModalIsOpen = payload.open
  },
}
