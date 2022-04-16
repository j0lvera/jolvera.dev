import React from "react";
import Header from "../header";
import Footer from "../footer";
import Container from "../container";

function Layout({ path, children, pageTitle, ogImage }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
