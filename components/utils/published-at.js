import React from "react";
import { Text } from "@rebass/emotion";
import { parse, format } from "date-fns";

function PublishedAt({ date, link }) {
  return (
    <Text as="a" href={link} className="u-url" mb={0} color="#aaa">
      <time className="dt-published">
        {format(parse(date), "MMMM DD, YYYY")}
      </time>
    </Text>
  );
}

export default PublishedAt;
