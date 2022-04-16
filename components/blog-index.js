import _range from "lodash.range";
import Link from "../components/link";
import pagination from "pagination";
import Layout from "../components/layouts/default";
import Post from "../components/blog-index-item";
import { siteMeta } from "../blog.config";
import { useRouter } from "next/router";

export default function BlogIndex({ page = 1, posts }) {
  const { pathname } = useRouter();

  // We need to sort before paginating, otherwise we slice the array sorted incorrectly,
  // and then we sort each array independently.
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const paginator = new pagination.SearchPaginator({
    prelink: "/",
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: sortedPosts.length
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
    <Layout pageTitle="Blog" path={pathname}>
      <header>
        <h1>Blog</h1>
      </header>

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

      <ul
        style={{
          listStyle: "none"
        }}
      >
        {previous && (
          <li>
            <Link href={`/blog/${previous}`}>Previous</Link>
          </li>
        )}
        {range.map((page, index) => (
          <li key={index}>
            <Link key={index} href={`/blog/${page}`}>
              {page}
            </Link>
          </li>
        ))}
        {next && (
          <li>
            <Link href={`/blog/${next}`}>Next</Link>
          </li>
        )}
      </ul>
    </Layout>
  );
}
