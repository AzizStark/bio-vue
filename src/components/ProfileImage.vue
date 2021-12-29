<template>
  <img
    class="profile-pic"
    alt="profile-pic"
    src="../assets/avatar.png"
    v-on:click="greet"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileImage",
  methods: {
    greet: () => {
      console.log("Routed to about page");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-pic {
  --image-size: 90px;
  width: var(--image-size);
  left: calc(50% - var(--image-size) / 2);
  top: calc((var(--image-size) / 2 - var(--image-size)));
  margin-bottom: calc((var(--image-size) / 2));
  position: absolute;
  border-radius: 100%;
  border: 2px solid rgba(255, 255, 255, 0.281);
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
