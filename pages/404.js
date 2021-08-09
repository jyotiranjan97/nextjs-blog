import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <div
      style={{
        maxWidth: "36rem",
        padding: "0 1rem",
        margin: "3rem auto 6rem",
      }}
    >
      <Head>Page Not Found</Head>
      <h1 className={utilStyles.headingMD}>404 - Page Not Found</h1>
    </div>
  );
}
