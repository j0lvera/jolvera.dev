import styled from "@emotion/styled";
import { Box } from "@rebass/emotion";
import Link from "next/link";

const List = styled.ul`
  display: flex;
  padding-left: 0;
  margin-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

const Anchor = styled.a`
  padding: 0.5em 1.9em;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

const Nav = () => (
  <Box as="nav" ml="auto">
    <List>
      <li>
        <Link prefetch href="/">
          <Anchor>Home</Anchor>
        </Link>
      </li>

      <li>
        <Link href="/blog">
          <Anchor>Blog</Anchor>
        </Link>
      </li>

      <li>
        <Link href="/about">
          <Anchor>About</Anchor>
        </Link>
      </li>
    </List>
  </Box>
);

export default Nav;
