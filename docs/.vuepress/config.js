const themeConfig = require('./config/theme/')

module.exports = {
  title: "陈荣辉的文档库",
  description: 'Enjoy when you can, and endure when you must.',
  base: '/web-documents/',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: themeConfig,
  markdown: {
    //lineNumbers: true
  },
  extraWatchFiles: [
    '/docs/'
  ],
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}
