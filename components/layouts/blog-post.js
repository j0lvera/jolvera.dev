import { Styled } from "theme-ui";
import Link from "../link";
import { Box, Flex } from "rebass";
import { siteMeta } from "../../blog.config";
import Layout from "./default";
import PublishedAt from "../utils/published-at";
import NextPrevPost from "../next-prev-post";
import Status from "../status";

function BlogPost({
  content,
  slug,
  title,
  image,
  date,
  status,
  prevPost,
  nextPost
}) {
  return (
    <Layout pageTitle={title} ogImage={image}>
      <article className="h-entry">
        <Box as="header" mb={4}>
          <Styled.h1 className="p-name">{title}</Styled.h1>

          <Flex flexDirection={["column", "row"]}>
            <PublishedAt
              date={date}
              link={slug}
              mr={3}
              sx={{ color: "text", textDecoration: "none" }}
            />

            <Link
              href="/about"
              rel="author"
              className="p-author h-card"
              mr={3}
              sx={{ color: "text", textDecoration: "none" }}
            >
              {siteMeta.author}
            </Link>
            <Status status={status} />
          </Flex>
        </Box>
        <div
          className="e-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <Box as="footer" my={4}>
          {(prevPost || nextPost) && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "1rem"
              }}
            >
              {prevPost.slug && (
                <NextPrevPost
                  title={prevPost.title}
                  slug={prevPost.slug}
                  position="previous"
                />
              )}
              {nextPost.slug && (
                <NextPrevPost
                  title={nextPost.title}
                  slug={nextPost.slug}
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
