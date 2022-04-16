import Link from "../link";
import { siteMeta } from "../../blog.config";
import Layout from "./default";
import PublishedAt from "../utils/published-at";

function Note({ path, meta, children }) {
  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <article className="h-entry" color="background">
        <div>
          <img
            src="/static/avatar.png"
            alt="Juan Olvera's Avatar"
            style={{
              width: "3rem",
              height: "3rem"
            }}
          />
          <div>
            <div style={{ display: "flex" }}>
              <Link
                href="/about"
                rel="author"
                className="p-author h-card"
                mr={3}
              >
                {siteMeta.author}
              </Link>

              <PublishedAt date={meta.publishedAt} link={path} mr={3} />
            </div>

            <div className="p-name p-content">{children}</div>
          </div>
        </div>

        <footer>Like, RT, Comment</footer>
      </article>
    </Layout>
  );
}

export default Note;
