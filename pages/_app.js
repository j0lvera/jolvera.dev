import React from "react";
import App from "next/app";
// import { ThemeProvider } from "emotion-theming";
import { ThemeProvider, ColorMode, Styled } from "theme-ui";
// import Prism from "@theme-ui/prism";

import theme from "../theme";

// const components = {
//   pre: ({ children }) => <>{children}</>,
//   code: Prism
// };

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
