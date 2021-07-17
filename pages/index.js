import style from '../styles/Home.module.css';
import Image from 'next/image';

import topIMG from '../images/Top-IMG.png';
import firstBlockIMG from '../images/FirstBlock-IMG.png';
import secondBlockIMG from '../images/SecondBlock-IMG.png';
import windowTargetIcon from '../images/window-target1.svg';
import manyProcessessIcon from '../images/many-processes.svg';
import employeeStudying from '../images/employee-studying.svg';

export default function Home() {
  return (
    <div className={style.Container}>
      <header>
        <div className={style.MainMenu}>

        </div>
        <div className={style.HeaderSlider}>
          <div className={style.HeaderSliderLeft}>
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
            <h2 className={style.SecondBlockHeader}>Stages of CRM development and implementation</h2>
            <div className={style.SecondBlockConent}>
              <h3>Technical task development</h3>
              <p>Analysis of business processes of the enterprise, development of a flowchart, a detailed description of the functionality. Selecting the optimal CRM solution for solving your tasks, determining the stages of implementation and the results of each stage.</p>
            </div>
            <div className={style.SecondBlockConent}>
              <h3>Interface design, programming</h3>
              <p>Interface design development, module programming. Working in a CRM system has its own nuances and features, we will help to optimize the process, make it more understandable for the employee. The execution of all actions in the system will become obvious and intuitive. Using the example of specific tasks, we show how CRM will help simplify the work for him.</p>
            </div>
            <div className={style.SecondBlockConent}>
              <h3>Testing and launching</h3>
              <p>Project testing, integration, warranty support, staff training. An employee who knows his product well, sales methods and tools that increase efficiency, which is CRM, has great value. Such an employee becomes a much more important combat unit than an employee without CRM skills.</p>
            </div>
            <div className={style.SecondBlockConent}>
              <h3>Further support</h3>
              <p>The developed CRM systems have the possibility of improvement when new goals and objectives appear. Ensure that all applications and requests (autolids)get into the CRM. Synchronize management and sales department using department reporting. </p>
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
        </div>
      </main>
      <footer className={style.Footer}>
      </footer>
    </div>
  )
}
