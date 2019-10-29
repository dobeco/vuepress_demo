module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  { text: '时间轴', link: '/timeline/', icon: 'reco-date'},
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
    text: '导航',
    icon: 'reco-eye',
    items: [
      {
        text: '文档',
        items: [
          { text: 'Vue.js', link: 'https://cn.vuejs.org/v2/guide/'},
          { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/'},
          { text: 'React.js', link: 'https://reactjs.org/'},
          { text: 'React-Native', link: 'https://reactnative.cn'},
          { text: 'Flutter', link: 'https://flutterchina.club/'}
        ]
      },
      {
        text: '刷题',
        items: [
          { text: '牛客网', link: 'https://www.nowcoder.com/'},
          { text: 'LeetCode', link: 'https://leetcode-cn.com/'},
          { text: 'NodeSchool', link: 'https://nodeschool.io/zh-cn/'},
          { text: 'HackerRank', link: 'https://www.hackerrank.com/'},
          { text: 'JS难题', link: 'http://javascript-puzzlers.herokuapp.com/'},
          { text: 'FreeCodeCamp', link: 'https://freecodecamp.cn/home'},
        ]
      },
      {
        text: '在线编辑器',
        items: [
          { text: 'CodePan', link: 'https://codepen.io/'},
          { text: 'JSFiddle', link: 'https://jsfiddle.net/'},
          { text: 'Dabblet', link: 'http://dabblet.com/'},
        ]
      }
    ],
  },

  { text: '联系',
    icon: 'reco-message',
    items: [
      { text: 'GitHub', link: 'https://github.com/dobeco', icon: 'reco-github' },
      { text: '博客圆', link: 'https://www.cnblogs.com/dobeco/', icon: 'reco-bokeyuan' },

    ]
  }
]
