# README

## 介绍

微信小程序版个人主页。

## 特性

1. 纯静态，无数据库，无需安装依赖项，开箱即用
2. 绝大多数内容可通过 js 文件修改，对非技术人员友好
3. 依托微信这一国民级应用，方便传播介绍自己
4. 完全开源，可自主定制，但需保留作者署名

> 注意：微信小程序禁止跳转外部平台，只能复制文字或链接。

## 项目结构

```
`/images`文件夹，存放图片资源  
`/pages`文件夹，页面路径  
`app.json`，小程序入口文件  
`app.wxss`，主要样式  
`app.js`，主要JavaScript  
``` 

```
├── components/
│   └── navigation-bar/
│       ├── navigation-bar.js
│       ├── navigation-bar.json
│       ├── navigation-bar.wxml
│       └── navigation-bar.wxss
├── images/
│   ├── avatar.jpg
│   ├── navlogo.png
│   ├── navlogo2.png
│   └── ...(其他图片文件)
├── pages/
│   ├── about/
│   │   ├── about.js
│   │   ├── about.json
│   │   ├── about.wxml
│   │   └── about.wxss
│   ├── index/
│   │   ├── ecard/
│   │   │   ├── ecard.js
│   │   │   ├── ecard.json
│   │   │   ├── ecard.wxml
│   │   │   └── ecard.wxss
│   │   ├── resume/
│   │   │   ├── resume.js
│   │   │   ├── resume.json
│   │   │   ├── resume.wxml
│   │   │   └── resume.wxss
│   │   ├── studio/
│   │   │   ├── studio.js
│   │   │   ├── studio.json
│   │   │   ├── studio.wxml
│   │   │   └── studio.wxss
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   └── logs/
│       ├── logs.js
│       ├── logs.json
│       ├── logs.wxml
│       └── logs.wxss
└── utils/
    └── util.js
├── .eslintrc.js
├── app.js
├── app.json
├── app.wxss
├── preview.png
├── project.config.json
├── project.private.config.json
├── README.md
├── sitemap.json
```

## 使用方法

> 需要在[微信公众平台](https://mp.weixin.qq.com)注册微信小程序账号，获取 appid。

1. 将本项目 clone 到本地；
2. 导入到微信开发者工具中，在 project.config.json 文件（第32行）中修改 appid；
3. 修改相关代码和图片； 
4. 提交上传代码至微信小程序管理后台，等待审核；
5. 在微信小程序管理后台发布。

## 运行预览

![项目运行预览](preview.png)