import { Flex, Box, Text } from "@rebass/emotion";
import fetch from "isomorphic-unfetch";
import Container from "./container";

async function pageView() {
  try {
    const response = await fetch(`${process.env.DOMAIN}/api/views`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pathname: window.location.pathname,
        hostname: window.location.hostname,
        referrer: document.referrer
      })
    });

    if (response.ok) {
      // console.log("page view response json", await response.json());
    }
  } catch (err) {
    console.error("Could not page view send request.", err);
  }
}

function Footer() {
  typeof window !== "undefined" ? pageView() : null;

  return (
    <Box as="footer" py={4}>
      <Container>
        <Flex justifyContent="center" pb={4}>
          <Text
            as="a"
            href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/previous"
            mr={2}
          >
            ←
          </Text>
          An IndieWeb Webring 🕸💍
          <Text
            as="a"
            href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/next"
            ml={2}
          >
            →
          </Text>
        </Flex>

        <Text as="p" textAlign="center">
          The content of this site is licensed under a <br />
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            Creative Commons Attribution-ShareAlike 4.0 International License
          </a>
          .
        </Text>

        <Text textAlign="center">
          Proudly built with <a href="https://nextjs.org">Next.js</a> -{" "}
          <a href="https://github.com/j0lv3r4/jolvera.dev">
            Source code on GitHub
          </a>{" "}
          - <a href="/feed.json">RSS Feed</a>
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
