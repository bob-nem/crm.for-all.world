import React, { useState } from 'react'
import Image from 'next/image'
import style from '../../../styles/Stages.module.css'
import { ImCross } from 'react-icons/im';
import Modal from 'react-modal'

import secondBlockIMG from '../../../images/backgrounds/stages-right.webp'
import workGroupBG from '../../../images/backgrounds/employees-group.webp'
import surveyBG from '../../../images/backgrounds/survey.webp'
import metodology from '../../../images/backgrounds/metodology.webp'
import conceptualBG from '../../../images/backgrounds/conceptual-solution.webp'
import SvgCheckWhite from '../../../images/icons/CheckWhite'

Modal.setAppElement('#__next')

export default function SecondBlock() {
  const [groupModalIsOpen, setGroupModalIsOpen] = useState(false)
  const [surveyModalIsOpen, setSurveyModalIsOpen] = useState(false)
  const [metodologyModalIsOpen, setMetodologyModalIsOpen] = useState(false)
  const [adaptedModalIsOpen, setAdaptedModalIsOpen] = useState(false)
  return (
    <div className={style.SecondBlock}>
      <Modal
        isOpen={groupModalIsOpen}
        onRequestClose={() => setGroupModalIsOpen(false)}
        contentLabel={"Working group for formation and control implementation of the roadmap"}
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
        <div className={style.ModalWrapper}>
          <button onClick={() => setGroupModalIsOpen(false)} className={style.CloseModal}><ImCross /></button>
          <div className={style.ModalContent}>
            <h3>Working group for formation and control implementation of the roadmap</h3>
            <p className={style.ModalP}>
              Focused on large businesses, the package provides an operational and complete display of information for immediate decision-making and strategic planning. To fully take advantage of its advantages, it is necessary to develop and accurately implement a well-thought-out ERP system implementation plan. The work is complicated by the fact that the toolkit covers all levels — from the initial data entry from registers to decision-making by management. Employees (ideally, as the principle of work provides) perform each operation at a strictly defined moment, and it is instantly reflected in the system, affecting all its other &quot;nodes&quot;.<br />
              <br />The group should include:<br />
              1. Specially trained employees of the software supplier company to coordinate the document flow on the project and guarantee the quality of design solutions.<br />
              2. The head (preferably from among the top managers of the company). This person should be well versed in all aspects of the company&apos;s activities, the organization of business processes and regularly inform the management and managers of the customer about the progress of the project. In addition, the ERP implementation project manager should be able to make sole decisions on any issues that arise.<br />
              3. Managers and specialists of all departments responsible for the compliance of the system with the requirements of current legislation and corporate standards and who will work in the ERP system. Accountants, storekeepers, freight forwarders, sales managers, employees of the design and technical department, engineers, production workers and all the necessary specialized employees. Their tasks will include advising implementers at the stage of studying the business processes of the enterprise and organizing the work of departments after the automation process is completed.<br />
              4. IT specialist of a wide profile. His area of responsibility will be the technical support of the project.<br />
              <br />If you want an automated production enterprise management system to bring tangible business results as soon as possible, you must make sure that it is used as actively and effectively as possible by employees. To do this, the staff must be trained to work in ERP and strictly controlled at the initial stage of operation. These responsibilities also fall on the shoulders of representatives of the working group.<br />
              <br />In addition, at the organizational stage, it is necessary to determine the sources of funding and the integrator company.
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
      <Modal
        isOpen={surveyModalIsOpen}
        onRequestClose={() => setSurveyModalIsOpen(false)}
        contentLabel={"Survey of business processes of the enterprise"}
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
        <div className={style.ModalWrapper}>
        <button onClick={() => setSurveyModalIsOpen(false)} className={style.CloseModal}><ImCross /></button>
          <div className={style.ModalContent}>
            <h3>Survey of business processes of the enterprise</h3><br />
            <p style={{textAlign: "justify"}}>Provision, planning and preparation of the implementation project. The erp system implementation project at the beginning of its preparation implies the solution of key tasks that include the definition of the goals and objectives of the project, the most accurate assessment of the scope of implementation (definition of the project framework: functional, organizational, technical, project budget). The choice of the basic configuration on the basis of which the implementation will be based, the definition of the implementation strategy, the definition of the overall schedule of work on the project and the sequence of system implementation, as well as the definition of the organizational structure of the project with a discussion of the allocation of resources.</p>
            <p style={{textAlign: "justify"}}>Accurate answers to these questions at the very beginning of the project ensure the effective execution of project work and are the key to successful implementation.</p>
            <p style={{marginTop: ".5em", textAlign: "justify"}}>Upon completion of the organizational work, a survey of the business processes of the enterprise is carried out. This procedure is necessary to accurately determine the timing and cost of implementation work. The duration of the survey correlates depending on the scope of the project, the tasks set and the preferred implementation methodology. The IT integrator performs the work on the survey in two stages sequentially:</p>
            <p style={{marginTop: ".5em"}}>&bull; Initial examination. It is carried out for 1-6 weeks. According to its results, the &#34;Pre-Project analysis&#34; is documented and discussed together with the working group. It reflects the features of automated accounting and a list of tasks that will need to be solved during the implementation process.</p>
            <p style={{marginTop: ".5em"}}>&bull; Full examination. It is carried out for 1-4 months. Based on the results of a thorough survey, a &#34;Technical task&#34; is compiled, automated accounting business processes are developed and a list of necessary software improvements is described.</p>
            <p style={{marginTop: ".5em"}}>&bull; Post-installation examination. It takes place after 6-12 from the moment of full implementation of the document management system and in the future with a frequency depending on changes in processes in the company. It is carried out to identify opportunities to improve the efficiency of existing processes and analyze the rationality of the introduction of new automation systems.</p>
          </div>
          <div className={style.SurveyBG}>
            <Image
              src={surveyBG}
              alt='survey background'
            />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={metodologyModalIsOpen}
        onRequestClose={() => setMetodologyModalIsOpen(false)}
        contentLabel={"metodology of integration choise"}
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
        <div className={style.ModalWrapper}>
        <button onClick={() => setMetodologyModalIsOpen(false)} className={style.CloseModal}><ImCross /></button>
          <div className={style.ModalContent}>
            <h3>The choice of methodology for the implementation of electronic document management and data accounting systems.</h3><br />
            <p>The method of implementing solutions depends on the platform and the capabilities of the customer. It can be carried out according to one of 4 scenarios:</p>
            <p style={{marginTop: ".5em"}}>&bull; Subscription service. The integrator company conducts an express survey of the enterprise, draws up an enlarged ERP implementation plan and based on it determines the maximum possible cost of the project. This cost is prescribed in the contract, the cost of one hour of work of an implementing programmer is also fixed there. The general work plan is divided by months. Based on the number of working hours, the size of the monthly budget is determined. A fixed amount of payment is also included in the contract.</p>
            <p style={{marginTop: ".5em"}}>&bull; Step-by-step technology of implementation. This ERP implementation methodology implies conducting a full survey of the enterprise, determining all automated business processes and preparing technical specifications. The terms of reference reflect: the volume of improvements to the standard configuration of the program, a complete list of works broken down into fixed stages, the timing and cost of implementing each stage of ERP implementation. The main disadvantage of this technology is inflexibility. Making the smallest adjustments to the project entails a change in the TOR: revision of the timing and cost of performing individual stages of work.</p>
            <p style={{marginTop: ".5em"}}>&bull; Fast result technology. The ERP implementation algorithm is approximately the same as for subscription service. An express survey is also carried out, the maximum cost of the project is calculated, the hour of the programmer's work is estimated. Payment is also made once a month, but not at a fixed rate, but according to the number of hours actually spent by programmers. There are no strictly regulated work plans for a month or a week here — the list and order of tasks may vary depending on the actual needs of the enterprise. Flexibility is an absolute plus of fast result technology. You can include additional business processes in the project at any stage and without lengthy approvals. The only drawback of this implementation scheme is the blurring of the project implementation deadlines.</p>
            <p style={{marginTop: ".5em"}}>&bull; One-time calls. Installation of the program on employees' workplaces and automation of business processes are carried out to the extent possible for the client. The company buys a ready-made solution out of the box, and all implementation work is carried out according to the scenario of one-time calls.</p>
          </div>
          <div className={style.metodologyBG}>
            <Image
              src={metodology}
              alt='metodology coosing background'
            />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={adaptedModalIsOpen}
        onRequestClose={() => setAdaptedModalIsOpen(false)}
        contentLabel={"conceptual solution"}
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
        <div className={style.ModalWrapper}>
        <button onClick={() => setAdaptedModalIsOpen(false)} className={style.CloseModal}><ImCross /></button>
          <div className={style.ModalContent}>
            <h3>Conceptual solution</h3><br />
            <p style={{textAlign: "justify"}}>The creation of a conceptual project is a phase, the purpose of which is the technical and business requirements of the customer for the system. At the stage of conceptual design, the strategy of creating an information system is determined. The development of a conceptual project allows not only to have an action program for phased implementation, but also to receive additional economic benefits due to improvements as a result of the implementation of the existing enterprise management system.</p>
            <p style={{marginTop: ".5em", marginBottom: ".5em", textAlign: "justify"}}>In order for the implementation of the ERP system at the enterprise to be effective, it is within the framework of conceptual design that the following tasks are solved:</p>
            <p>&#10003; Definition and analysis of business processes, development of recommendations for their improvement</p>
            <p>&#10003; Detailing and approval of the final scope of the project</p>
            <p>&#10003; Formalization and documentation of requirements for the future system</p>
            <p>&#10003; Definition of the system architecture</p>
            <p>&#10003; Analysis and formation of a learning strategy</p>
            <p>&#10003; Clarification of the final implementation plan</p>
            <p style={{marginTop: ".5em", textAlign: "justify"}}>After that, a package of work is planned to create a prototype of the solution (in the form of a test base). At the same time, efforts are focused on processes that can be configured without additional programming or extensions of the selected system. The implementation of requirements that need additional programming takes place in the implementation phase.</p>
          </div>
          <div className={style.ConceptualBG}>
            <Image
              src={conceptualBG}
              alt='conceptual solution background'
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
              &nbsp;<button onClick={() => setGroupModalIsOpen(true)} className={style.ButtonModal}>working group</button>&nbsp;
              on the client side, which together with the integrator will work on creating a voluminous and detailed technical task,
              &nbsp;<button onClick={() => setSurveyModalIsOpen(true)} className={style.ButtonModal}>thoroughly describing</button>&nbsp;
              all, even the smallest processes.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><SvgCheckWhite alt="check icon" /></div>
          <div>
            <h3 className={style.SecondBlockH}>Interface design, programming of data processing algorithms</h3>
            <p className={style.SecondBlockP}>
              Based on the results of the enterprise survey, the functional requirements for the key modules of the system, the needs for downloading, exchanging and accessing data are 
              &nbsp;<button onClick={() => setMetodologyModalIsOpen(true)} className={style.ButtonModal}>determined and implemented</button>
              . Setting up the exchange of information with the software already used. Improvements are being made to the standard functionality for the specifics of the company&apos;s activities. The system will programed with
              &nbsp;<button onClick={() => setAdaptedModalIsOpen(true)} className={style.ButtonModal}>adapted solutions</button>&nbsp;
              for the company&apos;s business processes and develop an interface for them. The execution of all actions in the system will become obvious and intuitive.</p>
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
