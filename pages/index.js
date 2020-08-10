import { withRouter } from "next/router";
import { Flex, Box, Text, Image } from "rebass";
import Link from "../components/link";
import { siteMeta } from "../blog.config";
import Layout from "../components/layouts/home";

const Home = ({ router }) => {
  return (
    <Layout pageTitle="Home" path={router.pathname}>
      <Flex
        className="h-card"
        flexDirection={["column", "row"]}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          className="u-photo visuallyhidden"
          src="/static/_jolvera.png"
          alt={siteMeta.author}
          width="5em"
        />

        <Box>
          <Text
            className="p-note"
            as="h1"
            fontSize={[3, 5]}
            fontWeight="bold"
            lineHeight="heading"
            color="heading"
            mb={3}
          >
            I build inclusive, fast and responsive web experiences
          </Text>
          <Text as="p" mt={[2, 4]} fontSize={[1, 3]}>
            I'm{" "}
            <Link
              className="u-url p-name"
              href={siteMeta.siteUrl}
              rel="me"
              color="primary"
              textDecoration="none"
            >
              Juan Olvera
            </Link>
            , a frontend developer &amp; web standards enthusiastic.
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default withRouter(Home);
