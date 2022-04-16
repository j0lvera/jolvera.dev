import Link from "./link";
import PublishedAt from "./utils/published-at";
import Status from "./status";

const Post = ({ title, summary, date, path, status }) => {
  return (
    <article>
      <header>
        <h2>
          <Link
            href={`/posts/${path}`}
            tabIndex="0"
            sx={{ textDecoration: "none" }}
          >
            {title}
          </Link>
        </h2>

        <div style={{ display: "flex" }}>
          <PublishedAt
            link={path}
            date={date}
            sx={{ textDecoration: "none", color: "text" }}
          />

          <Status ml={3} status={status} />
        </div>
      </header>
    </article>
  );
};

export default Post;
