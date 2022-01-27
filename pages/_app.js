import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import { ThemeProvider, Styled } from "theme-ui";

import theme from "../theme";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_TRACKING_CODE, {
      includedDomains: ["jolvera.dev"]
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <Component {...pageProps} />
      </Styled.root>
    </ThemeProvider>
  );
}

export default App;
