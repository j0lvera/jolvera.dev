import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

const POSTS_DIR = join(process.cwd(), "_posts");

export function getPostSlugs(dir) {
  return fs.readdirSync(dir);
}

export function getAllPosts() {
  const slugs = getPostSlugs(POSTS_DIR);
  return slugs.map(slug => slug.replace(/\.md$/, ""));
}

export function getPostBySlug(slug) {
  if (!slug) {
    return false;
  }

  const fullPath = join(POSTS_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content
  };
}
