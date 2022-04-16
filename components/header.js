import "what-input";
import PropTypes from "prop-types";
import Head from "./head";
import Nav from "./nav";
import Link from "./link";
import Container from "./container";
import { siteMeta } from "../blog.config";

function Header({ pageTitle, ogImage }) {
  const titleStyles = {
    color: "heading",
    fontSize: 3,
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

      <header>
        <Container>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link href="/" aria-label="Go back to home">
              <a>
                <img src="/static/_jolvera.png" style={{ maxWidth: "5rem" }} />
              </a>
            </Link>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Title />
              <Nav mt={[3, 0]} />
            </div>
          </div>
        </Container>
      </header>
      {/*<Global*/}
      {/*  styles={styles`*/}
      {/*    body {*/}
      {/*      margin: 0;*/}
      {/*    }*/}

      {/*    [data-whatintent="mouse"] *:focus {*/}
      {/*      outline: none;*/}
      {/*    }*/}

      {/*    [data-whatintent="keyboard"] *:focus {*/}
      {/*      background-color: orange;*/}
      {/*      color: blue !important;*/}
      {/*    }*/}

      {/*  .sr-only,*/}
      {/*  .visuallyhidden { */}
      {/*    position: absolute; */}
      {/*    overflow: hidden; */}
      {/*    clip: rect(0 0 0 0); */}
      {/*    height: 1px; width: 1px; */}
      {/*    margin: -1px; padding: 0; border: 0; */}
      {/*  }*/}
      {/*  `}*/}
      {/*/>*/}
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
