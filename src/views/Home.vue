<template>
  <div class="home">
    <div class="link-container">
      <div>
        <router-link to="/about">
          <profile-image />
          <p class="name">Aziz Stark</p>
        </router-link>
      </div>
      <a
        class="link-button"
        v-for="link in siteLinks"
        :key="link.name"
        :href="link.link"
        rel="noreferrer noopener"
        target="_blank"
        >{{ link.name }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SiteLinks } from "../constants/site-links";
import ProfileImage from "@/components/ProfileImage.vue";

export default defineComponent({
  name: "Home",
  components: {
    ProfileImage,
  },
  data: () => {
    return {
      siteLinks: SiteLinks,
    };
  },
  methods: {
    greet: () => {
      console.log("Routed to about page");
    },
  },
});
</script>

<style lang="scss" scoped>
.name {
  color: white;
  font-size: 22px;
  padding-top: 4rem;
  font-weight: 700;
  text-decoration: none;
}
.profile-pic {
  --image-size: 90px;
  width: var(--image-size);
  left: calc(50% - var(--image-size) / 2);
  top: calc((var(--image-size) / 2 - var(--image-size)));
  margin-bottom: calc((var(--image-size) / 2));
  position: absolute;
  border-radius: 100%;
  border: 2px solid rgba(255, 255, 255, 0.281);
}
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.link-container {
  margin-top: 90px;
  display: grid;
  width: 20%;
  align-content: center;
  backdrop-filter: blur(10px);
  gap: 20px;
  padding: 0px 2.5% 2.5% 2.5%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.15);
}
.link-button {
  background-color: rgba(255, 255, 255, 0.233);
  width: 100%;
  padding: 3%;
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    background-color: rgba(185, 179, 241, 0.507);
  }
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .link-container {
    width: 90%;
    padding: 0px 5% 5% 5%;
    margin: 4%;
  }
}
</style>
