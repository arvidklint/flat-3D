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
      Layer: 
      <button v-on:click="DECREMENT_LAYER">-</button>
        {{ currentLayer }}
      <button v-on:click="INCREMENT_LAYER">+</button>
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
  GET_EDITOR_WIDTH,
  GET_EDITOR_HEIGHT,
  INIT_EDITOR,
} from '../store'

export default {
  name: 'editor',
  mounted() {
    this[INIT_EDITOR]()
  },
  computed: {
    ...mapGetters({
      currentLayer: GET_EDITOR_LAYER,
      width: GET_EDITOR_WIDTH,
      height: GET_EDITOR_HEIGHT,
    }),
  },
  methods: {
    ...mapActions([
      INCREMENT_LAYER,
      DECREMENT_LAYER,
      INIT_EDITOR,
    ]),
    paint(event) {
      const mouseX = event.layerX
      const mouseY = event.layerY



      // check if mouse is inside image
    },
  },
}
</script>

<style>
.editor {
  background-color: red;
}
</style>
