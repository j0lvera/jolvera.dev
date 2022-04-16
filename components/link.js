import NextLink from "next/link";

const Link = props => (
  <NextLink href={props.href}>
    <a {...props}>{props.children}</a>
  </NextLink>
);

export default Link;
