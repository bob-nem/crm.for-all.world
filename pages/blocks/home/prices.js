import style from '../../../styles/HomePrices.module.css';
import Image from 'next/image';
import {Tabs} from './components/Tabs';

import suitecrm from '../../../images/suite-crm-logo.png';
import orocrm from '../../../images/oroinc-logo.png';
import bitrix24 from '../../../images/bitrix24-logo.png';
import amocrm from '../../../images/amocrm.png';

export default function Prices() {
  return (
    <div className={style.Container}>
      <h2 className={style.MainHeader}>categories of solutions and their prices</h2>
      <p className={style.MainHeaderDescription}>Please note that depending on the set of functions and the presence of special conditions in the technical specification of the customer, the price may vary greatly. These prices are valid for the installation and configuration of a standard basic package.</p>
      <div className={style.TabsContainer}>
        <Tabs>
          <div label="CRM - Customer Relationship Management" className={style.OneTabContainer}>
            <p>
              These systems are built to make customers happy, whether it’s through improved ad targeting or tailored sales communications. CRM software is a front-office tool that is used by employees in departments such as sales and marketing to increase revenue through an improvement in customer experience. After all, without a solid customer base, your company doesn’t have much to go on. These programs are available as either standalone software or as part of an ERP solution. These are some of the most popular CRM systems in the world. The general functionality of all the proposed solutions, with the exception of some details, is the same.
            </p>
            <div className={style.PriceCardsContainer}>
              <div className={style.PriceCard}>
                <div className={style.SoftwareLogoSuite}>
                  <Image
                    src={suitecrm}
                    alt="suite CRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}>SuiteCRM</strong> is one of the most popular open source systems. The functionality of the free version meets all the needs of a small company.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$1260&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>The paid version adds cloud storage features, more performance, advanced task scheduling features, and improved support.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>£95&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month</p>
                </div>
                <p className={style.CardSpecification}>technical specifications</p>
              </div>
              <div className={style.PriceCard}>
                <div className={style.SoftwareLogoBitrix}>
                  <Image
                    src={bitrix24}
                    alt="suite CRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}>Bitrix24</strong> it combines communication channels with an excellent opportunity for full integration with sites created on its own platform.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$980&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
              </div>
              <div className={style.PriceCard}>
                <div className={style.SoftwareLogoAmo}>
                  <Image
                    src={amocrm}
                    alt="suite CRM"
                  />
                </div>
                <p className={style.PriceCardD}>
                  <strong>amoCRM.</strong> If Bitrix24 is multifunctional and complex, then amoCRM is the complete opposite: only the "cloud", and only simplicity. There is a clear sales funnel and telephony, much attention is paid to transactions and data exchange with other services.
                </p>
                <h3 className={style.Sum}>$580</h3>
                <div className={style.PriceCardList}>
                  <ul>
                    <li>Proprietary</li>
                    <li>API integration</li>
                    <li>Real time dashboard</li>
                    <li>Mobile access</li>
                    <li>Trial version</li>
                  </ul>
                </div>
              </div>
              <div className={style.PriceCard}>
                <div className={style.SoftwareLogoOro}>
                  <Image
                    src={orocrm}
                    alt="ORO CRM"
                  />
                </div>
                <p className={style.PriceCardD}>
                  <strong>OroCRM</strong> is based on the Symfony2 PHP framework for web development. Lots of open source developers find it easy to understand Oro’s code and create new customizations, making it relatively easy and cost-effective to modify the platform to your needs.
                </p>
                <h3 className={style.Sum}>$1200</h3>
                <div className={style.PriceCardList}>
                  <ul>
                    <li>Open source</li>
                    <li>API integration</li>
                    <li>Real time dashboard</li>
                    <li>Mobile access</li>
                    <li>Free version</li>
                  </ul>
                </div>
              </div>
            </div>
            <p></p>
          </div>
          <div label="ERP - Enterprise Resource Planning">
            <p>
              This software contains functionality for multiple different business processes such as finance, HR, inventory management and distribution. Large enterprises commonly use enterprise resource planning solutions, but some small businesses do opt for these solutions as well. ERP software is known for containing tools related to both front- and back-office information, along with improving internal communication and data exchange. Automation is also a key feature due to its connectivity of multiple workflows. Our company provides integration services for the most popular ERP solutions in the world.
            </p>
          </div>
          <div label="SCADA - Supervisory Control and Data Acquisition">
            <p>
              A software package designed to develop and provide real-time operation of systems for collecting, processing, displaying and archiving information about an industrial production or a monitoring object. SCADA can be part of an automated process control system, control and accounting of electric energy and energy resources, an environmental monitoring system, a scientific experiment, building automation, etc. SCADA systems are used in all sectors of the economy where it is required to provide operator control over technological processes in real time. Our company provides integration services for the most popular SCADA solutions in the world.
            </p>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
