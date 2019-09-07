<template>
  <div class="main">
    <main>
      <div style="margin: 0px auto; width: 59.5rem; max-width: 100%; box-sizing: border-box; padding: 0px 20px;">
        <article class="post" v-for="(guide, index) in guides" :key="index">
          <div class="post-aside">
            <small>{{ guide.attributes.date }}</small>
            <h3 class="post-title"><nuxt-link :to="guide.attributes.link" style="box-shadow: none;">{{ guide.attributes.title }}</nuxt-link></h3>
            <p>{{ guide.attributes.description }}</p>
          </div>
          <div class="products">
            <article v-for="(product, index) in guide.attributes.products" :key="index">
              <img :src="product.image" :alt="product.name">
              <button
                class="buy-button snipcart-add-item"
                :data-item-id="product.sku"
                :data-item-name="product.name"
                :data-item-price="product.price"
                :data-item-image="product.image"
                :data-item-url="`https://snipcart-nuxt-pwa.netlify.com/`">
                {{`$${product.price}`}}
              </button>
              <p class="product-name">{{product.name}}</p>
            </article>
          </div>
        </article>
      </div>
      <Testimonials />
    </main>
  </div>
</template>

<script>
import guides from '~/contents/guides/guides.js'
import Testimonials from '~/components/Testimonials'

export default {
  components: {
    Testimonials,
  },
  async asyncData ({ route }) {
    const promises = guides.map(guide => import(`~/contents/guides/${guide}.md`))
    return { guides: await Promise.all(promises) }
  },
  head() {
    return {
      title: "All posts | Nuxt.js PWA survival store"
    }
  }
}
</script>
