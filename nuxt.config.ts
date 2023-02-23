import { presetAttributify, presetIcons, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineNuxtConfig({
  srcDir: 'src',
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false
  },
  nitro: {
    preset: 'node-server'
  },
  app: {
    rootId: 'app',

    head: {
      htmlAttrs: {
        lang: 'ko',
        dir: 'ltr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]
    }
  },
  css: [
    'assets/styles/global.css'
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@unocss/nuxt'
  ],
  vueuse: {},
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix',
    defaultLocale: 'en-US',
    defaultDirection: 'ltr',
    locales: [
      { code: 'en-US', iso: 'en-US', file: 'en-US.yml', name: 'English', english: 'USA' },
      { code: 'ko-KR', iso: 'ko-KR', file: 'ko-KR.yml', name: '한국어', english: 'Korean' }
    ],
    detectBrowserLanguage: {
      useCookie: false,
      alwaysRedirect: false,
      redirectOn: 'root',
      fallbackLocale: 'en-US',
    }
  },
  unocss: {
    presets: [
      presetWind({
        dark: 'class'
      }),
      presetIcons({
        prefix: '',
        extraProperties: {
          display: 'inline-block'
        }
      }),
      presetAttributify({
        strict: true,
        prefixedOnly: true,
        prefix: 'data-'
      })
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup()
    ],
    theme: {
      colors: {
        gray: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
      }
    },
    shortcuts: [
      // `border` 단축키
      [
        /^b-(.*)$/,
        ([,p]) => `border-${p}`
      ],
      [
        /^b[\d+]$/,
        ([,n]) => `border-${n}`
      ],
      [
        /^b([trbl])?-?([0-9]+)?$/,
        ([,p,n]) => `border${p ? `-${p}` : ''}${n ? `-${n}` : ''}`
      ],

      ['bg-base', 'light:bg-gray-50 dark:bg-gray-900'],
      ['bg-panel', 'light:bg-white dark:bg-gray-800'],

      ['c-display', 'light:c-gray-800 dark:c-white'],
      ['c-content', 'light:c-gray-800 dark:c-white'],
      ['c-ui', 'light:c-gray-700 dark:c-gray-50'],
      ['c-sub-content', 'light:c-gray-600 dark:c-gray-400'],
      ['c-disabled', 'light:c-gray-500 dark:c-gray-600'],
    ]
  }
})
