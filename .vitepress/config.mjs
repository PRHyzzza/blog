import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "prhzzzsl",
  lang: 'zh-CN',
  description: "a blog",
  head: [
    ['link', { rel: 'icon', href: '/blog/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: '理财',
        items: [
          { text: '2024-12', link: '/wealth/2024-12' },
        ]
      },
      {
        text: '编程',
        items: [
          { text: '2024-12', link: '/code/2024-12' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'vitepress', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://github.com/PRHyzzza/blog' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      level: 'deep',
      label: 'Content'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    search: {
      provider: 'local',
      options:{
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          }
        }
      }
    }
  }
})
