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
  GET_EDITOR_SCALE,
  SCALE_EDITOR_CANVAS,
} from '../store'

export default {
  name: 'tools',
  computed: {
    ...mapGetters({
      currentLayer: GET_EDITOR_LAYER,
      maxLayer: GET_EDITOR_MAX_LAYER,
      scale: GET_EDITOR_SCALE,
    })
  },
  methods: {
    ...mapActions([
      INCREMENT_LAYER,
      DECREMENT_LAYER,
      SCALE_EDITOR_CANVAS,
    ]),
    zoom: function(scale) {
      this[SCALE_EDITOR_CANVAS]({ scale })
    },
  },
}
</script>
