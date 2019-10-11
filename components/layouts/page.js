import Layout from "./default";
import { Box, Heading } from "rebass";
import { Styled } from "theme-ui";

function Page({ meta, children }) {
  return (
    <Layout pageTitle={meta.title}>
      <Box as="article">
        <Box as="header" mb={4}>
          <Styled.h1>{meta.title}</Styled.h1>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Layout>
  );
}

export default Page;
