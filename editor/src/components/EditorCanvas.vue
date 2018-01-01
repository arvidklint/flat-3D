<template>
  <div>
    <canvas
      class="editor"
      id="editor-canvas"
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
  mapMutations,
} from 'vuex'

import {
  INCREMENT_LAYER,
  DECREMENT_LAYER,
  GET_CURRENT_LAYER,
  GET_CANVAS_WIDTH,
  GET_CANVAS_HEIGHT,
  INIT_CANVAS,
} from '../store'

export default {
  name: 'editorCanvas',
  mounted() {
    this[INIT_CANVAS]()
  },
  computed: {
    ...mapGetters({
      currentLayer: GET_CURRENT_LAYER,
      width: GET_CANVAS_WIDTH,
      height: GET_CANVAS_HEIGHT,
    }),
  },
  methods: {
    ...mapMutations([
      INCREMENT_LAYER,
      DECREMENT_LAYER,
    ]),
    ...mapActions([
      INIT_CANVAS,
    ]),
  },
}
</script>

<style>
.editor {
  background-color: red;
}
</style>
