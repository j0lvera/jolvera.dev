import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_TRACKING_CODE, {
      includedDomains: ["jolvera.dev"]
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    // Record a page view when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Un-assign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default App;
