import React from "react";
import App from "next/app";
import { ThemeProvider, ColorMode, Styled } from "theme-ui";

import theme from "../theme";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <ColorMode />
        <Styled.root>
          <Component {...pageProps} />
        </Styled.root>
      </ThemeProvider>
    );
  }
}

export default MyApp;
