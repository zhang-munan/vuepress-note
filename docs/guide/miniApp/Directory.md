---
title: 目录结构
date: '2022/03/03'
---

基本的目录结构如下：
```
.
├── assets(静态资源)
│   ├── css
│   ├── icon
│   └── image
│
├── common(共通方法)
│   ├── api.js
│   └── router.js
│
├── pages(页面)
│
├── presets(底层配置)
│   ├── base
│   │   └── index.js
│   ├── config
│   │   └── dataConfig.js
│   ├── modules
│   │   ├── axios.js
│   │   ├── behaviors.js
│   │   └── router.js
│   ├── utils
│   │   ├── common.js
│   │   └── test.js
│   └── index.js
│
├── util
│   ├── filter.js
│   ├── tool.js
│   └── util.js
│
├── .eslintrc.js
├── .gitignore
├── app.js
├── app.json
├── app.wxss
├── dlhc.config.js
├── project.config.json
└── sitemap.json
```
::: warning 注意
项目结构并不唯一，以下说明只针对当面模板
:::
- `` assets``: 用于存放静态资源（样式、图标和图片）。
- `` common/api``: api接口。
- `` common/router``: 页面跳转的方法。
- `` pages``: 页面。
- `` presets/index``: 配置文件入口。
- `` presets/base``: Page页面的底层方法，用来引入共通的js和配置项。
- `` presets/modules/axios``: api接口的底层实现。
- `` presets/modules/behaviors``: 是用于组件间代码共享的特性，类似于一些编程语言中的 “mixins” 或 “traits”。
- `` presets/modules/router``: 页面跳转的封装方法。
- `` presets/utils/common``: 共通方法。
- `` presets/utils/test``: check方法。
- `` utils/filter``: 定义项目中用到的数据字典。


::: tip 提示
baseConfig 是自行封装的用来帮助提升开发效率的工具，不是项目中必不可少的文件。
:::

**同时阅读:**
- [uniApp官方文档](https://uniapp.dcloud.io/)