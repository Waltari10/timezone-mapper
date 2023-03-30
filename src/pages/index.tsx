import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TimezoneConverter from "./TimezoneConverterGPT4";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Timezone Mapper</title>
        <meta
          name="description"
          content="Map all hourly times from a day to another timezone"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TimezoneConverter></TimezoneConverter>
      </main>
    </>
  );
}
