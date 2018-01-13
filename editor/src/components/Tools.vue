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
  </div>
</template>

<script>
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
} from '../store'

import {
  hexToRgba,
} from '../util'

export default {
  name: 'tools',
  computed: {
    ...mapGetters({
      currentLayer: GET_EDITOR_LAYER,
      maxLayer: GET_EDITOR_MAX_LAYER,
      scale: GET_EDITOR_SCALE,
      modelCanvas: GET_EDITOR_MODEL_CANVAS,
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
      console.log('rgba', rgba)
      this[SET_EDITOR_COLOR_RGBA]({
        color: rgba,
      })
    },
  },
}
</script>
