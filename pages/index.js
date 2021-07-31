import style from '../styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/pages/index-header';
import FirstBlock from '../components/pages/index-first';
import SecondBlock from '../components/pages/index-second';
import ThirdBlock from '../components/pages/index-third';

import customerBase from '../images/customer-base.svg';
import customerSupport from '../images/customer-support.svg';
import employeesKPI from '../images/employees-kpi.svg';
import telephony from '../images/telephony.svg';
import systemIntegration from '../images/integration-systems.svg';
import processesModeling from '../images/processes-modeling.svg';
import phoneman from '../images/phoneman-py.svg';

export default function Home() {
  return (
    <div className={style.Container}>
      <Head>
        <title>CRM.for-all.world</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className={style.Main}>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      </main>
      <footer className={style.Footer}>
      </footer>
    </div>
  )
}
