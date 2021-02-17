module.exports = {
  title: 'Gopal 的博客',
  base: '/gopal-blog/',
  description:
    '专注前端干货。包括但不限于面试、前端进阶、最新资讯、工程化、性能优化、工具资源',
  // 设置导航栏 Nav
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'node', link: '/node/' },
      // 二级导航栏
      {
        text: '前端',
        items: [
          { text: 'html', link: '/web/html/' },
          { text: 'css', link: '/web/css/' },
        ],
      },
      { text: '数据库', link: '/database/' },
      { text: 'android', link: '/android/' },
      { text: '面试问题', link: '/interview/' },
    ],
    sidebar: 'auto',
    displayAllHeaders: true,
    sidebar: {
      '/node/': [
        ['', 'node目录'],
        ['path', '作为前端也需要知道的路径知识'],
        // ['stream', 'node核心模块-stream'],
      ],
      '/web/': [
        ['', '前端'],
        {
          title: 'css',
          name: 'css',
          // collabsable: false,
          children: [
            ['css/', '目录'],
            ['css/1', 'css常考面试题'],
          ],
        },
      ],
    },
    globalUIComponents: ['fixed'],
    plugins: ['@vuepress/back-to-top',
      '@vssue/vuepress-plugin-vssue',
      {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        // 其他的 Vssue 配置
        owner: 'OWNER_OF_REPO',
        repo: 'NAME_OF_REPO',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET'
      }
    ]
  },
};
