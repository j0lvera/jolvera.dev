/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Box } from "@rebass/emotion";
import Link from "next/link";

const Nav = () => (
  <Box as="nav" ml="auto">
    <ul
      css={css`
        display: flex;
        padding-left: 0;
        margin-left: 0;
        margin-bottom: 0;
        list-style: none;

        a {
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
    </ul>
  </Box>
);

export default Nav;
