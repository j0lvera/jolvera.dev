import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
import { mastodon } from "../components/themes";
import { getWebMentions } from "../components/webmentions/utils";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };

    // try {
    //   const { children } = await getWebMentions();
    //   return { pageProps, webmentions: children };
    // } catch (error) {
    //   console.log("Error while trying to get Webmentions", error);
    //   return { pageProps, webmentions: [] };
    // }
  }

  render() {
    // const { Component, pageProps, webmentions } = this.props;
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={mastodon}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
