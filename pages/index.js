import React from "react";
import Layout from "../components/layouts/default";
import { Flex, Text } from "@rebass/emotion";
import styled from "@emotion/styled";

const Callout = styled.h2`
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 2.4em;
`;

const Home = ({ url }) => {
  return (
    <Layout pageTitle="Home" path={url.pathname}>
      <Callout>I build inclusive, fast and responsive web experiences.</Callout>

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
