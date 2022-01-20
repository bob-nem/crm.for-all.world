import style from '../../../styles/Capabilities.module.css'

import SvgCustomerBase from '../../../images/icons/CustomerBase'
import SvgCustomerSupport from '../../../images/icons/CustomerSupport'
import SvgEmployeesKpi from '../../../images/icons/EmployeesKpi'
import SvgTelephony from '../../../images/icons/Telephony'
import SvgIntegrationSystems from '../../../images/icons/IntegrationSystems'
import SvgProcessesModeling from '../../../images/icons/ProcessesModeling'

export default function ThirdBlock () {
  return (
    <div className={style.Container}>
    <div className={style.Background}>
      <h2 className={style.Header}>CAPABILITIES OF ENTERPRISE SYSTEMS</h2>
      <p className={style.Description}>All possible areas of automation apply to ERP systems, with the exception of processes in industrial production. Enterprise systems can collect data from production systems like SCADA in real time by connecting via the API.</p>
      <div className={style.CardsWrapper}>
        <section className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <SvgCustomerBase />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Customer base and sales management</h3>
            <p className={style.ThirdBlockOneCardP}>One of the most important functions of CRM is to save the necessary customer data in an ordered form. For example, contacts, banking details, purchase history.</p>
          </div>
          <p className={style.CardParagraphMobile}>One of the most important functions of CRM is to save the necessary customer data in an ordered form. For example, contacts, banking details, purchase history.</p>
        </section>
        <section className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <SvgCustomerSupport />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Supplier support and warehouse accounting</h3>
            <p className={style.ThirdBlockOneCardP}>All external and internal requests fall into the system maintenance funnel. To ensure operational work with the warehouse, the following tools are implemented in ERP:</p>
          </div>
          <p className={style.CardParagraphMobile}>All external and internal requests fall into the system maintenance funnel. To ensure operational work with the warehouse, the following tools are implemented in ERP:</p>
        </section>
        <section className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <SvgEmployeesKpi />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Financial flow managment, reports</h3>
            <p className={style.ThirdBlockOneCardP}>Make management decisions based on data by generating reports, displaying the status stages of the processes of interest, monitoring the employment of personnel.</p>
          </div>
          <p className={style.CardParagraphMobile}>Make management decisions based on data by generating reports, displaying the status stages of the processes of interest, monitoring the employment of personnel.</p>
        </section>
        <section className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <SvgTelephony />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Communication and calltracking</h3>
            <p className={style.ThirdBlockOneCardP}>With the help of end-to-end multi-channel analytics and call tracking, you will be able to track the client&apos;s path from viewing an ad to getting into the sales funnel.</p>
          </div>
          <p className={style.CardParagraphMobile}>With the help of end-to-end multi-channel analytics and call tracking, you will be able to track the client&apos;s path from viewing an ad to getting into the sales funnel.</p>
        </section>
        <section className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <SvgIntegrationSystems />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Integration with other systems and services</h3>
            <p className={style.ThirdBlockOneCardP}>The software used is open for making functional improvements, integration with any external programs, services and equipment based on open standards.</p>
          </div>
          <p className={style.CardParagraphMobile}>The software used is open for making functional improvements, integration with any external programs, services and equipment based on open standards is available.</p>
        </section>
        <section className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI} style={{paddingRight: "1rem"}}>
            <SvgProcessesModeling />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Modeling and automation of processes</h3>
            <p className={style.ThirdBlockOneCardP}>Accounting and adaptive regulation of any production processes are configured, from the work of the secretary to the accounting of production productivity indicators.</p>
          </div>
          <p className={style.CardParagraphMobile}>Accounting and adaptive regulation of any production processes are configured, from the work of the secretary to the accounting of production productivity indicators.</p>
        </section>
      </div>
      <div className={style.ThirdBlockDigits}>
        <section className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>on 21%</h3>
          <p className={style.ThirdBlockDigitsP}>sales growth on the same flow of incoming requests with the use of a customer heating system by stages.</p>
        </section>
        <section className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>up to 64%</h3>
          <p className={style.ThirdBlockDigitsP}>labor productivity growth on the same basis due to optimization of internal processes.</p>
        </section>
        <section className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>by 1.6 times</h3>
          <p className={style.ThirdBlockDigitsP}>reducing the processing time of current applications. entering and receiving data, forming documents.</p>
        </section>
        <section className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>100%</h3>
          <p className={style.ThirdBlockDigitsP}>security against loss of account information (if the conditions for saving backups are met)</p>
        </section>
        <section className={style.ThirdBlockDigitsBlockL}>
          <h3 className={style.ThirdBlockDigitsH3}>by 3.14 times</h3>
          <p className={style.ThirdBlockDigitsP}>improvements in the speed of generating complex reports (compared to the ability of excel)</p>
        </section>
      </div>
    </div>
    </div>
  )
}
