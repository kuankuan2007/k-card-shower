<template>
  <div class="welcome-2">
    <div class="box">
      <h1>Great!</h1>
      <h2>You did it!</h2>
      <p>
        Card-style information display can achieve better screen size compatibility, so that
        different devices can also be easily read.
      </p>
      <p>
        Obviously, the ratio of each card will remain the same and will be scaled differently for
        different devices
      </p>
      <p>
        This doesn't seem like a "stream of words"; instead, it's more like poster after poster.
        This is great for both the designer and the reader.
      </p>
      <p>
        Of course, they don't have to look the same. You are free to create unique designs for each
        card.
      </p>
      <p>Let's try it out!</p>
      <p style="text-align: center">
        <img src="@/assets/arrow-down.svg" alt="" style="width: 3em" />
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.welcome-2 {
  background: rgb(0, 0, 80);
  border-radius: 1em;
  box-shadow: 2em 2em 3em #000000;
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
  font-size: 0.9em;
  margin: 0.6em 0;
  padding: 0;
}
</style>
