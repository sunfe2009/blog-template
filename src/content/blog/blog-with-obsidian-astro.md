---
title: 用 Obsidian 客户端发布文章到 Astro 博客
description: " 相当于是静态网站有了 CMS 了"
pubDate: Feb 13 2025
published: true
heroImage: https://images.unsplash.com/photo-1499750310107-5fef28a66643
tags:
  - blog
  - obsidian
  - astro
slug: blog-with-obsidian-astro
---
很早就听说过 Obsidian，但是因为名字太拗口，一直没提起兴趣了解。
最近偶然在小红书刷到它的插件市场，发现它有个功能可以直接把本地的 markdown 一键同步到对应的 Github 仓库，然后更新到静态网站的前端；

这可太方便了，相当于 Astro 有了 CMS 了。

记录一下大致流程，

 去 Astro、Hexo、Hugo 的主题市场任选一款喜欢的主题。
 
 ↓
 
 在本地初始化对应的静态生成器，然后发布到 Github。
 
 ↓
 
 在 Cloudflare/Vercel 一键托管。
 
 ↓
 
 在 Obsidian 安装 Static Site MD Exporter 这款插件并设置 Github 秘钥。
 
↓

Obsidian 侧边栏将出现发布按钮，点击就可以发布啦。