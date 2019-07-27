import React from "react";
import fetch from "isomorphic-unfetch";
import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
import { mastodon } from "../components/themes";
// import { getWebMentions } from "../components/webmentions/utils";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
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
