import PropTypes from "prop-types";
import Link from "./link";
import NextIcon from "../public/static/next.svg";

const NextPrevPost = ({ title, slug, position }) => {
  const isNext = position === "next";
  const shortTitle = title.length > 35 ? title.substring(0, 32) + "..." : title;
  return (
    <div className="py-4">
      <div
        className={`flex p-4 rounded border border-gray-400 dark:border-gray-600 light:bg-gray-100 ${
          isNext ? "justify-end" : "justify-start"
        }`}
      >
        <Link
          href={slug}
          className="flex flex-col no-underline justify-center"
          style={{
            alignItems: isNext ? "flex-end" : "flex-start"
          }}
          aria-label={`Read ${title}`}
          title={title}
        >
          <small className={`flex ${!isNext && "flex-row-reverse"}`}>
            Read {position} post{" "}
            {isNext ? (
              <NextIcon />
            ) : (
              <NextIcon style={{ transform: "rotate(180deg)" }} />
            )}
          </small>
          <small style={{ textDecoration: "underline" }}>{shortTitle}</small>
        </Link>
      </div>
    </div>
  );
};

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  position: PropTypes.oneOf(["next", "previous"])
};

export default NextPrevPost;
