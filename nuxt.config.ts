// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-09",
  devtools: { enabled: false },

  ssr: false,

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
    ], "@nuxt/icon", "@vueuse/nuxt",],
  imports: {
    dirs: ['./stores'],
  },
})