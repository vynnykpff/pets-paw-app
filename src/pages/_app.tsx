import "@/styles/globals.css";
import type { AppProps } from "next/app";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
