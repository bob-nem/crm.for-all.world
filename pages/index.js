import style from '../styles/Home.module.css'
import Head from 'next/head'

import Header from './blocks/home/header'
import About from './blocks/home/about'
import Stages from './blocks/home/stages'
import Capabilities from './blocks/home/capabilities'
import Articles from './blocks/home/articles' 
import Prices from './blocks/home/prices'
import Contacts from './blocks/home/contacts'
import Footer from './blocks/home/footer'

export default function Home() {
  return (
    <div className={style.Container}>
      <Head>
        <title>Enterprise processes optimization</title>
        <meta name="description" content="Corporate systems. ERP, CRM, WMS, MES, SCADA and others software integration in Bangladesh business." />
        <link rel="canonical" href="https://optimization.for-all.world" key="canonical" />
        <meta property="og:title" content="Enterprise processes optimization" />
        <meta property="og:description" content="Corporate systems. ERP, CRM, WMS, MES, SCADA and others software integration in Bangladesh business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://optimization.for-all.world" />
        <meta property="og:image" content="https://optimization.for-all.world/images/opti.webp" />
        <meta property="og:image:alt" content="Production analysis to find optimization ways" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="bn_BD" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/Goldman-Regular.ttf" //prices digit font
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ArimaMadurai-Regular.ttf" //articles paragraph font
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <main className={style.Main}>
        <Header />
        <About />
        <Stages />
        <Capabilities />
        <Prices />
        <Articles />
        <Contacts />
      </main>
      <footer className={style.Footer}>
        <Footer />
      </footer>
    </div>
  )
}
