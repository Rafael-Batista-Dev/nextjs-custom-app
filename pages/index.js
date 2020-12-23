import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lista de <i>usuários!</i>
        </h1>

        <div className={styles.grid}>
          {users.map((user) => (
            <div className={styles.card} key={user.id}>
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.data;

  return {
    props: { users: data }, // will be passed to the page component as props
  };
}

export default Home;
