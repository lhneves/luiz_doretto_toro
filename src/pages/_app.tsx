import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '@/resources/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Melhores ações para investir na Bolsa | Toro Investimentos</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://www.toroinvestimentos.com.br/bolsa" />
        <meta
          property="og:title"
          content="Melhores ações para investir na Bolsa | Toro Investimentos"
        />
        <meta
          data-react-helmet="true"
          name="description"
          content="Veja onde e como investir na Bolsa de Valores hoje, mesmo com pouco dinheiro, com as carteiras das melhores ações recomendadas pela Toro e Corretagem Zero."
        ></meta>
        <meta
          data-react-helmet="true"
          name="og:description"
          content="Veja onde e como investir na Bolsa de Valores hoje, mesmo com pouco dinheiro, com as carteiras das melhores ações recomendadas pela Toro e Corretagem Zero."
        ></meta>
        <meta
          data-react-helmet="true"
          name="twitter:description"
          content="Veja onde e como investir na Bolsa de Valores hoje, mesmo com pouco dinheiro, com as carteiras das melhores ações recomendadas pela Toro e Corretagem Zero."
        ></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="apple-touch-icon" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta data-react-helmet="true" name="twitter:card" content="summary"></meta>
        <meta data-react-helmet="true" name="twitter:creator" content="Toro Investimentos"></meta>
        <meta data-react-helmet="true" name="twitter:title" content="Home"></meta>
      </Head>
      <main>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
