import { withTheme } from "emotion-theming";
import { Flex, Box, Text } from "@rebass/emotion";
import Layout from "../components/layouts/default";

const Home = ({ url, theme }) => {
  return (
    <Layout pageTitle="Home" path={url.pathname}>
      <Flex
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
          alt="Photo of my Twitter avatar"
          mb={[4, 0]}
        />

        <Box className="p-note" ml={3}>
          <Text as="h2" mb={3} mt={0}>
            Hi, I'm Juan
          </Text>
          <Text as="p" fontSize={3}>
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
