<template>
  <div
    class="single-post"
    style="margin: 0px auto; width: 59.5rem; max-width: 100%; box-sizing: border-box; padding: 0px 20px;"
  >
    <h1>{{ attributes.title }}</h1>
    <p>{{ attributes.date }}</p>
    <span v-html="html" class="markdown"></span>
    <div class="products">
      <article v-for="(product, index) in attributes.products" :key="index">
        <img :src="`../${product.image}`" :alt="product.name" />
        <button
          class="buy-button snipcart-add-item"
          :data-item-id="product.sku"
          :data-item-name="product.name"
          :data-item-price="product.price"
          :data-item-image="product.image"
          :data-item-url="`https://snipcart-nuxt-pwa.netlify.com${currentUrl}`"
          >{{`$${product.price}`}}</button>
        <p class="product-name">{{product.name}}</p>
      </article>
    </div>
    <Bio />
  </div>
</template>

<script>
import Bio from "~/components/Bio";

export default {
  components: {
    Bio,
  },
  async asyncData({ params, route }) {
    const guideName = params.slug
    const markdownContent = await import(`~/contents/guides/${guideName}.md`)
    return {
      attributes: markdownContent.attributes,
      html: markdownContent.html,
      currentUrl: route.path
    };
  },
  head() {
    return {
      title: `${this.attributes.title} | Nuxt.js PWA survival store`
    }
  }
};
</script>