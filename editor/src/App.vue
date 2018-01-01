<template>
  <div id="app">
    <EditorViewer />
    <EditorCanvas />
  </div>
</template>

<script>
import EditorCanvas from './components/EditorCanvas'
import EditorViewer from './components/EditorViewer'

export default {
  name: 'app',
  components: {
    EditorCanvas,
    EditorViewer,
  },
}
</script>

<style>
#app {
  display: flex;
}
</style>
