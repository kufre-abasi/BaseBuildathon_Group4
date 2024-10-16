// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  spaLoadingTemplate: 'spa-loading-template.html',
  css: [
    '~/assets/main.css',
    'animate.css/animate.min.css',
    'vue-toastification/dist/index.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  build: {
    transpile: ['vue-toastification']
  },

  modules: [
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
    'nuxt-marquee',
    '@vueuse/motion/nuxt',
    '@primevue/nuxt-module'
  ],
  primevue: {
    usePrimeVue: true,
    autoImport: true | false
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0
            }
          }
        }
      }
    }
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },

  imports: {
    dirs: ['./stores']
  },

  ssr: false,

  app: {
    head: {
      script: [
        {
          src: ''
        }
      ]
    }
  },

  compatibilityDate: '2024-09-10'
});