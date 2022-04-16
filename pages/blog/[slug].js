import { getAllPosts, getPostBySlug } from "../../lib/api";
import { ListOfPosts } from "../../components/blog";
import { useRouter } from "next/router";

function BlogPage({ posts }) {
  const { query, pathname } = useRouter();

  return <ListOfPosts page={query.slug} posts={posts} pathname={pathname} />;
}

async function getStaticProps() {
  const allPosts = getAllPosts();
  const postsData = allPosts.map(slug => ({ slug, ...getPostBySlug(slug) }));

  return {
    props: {
      posts: postsData
    }
  };
}

async function getStaticPaths() {
  const allPosts = getAllPosts();
  const paths = allPosts.map((slug, index) => `/blog/${index + 1}`);
  return {
    paths,
    fallback: false
  };
}

export default BlogPage;

export { getStaticProps, getStaticPaths };
