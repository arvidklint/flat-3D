<template>
  <div>
    <canvas
      class="editor"
      id="editor-canvas"
      v-on:click="paint"
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
  INIT_EDITOR,
  SCALE_EDITOR_CANVAS,
} from '../store'

export default {
  name: 'editor',
  mounted() {
    this[INIT_EDITOR]()
  },
  computed: {
    ...mapGetters({
      currentLayer: GET_EDITOR_LAYER,
      maxLayer: GET_EDITOR_MAX_LAYER,
      width: GET_EDITOR_WIDTH,
      height: GET_EDITOR_HEIGHT,
      scale: GET_EDITOR_SCALE,
    }),
  },
  methods: {
    ...mapActions([
      INCREMENT_LAYER,
      DECREMENT_LAYER,
      INIT_EDITOR,
      SCALE_EDITOR_CANVAS,
    ]),
    paint: function(event) {
      console.log(event)
      const mouseX = event.layerX
      const mouseY = event.layerY
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
