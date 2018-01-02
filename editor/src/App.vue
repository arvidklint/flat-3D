<template>
  <div id="app">
    <Viewer />
    <Editor />
  </div>
</template>

<script>
import Editor from './components/Editor'
import Viewer from './components/Viewer'

export default {
  name: 'app',
  components: {
    Editor,
    Viewer,
  },
}
</script>

<style>
#app {
  display: flex;
}
</style>
