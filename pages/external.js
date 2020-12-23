import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/Home.module.css";

function External() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lista de <i>imagens External</i>
        </h1>

        <Link href="/imagens">
          <a>Voltar</a>
        </Link>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image
              src="https://source.unsplash.com/user/willianjusten/1600x900"
              width={1600}
              height={901}
              layout="responsive"
            />
          </div>

          <div className={styles.card}>
            <Image
              src="https://source.unsplash.com/user/willianjusten/1600x901"
              width={1600}
              height={901}
              layout="responsive"
            />
          </div>

          <div className={styles.card}>
            <Image
              src="https://source.unsplash.com/user/willianjusten/1600x902"
              width={1600}
              height={901}
              layout="responsive"
            />
          </div>

          <div className={styles.card}>
            <Image
              src="https://source.unsplash.com/user/willianjusten/1600x903"
              width={1600}
              height={901}
              layout="responsive"
            />
          </div>

          <div className={styles.card}>
            <Image
              src="https://source.unsplash.com/user/willianjusten/1600x904"
              width={1600}
              height={901}
              layout="responsive"
            />
          </div>

          <div className={styles.card}>
            <Image
              src="https://source.unsplash.com/user/willianjusten/1600x905"
              width={1600}
              height={901}
              layout="responsive"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default External;
