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
  margin-left: 1em;
`;

const Nav = () => (
  <Box as="nav" ml="auto">
    <List>
      <li>
        <Link href="/about">
          <Anchor>About</Anchor>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <Anchor>Blog</Anchor>
        </Link>
      </li>

      <li>
        <Link href="/projects">
          <Anchor>Projects</Anchor>
        </Link>
      </li>
    </List>
  </Box>
);

export default Nav;
