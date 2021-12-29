<template>
  <img alt="Background" class="background" src="./assets/bg.jpeg" />
  <router-view />
</template>

<script lang="ts">
export default {
  name: "Home",
  mounted(): void {
    try {
      console.log("Mounting");
    } catch (error) {
      console.error("Error in mounted");
    }
  },
};
</script>

<style lang="scss">
.background {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  z-index: -10;
  object-fit: cover;
}

#app {
  font-family: "Avenir LT Std", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
}
</style>
