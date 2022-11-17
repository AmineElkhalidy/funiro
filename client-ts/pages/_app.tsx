import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

//layout
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Funiro is an e-commerce web application that you can use to shop your favorite products."
        />

        <title>Funiro</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
