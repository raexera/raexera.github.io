---
title: "Hello, World"
description: "The one post to read before writing — a living reference for every element this blog supports."
pubDate: 2026-08-01
updatedDate: 2026-08-26
tags:
  - meta
  - writing
---

Welcome to the reference post. Everything below is a working example of a feature you can use in your own posts. Keep this open while you write.

## Frontmatter

Every post starts with YAML frontmatter. Only `title`, `description`, and `pubDate` are required.

```yaml title="src/content/blog/example.md"
---
title: "Post title"
description: "A one-line summary shown in cards and meta tags."
pubDate: 2026-08-01
updatedDate: 2026-08-26 # optional — shows "Updated …" in the header
tags: # optional — rendered as pills
  - meta
  - writing
draft: false # optional — hides the post when true
---
```

## Headings

Start at `##`. The post title is already rendered as the page `#`, so never use a top-level heading in the body.

### Third-level heading

#### Fourth-level heading

## Text

You can write **bold**, _italic_, ~~strikethrough~~, and `inline code`.

Links are underlined and follow the theme: [Astro](https://astro.build) powers this site. A bare URL like https://astro.build becomes a link automatically.

> Blockquotes render as a subtle callout, useful for asides and pull quotes.
>
> They span multiple paragraphs.

## Lists

Unordered:

- One
- Two
  - Nested item
  - Another nested item
- Three

Ordered:

1. First step
2. Second step
3. Third step

Task list:

- [x] Ship the blog
- [x] Document every feature
- [ ] Write more posts

## Tables

GFM tables are styled with hairline borders and centered alignment where specified.

| Language | Use case          | Highlighting |
| -------- | ----------------- | :----------: |
| `ts`     | Tooling, apps     |     Yes      |
| `bash`   | Commands, CI      |     Yes      |
| `yaml`   | Config, pipelines |     Yes      |
| `json`   | Data, APIs        |     Yes      |

## Code blocks

A basic block has no title:

```ts
type Post = {
  title: string;
  published: Date;
  tags: string[];
};

const latest = (posts: Post[]): Post =>
  [...posts].sort((a, b) => b.published.getTime() - a.published.getTime())[0];
```

Give a block a filename with `title="…"`:

```yaml title=".github/workflows/plan.yml"
name: terraform
on:
  pull_request:
    paths: ["infra/**"]

jobs:
  plan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: terraform plan -out=tfplan
        working-directory: infra
```

Shell commands:

```bash
pnpm install
pnpm dev
pnpm build
```

Diff blocks highlight additions and removals:

```diff
  resource "google_container_cluster" "primary" {
    name = "primary"
-   initial_node_count = 3
+   enable_autopilot = true
  }
```

More languages:

```go
func main() {
    messages := make(chan string)
    go func() { messages <- "ping" }()
    fmt.Println(<-messages)
}
```

```python
def handler(event, context):
    return {"status": 200, "body": "ok"}
```

## Images

Images are constrained to the reading column, with rounded corners and a hairline border.

![Static by default, dynamic when needed](/assets/blog/static-by-default.svg)

## Horizontal rules

A horizontal rule is a thin, full-width divider:

---

That's everything. When in doubt, read the source of this post in `src/content/blog/hello-world.md`.
