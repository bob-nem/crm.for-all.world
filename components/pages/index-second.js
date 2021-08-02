import style from '../../styles/HomeSecond.module.css';
import Image from 'next/image';

import secondBlockIMG from '../../images/SecondBlock-IMG.png';
import checkWhite from '../../images/check-white.svg';

export default function SecondBlock () {
  return (
    <div className={style.SecondBlock}>
      <div className={style.SecondBlockLeft}>
        <h2 className={style.SecondBlockHeader} id="stages">Stages of CRM development and implementation</h2>
        <div className={style.SecondBlockLine}></div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
          <div>
            <h3 className={style.SecondBlockH}>Technical task development</h3>
            <p className={style.SecondBlockP}>Analysis of business processes of the enterprise, development of a flowchart, a detailed description of the functionality. Selecting the optimal CRM solution for solving your tasks, determining the stages of implementation and the results of each stage.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
          <div>
            <h3 className={style.SecondBlockH}>Interface design, programming</h3>
            <p className={style.SecondBlockP}>Interface design development, module programming. Working in a CRM system has its own nuances and features, we will help to optimize the process, make it more understandable for the employee. The execution of all actions in the system will become obvious and intuitive. Using the example of specific tasks, we show how CRM will help simplify the work for him.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
          <div>
            <h3 className={style.SecondBlockH}>Testing and launching</h3>
            <p className={style.SecondBlockP}>Project testing, integration, warranty support, staff training. An employee who knows his product well, sales methods and tools that increase efficiency, which is CRM, has great value. Such an employee becomes a much more important combat unit than an employee without CRM skills.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
          <div>
            <h3 className={style.SecondBlockH}>Further support</h3>
            <p className={style.SecondBlockP}>The developed CRM systems have the possibility of improvement when new goals and objectives appear. Ensure that all applications and requests (autolids)get into the CRM. Synchronize management and sales department using department reporting. </p>
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
  )
}
