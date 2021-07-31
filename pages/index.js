import style from '../styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';

import topIMG from '../images/Top-IMG.png';
import unicornTopLogo from '../images/unicorn-logo-gr.png';
import firstBlockIMG from '../images/FirstBlock-IMG.png';
import secondBlockIMG from '../images/SecondBlock-IMG.png';
import windowTargetIcon from '../images/window-target1.svg';
import manyProcessessIcon from '../images/many-processes.svg';
import employeeStudying from '../images/employee-studying.svg';
import customerBase from '../images/customer-base.svg';
import customerSupport from '../images/customer-support.svg';
import employeesKPI from '../images/employees-kpi.svg';
import telephony from '../images/telephony.svg';
import systemIntegration from '../images/integration-systems.svg';
import processesModeling from '../images/processes-modeling.svg';
import checkWhite from '../images/check-white.svg';
import phoneman from '../images/phoneman-py.svg';

export default function Home() {
  return (
    <div className={style.Container}>
      <Head>
        <title>CRM.for-all.world</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={style.HeaderSlider} id="home">
        <div className={style.HeaderSliderLeft}>
          <div className={style.UnicornTopLogo}>
            <Image
              src={unicornTopLogo}
            />
          </div>
          <h1 className={style.TopHeader}>Customer Relationship Management Systems</h1>
          <p className={style.TopDescription}>&#10148; <strong>CRM system</strong> (Customer Relations Management) is a program for automating document management processes, accounting and data analysis in an organization, as well as effectively interacting with customers and partners. The integration of this software allows you to establish control and planning of any productive and customer-oriented business.<br />&#10144; A well-thought-out CRM system allows the manager to understand how the processes are moving in the company, what needs to be done to achieve the targets and monitor the stages of each process</p>
        </div>
        <div className={style.HeaderSliderRight}>
          <Image
            className={style.HeaderSliderRightIMG}
            src={topIMG}
            alt="computer with CRM"
          />
        </div>
      </header>
      <main className={style.Main}>
        <div className={style.FirstBlock}>
          <h2 className={style.FirstBlockHeader}>Automatization of business processes</h2>
          <p className={style.FirstBlockParagraph}>CRM development and configuration for your technical task for any business. Integration of both ready-made and individual solutions.</p>
          <div className={style.FirstBlockSidesDivision}>
            <div className={style.FirstBlockLeft}>
              <Image
                className={style.FirstBlockLeftIMG}
                src={firstBlockIMG}
                alt="CRM development"
              />
            </div>
            <div className={style.FirstBlockRight}>
              <div className={style.FirstBlockRightList}>
                <div className={style.FirstBlockRightListIcon}>
                <Image
                  className={style.FirstBlockRightIcon}
                  src={windowTargetIcon}
                  alt="design system for you specifics"
                />
                </div>
                <div>
                  <h3 className={style.FirstBlockRightListHeader}>Design a CRM system for your specifics</h3>
                  <p className={style.FirstBlockRightListParagraph}>Integration into any service. Complex automation using difficult algorithms with a large amount of input data with fine-tuning of user functions for each employee. We will make a unique CRM exactly for your needs.</p>
                </div>
              </div>
              <div className={style.FirstBlockRightList}>
                <div className={style.FirstBlockRightListIcon}>
                <Image
                  className={style.FirstBlockRightIcon}
                  src={manyProcessessIcon}
                  alt="design non-typical processes"
                />
                </div>
                <div>
                  <h3 className={style.FirstBlockRightListHeader}>Systems for non-typical processes</h3>
                  <p className={style.FirstBlockRightListParagraph}>If you have a complex, multi-level business process, with the help of CRM you get control not only of the sales department, but also of dealers, contractors, the work of factories and delivery to the final consumer.</p>
                </div>
              </div>
              <div className={style.FirstBlockRightList}>
              <div className={style.FirstBlockRightListIcon}>
                <Image
                  className={style.FirstBlockRightIcon}
                  src={employeeStudying}
                  alt="Employee training for CRM"
                />
              </div>
              <div>
                <h3 className={style.FirstBlockRightListHeader}>Employee training to CRM use</h3>
                <p className={style.FirstBlockRightListParagraph}>Users who have been trained in the use of CRM solutions know what processes and for what it automates, are able to quickly generate the necessary information. The system is intuitive and accessible for perception and interaction.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.SecondBlock}>
          <div className={style.SecondBlockLeft}>
            <h2 className={style.SecondBlockHeader} id="stages">Stages of CRM development and implementation</h2>
            <div className={style.SecondBlockLine}></div>
            <div className={style.SecondBlockConent}>
              <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
              <div>
                <h3>Technical task development</h3>
                <p>Analysis of business processes of the enterprise, development of a flowchart, a detailed description of the functionality. Selecting the optimal CRM solution for solving your tasks, determining the stages of implementation and the results of each stage.</p>
              </div>
            </div>
            <div className={style.SecondBlockConent}>
              <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
              <div>
                <h3>Interface design, programming</h3>
                <p>Interface design development, module programming. Working in a CRM system has its own nuances and features, we will help to optimize the process, make it more understandable for the employee. The execution of all actions in the system will become obvious and intuitive. Using the example of specific tasks, we show how CRM will help simplify the work for him.</p>
              </div>
            </div>
            <div className={style.SecondBlockConent}>
              <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
              <div>
                <h3>Testing and launching</h3>
                <p>Project testing, integration, warranty support, staff training. An employee who knows his product well, sales methods and tools that increase efficiency, which is CRM, has great value. Such an employee becomes a much more important combat unit than an employee without CRM skills.</p>
              </div>
            </div>
            <div className={style.SecondBlockConent}>
              <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
              <div>
                <h3>Further support</h3>
                <p>The developed CRM systems have the possibility of improvement when new goals and objectives appear. Ensure that all applications and requests (autolids)get into the CRM. Synchronize management and sales department using department reporting. </p>
              </div>
            </div>
          </div>
          <div className={style.SecondBlockRight}>
            <Image
              src={secondBlockIMG}
              alt="CRM implementation"
              className={style.SecondBlockIMG}
            />
          </div>
        </div>
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
                <h3 className={style.ThirdBlockOneCardH3}>Supplier support<br />and customer service</h3>
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
      </main>
      <footer className={style.Footer}>
      </footer>
    </div>
  )
}
