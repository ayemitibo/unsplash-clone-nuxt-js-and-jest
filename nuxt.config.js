
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/lib/themify-icons/css/themify-icons.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/lib/bootstrap/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/lib/image-hover/imagehover.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/index.css' }
    ],
    script: [
      { src: '/js/lib/jquery/jquery.min.js' },
      { src: '/js/lib/bootstrap/bootstrap.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffc107' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/core-components', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseUrl: 'https://api.unsplash.com/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
