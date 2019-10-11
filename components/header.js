import "what-input";
import PropTypes from "prop-types";
import { Global, css as styles } from "@emotion/core";
import { Flex, Box, Text } from "rebass";
import { Styled } from "theme-ui";
import Head from "./head";
import Nav from "./nav";
import Link from "./link";
import Container from "./container";
import { siteMeta } from "../blog.config";
import theme from "../theme";

function Header({ path, pageTitle, ogImage }) {
  const Title = props =>
    path === "/" ? (
      <Styled.h1>
        <Link
          href={siteMeta.siteUrl}
          sx={{
            color: "text",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none"
            }
          }}
        >
          {siteMeta.title}
        </Link>
      </Styled.h1>
    ) : (
      <Link href="/" mb={0} fontSize={4} {...props} rel="me">
        {siteMeta.title}
      </Link>
    );

  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} />

      <Box as="header" py={[3, 4]}>
        <Container>
          <Flex flexDirection={["column", "row"]} alignItems="center">
            <Title />
            <Nav mt={[3, 0]} />
          </Flex>
        </Container>
      </Box>
      <Global
        styles={styles`
          body {
            margin: 0;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          [data-whatintent="mouse"] *:focus {
            outline: none;
          }

          [data-whatintent="keyboard"] *:focus {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.background} !important;
          }
        `}
      />
    </>
  );
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  theme: PropTypes.shape({
    color: PropTypes.string
  })
};

export default Header;
