# astro blog template

minimalistic but opinionated blog template using [astro](https://astro.build/) and [svelte](https://svelte.dev/). aims to be super easy to deploy and use, with a focus on performance and SEO, ease-of-use and design.

See a [live demo here](https://flo-bit.dev/blog-template/) (also doubles as a tutorial on how to use this template).

Features:

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data (automatically generated)
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Pagination
- ✅ Syntax highlighting (+ copy button)
- ✅ Dark and light mode with toggle button or auto-detect
- ✅ Search included
- ✅ Tags for posts
- ✅ Super easy to deploy as a static site
- ✅ Includes some prebuilt components for you to use

## tutorials

the demo blog doubles as a tutorial on how to use this template:

- [minimal setup with github pages](https://flo-bit.dev/blog-template/posts/how-to-use)

- [adding content](https://flo-bit.dev/blog-template/posts/adding-content)

- [supported markdown features](https://flo-bit.dev/blog-template/posts/markdown-style-guide)

- [how to use mdx](https://flo-bit.dev/blog-template/posts/using-mdx)

## Minimal setup with github pages

1. Fork this repository

2. Set up your blog info in `src/consts.ts` (most importantly set 'SITE' and 'BASE' to your corresponding values, see `src/consts.ts` for more info)

3. Add your blog posts in `src/content/blog/`

4. Add your info in `src/content/info/`:

- `description.md` is used for the homepage description
- `about.md` is used for the about page

5. In your repository settings, set up github pages to deploy using github actions

6. Enjoy your new blog at: `https://<your-github-username>.github.io/<your-repo-name>`