import style from '../styles/Home.module.css';
import Image from 'next/image';

import topAudit from '../images/Audit.png';
import topDesktop from '../images/Top-Desktop.png';
import firstBlockLeftIMG from '../images/CRM-Development.png';

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
              src={topAudit}
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
                src={firstBlockLeftIMG}
                alt="CRM development"
              />
            </div>
            <div className={style.FirstBlockRight}>
              <div className={style.FirstBlockRightList}>
                <div className={style.FirstBlockRightListIcon}>
                
                </div>
                <div>
                  <h3 className={style.FirstBlockRightListHeader}>Design a CRM system for your specifics</h3>
                  <p className={style.FirstBlockRightListParagraph}>Integration into any service. Complex automation using difficult algorithms with a large amount of input data with fine-tuning of user functions for each employee.</p>
                </div>
              </div>
              <div className={style.FirstBlockRightList}>
              </div>
              <div className={style.FirstBlockRightList}>
              </div>
              <div className={style.FirstBlockRightList}>
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
