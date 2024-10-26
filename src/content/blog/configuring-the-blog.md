---
title: "Configuring the blog"
description: "Learn how to configure the blog template"
pubDate: "Oct 25 2024"
heroImage: "/src/assets/blog-placeholder-1.jpg"
tags: ["setup"]
---

Change the values in `src/config.json` to configure the blog to your liking, see below for more information.

most importantly, set `SITE` and `BASE` to your corresponding values.

## SITE

- when deploying to github pages, set this to your site url
  (e.g. "https://<your-github-username>.github.io")

## BASE

- when deploying to github pages, set this to your repo name
  except if you're either using a custom domain or 
  your repo name is `<your-github-username>.github.io` 
  (in which case, set it to "")

## SITE_TITLE

- will be shown in the title and meta tags and og image

## SITE_DESCRIPTION

- will be shown in the meta tags

## SITE_FAVICON

- will be used as the icon in the header and the favicon

## NAME

- used in the footer (c) YOUR_NAME

## POSTS_PER_PAGE

- how many posts to show on per paginated page (also used for tag pages)

## MANUAL_DARK_MODE

- should we show the dark mode toggle?
  (otherwise, it will be based on the user's system preferences)

## SEARCH_ENABLED

- should we show the search bar?

## BASE_COLOR

- shade of gray for the background
  one of 'gray', 'neutral', 'stone', 'zinc', 'slate'

## ACCENT_COLOR

- color of links, etc.
  one of 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'

## SOCIAL MEDIA LINKS

- set any of these to '' to hide the respective icon in the footer

- FACEBOOK_URL
- TWITTER_URL
- GITHUB_URL
- INSTAGRAM_URL
- LINKEDIN_URL
- YOUTUBE_URL
- SUBSTACK_URL
- EMAIL
