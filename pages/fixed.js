import Link from "next/link";
import Image from 'next/image';
import styles from "../styles/Home.module.css";

function Fixed() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lista de <i>imagens Fixed</i>
        </h1>

        <Link href="/imagens">
          <a>Voltar</a>
        </Link>

        <div className={styles.grid}> 
            <div className={styles.card}>
                <Image src="/img/1.jpg" width={1600} height={900} layout="fixed"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/2.jpg" width={1600} height={900} layout="fixed"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/3.jpg" width={1600} height={900} layout="fixed"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/4.jpg" width={1600} height={900} layout="fixed"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/5.jpg" width={1600} height={900} layout="fixed"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/6.jpg" width={1600} height={900} layout="fixed"/>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Fixed;