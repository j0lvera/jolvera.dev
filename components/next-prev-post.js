import PropTypes from "prop-types";
import Link from "./link";
import NextIcon from "../public/static/next.svg";

const NextPrevPost = ({ title, slug, position }) => {
  const isNext = position === "next";
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #333",
        padding: "1rem",
        borderRadius: "5px",
        justifyContent: isNext ? "flex-end" : "flex-start"
      }}
    >
      <Link
        href={slug}
        sx={{
          gridColumn: isNext && "2/2",
          display: "flex",
          flexDirection: "column",
          alignItems: isNext ? "flex-end" : "flex-start",
          textDecoration: "none"
        }}
      >
        <small
        // flexDirection={!isNext && "row-reverse"}
        >
          Read {position} post{" "}
          {isNext ? (
            <NextIcon />
          ) : (
            <NextIcon style={{ transform: "rotate(180deg)" }} />
          )}
        </small>
        <small style={{ textDecoration: "underline" }}>{title}</small>
      </Link>
    </div>
  );
};

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  position: PropTypes.oneOf(["next", "previous"])
};

export default NextPrevPost;
