import { getCollection } from "astro:content";

const WORDS_PER_MINUTE = 200;

export async function getPublishedPosts() {
  const posts = await getCollection("blog");
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatDateISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}
