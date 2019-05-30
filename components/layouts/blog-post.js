/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";
import { Box, Flex, Text } from "@rebass/emotion";
import { siteMeta } from "../../blog.config";
import Layout from "./default";
import SyntaxHighlight from "../syntax-highlight";
import PublishedAt from "../utils/published-at";
import blogposts from "../../posts/index";
import NextPrevPost from "../next-prev-post";
import WebMentions from "../webmentions";

function BlogPost({ path, meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title);
  const previousPost = blogposts[currentPostIndex + 1];
  const nextPost = blogposts[currentPostIndex - 1];

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <SyntaxHighlight />
      <article className="h-entry">
        <Box as="header" mb={4}>
          <h1 className="p-name">{meta.title}</h1>

          <Flex>
            <PublishedAt date={meta.publishedAt} link={path} mr={3} />

            <Link href="/about">
              <Text
                as="a"
                color="#aaa"
                rel="author"
                className="p-author h-card"
                mr={3}
                href="/about"
              >
                {siteMeta.author}
              </Text>
            </Link>
          </Flex>
        </Box>
        <div className="e-content">{children}</div>
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

      <WebMentions url={path} />
    </Layout>
  );
}

export default BlogPost;
