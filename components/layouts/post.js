import Link from "../link";
import { siteMeta } from "../../blog.config";
import Layout from "./default";
import { PublishedAt, Status } from "../utils";
import NextPrevPost from "../next-prev-post";

function Post({
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
        <header>
          <h1 className="mt-2">{title}</h1>

          <div>
            <Link href={slug}>
              <PublishedAt date={date} />
            </Link>

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
          </div>
        </header>
        <div
          className="e-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <footer>
          {(prevPost || nextPost) && (
            <div className="grid grid-cols-2 gap-1">
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
            </div>
          )}
        </footer>
      </article>
    </Layout>
  );
}

export default Post;
