import satinizeHTML from "sanitize-html";
import fetch from "isomorphic-unfetch";

const allowedTypes = ["mention-of", "in-reply-to"];

const sanitize = entry => {
  const { content } = entry;

  if (!content) {
    return entry;
  }

  if (content["content-type"] === "text/html") {
    content.html = satinizeHTML(content.html);
  }

  return entry;
};

const isValid = entry => {
  const { author, published, content } = entry;
  return author.name && published && content;
};

export const getWebMentions = async () => {
  const url = process.env.webmentionsUrl;

  const response = await fetch(url);

  console.log("webmentions url:", url);
  console.log("webmentions response:", response);

  if (response.ok) {
    const js = await response.json();
    return js;
  }

  // throw new Error(response.statusText);
  return {};
};

export const sortWebMentions = (webmentions = [], url) =>
  webmentions
    // .filter(entry => entry["wm-target"] === url)
    // .filter(entry => allowedTypes.includes(entry["wm-property"]))
    .filter(isValid)
    .map(sanitize);
