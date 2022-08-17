import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
