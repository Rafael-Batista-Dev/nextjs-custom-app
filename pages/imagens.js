import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

function pages() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Imagens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lista de <i>imagens!</i>
        </h1>

        <div className={styles.grid}> 
            <div className={styles.card}>
                <Link href="/after">
                  <a><h2>After</h2></a>
                </Link>
            </div>

            <div className={styles.card}>
                <Link href="/after-responsive">
                  <a><h2>After Responsive</h2></a>
                </Link>
            </div>

            <div className={styles.card}>
                <Link href="/after-fill">
                  <a><h2>After Fill</h2></a>
                </Link>
            </div>

            <div className={styles.card}>
                <Link href="/before">
                  <a><h2>Before</h2></a>
                </Link>
            </div>

            <div className={styles.card}>
                <Link href="/external">
                  <a><h2>External</h2></a>
                </Link>
            </div>

            <div className={styles.card}>
                <Link href="/fixed">
                  <a><h2>Fixed</h2></a>
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
}

export default pages;