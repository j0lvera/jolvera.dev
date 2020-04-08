import { getAllPosts, getPostBySlug } from "../../lib/api";
import BlogIndex from "../../components/blog-index";
import {useRouter} from "next/router";

export default function BlogPage({ posts }) {
    const { query, pathname } = useRouter();

    return <BlogIndex page={query.slug} posts={posts} pathname={pathname} />;
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
export async function getStaticPaths() {
    const allPosts = getAllPosts();
    const paths = allPosts.map((slug, index) => `/blog/${index + 1}`);
    return {
        paths,
        fallback: false,
    }
}
