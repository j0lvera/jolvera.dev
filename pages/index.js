/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Flex, Text } from "@rebass/emotion";
import Layout from "../components/layouts/default";

const Home = ({ url }) => {
  return (
    <Layout pageTitle="Home" path={url.pathname}>
      <h2
        css={css`
          margin-top: 2em;
          margin-bottom: 2em;
          font-size: 2.4em;
        `}
      >
        I build inclusive, fast and responsive web experiences.
      </h2>

      <Flex alignItems="center" justifyContent="center">
        <img src="/static/_jolvera.png" alt="Photo of my Twitter avatar" />

        <Text as="p" mt={2} mb={0} ml={3}>
          Hello! I'm Juan Olvera. A frontend developer &amp; web standards
          enthusiastic.
        </Text>
      </Flex>
    </Layout>
  );
};

export default Home;
