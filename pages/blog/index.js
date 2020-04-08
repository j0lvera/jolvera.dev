import { getAllPosts, getPostBySlug } from "../../lib/api";
import BlogIndex from "../../components/blog-index";
import { useRouter } from "next/router";

export default function Index({ posts }) {
  const { pathname } = useRouter();

  return <BlogIndex posts={posts} pathname={pathname} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const postsData = allPosts.map(slug => ({ slug, ...getPostBySlug(slug) }));

  return {
    props: {
      posts: postsData
    }
  };
}
