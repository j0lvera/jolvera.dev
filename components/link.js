import NextLink from "next/link";
import { Link as RebassLink } from "rebass";

const Link = props => (
  <NextLink href={props.href}>
    <RebassLink sx={{ color: "primary" }} {...props}>
      {props.children}
    </RebassLink>
  </NextLink>
);

export default Link;
