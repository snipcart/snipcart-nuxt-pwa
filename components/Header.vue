<template>
  <header class="header">
    <h1 class="home-title" v-if="this.$nuxt.$route.name === 'index'">
      <nuxt-link
        to="/"
        style="box-shadow: none; text-decoration: none; color: inherit;"
      >NUXT.JS PWA SURVIVAL STORE</nuxt-link>
    </h1>
    <h3 v-else>
      <nuxt-link
        to="/"
        style="box-shadow: none; text-decoration: none; color: inherit;"
      >NUXT.JS PWA SURVIVAL STORE</nuxt-link>
    </h3>
    <Bio v-if="this.$nuxt.$route.name === 'index'" />
  </header>
</template>

<script>
import Bio from "~/components/Bio";
export default {
  components: {
    Bio
  }
};
</script>