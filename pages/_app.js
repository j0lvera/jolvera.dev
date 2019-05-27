import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
import { mastodon } from "../components/themes";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <ThemeProvider theme={mastodon}>
          <Component />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
