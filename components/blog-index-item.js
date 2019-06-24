/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "next/link";
import { withTheme } from "emotion-theming";
import { Box, Text, Flex } from "@rebass/emotion";
import PublishedAt from "./utils/published-at";
import Status from "./status";

const Post = ({ title, summary, date, path, status }) => {
  console.log("status", status);

  return (
    <Box as="article" mb={5}>
      <Box as="header" mb={3}>
        <Text as="h2" mb={0}>
          <Link href={path}>
            <a css={theme => ({ color: theme.color })}>{title}</a>
          </Link>
        </Text>

        <Flex mt={2}>
          <PublishedAt link={path} date={date} />

          <Status ml={3} status={status} />
        </Flex>
      </Box>
      <div className="post-summary">{summary}</div>
    </Box>
  );
};

export default withTheme(Post);
