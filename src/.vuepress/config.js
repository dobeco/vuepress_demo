const nav = require('../../config/nav/index.js')
const sideBar = require('../../config/sidebar/index.js')
module.exports = {
  base: '/vuepress_demo/',
  title: 'vuepress-demo',
  description: 'vuepress demo',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  dest: './docs',
  extraWatchFiles: [
    // 指定额外的需要被监听的文件
  
  ],
  themeConfig: {
    nav: nav,
    sidebar: sideBar,
    displayAllHeaders: true,
    activeHeaderLinks: true,
    lastUpdated: '上次更新',
    repo: 'dobeco/vuepress-demo',
    repoLabel: '查看源码',
    smoothScroll: true,
  },

  markdown: {
    lineNumbers: 10
  }
}