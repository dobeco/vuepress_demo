const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  sidebarDepth: 2,
  // logo: '/head.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  smoothScroll: true
 
})
