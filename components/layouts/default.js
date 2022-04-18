import React from "react";
import classNames from "classnames";
import { Footer, Header } from "../includes";
import Container from "../container";

function Layout(props) {
  const { path, children, pageTitle, ogImage, className } = props;
  return (
    <>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main
        className={classNames("flex dark:bg-slate-900 px-4 md:px-0", className)}
      >
        <Container>{children}</Container>
      </main>

      <Footer className="px-4 md:px-0" />
    </>
  );
}

export default Layout;
