const path = require('path')
import guides from "./contents/guides/guides.js"

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700&amp;display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css' } // Snipcart styling
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
      })
    }
  },
  /*
  ** Overwrite's generated manifest values
  */
  manifest: {
    name: 'Nuxt.js PWA survival store',
    short_name: 'Nuxt.js PWA',
    lang: 'en',
    display: 'fullscreen',
  },
  /*
  ** Generate dynamic routes
  */
  generate: {
    routes: [].concat(guides.map(guide => `guides/${guide}`))
  },
  workbox: {
    runtimeCaching: [
      // Handle google fonts
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      // TODO: Snipcart
    ]
  }
}
