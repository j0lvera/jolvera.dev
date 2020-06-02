const fs = require("fs");
const path = require("path");
const RSS = require("rss");
const { siteMeta } = require("../blog.config");
const { getAllPosts, getPostBySlug } = require("../lib/api");
const { title, description, siteUrl, author } = siteMeta;

const feed = new RSS({
  title,
  description,
  feed_url: `${siteUrl}/api/rss`,
  site_url: siteUrl,
  webMaster: `juan@jolvera.dev (${author})`,
  language: "en"
});

const allPosts = getAllPosts();

allPosts.forEach(post => {
  const { title, excerpt, slug, author, date } = getPostBySlug(post);

  feed.item({
    title,
    description: excerpt,
    url: `${siteUrl}/posts/${slug}`,
    author,
    date
  });
});

const xml = feed.xml();

fs.writeFileSync(path.join("./public", "feed.xml"), xml);
