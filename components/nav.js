/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Box, Flex } from "@rebass/emotion";
import Link from "next/link";

const Nav = props => (
  <Box as="nav" ml={[0, "auto"]} {...props}>
    <Flex
      pl={0}
      ml={0}
      mb={0}
      as="ul"
      css={css`
        list-style: none;

        li:not(:first-child) a {
          margin-left: 1rem;
        }
      `}
    >
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>

      <li>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </li>
    </Flex>
  </Box>
);

export default Nav;
