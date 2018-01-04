<template>
  <div>
    <canvas
      class="editor"
      id="editor-canvas"
      v-on:mousedown="startPainting"
      v-on:mouseup="stopPainting"
      v-on:mousemove="paint"
      :width="width"
      :height="height"
    ></canvas>
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
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters,
} from 'vuex'

import {
  INCREMENT_LAYER,
  DECREMENT_LAYER,
  GET_EDITOR_LAYER,
  GET_EDITOR_MAX_LAYER,
  GET_EDITOR_WIDTH,
  GET_EDITOR_HEIGHT,
  GET_EDITOR_SCALE,
  GET_EDITOR_TRANSFORM,
  INIT_EDITOR,
  SCALE_EDITOR_CANVAS,
  SET_EDITOR_PIXEL,
  GET_EDITOR_COLOR,
} from '../store'

export default {
  name: 'editor',
  mounted() {
    this[INIT_EDITOR]()
  },
  data() {
    return {
      painting: false,
    }
  },
  computed: {
    ...mapGetters({
      currentLayer: GET_EDITOR_LAYER,
      maxLayer: GET_EDITOR_MAX_LAYER,
      width: GET_EDITOR_WIDTH,
      height: GET_EDITOR_HEIGHT,
      scale: GET_EDITOR_SCALE,
      transform: GET_EDITOR_TRANSFORM,
      color: GET_EDITOR_COLOR,
    }),
  },
  methods: {
    ...mapActions([
      INCREMENT_LAYER,
      DECREMENT_LAYER,
      INIT_EDITOR,
      SCALE_EDITOR_CANVAS,
      SET_EDITOR_PIXEL,
    ]),
    startPainting: function() {
      this.painting = true
    },
    paint: function(event) {
      if (!this.painting) {
        return
      }

      const mouseX = event.layerX
      const mouseY = event.layerY
      const {
        position: {
          x, y,
        },
        size: {
          width, height,
        },
        scale,
      } = this.transform

      // Check if mouse is on image
      const imageX = Math.floor((mouseX + (width / 2) * scale - x) / scale)
      const imageY = Math.floor((mouseY + (height / 2) * scale - y) / scale)
      if (imageX > width || imageX < 0 ||
        imageY > height || imageY < 0) {
        return
      }

      // Draw pixel
      this[SET_EDITOR_PIXEL]({
        color: this.color,
        x: imageX,
        y: imageY,
        layer: this.currentLayer,
      })
    },
    stopPainting: function() {
      this.painting = false
    },
    zoom: function(scale) {
      this[SCALE_EDITOR_CANVAS]({ scale })
    },
  },
}
</script>

<style>
.editor {
  margin: 5px;
  background-color: #f9f9f9;
}
</style>
