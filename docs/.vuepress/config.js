module.exports = {
  theme: 'reco',
  title: "航成科技",
  description: 'Welcome to the collaboration document of Dalian HangCheng Technology Co., Ltd.',
  // 移动端优化
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: '/dlhcnote/',
  // markdown: {
  //   lineNumbers: true
  // },
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
  //   },
  //   '/en/': {
  //     lang: 'en-US',
  //   }
  // },
  // 主题设置
  themeConfig: {
    author: 'zhangmunan',
    // 显示在个人信息的头像
    // authorAvatar: '/avatar.png',
    // 导航栏左侧logo
    logo: '/logo.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航及其深度
    subSidebar: 'auto',
    sidebarDepth: 3,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 项目开始时间
    startYear: '2021',
    // 导航栏配置
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      {
        text: '技术',
        items: [
          { 
            text: '前端', 
            items: [
              { text: 'Vue', link: '/guide/vue/' },
              { text: 'uniApp', link: '/guide/uniApp/' },
              { text: 'React', link: '/guide/react/' },
              { text: '微信小程序', link: '/guide/miniApp/' },
            ]
          },
          { text: '后端', 
            items: [
              { text: 'Java', link: '/guide/java/' },
            ] 
          }
        ]
      },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/zhang-munan/vuepress-note', icon: 'reco-github' },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    sidebar: {
      '/guide/vue/': [
        '',
        'Technology'
      ],
      '/guide/uniApp/': [
        {
          title: '基础',
          children: [
            '',
            'Directory',
          ]
        },
        {
          title: '使用',
          children: [
            'Main',
            {
              title: '交互',
              collapsable: false,
              children: [
                'Route',
                'Request'
              ]
            },
            {
              title: '工具类',
              collapsable: false,
              children: [
                'Test',
                'FormCheck',
                'Function'
              ]
            },
            {
              title: '共通处理',
              collapsable: false,
              children: [
                'PageScroll'
              ]
            },
          ]
        },
      ],
      '/guide/miniApp/': [
        {
          title: '使用',
          children: [
            '',
            {
              title: '交互',
              collapsable: false,
              children: [
                '',
              ]
            },
            {
              title: '工具类',
              collapsable: false,
              children: [
                '',
              ]
            },
            {
              title: '共通处理',
              collapsable: false,
              children: [
                'Pagination',
              ]
            },
          ]
        },
      ]
    },
    blogConfig: {
      // category: {
      //   location: 2,     // 在导航栏菜单中所占的位置，默认2
      //   text: '指南' // 默认文案 “分类”
      // },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    }
  }
}