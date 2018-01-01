<template>
  <div>
    <canvas
      class="viewer"
      id="viewer-canvas"
      :width="width"
      :height="height"
    ></canvas>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex'

import {
  GET_CANVAS_WIDTH,
  GET_CANVAS_HEIGHT,
  INIT_VIEWER,
} from '../store'

export default {
  name: 'editorViewer',
  mounted() {
    this[INIT_VIEWER]()
  },
  computed: {
    ...mapGetters({
      width: GET_CANVAS_WIDTH,
      height: GET_CANVAS_HEIGHT,
    })
  },
  methods: {
    ...mapActions([
      INIT_VIEWER,
    ]),
  },
}
</script>

<style>
.viewer {
  background-color: blue;
}
</style>

