import Link from "../link";
import { siteMeta } from "../../blog.config";
import Layout from "./default";
import PublishedAt from "../utils/published-at";
import NextPrevPost from "../next-prev-post";
import Status from "../status";

function BlogPost({
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
          <h1>{title}</h1>

          <div>
            <PublishedAt
              date={date}
              link={slug}
              mr={3}
              sx={{ color: "text", textDecoration: "none" }}
            />

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
            <div
              // sx={{
              //   display: "grid",
              //   gridTemplateColumns: "1fr 1fr",
              //   gridGap: "1rem"
              // }}
            >
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

export default BlogPost;
