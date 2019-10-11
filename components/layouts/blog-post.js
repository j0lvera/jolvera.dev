import { Styled } from "theme-ui";
import Link from "../link";
import { Box, Flex } from "rebass";
import { siteMeta } from "../../blog.config";
import Layout from "./default";
import PublishedAt from "../utils/published-at";
import { posts as blogposts } from "../../posts/index";
import NextPrevPost from "../next-prev-post";
import WebMentions from "../webmentions";
import Status from "../status";
import Changelog from "../changelog";

function BlogPost({ path, meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title);
  const previousPost = blogposts[currentPostIndex + 1];
  const nextPost = blogposts[currentPostIndex - 1];

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <article className="h-entry">
        <Box as="header" mb={4}>
          <Styled.h1 className="p-name">{meta.title}</Styled.h1>

          <Flex flexDirection={["column", "row"]}>
            <PublishedAt date={meta.publishedAt} link={path} mr={3} />

            <Link href="/about" rel="author" className="p-author h-card" mr={3}>
              {siteMeta.author}
            </Link>
            <Status status={meta.status} />
          </Flex>
        </Box>
        <div className="e-content">{children}</div>
        <Box as="footer" my={4}>
          <Box my={4}>
            {meta.changelog && <Changelog details={meta.changelog} />}
          </Box>

          {(previousPost || nextPost) && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
              }}
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
