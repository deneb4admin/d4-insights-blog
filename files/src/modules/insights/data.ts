/** Server-only accessors for the articles collection. */
import { readCollection, writeCollection } from "@/lib/cms/data-store";
import type { Article } from "./types";

export function getArticles(): Article[] {
  const articles = readCollection<Article[]>("articles", []);
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(id: string): Article | undefined {
  return getArticles().find((a) => a.id === id);
}

export function saveArticles(articles: Article[]): void {
  writeCollection("articles", articles);
}
