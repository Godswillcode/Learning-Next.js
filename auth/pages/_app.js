import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import "@/component/Navbar.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
