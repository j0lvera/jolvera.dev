import { Box, Flex, Text, Link as RebassLink } from "rebass";
import { Styled } from "theme-ui";
import _range from "lodash.range";
import Link from "../components/link";
import pagination from "pagination";
import Layout from "../components/layouts/default";
import Post from "../components/blog-index-item";
import { siteMeta } from "../blog.config";

export default function BlogIndex({ page = 1, posts, pathname }) {
  const paginator = new pagination.SearchPaginator({
    prelink: "/",
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: posts.length
  });

  console.log("paginator", posts);

  const {
    previous,
    range,
    next,
    fromResult,
    toResult
  } = paginator.getPaginationData();
  const results = _range(fromResult - 1, toResult);

  return (
    <Layout pageTitle="Blog" path={pathname}>
      <Box as="header" mb={4}>
        <Styled.h1>Blog</Styled.h1>

        <Text as="p">
          Subscribe to the <RebassLink href="/feed.json">JSON feed.</RebassLink>
        </Text>
      </Box>

      {posts
        .filter((_, index) => results.indexOf(index) > -1)
        .map((post, index) => (
          <Post
            key={index}
            title={post.title}
            summary={post.excerpt}
            date={post.date}
            path={post.slug}
            status={post.status}
          />
        ))}

      <Flex
        as="ul"
        pl={0}
        ml={0}
        sx={{
          listStyle: "none",
          "li:not(:first-of-type)": { marginLeft: "1em" }
        }}
      >
        {previous && (
          <li>
            <Link href={`${pathname}/${previous}`}>Previous</Link>
          </li>
        )}
        {range.map((page, index) => (
          <li key={index}>
            <Link key={index} href={`${pathname}/${page}`}>
              {page}
            </Link>
          </li>
        ))}
        {next && (
          <li>
            <Link href={`${pathname}/${next}`}>Next</Link>
          </li>
        )}
      </Flex>
    </Layout>
  );
}
