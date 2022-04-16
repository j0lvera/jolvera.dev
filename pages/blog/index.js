import { getAllPosts, getPostBySlug } from "../../lib/api";
import { ListOfPosts } from "../../components/blog";
import { useRouter } from "next/router";

function Index({ posts }) {
  const { pathname } = useRouter();

  return <ListOfPosts posts={posts} pathname={pathname} />;
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

export default Index;
export { getStaticProps };
