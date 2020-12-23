import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/Home.module.css";

function Before() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lista de <i>imagens Before</i>
        </h1>
      
        <Link href="/imagens">
          <a>Voltar</a>
        </Link>

        <div className={styles.grid}> 
            <div className={styles.card}>
                <Image src="/img/1.jpg"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/2.jpg"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/3.jpg"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/4.jpg"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/5.jpg"/>
            </div>

            <div className={styles.card}>
                <Image src="/img/6.jpg"/>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Before;