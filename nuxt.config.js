export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: '吴学深的网站',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '吴学深的网站' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/flexible.js', type: 'text/javascript', charset: 'utf-8' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/css/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  axios: {
    proxy: true
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  proxy: {
    '/api': {
      target: 'https://www.fastmock.site/mock/cbb60912d7dec4eb07904711dc7914f5/dl',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['ant-design-vue'],
    babel: {
      plugins: [
        ['import', {
          libraryName: 'ant-design-vue',
          libraryDirectory: 'lib' // 默认'lib'，也可视情况改为 'es'，通过查看组件可知这两个目录均存在。
        },
          "ant-design-vue"],
          [
            "component",
            {
              "libraryName": "element-ui",
              "styleLibraryName": "theme-chalk"
            }
          ]
      ]
    },
    postcss: [
      require('postcss-px2rem')({
        remUnit: 75
      })
   ],
  }
}
