export const INIT_CANVAS = 'INIT_CANVAS'

import loadImage from '../../../api/loadImage'

import {
  SET_CANVAS_IMAGE,
  SET_CANVAS_CONTEXT,
  SET_CANVAS_LOADED,
} from './mutations'

export default {
  [INIT_CANVAS]: (store, payload) => {
    const canvas = document.getElementById('editor-canvas')
    const context = canvas.getContext('2d')
    store.commit(SET_CANVAS_CONTEXT, { context })

    loadImage('./static/sliced-boat.png')
      .then((image) => {
        store.commit(SET_CANVAS_IMAGE, { image })
        store.commit(SET_CANVAS_LOADED, { loaded: true })
      }).catch((error) => {
        console.log(error)
      })
  },
}
