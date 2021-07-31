import style from '../../styles/HomeFirst.module.css';
import Image from 'next/image';

import firstBlockIMG from '../../images/FirstBlock-IMG.png';
import windowTargetIcon from '../../images/window-target1.svg';
import manyProcessessIcon from '../../images/many-processes.svg';
import employeeStudying from '../../images/employee-studying.svg';

export default function FirstBlock() {
  return (
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
  )
}
