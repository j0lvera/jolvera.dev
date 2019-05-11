import { Box } from "@rebass/emotion";
import Container from "./container";

function Footer() {
  return (
    <Box as="footer" py={3}>
      <Container>
        <p className="copy">
          &copy; {new Date().getFullYear()}, Proudly built with{" "}
          <a href="https://nextjs.org">Next.js</a> -{" "}
          <a href="https://github.com/j0lv3r4/jolvera.dev">Source code</a>
        </p>
      </Container>
    </Box>
  );
}

export default Footer;
