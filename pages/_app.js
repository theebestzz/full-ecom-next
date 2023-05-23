import { DataProvider } from "@/store/GlobalState";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import LoadingComponent from "@/components/Utils/Loading";

import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Loading() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    const { events } = require("next/router");
    events.on("routeChangeStart", startLoading);

    return () => {
      events.off("routeChangeStart", startLoading);
    };
  }, []);

  return isLoading ? <LoadingComponent /> : null;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Toaster />
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  );
}

export default MyApp;
