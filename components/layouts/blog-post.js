/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Box } from "@rebass/emotion";
import Layout from "./default";
import SyntaxHighlight from "../syntax-highlight";
import PublishedAt from "../utils/published-at";
import blogposts from "../../posts/index";
import NextPrevPost from "../next-prev-post";

function BlogPost({ meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title);
  const previousPost = blogposts[currentPostIndex - 1];
  const nextPost = blogposts[currentPostIndex + 1];

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <SyntaxHighlight />
      <article>
        <Box as="header" mb={4}>
          <h1>{meta.title}</h1>

          <PublishedAt link={meta.path} date={meta.publishedAt} />
        </Box>
        <div>{children}</div>
        <Box as="footer" mt={4}>
          {(previousPost || nextPost) && (
            <Box
              css={css`
                display: grid;
                grid-template-columns: 1fr 1fr;
              `}
            >
              {previousPost && (
                <NextPrevPost
                  title={previousPost.title}
                  path={previousPost.path}
                  position="previous"
                />
              )}
              {nextPost && (
                <NextPrevPost
                  title={nextPost.title}
                  path={nextPost.path}
                  position="next"
                />
              )}
            </Box>
          )}
        </Box>
      </article>
    </Layout>
  );
}

export default BlogPost;
