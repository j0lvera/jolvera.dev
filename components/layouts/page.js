import Layout from "./default";
import SyntaxHighlight from "../syntax-highlight";
import PublishedAt from "../utils/published-at";
import { Box } from "@rebass/emotion";
import blogposts from "../../posts/index";
import NextPrevPost from "../next-prev-post";

function Page({ meta, children }) {
  return (
    <Layout pageTitle={meta.title}>
      <article>
        <Box as="header" mb={4}>
          <h1>{meta.title}</h1>
        </Box>
        <div>{children}</div>
      </article>
    </Layout>
  );
}

export default Page;
