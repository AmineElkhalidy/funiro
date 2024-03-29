// Next components
import Head from "next/head";

// Hero
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Funiro is an e-commerce web application that you can use to shop your favorite products."
        />
        <title>Funiro</title>
      </Head>

      <Hero />
    </>
  );
}
