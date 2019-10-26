module.exports = [
  { text: '首页', link: '/', },//icon: 'reco-home' },
  { text: '时间轴', link: '/timeline/', /*icon: 'reco-date'*/ },
  {
    text: '文档库',
    icon: 'reco-document',
    items: [
      { text: 'JavaScript入门', link:'/documents/javascript/'},
      { text: 'ECMAScript 6 入门', link:'/documents/es6/'},
      { text: 'interview', link:'/documents/interview/'}
    ],
  },
  {
    text: '笔记', link: '/notes/'
  },

  {
    text: '导航',
   // icon: 'reco-eye',
    items: [
      { text: 'Vue.js', link: 'https://cn.vuejs.org/v2/guide/'},
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/'}
      
    ],
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
  },
  { text: '联系',
    //icon: 'reco-message',
    items: [
      { text: 'GitHub', link: 'https://github.com/dobeco', icon: 'reco-github' },
      { text: '博客圆', link: 'https://www.cnblogs.com/dobeco/', icon: 'reco-bokeyuan' },

    ]
  }
]
