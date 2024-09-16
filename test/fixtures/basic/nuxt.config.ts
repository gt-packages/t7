export default defineNuxtConfig({
  nitro: {
    plugins: [
      '../../../../src/index.ts',
    ],
    experimental: {
      websocket: true,
    },
  },
})
