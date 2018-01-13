<template>
  <div id="app">
    <Viewer />
    <Editor />
  </div>
</template>

<script>
import Editor from './components/Editor'
import Viewer from './components/Viewer'
import Tools from './components/Tools'
import BaseModal from './components/BaseModal'

export default {
  name: 'app',
  components: {
    Editor,
    Viewer,
    Tools,
    BaseModal,
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
  color: aliceblue;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
</style>
