import "what-input";
import PropTypes from "prop-types";
import Head from "./head";
import Nav from "./nav";
import Link from "../link";
import Container from "../container";
import { siteMeta } from "../../blog.config";

function Header({ pageTitle, ogImage }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} />
      <header className="py-8 dark:bg-slate-900">
        <Container>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link href="/" aria-label="Go to the home page">
              <img
                src="/static/_jolvera.jpg"
                alt="A picture of Juan Olvera"
                className="sr-only"
              />
            </Link>
            <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
              <Link
                href="/"
                name="top"
                rel="me"
                className="no-underline my-2 text-xl font-bold"
              >
                {siteMeta.title}
              </Link>
              <Nav />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string
};

export { Header };
