import { Flex, Box, Text } from "rebass";
import Link from "./link";
import Container from "./container";

function Footer() {
  return (
    <Box as="footer" py={4}>
      <Container>
        <Flex justifyContent="center" pb={4}>
          <Link
            href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/previous"
            mr={2}
          >
            ←
          </Link>
          An IndieWeb Webring 🕸💍
          <Link
            href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/next"
            ml={2}
          >
            →
          </Link>
        </Flex>

        <Text as="p" textAlign="center">
          The content of this site is licensed under a <br />
          <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
            Creative Commons Attribution-ShareAlike 4.0 International License
          </Link>
          .
        </Text>

        <Text textAlign="center">
          Proudly built with <Link href="https://nextjs.org">Next.js</Link> -{" "}
          <Link href="https://github.com/j0lv3r4/jolvera.dev">
            Source code on GitHub
          </Link>{" "}
          - <Link href="/feed.json">JSON Feed</Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
