---
title: "Configuring a post"
description: "Learn how to configure a post"
pubDate: "Oct 23 2024"
heroImage: "/src/assets/blog-placeholder-3.jpg"
tags: ["setup"]
---

a copy of `src/content/config.ts` is included below for reference. the comments explain all field values in the frontmatter.


```ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    // title of the blog post, don't repeat this in the markdown part
    title: z.string(),

    // will be shown in the blog post list
    description: z.string(),

    // date published
    pubDate: z.coerce.date(),
    // short description will be used for og image (fallback to description)
    shortDescription: z.string().optional(),

    // date updated
    updatedDate: z.coerce.date().optional(),

    // path to the hero image, HAS TO BE IN /src/assets folder
    // and HAS TO START with `/src/assets/`
    heroImage: z.string().optional(),

    // array of tags
    tags: z.array(z.string()).optional(),

    // whether to hide the hero image in the blog post
    hideHero: z.boolean().optional(),

    // whether to use the hero image as the og image (instead of the default `/src/assets/background.png`)
    useHeroAsOGImage: z.boolean().optional(),
    // wether to show title and short description in the og image
    noTextInOGImage: z.boolean().optional(),
  }),
});

export const collections = { blog };

```