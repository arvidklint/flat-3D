<template>
  <div class="modal">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "basemodal",
}
</script>


<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: deeppink;
  width: 50%;
}

.header {
  background-color: cornflowerblue;
  padding: 15px;
}

.body {
  padding: 15px;
}

.footer {
  padding: 15px;
}
</style>