<template>
  <div class="about">
    <div class="my-info">
      <router-link to="/"> <profile-image /> </router-link>
      <p>Name: Aziz Rahman</p>
      <p>Work: Developer(Web) & Designer(UI/UX)</p>
      <p>Country of Origin: India</p>
      <p>Age: {{ getAge() }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileImage from "@/components/ProfileImage.vue";
import store from "@/store";

export default defineComponent({
  name: "About",
  components: {
    ProfileImage,
  },
  methods: {
    getAge() {
      return store.state.age;
    },
  },
});
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.my-info {
  margin: 20px;
  backdrop-filter: blur(10px);
  padding: 4rem 2.5% 2.5% 2.5%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  white-space: pre;
  word-wrap: break-word;
  text-align: left;
}
p {
  color: white;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .my-info {
    padding: 4rem 5% 5% 5%;
  }
  p {
    font-size: 15px;
  }
}
</style>
