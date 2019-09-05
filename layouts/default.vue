<template>
  <div class="main">
    <Header />
    <nuxt />
    <Footer />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script
      id="snipcart"
      src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
      data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"
    ></script>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>