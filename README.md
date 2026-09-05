# 0xRavenBlack

A static blog, built with [Jekyll](https://jekyllrb.com) and GitHub Pages.
The look is ported from my old Tumblr theme — pastel goth, pitch black,
animated mist and rising sparks, glowing serif headlines.

## Write a new blog entry

Create a file in `_posts/` named `YYYY-MM-DD-any-slug.md`:

```markdown
---
title: "My Post Title"
date: 2026-09-05
tags: [coding, linux, gothic]
---

Your Markdown body goes here.

```python
print("code blocks work too")
```
```

Title and date are required. Tags and the excerpt are optional. That's all
there is to it — commit and push and GitHub Pages rebuilds automatically.

## Development

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000.

## Customise

- **Header image**: replace `assets/img/header.jpg` (path in `_config.yml`)
- **Avatar**: replace `assets/img/avatar.png` (currently restored from the old 2022 site)
- **Seamless background texture**: replace `assets/img/bg-texture.png` — it tiles (CSS `background-repeat: repeat`); any size works, a 512x512 tile is a good default
- **Favicon**: replace `assets/img/favicon.png`
- **Title / description / links**: edit `_config.yml`
- **Colours / background**: edit the design tokens in `assets/css/main.css`
  (e.g. `--bg-texture` switches the tile, `background-size` controls its scale)

The behaviour is determined by `_config.yml`:
- `paginate: 6` — posts per page
- `permalink: /:year/:month/:title/` — post URL format
