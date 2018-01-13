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
    <Tools />
  </div>
</template>

<script>
import Tools from './Tools'

import {
  mapActions,
  mapGetters,
} from 'vuex'

import {
  GET_EDITOR_WIDTH,
  GET_EDITOR_HEIGHT,
  GET_EDITOR_TRANSFORM,
  INIT_EDITOR,
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
  components: {
    Tools,
  },
  computed: {
    ...mapGetters({
      width: GET_EDITOR_WIDTH,
      height: GET_EDITOR_HEIGHT,
      transform: GET_EDITOR_TRANSFORM,
      color: GET_EDITOR_COLOR,
    }),
  },
  methods: {
    ...mapActions([
      INIT_EDITOR,
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
  },
}
</script>

<style>
.editor {
  margin: 5px;
  background-color: #f9f9f9;
}
</style>
