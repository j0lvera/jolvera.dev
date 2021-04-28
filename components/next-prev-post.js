import PropTypes from "prop-types";
import Link from "./link";
import { Flex, Text } from "rebass";
import NextIcon from "../public/static/next.svg";

const NextPrevPost = ({ title, slug, position }) => {
  const isNext = position === "next";
  return (
    <Flex
      sx={{
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
        <Flex
          as="small"
          alignItems="center"
          color="text"
          flexDirection={!isNext && "row-reverse"}
          mb={2}
        >
          Read {position} post{" "}
          {isNext ? (
            <NextIcon />
          ) : (
            <NextIcon style={{ transform: "rotate(180deg)" }} />
          )}
        </Flex>
        <Text as={"small"} color="primary" sx={{ textDecoration: "underline" }}>
          {title}
        </Text>
      </Link>
    </Flex>
  );
};

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  position: PropTypes.oneOf(["next", "previous"])
};

export default NextPrevPost;
