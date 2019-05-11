import Header from "../header";
import Footer from "../footer";
import Container from "../container";
import { ThemeProvider } from "emotion-theming";
import { mastodon } from "../themes";

function Layout({
  path,
  children,
  pageTitle = "Next.js Blog Starter",
  ogImage
}) {
  return (
    <ThemeProvider theme={mastodon}>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main>
        <Container>{children}</Container>
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
