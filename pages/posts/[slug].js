import { useRouter } from "next/router";
import md2html from "../../lib/md2html";
import { getPostBySlug, getAllPosts } from '../../lib/api';
import BlogPost from "../../components/layouts/blog-post";

export default function Post({ post }) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <div>404</div>
    }
    return (
        <BlogPost
            content={post.content}
            slug={post.slug}
            title={post.title}
            image={post.image}
            date={post.date}
            status={post.status}
            prevPost={post.prevPost}
            nextPost={post.nextPost}
        />
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    const post = getPostBySlug(slug);
    const content = await md2html(post.content ?? '')

    // Get previous and next slugs to add to prev next links in post
    const allPosts = getAllPosts();
    const currentPostIndex = allPosts.map(slug => slug).indexOf(slug);
    const previousPostSlug = allPosts[currentPostIndex + 1];
    const nextPostSlug = allPosts[currentPostIndex -1];

    const prevPost = getPostBySlug(previousPostSlug);
    const nextPost = getPostBySlug(nextPostSlug);

    return {
        props: {
            post: {
                ...post,
                slug,
                content,
                prevPost: {
                    ...prevPost,
                    slug: previousPostSlug ?? null
                },
                nextPost: {
                    ...nextPost,
                    slug: nextPostSlug ?? null
                }
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts();
    const paths = posts.map((slug) => ({ params: { slug }}));

    return {
        paths,
        fallback: false,
    }
}
