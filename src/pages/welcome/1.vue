<template>
  <div class="welcome-1">
    <div class="box">
      <h1>Hello!</h1>
      <h2>Again, hello!</h2>
      <h3>Congratulations!</h3>
      <p>By the time you see this page, the project has already started successfully.</p>
      <p>
        Welcome to visit the project written by
        <a href="https://kuankuan.site/" target="_blank">kuankuan</a>.
      </p>
      <p>
        The goal of this project is to make it easy, universal, and beautiful to present
        information.
      </p>
      <p>To achieve this goal, we try to split words or other information into different cards.</p>
      <p>So, let's scroll down the page, and see how it works.</p>
      <p style="text-align: center">
        <img src="@/assets/arrow-down.svg" alt="" style="width: 3em" />
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.welcome-1 {
  background: rgb(0, 0, 80);
  border-radius: 1em;
  box-shadow: 2em 2em 1em #000000;
}
.box {
  padding: 1em;
}
h1,
h2 {
  margin: 0.2em 0;
  padding: 0;
}
h1 {
  font-size: 3em;
}
h2 {
  font-size: 2em;
}
h3 {
  margin: 0.5em 0;
  padding: 0;
}
p {
  margin: 0.5em 0;
  padding: 0;
}
</style>
