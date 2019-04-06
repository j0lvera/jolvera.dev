import React from "react";
import Layout from "../components/layouts/default";
import { Text } from "@rebass/emotion";

const About = ({ url }) => {
  return (
    <Layout pageTitle="Home" path={url.pathname}>
      <Text as="p">
        Hello. I'm Juan Olvera. A frontend developer &amp; web standards
        enthusiastic.
      </Text>
    </Layout>
  );
};

export default About;
