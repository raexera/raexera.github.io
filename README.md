# Rxyhn's Personal Website

This is the source code for my personal website. It is built using [Astro](https://astro.build/).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
.
├── public
└── src
    ├── assets
    │   └── images
    ├── components
    │   └── sections
    ├── icons
    ├── layouts
    ├── lib
    ├── pages
    ├── scripts
    └── styles
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
