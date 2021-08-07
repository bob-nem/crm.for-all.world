import style from '../../styles/HomeSecond.module.css';
import Image from 'next/image';

import secondBlockIMG from '../../images/SecondBlock-IMG.png';
import checkWhite from '../../images/check-white.svg';

export default function SecondBlock () {
  return (
    <div className={style.SecondBlock}>
      <div className={style.SecondBlockLeft}>
        <h2 className={style.SecondBlockHeader} id="stages">Stages of enterpize optimization development and implementation</h2>
        <div className={style.SecondBlockLine}></div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
          <div>
            <h3 className={style.SecondBlockH}>Definition of the general concept, approval of the technical task</h3>
            <p className={style.SecondBlockP}>Work on the ERP or CMR implementation project at the enterprise begins with the definition of goals and objectives. This should not be automation for the sake of automation — the customer should clearly know what business effects he ultimately wants to achieve. At the preparatory stage, it is necessary to form a working group on the client side, which together with the integrator will work on creating a voluminous and detailed technical task, thoroughly describing all, even the smallest processes.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
          <div>
            <h3 className={style.SecondBlockH}>Interface design, programming of data processing algorithms</h3>
            <p className={style.SecondBlockP}>Based on the results of the enterprise survey, the functional requirements for the key modules of the system, the needs for downloading, exchanging and accessing data are determined and implemented. Setting up the exchange of information with the software already used. Improvements are being made to the standard functionality for the specifics of the company's activities. The system will program adapted solutions for the company's business processes and develop an interface for them. The execution of all actions in the system will become obvious and intuitive.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
          <div>
            <h3 className={style.SecondBlockH}>Implementation and adaptation of the system to direct activities</h3>
            <p className={style.SecondBlockP}>Deployment of software in the enterprise at the workplaces of employees (often with intermediate testing), training in the use of administrators by the system or the conclusion of a service contract. Access rights and reports are configured, management and executive corporate departments are synchronized. Work data and reference information are loaded from the old system, Excel files, etc.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
          <div>
            <h3 className={style.SecondBlockH}>Commissioning into commercial operation, further maintenance</h3>
            <p className={style.SecondBlockP}>Upon completion of automation, a key group of users is trained, instructions for working in the system are developed. In the process of full-fledged operation, will necessarily appear current improvements, finding ways to increase the efficiency and return on the system, adding new modules to it. Take into account the aspects of information security - identifying risks and ways to respond to them.</p>
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
