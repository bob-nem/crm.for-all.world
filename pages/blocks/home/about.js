import style from '../../../styles/About.module.css'

import SvgTarget from '../../../images/icons/Target'
import SvgProcesses from '../../../images/icons/Processes'
import SvgEmployeeStudy from '../../../images/icons/EmployeeStudy'

export default function FirstBlock() {
  return (
    <div className={style.Container}>
      <h2 className={style.Header}>Automatization of business processes</h2>
      <p className={style.MainHeaderDescription}>Electronic document management systems development and configuration for your technical task for any business. Integration of both ready-made and individual solutions.</p>
      <div className={style.Divider}>
        <div className={style.LeftBlock}>
          
        </div>
        <div className={style.RightBlock}>
          <div className={style.FirstBlockRightList}>
            <div className={style.RightListIcon}>
              <SvgTarget className={style.RightIcon} />
            </div>
            <div className={style.RightListText}>
              <h3 className={style.RightListHeader}>Design corporate system for your specifics</h3>
              <p className={style.RightListParagraph}>Integration into any service with convenient and intuitive functionality. Depending on the need, we select from simple and cheap ready-made solutions out of the box to complex automation using interconnected algorithms with a large amount of input data with fine-tuning of user functions for each employee. We will make enterprise resource planning and customer relations management system exactly for your needs.</p>
            </div>
            <p className={style.RightListParagraphMobile}>Integration into any service with convenient and intuitive functionality. Depending on the need, we select from simple and cheap ready-made solutions out of the box to complex automation using interconnected algorithms with a large amount of input data with fine-tuning of user functions for each employee. We will make enterprise resource planning and customer relations management system exactly for your needs.</p>
          </div>
          <div className={style.FirstBlockRightList}>
            <div className={style.RightListIcon}>
              <SvgProcesses className={style.RightIcon} />
            </div>
            <div className={style.RightListText}>
              <h3 className={style.RightListHeader}>Difficult systems for non-typical processes</h3>
              <p className={style.RightListParagraph}>If you have a complex, multi-level business process with interrelated processes that depend on each other. It is critically important to have a well-formed corporate document management regulations, inventory accounting and identify weaknesses of the system. With the help of our software, you get control not only of the sales department, but also of dealers, contractors, the operation of factories together with their warehouses and delivery to the final consumer.</p>
            </div>
            <p className={style.RightListParagraphMobile}>If you have a complex, multi-level business process with interrelated processes that depend on each other. It is critically important to have a well-formed corporate document management regulations, inventory accounting and identify weaknesses of the system. With the help of our software, you get control not only of the sales department, but also of dealers, contractors, the operation of factories together with their warehouses and delivery to the final consumer.</p>
          </div>
          <div className={style.FirstBlockRightList}>
            <div className={style.RightListIcon3}>
              <SvgEmployeeStudy className={style.RightIcon} />
            </div>
            <div className={style.RightListText}>
              <h3 className={style.RightListHeader}>Control and productivity of personnel</h3>
              <p className={style.RightListParagraph}>Users who have been trained in the use of electronic document management technologies know what processes they automate and for what, are able to quickly generate the necessary information and make clear decisions based on well-established interaction. Employees get rid of routine operations freeing up time for more useful actions. The system minimizes the factor of human errors is intuitive and accessible for perception and interaction.</p>
            </div>
            <p className={style.RightListParagraphMobile}>Users who have been trained in the use of electronic document management technologies know what processes they automate and for what, are able to quickly generate the necessary information and make clear decisions based on well-established interaction. Employees get rid of routine operations freeing up time for more useful actions. The system minimizes the factor of human errors is intuitive and accessible for perception and interaction.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
