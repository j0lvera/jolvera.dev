import React from "react";
import Layout from "./default";
import SyntaxHighlight from "../syntax-highlight";
import PublishedAt from "../utils/published-at";
import { Box } from "@rebass/emotion";

function BlogPost({ meta, children }) {
  return (
    <Layout pageTitle={meta.title}>
      <SyntaxHighlight />
      <article>
        <Box as="header" mb={4}>
          <h1>{meta.title}</h1>

          <PublishedAt link={meta.path} date={meta.publishedAt} />
        </Box>
        <div>{children}</div>
      </article>
    </Layout>
  );
}

export default BlogPost;
