<template>
  <div class="welcome-3">
    <div class="box">
      <h1>L<span style="font-size: 0.8em">OOOOOO</span>K!</h1>
      <h2>A brand new style of card!</h2>
      <h3>It has a 4:3 aspect ratio and has a glowing effect!</h3>
      <p>
        You can even control each row,
        <span style="font-weight: bold; font-style: italic; color: #ff0">words,</span> and even each
        DOM element individually!
      </p>
      <div style="display: flex; justify-content: center; align-items: center">
        <div
          style="
            background-color: #f0f0f0;
            color: #000;
            width: 18em;
            padding: 1em;
            height: 8em;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em;
            box-shadow: 1em 1em 1em #000;
          "
        >
          <p style="text-align: center" contenteditable="true">
            This is a sub card, and it can be edited!
          </p>
        </div>
      </div>
      <p style="margin-top: 1.5em">In fact, each card is a Vue component.</p>
      <p>
        And, as you can see, this entire page is written in
        <a href="https://vuejs.org/" target="_blank" style="font-weight: bold">Vue</a> and packaged
        with <a href="https://vite.dev/" target="_blank" style="font-weight: bold">Vite</a>.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.welcome-3 {
  background: rgb(36, 75, 0);
  border-radius: 1em;
  box-shadow: 0 0 1em #ddddffaa;
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
  font-size: 1.5em;
}
p {
  margin: 0.5em 0;
  padding: 0;
}
*:focus {
  outline: none;
}
</style>
