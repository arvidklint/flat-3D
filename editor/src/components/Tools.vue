<template>
  <div class="tools">
    <div class="layers">
      Layer: 
      <button v-on:click="DECREMENT_LAYER">-</button>
        {{ currentLayer }} / {{ maxLayer }}
      <button v-on:click="INCREMENT_LAYER">+</button>
    </div>
    <div>
      Zoom:
      <button v-on:click="zoom(-1)">-</button>
        {{ scale * 100 }}%
      <button v-on:click="zoom(1)">+</button>
    </div>
    <input type="file" id="file-input" v-on:change="loadImage">
    <a id="save-image" v-on:click="saveImage">Save image</a>
    Set color: <input type="color" id="set-color" v-on:change="setColor">
    <button v-on:click="clickNew">New Model</button>
    <BaseModal v-if="isNewModalOpen">
      <h1 slot="header">Header</h1>
      <div slot="body">
        Width:<input id="new-modal-width" type="number">
        Height:<input id="new-modal-height" type="number">
        Layers:<input id="new-modal-layers" type="number">
      </div>
      <div slot="footer">
        <button v-on:click="createNew">Create</button>
        <button v-on:click="cancelNew">Cancel</button>
      </div>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from './BaseModal'

import {
  mapActions,
  mapGetters,
  mapMutations,
} from 'vuex'

import {
  INCREMENT_LAYER,
  DECREMENT_LAYER,
  GET_EDITOR_LAYER,
  GET_EDITOR_MAX_LAYER,
  GET_EDITOR_SCALE,
  SCALE_EDITOR_CANVAS,
  GET_EDITOR_MODEL_CANVAS,
  SET_EDITOR_IMAGE,
  SET_EDITOR_COLOR_RGBA,
  GET_IS_NEW_MODAL_OPEN,
  SET_NEW_MODAL_IS_OPEN,
  SET_EDITOR_TRANSFORM_SIZE,
} from '../store'

import {
  hexToRgba,
} from '../util'

export default {
  name: 'tools',
  components: {
    BaseModal,
  },
  computed: {
    ...mapGetters({
      currentLayer: GET_EDITOR_LAYER,
      maxLayer: GET_EDITOR_MAX_LAYER,
      scale: GET_EDITOR_SCALE,
      modelCanvas: GET_EDITOR_MODEL_CANVAS,
      isNewModalOpen: GET_IS_NEW_MODAL_OPEN,
    }),
  },
  methods: {
    ...mapActions([
      INCREMENT_LAYER,
      DECREMENT_LAYER,
      SCALE_EDITOR_CANVAS,
      SET_EDITOR_IMAGE,
    ]),
    ...mapMutations([
      SET_EDITOR_COLOR_RGBA,
      SET_NEW_MODAL_IS_OPEN,
      SET_EDITOR_TRANSFORM_SIZE,
    ]),
    zoom: function(scale) {
      this[SCALE_EDITOR_CANVAS]({ scale })
    },
    loadImage: function(event) {
      const input = document.getElementById('file-input')
      const file = input.files[0]
      const fr = new FileReader()
      fr.onload = () => {
        const image = new Image()
        image.onload = () => {
          this[SET_EDITOR_IMAGE]({ image })
        }
        image.src = fr.result
      }
      fr.readAsDataURL(file)
    },
    saveImage: function() {
      const link = document.getElementById('save-image')
      link.href = this.modelCanvas.toDataURL()
      link.download = "model.png"
    },
    setColor: function(event) {
      const hex = event.target.value
      const rgba = hexToRgba(hex)
      this[SET_EDITOR_COLOR_RGBA]({
        color: rgba,
      })
    },
    clickNew: function(event) {
      this[SET_NEW_MODAL_IS_OPEN]({ open: true })
    },
    createNew: function(event) {
      const width = document.getElementById('new-modal-width').value
      const height = document.getElementById('new-modal-height').value
      const layers = document.getElementById('new-modal-layers').value
      const image = new Image(width * layers, height)
      this[SET_EDITOR_TRANSFORM_SIZE]({
        width,
        height,
      })
      this[SET_EDITOR_IMAGE]({ image })
      this[SET_NEW_MODAL_IS_OPEN]({ open: false })
    },
    cancelNew: function(event) {
      this[SET_NEW_MODAL_IS_OPEN]({ open: false })
    },
  },
}
</script>
