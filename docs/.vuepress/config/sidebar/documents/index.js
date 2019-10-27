module.exports = {
  '/documents/javascript/':[
    {
      title: '入门篇',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '',
        '/documents/javascript/basic/history',
        '/documents/javascript/basic/grammar',
        '/documents/javascript/basic/introduction'
      ]
    },
    {
      title: '数据类型',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/documents/javascript/types/general',
        '/documents/javascript/types/null-undefined-boolean',
        '/documents/javascript/types/number',
        '/documents/javascript/types/string',
        '/documents/javascript/types/object',
        '/documents/javascript/types/function',
        '/documents/javascript/types/array'
      ]
    },
    {
      title: '运算符',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/documents/javascript/operators/arithmetic',
        '/documents/javascript/operators/comparison',
        '/documents/javascript/operators/boolean',
        '/documents/javascript/operators/bit',
        '/documents/javascript/operators/priority'

      ]
    },
    {
      title: '语法专题',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/documents/javascript/features/conversion',
        '/documents/javascript/features/error',
        '/documents/javascript/features/style',
        '/documents/javascript/features/console'
      ]
    },
    {
      title: '标准库',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/documents/javascript/stdlib/object',
        '/documents/javascript/stdlib/attributes',
        '/documents/javascript/stdlib/array',
        '/documents/javascript/stdlib/wrapper',
        '/documents/javascript/stdlib/boolean',
        '/documents/javascript/stdlib/number',
        '/documents/javascript/stdlib/string',
        '/documents/javascript/stdlib/math',
        '/documents/javascript/stdlib/date',
        '/documents/javascript/stdlib/regexp',
        '/documents/javascript/stdlib/json'
      ]
    },
    {
      title: '面向对象编程',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/documents/javascript/oop/new',
        '/documents/javascript/oop/this',
        '/documents/javascript/oop/prototype',
        '/documents/javascript/oop/object',
        '/documents/javascript/oop/strict'
      ]
    },
    {
      title: '异步操作',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/documents/javascript/async/general',
        '/documents/javascript/async/timer',
        '/documents/javascript/async/promise'
      ]
    },
    {
      title: 'DOM',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/documents/javascript/dom/general',
        '/documents/javascript/dom/node',
        '/documents/javascript/dom/nodelist',
        '/documents/javascript/dom/parentnode',
        '/documents/javascript/dom/document',
        '/documents/javascript/dom/element',
        '/documents/javascript/dom/attributes',
        '/documents/javascript/dom/text',
        '/documents/javascript/dom/css',
        '/documents/javascript/dom/mutationobserver'
      ]
    },
    {
      title: '事件',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/documents/javascript/events/eventtarget',
        '/documents/javascript/events/model',
        '/documents/javascript/events/event',
        '/documents/javascript/events/mouse',
        '/documents/javascript/events/keyboard',
        '/documents/javascript/events/progress',
        '/documents/javascript/events/form',
        '/documents/javascript/events/touch',
        '/documents/javascript/events/drag',
        '/documents/javascript/events/common',
        '/documents/javascript/events/globaleventhandlers'
      ]
    },
    {
      title: '浏览器模型',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '/documents/javascript/bom/engine',
        '/documents/javascript/bom/window',
        '/documents/javascript/bom/navigator',
        '/documents/javascript/bom/cookie',
        '/documents/javascript/bom/xmlhttprequest',
        '/documents/javascript/bom/same-origin',
        '/documents/javascript/bom/cors',
        '/documents/javascript/bom/storage',
        '/documents/javascript/bom/history',
        '/documents/javascript/bom/location',
        '/documents/javascript/bom/arraybuffer',
        '/documents/javascript/bom/file',
        '/documents/javascript/bom/form',
        '/documents/javascript/bom/indexeddb',
        '/documents/javascript/bom/webworker'
      ]
    },
    {
      title: '附录：网页元素接口',
      sidebarDepth:2,
      children: [
        '/documents/javascript/elements/a',
        '/documents/javascript/elements/image',
        '/documents/javascript/elements/form',
        '/documents/javascript/elements/input',
        '/documents/javascript/elements/button',
        '/documents/javascript/elements/option',
        '/documents/javascript/elements/video',
      ]
    }
    
  ],
  '/documents/es6/': [
    '',
    'intro',
    'let',
    'destructuring',
    'string',
    'string-methods',
    'regex',
    'number',
    'function',
    'function',
    'array',
    'object',
    'object-methods',
    'symbol',
    'set-map',
    'proxy',
    'reflect',
    'promise',
    'iterator',
    'generator',
    'generator-async',
    'async',
    'class',
    'class-extends',
    'module',
    'module-loader',
    'style',
    'spec',
    'async-iterator',
    'arraybuffer',
    'proposals',
    'decorator',
    'reference',
  ],
  '/documents/interview/': [
    {
      title: '前端篇',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        '',
        'javascript',
        'browser',
        'performance',
        'safety',
        'framework',
        'vue',
        'react',
        'miniapp'
      ]
    },
    {
      title: '计算机通识',
      collapsable: true,
      sidebarDepth: 2,
      children: [
        'network',
        'datastruct',
        'algorithm',
        'git'
     
      ]
    },
  ]
};
