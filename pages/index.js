/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { withRouter } from "next/router";
import { Flex, Box, Text } from "@rebass/emotion";
import { siteMeta } from "../blog.config";
import Layout from "../components/layouts/default";
import WebMentions from "../components/webmentions";

const Home = ({ router, theme }) => {
  return (
    <Layout pageTitle="Home" path={router.pathname}>
      <Flex
        className="h-card"
        flexDirection={["column", "row"]}
        alignItems="center"
        justifyContent="center"
        py={4}
        my={4}
      >
        <Box
          className="u-photo"
          as="img"
          src="/static/_jolvera.png"
          alt={siteMeta.author}
          mb={[4, 0]}
        />

        <Box ml={3}>
          <Text as="h2" mb={3} mt={0}>
            Hi, I'm{" "}
            <Text
              as="a"
              className="u-url p-name"
              href={siteMeta.siteUrl}
              rel="me"
              color={theme.color}
              css={css`
                text-decoration: none;
              `}
            >
              Juan Olvera
            </Text>
          </Text>
          <Text className="p-note" as="p" fontSize={3}>
            I'm a frontend developer &amp; web standards enthusiastic.
          </Text>

          <Text as="p" fontSize={3} fontWeight="bold" mb={0}>
            I build inclusive, fast and responsive web experiences.
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default withTheme(withRouter(Home));
