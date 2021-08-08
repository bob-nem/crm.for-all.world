import style from '../styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';

import Header from './blocks/home/header';
import About from './blocks/home/about';
import Stages from './blocks/home/stages';
import Capabilities from './blocks/home/capabilities';
import Prices from './blocks/home/prices';

export default function Home() {
  return (
    <div className={style.Container}>
      <Head>
        <title>enterprise-optimization.for-all.world</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className={style.Main}>
        <About />
        <Stages />
        <Capabilities />
        <Prices />
      </main>
      <footer className={style.Footer}>
      </footer>
    </div>
  )
}
