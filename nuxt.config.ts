import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.css"
    ],
    fonts: [
        "@mdi/font/fonts/materialdesignicons-webfont.ttf"
    ],

    build: {
        transpile: ["vuetify"]
    },
    vite: {
        define: {
           "process.env.DEBUG": false
        }
    }
})
