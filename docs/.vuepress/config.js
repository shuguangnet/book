import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/book/',
  title: 'ShuGuangNet',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://sgblog.oss-cn-beijing.aliyuncs.com/uploads/2021/07/550090076.jpg',

    navbar: ['/', '/get-started'],
  }),

  bundler: webpackBundler(),
})
