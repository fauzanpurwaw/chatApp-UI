// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-09",
  devtools: { enabled: false },

  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.21.1/minified.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/regenerator-runtime/0.13.7/runtime.min.js' },
    ],
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [// pinia plugin
    [
      "@pinia/nuxt",
      {
        storesDirs: ["./stores/**", "./stores/account/**"],
        autoImports: ['defineStore'],
      }
    ], "@nuxt/icon"],
  imports: {
    dirs: ['./stores'],
  },
  buildModules: [
    '@nuxtjs/babel-preset-app',
  ],
  vite: {
    optimizeDeps: {
      include: ['core-js', 'regenerator-runtime'],
    },
  },
  build: {
    babel: {
      presets(env, [preset, options]) {
        return [["@babel/preset-env", {}]];
      },
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true
          }
        ]
      ]
    }
  }
})