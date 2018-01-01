<template>
  <div>
    <canvas
      class="canvas"
      id="canvas"
      :width="width"
      :height="height"
    ></canvas>
    <button v-on:click="DECREMENT_LAYER">-</button>
      {{ currentLayer }}
    <button v-on:click="INCREMENT_LAYER">+</button>
  </div>
</template>

<script>
import {
  mapGetters,
  mapMutations,
} from 'vuex'

import {
  INCREMENT_LAYER,
  DECREMENT_LAYER,
  GET_CURRENT_LAYER,
  GET_CANVAS_WIDTH,
  GET_CANVAS_HEIGHT,
} from '../store'

export default {
  name: 'canvas',
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
    ])
  },
}
</script>

<style>
.canvas {
  background-color: red;
}
</style>
