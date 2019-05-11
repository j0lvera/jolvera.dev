import Link from "next/link";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { Flex, Box, Text } from "@rebass/emotion";
import Head from "./head";
import Nav from "./nav";
import Container from "./container";
import { siteMeta } from "../blog.config";

function Header({ path, pageTitle, theme }) {
  return (
    <>
      <Head title={pageTitle} />

      <Box as="header" pt={4} pb={4}>
        <Container>
          <Flex flexDirection="row" alignItems="center">
            {path === "/" ? (
              <Text as="h1" m={0}>
                {siteMeta.title}
              </Text>
            ) : (
              <Text as="p" mb={0} fontSize={4}>
                <Link href="/">
                  <a>{siteMeta.title}</a>
                </Link>
              </Text>
            )}

            <Nav />
          </Flex>
        </Container>
      </Box>
      <Global
        styles={css`
          html {
            margin: 0;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            font-size: 18px;
            font-family: "Montserrat", sans-serif;
            font-weight: 500;
            color: ${theme.color};
            line-height: 1.5;
            background-color: ${theme.backgroundColor};
          }

          h1,
          h2,
          h3,
          h4 {
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: inherit;
            line-height: 1.25;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            margin-top: 1rem;
            font-size: 1.8rem;
          }

          h3 {
            margin-top: 1.5rem;
            font-size: 1.5rem;
          }

          p {
            margin-top: 0;
            margin-bottom: 1rem;
          }

          ul,
          ol,
          dl {
            margin-top: 0;
            margin-bottom: 1rem;
          }

          a {
            color: ${theme.link};
            cursor: pointer;
          }

          a:hover,
          a:focus {
            text-decoration: underline;
          }

          hr {
            position: relative;
            margin: 1.5em 0;
            border: 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #fff;
          }

          blockquote {
            padding: 0.5em 1em;
            margin: 0.8em 0;
            color: #555;
            border-left: 0.25em solid #ccc;
          }

          blockquote p:last-child {
            margin-bottom: 0;
          }

          pre code {
            font-size: 18px;
          }

          .wrap {
            max-width: 38rem;
            margin-left: auto;
            margin-right: auto;
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

export default withTheme(Header);
