import { withRouter } from "next/router";
import { Flex, Box, Image, Text } from "rebass";
import { Styled } from "theme-ui";
import Link from "../components/link";
import { siteMeta } from "../blog.config";
import Layout from "../components/layouts/default";

const Home = ({ router }) => {
  return (
    <Layout pageTitle="Home" path={router.pathname}>
      <Flex
        className="h-card"
        flexDirection={["column", "row"]}
        alignItems="center"
        justifyContent="center"
        py={[1, 4]}
        my={[1, 4]}
      >
        <Image
          className="u-photo"
          src="/static/_jolvera.png"
          alt={siteMeta.author}
          width="5em"
        />

        <Box ml={3}>
          <Styled.h2>
            Hi, I'm{" "}
            <Link
              className="u-url p-name"
              href={siteMeta.siteUrl}
              rel="me"
              color="primary"
              textDecoration="none"
            >
              Juan Olvera
            </Link>
          </Styled.h2>
          <Text className="p-note" as="p" fontSize={3} mb={3}>
            I'm a frontend developer &amp; web standards enthusiastic.
            <br />
            <strong>
              I build inclusive, fast and responsive web experiences.
            </strong>
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default withRouter(Home);
