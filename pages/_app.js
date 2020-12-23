import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'
import '../styles/globals.css'
import '../styles/nprogress.css'

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start()
}

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <nav>
        <style jsx>
          {
            `
              a {
                margin: 0 10px 0 0
              }
            `
          }
        </style>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
        <Link href="/contato">
          <a>Contato</a>
        </Link>
        <a href="/non-existing"> No existing Page</a>
      </nav>
      <Component {... pageProps} />
    </>
  )
}

export default MyApp
