import React from "react";
import Link from "next/link";
import { Text } from "@rebass/emotion";
import { parse, format } from "date-fns";

function PublishedAt(props) {
  const { link, date } = props;
  return (
    <Link href={link}>
      <Text as="a" href={link} className="u-url" mb={0} color="#aaa" {...props}>
        <time className="dt-published">
          {format(parse(date), "MMMM DD, YYYY")}
        </time>
      </Text>
    </Link>
  );
}

export default PublishedAt;
