import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "prhzzzsl",
  description: "a blog",
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
      }
    ],

    socialLinks: [
      { icon: 'vitepress', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://github.com/PRHyzzza/blog' }
    ]
  }
})
