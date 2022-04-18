import React from "react";
import { Footer, Header } from "../includes";
import Container from "../container";

function Layout({ path, children, pageTitle, ogImage }) {
  return (
    <div
      className="dark:bg-slate-900 flex flex-col justify-between px-4 md:px-0"
      style={{
        height: "100vh"
      }}
    >
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main>
        <Container>{children}</Container>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
