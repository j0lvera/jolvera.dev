import Layout from "./default";
import { Box, Heading } from "rebass";
import { Styled } from "theme-ui";

function Page({ title, children }) {
  return (
    <Layout pageTitle={title}>
      <Box as="article">
        <Box as="header" mb={4}>
          <Styled.h1>{title}</Styled.h1>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Layout>
  );
}

export default Page;
