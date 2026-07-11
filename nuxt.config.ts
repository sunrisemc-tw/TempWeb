export default defineNuxtConfig({
  compatibilityDate: '2026-07-11',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      title: '日出伺服器│維護中',
      meta: [
        { name: 'theme-color', content: '#090b0e' },
        {
          name: 'description',
          content: '日出伺服器目前正在進行硬體維護，最新進度請至 Discord 查看。'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/webp', href: '/server-icon.webp' }
      ]
    }
  }
})
