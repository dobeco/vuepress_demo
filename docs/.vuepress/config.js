const nav = require('../../config/nav/index.js')
const sideBar = require('../../config/sidebar/index.js')
module.exports = {
  base: '/web-documents/',
  title: '前端学习记录文档',
  description: '前端开发 vuepress',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  extraWatchFiles: [
    // 指定额外的需要被监听的文件
    '../../docs',
    '../../config'
  ],
  themeConfig: {
    nav: nav,
    sidebar: sideBar,
    sidebarDepth: 3,
    displayAllHeaders: true,
    activeHeaderLinks: true,
    lastUpdated: '上次更新',
    repo: 'dobeco/web-documents',
    repoLabel: 'GitHub',
    smoothScroll: true,
  },
  markdown: {
    lineNumbers: 10
  }
}