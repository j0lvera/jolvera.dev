import { withTheme } from "emotion-theming";
import { Flex, Box, Text } from "@rebass/emotion";
import { siteMeta } from "../blog.config";
import Layout from "../components/layouts/default";

const Home = ({ url, theme }) => {
  return (
    <Layout pageTitle="Home" path={url.pathname}>
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
            Hi, I'm <span className="p-name">Juan Olvera</span>
          </Text>
          <Text className="p-note" as="p" fontSize={3}>
            I'm a frontend developer &amp; web standards enthusiastic.
          </Text>

          <Text as="p" color={theme.link} fontSize={3} fontWeight="bold" mb={0}>
            {theme.link}I build inclusive, fast and responsive web experiences.
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default withTheme(Home);
