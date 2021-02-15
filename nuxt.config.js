const webpack = require('webpack');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GATHS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css' }
    ],
    script: [{
      //src: "~/static/js/main.js",
      //src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",
      //src: "~/static/js/util.js",
      //src: "https://cdnjs.cloudflare.com/ajax/libs/skel/3.0.1/skel.min.js",
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",
      //src: "~/static/js/jquery.counterup.min.js",
      //src: "~/static/js/jquery.scrollex.min.js",
      //src: "~/static/js/jquery.waypoints.min.js",
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css'
    //'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'

  ],
  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //'@/plugins/js/jquery.counterup.min.js',
    '@/plugins/js/skel.js',
    '@/plugins/js/main.js',
    '@/plugins/js/jquery.min.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    //'nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
