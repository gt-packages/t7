# t7

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![code style][code-style-src]][code-style-href]

t7

- [✨ Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/gt-packages/t7?file=playground%2Fapp.vue)

## Install

```bash
pnpm install add -D @gt-packages/t7
```

## Usage

### Nuxt

Add the plugin to your `nuxt.config.js`:

```ts
export default defineNuxtConfig({
  nitro: {
    plugins: ['@gt-packages/t7']
  }
})
```

### Nitro

Add the plugin to your `nitro.config.js`:

```ts
export default defineNitroConfig({
  plugins: ['@gt-packages/t7']
})
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@gt-packages/t7/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@gt-packages/t7
[npm-downloads-src]: https://img.shields.io/npm/dm/@gt-packages/t7.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@gt-packages/t7
[license-src]: https://img.shields.io/npm/l/@gt-packages/t7.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@gt-packages/t7
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/gt-packages/antfu-eslint-config
