import RSS from "rss";
import { siteMeta } from "../../blog.config";
import { getAllPosts, getPostBySlug } from "../../lib/api";
const { title, description, siteUrl, author } = siteMeta;

export default (req, res) => {
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

    console.log(title, excerpt, slug, author, date);
    feed.item({
      title,
      description: excerpt,
      url: slug,
      author,
      date
    });
  });

  const xml = feed.xml();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/rss+xml");
  res.end(xml);
};
