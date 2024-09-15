<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Plugin
- Package name: gabortorma/mwm-nitro-plugin-template
- Description: My new Nitro plugin
-->

# My Plugin

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![code style][code-style-src]][code-style-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/mwm-nitro-plugin-template?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Install

```bash
pnpm install add -D mwm-nitro-plugin-template
```

## Usage

### Nuxt

Add the plugin to your `nuxt.config.js`:

```ts
export default defineNuxtConfig({
  nitro: {
    plugins: ['@gabortorma/mwm-nitro-plugin-template']
  }
})
```

### Nitro

Add the plugin to your `nitro.config.js`:

```ts
export default defineNitroConfig({
  plugins: ['@gabortorma/mwm-nitro-plugin-template']
})
```

## Contribution

<details>
  <summary>Local development</summary>

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@gabortorma/mwm-nitro-plugin-template/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@gabortorma/mwm-nitro-plugin-template
[npm-downloads-src]: https://img.shields.io/npm/dm/@gabortorma/mwm-nitro-plugin-template.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@gabortorma/mwm-nitro-plugin-template
[license-src]: https://img.shields.io/npm/l/@gabortorma/mwm-nitro-plugin-template.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@gabortorma/mwm-nitro-plugin-template
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/gabortorma/antfu-eslint-config
