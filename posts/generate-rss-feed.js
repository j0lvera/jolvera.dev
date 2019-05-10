const { send, run } = require("micro");
const posts = require("./get-blog-posts");
const RSS = require("rss");

const rssFeed = async () => {
  const feed = new RSS({
    title: "title",
    description: "description",
    feed_url: "http://example.com/rss.xml",
    site_url: "http://example.com",
    image_url: "http://example.com/icon.png",
    webMaster: "Dylan Greene",
    language: "en"
  });

  posts.forEach(({ title, description, path, author, publishedAt }) => {
    feed.item({
      title,
      description,
      url: path,
      author,
      date: publishedAt
    });
  });

  return send(res, 200, JSON.stringify(feed));
};

module.exports = (req, res) => run(req, res, rssFeed);
