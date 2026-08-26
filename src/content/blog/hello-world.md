---
title: "Hello, World"
description: "Welcome to my corner of the internet — notes on infrastructure, security, and distributed systems."
pubDate: 2026-08-01
updatedDate: 2026-08-26
tags:
  - meta
  - writing
---

> Every blog has a first post. This is mine — and yes, I'm starting with the oldest cliché in the book.

It's a cliché for a reason. `Hello, World` is the first program most of us ever ran, and this is the first thing I'm publishing here. Consider it a handshake: I'll write, you read, and we'll figure out the rest as we go.

## Who am I?

I'm Rayhan, a **DevSecOps engineer** who spends most days between Terraform, Kubernetes, and whichever CI pipeline is on fire this week.

This blog is my public notebook. Some posts will be _opinionated_, others incomplete, and plenty will be ~~wrong~~ revisited as I learn better. That's deliberate — writing in the open means getting corrected, and that's exactly how I want it.

## What to expect

### The recurring themes

The topics I keep circling back to:

- **Infrastructure** — Terraform, Kubernetes, and the glue in between.
  - Provisioning and state management
  - Cluster operations at a small scale
- **Security** — the boring, unglamorous kind that keeps systems running.
- **Distributed systems** — queues, consensus, and failure modes.
- **Tooling** — the small scripts that save hours.

#### Why these?

They're the parts of my job that are hardest to get right and easiest to get wrong.

## Why write in public?

1. Writing forces clarity. If I can't explain it, I don't understand it.
2. A public trail beats a private wiki when someone asks "where did you see that?"
3. Smarter people might correct me, and that's a feature, not a bug.

## The plan

- [x] Launch the blog
- [x] Set up code highlighting
- [ ] Publish at least once a month
- [ ] Write up my homelab setup

## A taste of the content

Posts will lean on code over prose. The kind of TypeScript I'd write to sort a list of posts:

```ts
type Post = {
  title: string;
  published: Date;
  tags: string[];
};

const latest = (posts: Post[]): Post =>
  [...posts].sort((a, b) => b.published.getTime() - a.published.getTime())[0];
```

The kind of config I stare at every day:

```yaml title=".github/workflows/deploy.yml"
name: deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - run: pnpm build
```

The shell one-liners I actually type:

```bash
kubectl get pods --sort-by=.metadata.creationTimestamp
```

And when I move infrastructure around, the diff usually looks like this:

```diff
  resource "google_container_cluster" "primary" {
    name     = "primary"
-   location = "asia-southeast1"
+   location = "asia-southeast2"
  }
```

## What I write with

A deliberately small stack:

| Tool     | Role                | Why                |
| -------- | ------------------- | ------------------ |
| Astro    | Site framework      | Static by default  |
| Markdown | Content             | Portable, readable |
| Shiki    | Syntax highlighting | Accurate, fast     |

## The fine print

![Static by default, dynamic when needed](/assets/blog/static-by-default.svg)

This site is built to be fast and quiet — no trackers, no popups, no "subscribe to my newsletter" banner. Just words and code, rendered as plain [HTML](https://en.wikipedia.org/wiki/HTML).

If you want to reach me, GitHub is easiest: https://github.com/raexera

---

Thanks for reading. The next post is already in the works.
