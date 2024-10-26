---
title: "Configuring the blog"
description: "Learn how to configure the blog template"
pubDate: "Oct 25 2024"
heroImage: "/src/assets/blog-placeholder-1.jpg"
tags: ["setup"]
---

a copy of `src/consts.ts` is included below for reference, change the values to configure the blog to your liking.

most importantly, set `SITE` and `BASE` to your corresponding values.

```ts
import type { AccentColors, BaseColors } from "./types";

// when deploying to github pages, set this to your site url
// (e.g. "https://<your-github-username>.github.io")
export const SITE = "https://flo-bit.github.io"

// when deploying to github pages, set this to your repo name
// except if you're either using a custom domain or 
// your repo name is <your-github-username>.github.io 
// (in which case, set it to "")
export const BASE = "/blog-template";

// will be shown in the title and meta tags and og image
export const SITE_TITLE = "Blog template";
export const SITE_DESCRIPTION = "Welcome to my website!";
// will be used as the icon in the header and the favicon
export const SITE_FAVICON = "🙃";

// used in the footer (c) YOUR_NAME
export const NAME = "flo-bit";

// how many posts to show on per paginated page (also used for tag pages)
export const POSTS_PER_PAGE = 5;

// should we show the dark mode toggle?
// (otherwise, it will be based on the user's system preferences)
export const MANUAL_DARK_MODE = true;

// should we show the search bar?
export const SEARCH_ENABLED = true;

// shade of gray for the background
// one of 'gray', 'neutral', 'stone', 'zinc', 'slate'
export const BASE_COLOR: BaseColors = "stone";

// color of links, etc.
// one of 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
// 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
export const ACCENT_COLOR: AccentColors = "amber";
```