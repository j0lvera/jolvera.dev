import Layout from "./default";
import { Box } from "@rebass/emotion";

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
