<template>
  <div class="welcome-3">
    <div class="box">
      <h1>Acknowledgments</h1>
      <ul>
        <li>
          <p>
            The default font for this project (as you can see here) is
            <a href="https://github.com/tonsky/FiraCode">Fira Code</a>, my favorite programming
            font.
          </p>
        </li>
        <li>
          <p>And all the technology stacks I used in this project</p>
          <ul>
            <li>Vue 3</li>
            <li>Vite</li>
            <li>Vue Router</li>
            <li>Sass</li>
            <li>And more...</li>
          </ul>
        </li>
        <li>
          <p>Also the server that will put this project on public display:</p>
          <p style="font-weight: bold; text-align: center; margin-bottom: 1.5em">nginx</p>
        </li>
        <li>
          <p>
            And more broadly, everyone who comes into my life. They have my relatives, friends,
            doctors, teachers, and so on.
          </p>
        </li>
      </ul>
      <p>Thank you very much!</p>
      <p style="text-align: right; font-size: 0.8em">The author</p>
      <p style="text-align: right; font-size: 0.8em">{{ time }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const time = ref('');
setInterval(() => {
  time.value = new Date().toLocaleString();
}, 1000);
</script>
<style scoped lang="scss">
.welcome-3 {
  background: rgb(49, 0, 82);
  border-radius: 1em;
  box-shadow: 0.5em 0.5em 1em #0011ff54;
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
  font-size: 2em;
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
