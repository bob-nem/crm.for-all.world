import style from '../../styles/HomeThird.module.css';
import Image from 'next/image';

import customerBase from '../../images/customer-base.svg';
import customerSupport from '../../images/customer-support.svg';
import employeesKPI from '../../images/employees-kpi.svg';
import telephony from '../../images/telephony.svg';
import systemIntegration from '../../images/integration-systems.svg';
import processesModeling from '../../images/processes-modeling.svg';
import phoneman from '../../images/phoneman-py.svg';

export default function ThirdBlock () {
  return (
    <div className={style.ThirdBlock}>
    <div className={style.ThirdBlockColorBG}>
      <h2 className={style.ThirdBlockHeader}>CAPABILITIES OF CRM SYSTEMS</h2>
      <p className={style.ThirdBlockParagraph}>An effective CRM system helps a business to sell more, takes control of communication with customers and suppliers, sales and marketing management.</p>
      <div loading="lazy" className={style.ThirdBlockCards}>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={customerBase}
              alt="customer base"
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Customer base and sales management</h3>
            <p className={style.ThirdBlockOneCardP}>One of the most important functions of CRM is to save the necessary customer data in an ordered form. For example, contacts, banking details, purchase history.</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={customerSupport}
              alt="customer support"
              height={220}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Supplier support and warehouse accounting</h3>
            <p className={style.ThirdBlockOneCardP}>All requests from customers fall into the sales funnel of the CRM system. In order to ensure prompt work with clients, in CRM the following tools are implemented.</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={employeesKPI}
              alt="employees KPI"
              height={220}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Employees, leaderships<br />(tasks, KPI)</h3>
            <p className={style.ThirdBlockOneCardP}>Make management decisions based on data. In the field of personnel control and management, a modern CRM system based on all platforms allows.</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={telephony}
              alt="telephony CRM"
              height={220}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Telephony<br />and calltracking</h3>
            <p className={style.ThirdBlockOneCardP}>With the help of end-to-end multi-channel analytics and call tracking , you will be able to track the client's path from viewing an ad to getting into the sales funnel.</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={systemIntegration}
              alt="integration CRM with other systems"
              height={180}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Integration with other systems and services</h3>
            <p className={style.ThirdBlockOneCardP}>Integration with other systems and services CRM systems have the ability to integrate with any external programs, services and equipment based on open standards.</p>
          </div>
        </div>
        <div className={style.ThirdBlockOneCard}>
          <div className={style.ThirdBlockOneCardI}>
            <Image
              src={processesModeling}
              alt="integration CRM with other systems"
              height={180}
            />
          </div>
          <div className={style.ThirdBlockOneCardRight}>
            <h3 className={style.ThirdBlockOneCardH3}>Modeling and automation of processes</h3>
            <p className={style.ThirdBlockOneCardP}>CRM systems on the 1C platform have a built-in business process editor (BPMN) for automating the organization's processes and regulating key processes.</p>
          </div>
        </div>
      </div>
      <div className={style.ThirdBlockDigits}>
        <div className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>on 36%</h3>
          <p className={style.ThirdBlockDigitsP}>sales growth on the same flow of incoming requests with the use of a customer heating system by stages.</p>
        </div>
        <div className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>up to 15%</h3>
          <p className={style.ThirdBlockDigitsP}>the growth of repeat sales on the same basis due to internal promotion.</p>
        </div>
        <div className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>by 1.6 times</h3>
          <p className={style.ThirdBlockDigitsP}>reducing the processing time of current applications. entering and receiving data, forming documents.</p>
        </div>
        <div className={style.ThirdBlockDigitsBlock}>
          <h3 className={style.ThirdBlockDigitsH3}>100%</h3>
          <p className={style.ThirdBlockDigitsP}>security against loss of account information (if the conditions for saving backups are met)</p>
        </div>
        <div className={style.ThirdBlockDigitsBlockL}>
          <h3 className={style.ThirdBlockDigitsH3}>by 2.1 times</h3>
          <p className={style.ThirdBlockDigitsP}>improvements in the speed of generating complex reports (compared to the ability of excel)</p>
        </div>
      </div>
    </div>
    </div>
  )
}
