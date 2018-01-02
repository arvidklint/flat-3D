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
  mapMutations,
} from 'vuex'

import {
  GET_EDITOR_WIDTH,
  GET_EDITOR_HEIGHT,
  GET_EDITOR_IMAGE,
  GET_VIEWER_TRANSFORM,
  GET_VIEWER_EDITOR,
  GET_VIEWER_CONTEXT,
  GET_EDITOR_LOADED,
  GET_VIEWER_DELTA_ROTATION,
  INIT_VIEWER,
  SET_VIEWER_ROTATION,
} from '../store'

let ticker

export default {
  name: 'viewer',
  mounted() {
    this[INIT_VIEWER]()
    ticker = setInterval(() => {
      this.render()
      this.rotation += this.deltaRotation
    }, 1 / 60 * 1000)
  },
  data() {
    return {
      rotation: 0,
    }
  },
  computed: {
    ...mapGetters({
      width: GET_EDITOR_WIDTH,
      height: GET_EDITOR_HEIGHT,
      image: GET_EDITOR_IMAGE,
      canvasLoaded: GET_EDITOR_LOADED,
      viewerCanvas: GET_VIEWER_EDITOR,
      viewerContext: GET_VIEWER_CONTEXT,
      transform: GET_VIEWER_TRANSFORM,
      deltaRotation: GET_VIEWER_DELTA_ROTATION,
    })
  },
  methods: {
    ...mapActions([
      INIT_VIEWER,
    ]),
    ...mapMutations([
      SET_VIEWER_ROTATION,
    ]),
    render() {
      if (!this.canvasLoaded) {
        return
      }

      const canvas = this.viewerCanvas
      const ctx = this.viewerContext

      const {
        position: {
          x,
          y,
        },
        size: {
          width,
          height,
        },
        scale,
      } = this.transform

      const image = this.image
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      for(let i = 0; i < image.width / width; i++) {
        ctx.translate(x / scale, y / scale - i) 
        ctx.rotate(this.rotation)
        ctx.drawImage(image, width * i, 0, width, height, -width / 2, -height / 2, width, height)
        ctx.rotate(-this.rotation)
        ctx.translate(-x / scale, -y / scale + i)
      }
      ctx.restore()
    },
  },
}
</script>

<style>
.viewer {
  margin: 5px;
  background-color: #f9f9f9;
}
</style>

