import { Text } from "@rebass/emotion";
import Link from "next/link";
import { parse, format } from "date-fns";

function PublishedAt({ date, link }) {
  return (
    <Text as="p" mb={0} color="#aaa">
      <time>{format(parse(date), "MMMM DD, YYYY")}</time>
    </Text>
  );
}

export default PublishedAt;
