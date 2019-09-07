import React from "react";
import App from "next/app";
import { ThemeProvider } from "emotion-theming";
import { mastodon } from "../components/themes";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={mastodon}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
