import "what-input";
import PropTypes from "prop-types";
import { Global, css as styles } from "@emotion/core";
import { Flex, Box } from "rebass";
import Head from "./head";
import Nav from "./nav";
import Link from "./link";
import Container from "./container";
import { siteMeta } from "../blog.config";
import theme from "../theme";

function Header({ path, pageTitle, ogImage }) {
  const titleStyles = {
    color: "text",
    // fontSize: 3,
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  };

  const Title = props => (
    <Link href="/" name="top" sx={titleStyles} {...props} rel="me">
      {siteMeta.title}
    </Link>
  );

  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} />

      <Box as="header" py={[5]}>
        <Container>
          <Flex flexDirection={["column", "row"]} alignItems="center">
            <Title />
            <Nav mt={[2, 0]} />
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

        .visuallyhidden { 
          position: absolute; 
          overflow: hidden; 
          clip: rect(0 0 0 0); 
          height: 1px; width: 1px; 
          margin: -1px; padding: 0; border: 0; 
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
