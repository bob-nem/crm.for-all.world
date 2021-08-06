import style from '../styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/pages/index-header';
import FirstBlock from '../components/pages/index-first';
import SecondBlock from '../components/pages/index-second';
import ThirdBlock from '../components/pages/index-third';
import FourthBlock from '../components/pages/index-fourth';

export default function Home() {
  return (
    <div className={style.Container}>
      <Head>
        <title>enterprise-optimization.for-all.world</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className={style.Main}>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      </main>
      <footer className={style.Footer}>
      </footer>
    </div>
  )
}
