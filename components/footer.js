import { Flex, Box, Text } from "rebass";
import Link from "./link";
import Container from "./container";

function Footer() {
  return (
    <Box as="footer" py={5}>
      <Container>
        <Box mb={2}>
          <Text as="p">
            <Link href="#top">Back to top</Link> ·{" "}
            <Link href="https://github.com/j0lv3r4/jolvera.dev">
              Website source code
            </Link>{" "}
            · <Link href="/feed.xml">RSS Feed</Link>
          </Text>
        </Box>

        <Text as="p" mb={2}>
          <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
            CC BY-SA
          </Link>{" "}
          {new Date().getFullYear()}, Juan Olvera. Website built with{" "}
          <Link href="https://nextjs.org">Next.js</Link>
        </Text>

        <Flex mb={2}>
          <Link
            href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/previous"
            mr={2}
          >
            ←
          </Link>
          IndieWeb 🕸💍
          <Link
            href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/next"
            ml={2}
          >
            →
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
