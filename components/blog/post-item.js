import Link from "../link";
import { PublishedAt, Status } from "../utils";
import React from "react";

/**
 * Format entry in the list of posts.
 * @param title
 * @param summary
 * @param date
 * @param path
 * @param status
 * @returns {JSX.Element}
 * @constructor
 */
function Post({ title, excerpt, date, path, status }) {
  const wordLimit = 240;
  const summaryCut =
    excerpt.length > wordLimit
      ? excerpt.substring(0, wordLimit) + " [...]"
      : excerpt;

  return (
    <article>
      <header>
        <h2 className="mb-2">
          <Link href={`/posts/${path}`} tabIndex="0" className="no-underline">
            {title}
          </Link>
        </h2>

        <div className="flex space-x-3">
          <Link
            href={`/posts/${path}`}
            className="u-url no-underline text-gray-500 dark:text-gray-400"
          >
            <PublishedAt date={date} />
          </Link>

          <Status status={status} />
        </div>
      </header>

      <p>{summaryCut}</p>

      <footer>
        <Link href={`/posts/${path}`} aria-label={`Read ${title}`}>
          Read Post
        </Link>
      </footer>
    </article>
  );
}

export { Post };
