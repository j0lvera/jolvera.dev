import { format, parse } from "date-fns";
import React from "react";

function PublishedAt({ date }) {
  return (
    <time className="dt-published">{format(parse(date), "MMMM DD, YYYY")}</time>
  );
}

export { PublishedAt };
