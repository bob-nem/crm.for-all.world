import React, { useState } from 'react'
import Image from 'next/image'
import style from '../../../styles/Stages.module.css'
import Modal from 'react-modal'

import secondBlockIMG from '../../../images/backgrounds/stages-right.webp'
import workGroupBG from '../../../images/backgrounds/employees-group.webp'
import SvgCheckWhite from '../../../images/icons/CheckWhite'

Modal.setAppElement('#__next')

export default function SecondBlock() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className={style.SecondBlock}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, .7)',
              zIndex: '5'
            },
            content: {
              zIndex: '5'
            }
          }
        }
      >
        <div className={style.ModalGroup}>
          <button onClick={() => setModalIsOpen(false)} className={style.CloseModal}>X</button>
          <div className={style.ModalContent}>
            <h3>Working group for the formation and control of the implementation of the roadmap</h3>
            <p className={style.ModalP}>
              Focused on large businesses, the package provides an operational and complete display of information for immediate decision-making and strategic planning. To fully take advantage of its advantages, it is necessary to develop and accurately implement a well-thought-out ERP system implementation plan. The work is complicated by the fact that the toolkit covers all levels — from the initial data entry from registers to decision-making by management. Employees (ideally, as the principle of work provides) perform each operation at a strictly defined moment, and it is instantly reflected in the system, affecting all its other &quot;nodes&quot;.<br />
              <br />The group should include:<br />
              1. Specially trained employees of the software supplier company.<br />
              2. The head (preferably from among the top managers of the company). This person should be well versed in all aspects of the company&apos;s activities and the organization of business processes. In addition, the ERP implementation project manager should be able to make sole decisions on any issues that arise.<br />
              3. Managers and specialists of all departments responsible for the compliance of the system with the requirements of current legislation and corporate standards and who will work in the ERP system. Accountants, storekeepers, freight forwarders, sales managers, employees of the design and technical department, engineers, production workers and all the necessary specialized employees. Their tasks will include advising implementers at the stage of studying the business processes of the enterprise and organizing the work of departments after the automation process is completed.<br />
              4. IT specialist of a wide profile. His area of responsibility will be the technical support of the project.
            </p>
          </div>
          <div className={style.WorkGroupBG}>
            <Image
              src={workGroupBG}
              alt='working group background'
            />
          </div>
        </div>
      </Modal>
      <div className={style.SecondBlockLeft}>
        <h2 className={style.SecondBlockHeader}>Stages of enterpize optimization development and implementation</h2>
        <div className={style.SecondBlockLine}></div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><SvgCheckWhite className={style.CheckIcon} alt="check icon" /></div>
          <div>
            <h3 className={style.SecondBlockH}>Definition of the general concept, approval of the technical task</h3>
            <p className={style.SecondBlockP}>
              Work on the ERP or CMR implementation project at the enterprise begins with the definition of goals and objectives. This should not be automation for the sake of automation — the customer should clearly know what business effects he ultimately wants to achieve. At the preparatory stage, it is necessary to form a
              &nbsp;<button onClick={() => setModalIsOpen(true)} className={style.ButtonModal}>working group</button>&nbsp;
              on the client side, which together with the integrator will work on creating a voluminous and detailed technical task, thoroughly describing all, even the smallest processes.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><SvgCheckWhite alt="check icon" /></div>
          <div>
            <h3 className={style.SecondBlockH}>Interface design, programming of data processing algorithms</h3>
            <p className={style.SecondBlockP}>
              Based on the results of the enterprise survey, the functional requirements for the key modules of the system, the needs for downloading, exchanging and accessing data are determined and implemented. Setting up the exchange of information with the software already used. Improvements are being made to the standard functionality for the specifics of the company&apos;s activities. The system will program adapted solutions for the company&apos;s business processes and develop an interface for them. The execution of all actions in the system will become obvious and intuitive.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><SvgCheckWhite alt="check icon" /></div>
          <div>
            <h3 className={style.SecondBlockH}>Implementation and adaptation of the system to direct activities</h3>
            <p className={style.SecondBlockP}>Deployment of software in the enterprise at the workplaces of employees (often with intermediate testing), training in the use of administrators by the system or the conclusion of a service contract. Access rights and reports are configured, management and executive corporate departments are synchronized. Work data and reference information are loaded from the old system, excel files, etc.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><SvgCheckWhite alt="check icon" /></div>
          <div>
            <h3 className={style.SecondBlockH}>Commissioning into commercial operation, further maintenance</h3>
            <p className={style.SecondBlockP}>Upon completion of automation, a key group of users is trained, instructions for working in the system are developed. In the process of full-fledged operation, will necessarily appear current improvements, finding ways to increase the efficiency and return on the system, adding new modules to it. Take into account the aspects of information security - identifying risks and ways to respond to them.</p>
          </div>
        </div>
      </div>
      <div className={style.SecondBlockRight}>
        <Image
          src={secondBlockIMG}
          alt="ERP Implementation stages background"
          className={style.SecondBlockIMG}
        />
      </div>
    </div>
  )
}
