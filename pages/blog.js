/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Box } from "@rebass/emotion";
import _range from "lodash.range";
import Link from "next/link";
import pagination from "pagination";
import Layout from "../components/layouts/default";
import Post from "../components/blog-index-item";
import blogposts from "../posts/index";
import { siteMeta } from "../blog.config";

const Blog = ({ url, page = 1 }) => {
  const paginator = new pagination.SearchPaginator({
    prelink: "/",
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: blogposts.length
  });

  const {
    previous,
    range,
    next,
    fromResult,
    toResult
  } = paginator.getPaginationData();
  const results = _range(fromResult - 1, toResult);

  return (
    <Layout pageTitle="Blog" path={url.pathname}>
      <Box as="header" mb={4}>
        <h1>Blog</h1>

        <p>
          You can subscribe to my <a href="/feed.json">blog RSS feed.</a>
        </p>
      </Box>

      {blogposts
        .filter((_post, index) => results.indexOf(index) > -1)
        .map((post, index) => (
          <Post
            key={index}
            title={post.title}
            summary={post.summary}
            date={post.publishedAt}
            path={post.path}
          />
        ))}

      <ul
        css={css`
          display: flex;
          padding-left: 0;
          margin-left: 0;
          list-style: none;

          a {
            padding: 0.5em;
            margin-right: 0.3em;
          }
        `}
      >
        {previous && (
          <li>
            <Link href={`/blog?page=${previous}`} as={`/blog/${previous}`}>
              <a>Previous</a>
            </Link>
          </li>
        )}
        {range.map((page, index) => (
          <li key={index}>
            <Link key={index} href={`/blog?page=${page}`} as={`/blog/${page}`}>
              <a>{page}</a>
            </Link>
          </li>
        ))}
        {next && (
          <li>
            <Link href={`/blog?page=${next}`} as={`/blog/${next}`}>
              <a>Next</a>
            </Link>
          </li>
        )}
      </ul>
    </Layout>
  );
};

Blog.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {};
};

export default Blog;
