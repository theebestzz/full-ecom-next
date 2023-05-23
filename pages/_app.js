import { DataProvider } from "@/store/GlobalState";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </DataProvider>
  );
}
