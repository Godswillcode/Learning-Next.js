import Navbar from "@/component/Navbar";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import "@/component/Navbar.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
