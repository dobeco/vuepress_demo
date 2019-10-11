module.exports = [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/' },
  {
    text: '前端',
    ariaLabel: '菜单',
    items: [
      {
        text: '前端基础',
        items: [
          { text: 'html', link: '/web/base/html/'},
          { text: 'css', link: '/web/base/css/'},
          { text: 'js', link: '/web/base/js/'}
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Vue.js', link: '/web/framework/vue/'},
          { text: 'React.js', link: '/web/framework/react/'},
        ]
      },
      {
        text: 'Node',
        items: [
          { text: 'Express.js', link: '/web/node/express/'},
          { text: 'Koa2.js', link: '/web/node/koa2/'},
          { text: 'Egg.js', link: '/web/node/egg/'},
        ]
      }
      
    ]
  },
  {
    text: '工具箱',
    items: [
      {
        text: '在线编辑',
        items: [
          { text: '图片压缩', link: 'https://tinypng.com/' }
        ]
      },
      {
        text: '在线服务',
        items: [
          { text: '阿里云', link: 'https://www.aliyun.com/' },
          { text: '腾讯云', link: 'https://cloud.tencent.com/' }
        ]
      },
      {
        text: '博客指南',
        items: [
          { text: '掘金', link: 'https://juejin.im/' },
          { text: 'CSDN', link: 'https://blog.csdn.net/' }
        ]
      }
    ]
  }
]
