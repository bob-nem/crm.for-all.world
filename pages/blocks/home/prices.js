import style from '../../../styles/HomePrices.module.css';
import Image from 'next/image';
import {Tabs} from './components/Tabs';

import suitecrm from '../../../images/suite-crm-logo.png';

export default function Prices() {
  return (
    <div className={style.Container}>
      <h2 className={style.MainHeader}>categories of solutions and their prices</h2>
      <p className={style.MainHeaderDescription}>Please note that depending on the set of functions and the presence of special conditions in the technical specification of the customer, the price may vary greatly. These prices are valid for the installation and configuration of a standard basic package.</p>
      <div className={style.TabsContainer}>
        <Tabs>
          <div label="CRM - Customer Relationship Management" className={style.OneTabContainer}>
            <p>
              These systems are built to make customers happy, whether it’s through improved ad targeting or tailored sales communications. CRM software is a front-office tool that is used by employees in departments such as sales and marketing to increase revenue through an improvement in customer experience. After all, without a solid customer base, your company doesn’t have much to go on. These programs are available as either standalone software or as part of an ERP solution. Our company provides integration services for the most popular CRM solutions in the world.
            </p>
            <div className={style.PriceCardsContainer}>
              <div className={style.PriceCard}>
                <div className={style.SoftwareLogo}>
                  <Image
                    src={suitecrm}
                    alt="suite CRM"
                  />
                </div>
                <p className={style.PriceCardD}>
                  <strong>SuiteCRM</strong> handles sales, service, and marketing, with custom module, layout, and relationship development tools that will please your IT department too. Endless modular customizability and add-ons mean you can use it for applications, simple or complex.
                </p>
                <div className={style.PriceCardList}>
                <h3 className={style.PriceSum}>$1200</h3>
                  <ul>
                    <li>open source</li>
                    <li>Quality guarantee</li>
                    <li>Producer prices</li>
                    <li>Safety delivery</li>
                  </ul>
                </div>
              </div>
              <div className={style.PriceCard}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className={style.PriceCard}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className={style.PriceCard}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
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
