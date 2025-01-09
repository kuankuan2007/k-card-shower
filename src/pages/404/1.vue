<template>
  <div class="not-found">
    <div class="box">
      <h1>404</h1>
      <h2>Not Found!</h2>
      <p>Ooooooops, it seems that the page you are looking for does not exist.</p>
      <p>Maybe you can try to search for something else?</p>
      <p style="text-align: center; font-size: 2em">:(</p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.not-found {
  background: rgb(0, 0, 80);
  border-radius: 1em;
}
.box {
  padding: 2em;
  text-shadow: 0.5em 0.5em 0.5em #000;
}
h1 {
  font-size: 3em;
  padding: 0;
  margin: 0;
}
h2 {
  font-size: 1.5em;
  padding: 0;
  margin: 0;
}
</style>
