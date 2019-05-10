/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Text, Flex } from "@rebass/emotion";
import NextIcon from "../static/next.svg";

const NextPrevPost = ({ title, path, position }) => {
  const isNext = position === "next";
  return (
    <>
      <Link href={path}>
        <Text
          as="a"
          css={
            isNext &&
            css`
              text-align: right;
              grid-column: 2/2;
            `
          }
        >
          <Flex
            as="small"
            alignItems="center"
            justifyContent={isNext ? "end" : "start"}
            flexDirection={!isNext && "row-reverse"}
            mb={2}
          >
            Read {position} post{" "}
            {isNext ? (
              <NextIcon />
            ) : (
              <NextIcon
                css={css`
                  transform: rotate(180deg);
                `}
              />
            )}
          </Flex>
          {title}
        </Text>
      </Link>
    </>
  );
};

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["next", "previous"])
};

export default NextPrevPost;
