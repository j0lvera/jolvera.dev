const fs = require("fs");
const path = require("path");
const posts = require("./get-blog-posts");
const { siteMeta } = require("../blog.config");

const OUT_DIR = path.join(process.cwd(), "out");

// https://jsonfeed.org/version/1
const feed = {
  version: "https://jsonfeed.org/version/1",
  title: siteMeta.title,
  home_page_url: siteMeta.siteUrl,
  feed_url: `${siteMeta.siteUrl}/feed.json`,
  description: siteMeta.description,
  icon: `${siteMeta.siteUrl}/static/apple-touch-icon-152x152.png`,
  favicon: `${siteMeta.siteUrl}/static/favicon.ico`,
  author: {
    name: siteMeta.author,
    url: siteMeta.siteUrl,
    avatar: `${siteMeta.siteUrl}/static/_jolvera-avatar.jpg`
  },
  items: posts.map(post => ({
    id: `${siteMeta.siteUrl}${post.path}`,
    url: `${siteMeta.siteUrl}${post.path}`,
    title: post.title,
    content_text: `${post.summary} - ${siteMeta.siteUrl}${post.path}`,
    summary: post.summary,
    image: `${siteMeta.siteUrl}${post.image}`,
    date_published: post.publishedAt,
    author: siteMeta.author
  }))
};

function generateRSSFeed(dir = OUT_DIR) {
  console.log("generating feed:", feed);
  console.log("path:", dir);
  fs.writeFileSync(path.join(dir, "feed.json"), JSON.stringify(feed));
}

generateRSSFeed(`${process.cwd()}/static`);

// module.exports = generateRSSFeed;

// const fs = require("fs");
// const path = require("path");
// const posts = require("./get-blog-posts");
// const { siteMeta } = require("../blog.config");

// const OUT_DIR = path.join(process.cwd(), "out");

// // https://jsonfeed.org/version/1
// const feed = {
//   version: "https://jsonfeed.org/version/1",
//   title: siteMeta.title,
//   home_page_url: siteMeta.siteUrl,
//   feed_url: `${siteMeta.siteUrl}/feed.json`,
//   description: siteMeta.description,
//   icon: `${siteMeta.siteUrl}/static/apple-touch-icon-152x152.png`,
//   favicon: `${siteMeta.siteUrl}/static/favicon.ico`,
//   author: {
//     name: siteMeta.author,
//     url: siteMeta.siteUrl,
//     avatar: `${siteMeta.siteUrl}/static/_jolvera-avatar.jpg`
//   },
//   items: posts.map(post => ({
//     id: `${siteMeta.siteUrl}${post.path}`,
//     url: `${siteMeta.siteUrl}${post.path}`,
//     title: post.title,
//     content_text: `${post.summary} - ${siteMeta.siteUrl}${post.path}`,
//     summary: post.summary,
//     image: `${siteMeta.siteUrl}${post.image}`,
//     date_published: post.publishedAt,
//     author: siteMeta.author
//   }))
// };

// function generateRSSFeed(dir = OUT_DIR) {
//   console.log("generating feed:", feed);
//   fs.writeFileSync(path.join(dir, "feed.json"), JSON.stringify(feed));
// }

// module.exports = generateRSSFeed;
