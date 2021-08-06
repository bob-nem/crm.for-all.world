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
      <p className={style.FirstBlockParagraph}>Electronic document management systems development and configuration for your technical task for any business. Integration of both ready-made and individual solutions.</p>
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
            <div className={style.FirstBlockRightListI}>
              <Image
                className={style.FirstBlockRightIcon}
                src={windowTargetIcon}
                alt="design system for you specifics"
              />
            </div>
            <h3 className={style.FirstBlockRightListHeader}>Design corporate system for your specifics</h3>
            <p className={style.FirstBlockRightListParagraph}>Integration into any service with convenient and intuitive functionality. Depending on the need, we select from simple and cheap ready-made solutions out of the box to complex automation using interconnected algorithms with a large amount of input data with fine-tuning of user functions for each employee. We will make enterprise resource planning and customer relations management system exactly for your needs.</p>
          </div>
          <div className={style.FirstBlockRightList}>
            <div className={style.FirstBlockRightListI}>
              <Image
                className={style.FirstBlockRightIcon}
                src={manyProcessessIcon}
                alt="design non-typical processes"
              />
            </div>
            <h3 className={style.FirstBlockRightListHeader}>Difficult systems for non-typical processes</h3>
            <p className={style.FirstBlockRightListParagraph}>If you have a complex, multi-level business process with interrelated processes that depend on each other. It is critically important to have a well-formed corporate document management regulations, inventory accounting and identify weaknesses of the system. With the help of our software, you get control not only of the sales department, but also of dealers, contractors, the operation of factories together with their warehouses and delivery to the final consumer.</p>
          </div>
          <div className={style.FirstBlockRightList}>
            <div className={style.FirstBlockRightListI}>
              <Image
                className={style.FirstBlockRightIcon}
                src={employeeStudying}
                alt="Employee training for CRM"
              />
            </div>
            <h3 className={style.FirstBlockRightListHeader}>Control and productivity of personnel</h3>
            <p className={style.FirstBlockRightListParagraph}>Users who have been trained in the use of electronic document management technologies know what processes they automate and for what, are able to quickly generate the necessary information and make clear decisions based on well-established interaction. Employees get rid of routine operations freeing up time for more useful actions. The system minimizes the factor of human errors is intuitive and accessible for perception and interaction.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
