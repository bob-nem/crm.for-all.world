import style from '../../../styles/Prices.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {Tabs} from '../../../components/tabs/Tabs'

import suitecrm from '../../../images/logotypes/suite-crm-logo.png'
import orocrm from '../../../images/logotypes/oroinc-logo-s.png'
import bitrix24 from '../../../images/logotypes/bitrix24-logo.png'
import amocrm from '../../../images/logotypes/amocrm-logo-dark-r.png'
import cerp from '../../../images/logotypes/1C-ERP.png'
import saperp from '../../../images/logotypes/saperp.png'
import msdynamics from '../../../images/logotypes/ms-dynamics.png'
import erpnext from '../../../images/logotypes/erpnext-logo.png'
import kaskad from '../../../images/logotypes/kaskad.png'
import siemens from '../../../images/logotypes/siemens-sq.jpg'
import Yokogawa from '../../../images/logotypes/Yokogawa'

export default function Prices() {
  return (
    <div className={style.Container} id="prices">
      <h2 className={style.Header}>categories of solutions and their prices</h2>
      <p className={style.MainHeaderDescription}>Please note that depending on the set of functions and the presence of special conditions in the technical specification of the customer, the price may vary greatly. These prices are valid for the installation and configuration of a standard basic package.</p>
      <div className={style.TabsContainerDesk}> {/* desk view */}
        <Tabs>
          <div label="CRM - Customer Relationship Management" className={style.OneTabContainer}>
            <p>
              These systems are built to make customers happy, whether it’s through improved ad targeting or tailored sales communications. CRM software is a front-office tool that is used by employees in departments such as sales and marketing to increase revenue through an improvement in customer experience. After all, without a solid customer base, your company doesn’t have much to go on. These programs are available as either standalone software or as part of an ERP solution. These are some of the most popular CRM systems in the world. The general functionality of all the proposed solutions, with the exception of some details, is the same.
            </p>
            <div className={style.CardsContainer}>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={suitecrm}
                    alt="suite CRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://suitecrm.com/"><a target="_blank">SuiteCRM</a></Link></strong> is one of the most popular <Link href="https://github.com/salesagility/SuiteCRM"><a className={style.CardOpenSource} target="_blank">open source</a></Link> systems. The functionality of the free version meets all the needs of a small company.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$1618&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>The paid version adds cloud storage features, more performance, advanced task scheduling features, and improved support.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>£95&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://suitecrm.com/solutions/compare-with-microsoft-dynamics/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={bitrix24}
                    alt="Bitrix24 site & CRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.bitrix24.ru"><a target="_blank">Bitrix24</a></Link></strong> combines communication channels with an opportunity for full integration with <Link href="https://www.bitrix24.ru/features/sites.php"><a className={style.CardOpenSource} target="_blank">sites</a></Link> created on its proprietary platform.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$1280&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>Landing site as a gift. Free version with restrictions on integration with the site, collaborative document editing and analytics.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>₽1494&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.bitrix24.ru/features/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={amocrm}
                    alt="amoCRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.amocrm.com/"><a target="_blank">amoCRM</a></Link></strong> If other CRM is multifunctional and complex, then amoCRM is the complete opposite: only the &quot;cloud&quot;, and only simplicity.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$520&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>Only the paid version with the possibility of a free trial period. All the basic tools are already available in the basic monthly tariff.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>₽499&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per 1 user</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.amocrm.ru/buy/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={orocrm}
                    alt="OROCRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://oroinc.com/"><a target="_blank">OROCRM</a></Link></strong> is based on the Symfony2 PHP framework. It relatively easy and cost-effective <Link href="https://github.com/oroinc/crm"><a className={style.CardOpenSource} target="_blank">to modify the platform</a></Link> to your special needs.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$3141&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>Versatility with the ability to evolve into a large ERP ecosystem. Lots of open source developers find it easy to understand Oro’s code.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>is&nbsp;</p>
                  <h3 className={style.Sum}>FREE</h3>
                  <p className={style.PriceRowD}>&nbsp;for open source edition</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://oroinc.com/oroplatform/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
            </div>
            <p style={{paddingTop: "1rem"}}>We conduct a comprehensive audit of the enterprise for the possibility of optimizing work processes, improving production indicators and reducing costs.</p>
          </div>
          <div label="ERP - Enterprise Resource Planning"  className={style.OneTabContainer}>
            <p>
              This software contains functionality for multiple different business processes such as finance, HR, inventory management and distribution. Large enterprises commonly use enterprise resource planning solutions, but some small businesses do opt for these solutions as well. ERP software is known for containing tools related to both front- and back-office information, along with improving internal communication and data exchange. Automation is also a key feature due to its connectivity of multiple workflows. Our company provides integration services for the most popular ERP solutions in the world.
            </p>
            <div className={style.CardsContainer}>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={cerp}
                    alt="1C:ERP logo"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.1ci.com/applications/1c-erp/"><a target="_blank">1C:ERP</a></Link></strong> The best international methods and long-term domestic practice, which guarantees flexibility of configuration, ease of use and a significant economic effect. The line of solutions &ldquo;1C: ERP&ldquo; covers all major industries, has a large set of functions and software tools.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$7580&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for the initial license</p>
                </div>
                <p>1C was originally created to automate workplace procedures. As a rule, the cost of the project is proportional to the number of automated worksplaces(AWP).</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$600&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per AWP</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://v8.1c.ru/erp/cena-1s-erp/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={saperp}
                    alt="SAP ERP logo"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.sap.com/products/enterprise-management-erp.html"><a target="_blank">SAP ERP</a></Link></strong> use artificial intelligent technologies to help you transform your mission-critical processes and rapidly adapt to change – no matter the size of your business. Stay on the cutting edge with continuous updates, scale easily, cut costs, and gain new efficiencies.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$41000&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for the initial license</p>
                </div>
                <p>The main purpose of SAP is not to automate workplaces, but to organize the implementation of complex chain production and logistics functionality with AI integration opportunity.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$180&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per user in month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.sap.com/products/erp-financial-management/products.html"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={msdynamics}
                    alt="Microsoft dynamics logo"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://dynamics.microsoft.com/en-us/what-is-dynamics365/"><a target="_blank">MS Dynamics</a></Link></strong> AX was one of Microsoft&lsquo;s enterprise resource planning software products. It is part of the Microsoft Dynamics family. After 2018 product was rebranded as a part of Microsoft&lsquo;s Dynamics 365 suite for Finance and Operations .
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$5600&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>You can connect only the functions you need and pay only for them. The software is tied to cloud services with a monthly payment and varies depending on the connected packages.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$45&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per user in month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://dynamics.microsoft.com/ru-ru/pricing/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={erpnext}
                    alt="ERPnext logo"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://erpnext.com"><a target="_blank">ERPnext</a></Link></strong> is built on the Frappe Framework, a full-stack web app framework built with Python &#38; JavaScript. 100% <Link href="https://github.com/frappe/erpnext"><a className={style.CardOpenSource} target="_blank">open source</a></Link> system that supports multiple verticals. The platform enables administrators to manage processes using a centralized dashboard in real time. 
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$6250&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>You can start with the Cloud Plan ($25 per user in one month). If you are planning to host the software on your own server it is will be free and open source forever</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>is&nbsp;</p>
                  <h3 className={style.Sum}>FREE</h3>
                  <p className={style.PriceRowD}>&nbsp;for open source edition</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://erpnext.com/pricing"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
            </div>
            <p style={{paddingTop: "1rem"}}>We conduct a comprehensive audit of the enterprise for the possibility of optimizing work processes, improving production indicators and reducing costs.</p>
          </div>
          <div label="SCADA - Supervisory Control and Data Acquisition"  className={style.OneTabContainer}>
            <p>
              A software package designed to develop and provide real-time operation of systems for collecting, processing, displaying and archiving information about an industrial production or a monitoring object. SCADA can be part of an automated process control system, control and accounting of electric energy and energy resources, an environmental monitoring system, a scientific experiment, building automation, etc. SCADA systems are used in all sectors of the economy where it is required to provide operator control over technological processes in real time. Our company provides integration services for the most popular SCADA solutions in the world.
            </p>
            <div className={style.CardsContainerSCADA}>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={kaskad}
                    alt="Kaskad-automation logotype"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://kaskad-asu.com"><a target="_blank">Kaskad</a></Link></strong> Scientific Production Association has the capabilities to carry out activities throughout the entire life cycle of automated turnkey systems. The CASCADE servers and the CASCADE APM exchange information in the client-server mode. OPC DA servers, devices with the Modbus protocol, and electricity meters can act as a source of information for SCADA.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$4300&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>It is licensed by the number of external I/O channels (OPC tags, Modbus tags. Measurement channels of electricity meters). One license allows you to organize both data collection in the volume of channels under the license on one computer, and use the SCADA automated control system software to display data from other CASCADE servers.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$310&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month for 512 channels</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://kaskad-asu.com/products-and-services/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={siemens}
                    alt="Siemens automatization logotype"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://new.siemens.com/global/en/products/automation.html"><a target="_blank">Siemens</a></Link></strong> concept of Totally Integrated Automation (TIA) – the platform for industrial automation-ensures the smooth and efficient operation of all devices. Its open architecture fully covers the production process and is based on such characteristics as unified data management methods, global standards and unified software and hardware interfaces.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$8600&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>You can buy Siemens WinCC, SCADA system software V7. 5, RT 512 , executable software and development software on DVD, a single license, a license key on a USB drive, with documentation. Before buying, we recommend that you study all the technical specifications and official brochures from Siemens in order to buy a product with the desired configuration.</p>
                <div className={style.PriceRow2}>                  
                  <h3 className={style.Sum}>$6300&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for a single license (512 variables)</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://new.siemens.com/global/en/products/automation/systems.html"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Yokogawa />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.yokogawa.com"><a target="_blank">Yokogawa</a></Link></strong> is advanced SCADA SOFTWARE for monitoring and saving datas of manufacturing processes which seperated large areas. Devices managed from single station and they can be connected with OPC Client, S7 MPI,S7 PPI, Profinet (S7 1200), Modbus RTU, Modbus TCP/IP, Host-Link protocols(Omron), Mewtocol protocols(Panasonic).
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$5200&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>You need a two identical(same configuration) licence for fully backed up working of two computer(redundant). Client-Server architecture is different than Redundant system. Client reads tag value from the server. The 64 Tag client can read all values of 65534 tag server. On the client side tags which read from server are considered as ‘internal’ tag.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$890&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month for 512 tags</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.yokogawa.com/solutions/products-platforms/control-system/supervisory-control-and-data-acquisition-scada/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
            </div>
            <p style={{paddingTop: "1rem"}}>We conduct a comprehensive audit of the enterprise for the possibility of optimizing work processes, improving production indicators and reducing costs.</p>
          </div>
        </Tabs>
      </div>
      <div className={style.TabsContainerMobile}> {/* mobile view */}
        <Tabs>
          <div label="CRM" className={style.OneTabContainer}>
            <p>
              These systems are built to make customers happy, whether it’s through improved ad targeting or tailored sales communications. CRM software is a front-office tool that is used by employees in departments such as sales and marketing to increase revenue through an improvement in customer experience. After all, without a solid customer base, your company doesn’t have much to go on. These programs are available as either standalone software or as part of an ERP solution. These are some of the most popular CRM systems in the world. The general functionality of all the proposed solutions, with the exception of some details, is the same.
            </p>
            <div className={style.CardsContainer}>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={suitecrm}
                    alt="suite CRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://suitecrm.com/"><a target="_blank">SuiteCRM</a></Link></strong> is one of the most popular <Link href="https://github.com/salesagility/SuiteCRM"><a className={style.CardOpenSource} target="_blank">open source</a></Link> systems. The functionality of the free version meets all the needs of a small company.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$1618&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>The paid version adds cloud storage features, more performance, advanced task scheduling features, and improved support.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>£95&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://suitecrm.com/solutions/compare-with-microsoft-dynamics/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={bitrix24}
                    alt="Bitrix24 site & CRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.bitrix24.ru"><a target="_blank">Bitrix24</a></Link></strong> combines communication channels with an opportunity for full integration with <Link href="https://www.bitrix24.ru/features/sites.php"><a className={style.CardOpenSource} target="_blank">sites</a></Link> created on its proprietary platform.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$1280&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>Landing site as a gift. Free version with restrictions on integration with the site, collaborative document editing and analytics.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>₽1494&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.bitrix24.ru/features/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={amocrm}
                    alt="amoCRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.amocrm.com/"><a target="_blank">amoCRM</a></Link></strong> If other CRM is multifunctional and complex, then amoCRM is the complete opposite: only the &quot;cloud&quot;, and only simplicity.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$520&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>Only the paid version with the possibility of a free trial period. All the basic tools are already available in the basic monthly tariff.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>₽499&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per 1 user</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.amocrm.ru/buy/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={orocrm}
                    alt="OROCRM"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://oroinc.com/"><a target="_blank">OROCRM</a></Link></strong> is based on the Symfony2 PHP framework. It relatively easy and cost-effective <Link href="https://github.com/oroinc/crm"><a className={style.CardOpenSource} target="_blank">to modify the platform</a></Link> to your special needs.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$3141&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>Versatility with the ability to evolve into a large ERP ecosystem. Lots of open source developers find it easy to understand Oro’s code.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>is&nbsp;</p>
                  <h3 className={style.Sum}>FREE</h3>
                  <p className={style.PriceRowD}>&nbsp;for open source edition</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://oroinc.com/oroplatform/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
            </div>
            <p style={{paddingTop: "1rem"}}>We conduct a comprehensive audit of the enterprise for the possibility of optimizing work processes, improving production indicators and reducing costs.</p>
          </div>
          <div label="ERP"  className={style.OneTabContainer}>
            <p>
              This software contains functionality for multiple different business processes such as finance, HR, inventory management and distribution. Large enterprises commonly use enterprise resource planning solutions, but some small businesses do opt for these solutions as well. ERP software is known for containing tools related to both front- and back-office information, along with improving internal communication and data exchange. Automation is also a key feature due to its connectivity of multiple workflows. Our company provides integration services for the most popular ERP solutions in the world.
            </p>
            <div className={style.CardsContainer}>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={cerp}
                    alt="1C:ERP logo"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.1ci.com/applications/1c-erp/"><a target="_blank">1C:ERP</a></Link></strong> The best international methods and long-term domestic practice, which guarantees flexibility of configuration, ease of use and a significant economic effect. The line of solutions &ldquo;1C: ERP&ldquo; covers all major industries, has a large set of functions and software tools.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$7580&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for the initial license</p>
                </div>
                <p>1C was originally created to automate workplace procedures. As a rule, the cost of the project is proportional to the number of automated worksplaces(AWP).</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$600&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per AWP</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://v8.1c.ru/erp/cena-1s-erp/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={saperp}
                    alt="SAP ERP logo"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.sap.com/products/enterprise-management-erp.html"><a target="_blank">SAP ERP</a></Link></strong> use artificial intelligent technologies to help you transform your mission-critical processes and rapidly adapt to change – no matter the size of your business. Stay on the cutting edge with continuous updates, scale easily, cut costs, and gain new efficiencies.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$41000&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for the initial license</p>
                </div>
                <p>The main purpose of SAP is not to automate workplaces, but to organize the implementation of complex chain production and logistics functionality with AI integration opportunity.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$180&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per user in month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.sap.com/products/erp-financial-management/products.html"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={msdynamics}
                    alt="Microsoft dynamics logo"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://dynamics.microsoft.com/en-us/what-is-dynamics365/"><a target="_blank">MS Dynamics</a></Link></strong> AX was one of Microsoft&lsquo;s enterprise resource planning software products. It is part of the Microsoft Dynamics family. After 2018 product was rebranded as a part of Microsoft&lsquo;s Dynamics 365 suite for Finance and Operations .
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$5600&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>You can connect only the functions you need and pay only for them. The software is tied to cloud services with a monthly payment and varies depending on the connected packages.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$45&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per user in month</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://dynamics.microsoft.com/ru-ru/pricing/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={erpnext}
                    alt="ERPnext logo"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://erpnext.com"><a target="_blank">ERPnext</a></Link></strong> is built on the Frappe Framework, a full-stack web app framework built with Python &#38; JavaScript. 100% <Link href="https://github.com/frappe/erpnext"><a className={style.CardOpenSource} target="_blank">open source</a></Link> system that supports multiple verticals. The platform enables administrators to manage processes using a centralized dashboard in real time. 
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$6250&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>You can start with the Cloud Plan ($25 per user in one month). If you are planning to host the software on your own server it is will be free and open source forever</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>is&nbsp;</p>
                  <h3 className={style.Sum}>FREE</h3>
                  <p className={style.PriceRowD}>&nbsp;for open source edition</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://erpnext.com/pricing"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
            </div>
            <p style={{paddingTop: "1rem"}}>We conduct a comprehensive audit of the enterprise for the possibility of optimizing work processes, improving production indicators and reducing costs.</p>
          </div>
          <div label="SCADA"  className={style.OneTabContainer}>
            <p>
              A software package designed to develop and provide real-time operation of systems for collecting, processing, displaying and archiving information about an industrial production or a monitoring object. SCADA can be part of an automated process control system, control and accounting of electric energy and energy resources, an environmental monitoring system, a scientific experiment, building automation, etc. SCADA systems are used in all sectors of the economy where it is required to provide operator control over technological processes in real time. Our company provides integration services for the most popular SCADA solutions in the world.
            </p>
            <div className={style.CardsContainerSCADA}>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={kaskad}
                    alt="Kaskad-automation logotype"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://kaskad-asu.com"><a target="_blank">Kaskad</a></Link></strong> Scientific Production Association has the capabilities to carry out activities throughout the entire life cycle of automated turnkey systems. The CASCADE servers and the CASCADE APM exchange information in the client-server mode. OPC DA servers, devices with the Modbus protocol, and electricity meters can act as a source of information for SCADA.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$4300&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>It is licensed by the number of external I/O channels (OPC tags, Modbus tags. Measurement channels of electricity meters). One license allows you to organize both data collection in the volume of channels under the license on one computer, and use the SCADA automated control system software to display data from other CASCADE servers.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$310&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month for 512 channels</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://kaskad-asu.com/products-and-services/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Image
                    src={siemens}
                    alt="Siemens automatization logotype"
                  />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://new.siemens.com/global/en/products/automation.html"><a target="_blank">Siemens</a></Link></strong> concept of Totally Integrated Automation (TIA) – the platform for industrial automation-ensures the smooth and efficient operation of all devices. Its open architecture fully covers the production process and is based on such characteristics as unified data management methods, global standards and unified software and hardware interfaces.
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$8600&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>You can buy Siemens WinCC, SCADA system software V7. 5, RT 512 , executable software and development software on DVD, a single license, a license key on a USB drive, with documentation. Before buying, we recommend that you study all the technical specifications and official brochures from Siemens in order to buy a product with the desired configuration.</p>
                <div className={style.PriceRow2}>                  
                  <h3 className={style.Sum}>$6300&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for a single license (512 variables)</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://new.siemens.com/global/en/products/automation/systems.html"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
              <section className={style.Card}>
                <div className={style.Logo}>
                  <Yokogawa />
                </div>
                <p className={style.CardD}>
                  <strong className={style.CardDN}><Link href="https://www.yokogawa.com"><a target="_blank">Yokogawa</a></Link></strong> is advanced SCADA SOFTWARE for monitoring and saving datas of manufacturing processes which seperated large areas. Devices managed from single station and they can be connected with OPC Client, S7 MPI,S7 PPI, Profinet (S7 1200), Modbus RTU, Modbus TCP/IP, Host-Link protocols(Omron), Mewtocol protocols(Panasonic).
                </p>
                <div className={style.PriceRow}>
                  <h3 className={style.Sum}>$5200&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;for configuration service</p>
                </div>
                <p>You need a two identical(same configuration) licence for fully backed up working of two computer(redundant). Client-Server architecture is different than Redundant system. Client reads tag value from the server. The 64 Tag client can read all values of 65534 tag server. On the client side tags which read from server are considered as ‘internal’ tag.</p>
                <div className={style.PriceRow2}>
                  <p className={style.PriceRowD}>from&nbsp;</p>
                  <h3 className={style.Sum}>$890&nbsp;</h3>
                  <p className={style.PriceRowD}>&nbsp;per month for 512 tags</p>
                </div>
                <p className={style.CardSpecification}>
                  <span style={{color: "#ffcf46", fontSize: "1.6rem", marginTop: "-0.25rem"}}>&#10149;&nbsp;</span><Link href="https://www.yokogawa.com/solutions/products-platforms/control-system/supervisory-control-and-data-acquisition-scada/"><a target="_blank">technical specifications</a></Link>
                </p>
              </section>
            </div>
            <p style={{paddingTop: "1rem"}}>We conduct a comprehensive audit of the enterprise for the possibility of optimizing work processes, improving production indicators and reducing costs.</p>
          </div>
        </Tabs>
      </div>

    </div>
  )
}
