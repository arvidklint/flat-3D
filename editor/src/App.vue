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
body {
  background-color: #3e3e3e
}
#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
