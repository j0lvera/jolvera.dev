import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import { Box, Text } from "@rebass/emotion";
import PublishedAt from "./utils/published-at";

const Anchor = styled.a`
  color: ${props => props.theme.color};
`;

const Post = ({ title, summary, date, path }) => (
  <Box as="article" mb={5}>
    <Box as="header" mb={3}>
      <Text as="h2" mb={0}>
        <Link href={path}>
          <Anchor>{title}</Anchor>
        </Link>
      </Text>

      <PublishedAt link={path} date={date} />
    </Box>
    <div className="post-summary">{summary}</div>
  </Box>
);

export default withTheme(Post);
