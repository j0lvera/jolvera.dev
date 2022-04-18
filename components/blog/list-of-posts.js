import _range from "lodash.range";
import Link from "../link";
import pagination from "pagination";
import Layout from "../layouts/default";
import { Post } from "./post-item";
import { siteMeta } from "../../blog.config";
import { useRouter } from "next/router";

/**
 * Component that displays the list of posts for the Blog page
 * @param page
 * @param posts
 * @returns {JSX.Element}
 * @constructor
 */
function ListOfPosts({ page = 1, posts }) {
  const { pathname } = useRouter();
  const currentPage = page;

  // We need to sort before paginating, otherwise we slice the array sorted incorrectly,
  // and then we sort each array independently.
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const paginator = new pagination.SearchPaginator({
    prelink: "/",
    current: currentPage,
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
            excerpt={post.excerpt}
            date={post.date}
            path={post.slug}
            status={post.status}
          />
        ))}

      <nav
        aria-label="Change page"
        className="border-t light:border-gray-200 dark:border-gray-700 py-4 mt-8"
      >
        <ul className="list-none m-0 p-0 flex">
          {previous && (
            <li className="px-2">
              <Link href={`/blog/${previous}`}>Previous</Link>
            </li>
          )}
          {range.map((page, index) => {
            const isCurrentPage = Number(currentPage) === page;

            // If the pagination is for the current page then show the number
            // without a link
            return isCurrentPage ? (
              <li key={index} className="px-2">
                {page}
              </li>
            ) : (
              <li key={index} className="px-2">
                <Link key={index} href={`/blog/${page}`}>
                  {page}
                </Link>
              </li>
            );
          })}
          {next && (
            <li className="px-2">
              <Link href={`/blog/${next}`}>Next</Link>
            </li>
          )}
        </ul>
      </nav>
    </Layout>
  );
}

export { ListOfPosts };
