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
import robotBG from '../../../images/backgrounds/robot.webp'
import personnelBG from '../../../images/backgrounds/personnel-studying.webp'
import SvgCheckWhite from '../../../images/icons/CheckWhite'

Modal.setAppElement('#__next')

export default function SecondBlock() {
  const [groupModalIsOpen, setGroupModalIsOpen] = useState(false)
  const [surveyModalIsOpen, setSurveyModalIsOpen] = useState(false)
  const [metodologyModalIsOpen, setMetodologyModalIsOpen] = useState(false)
  const [adaptedModalIsOpen, setAdaptedModalIsOpen] = useState(false)
  const [testsModalIsOpen, setTestsModalIsOpen] = useState(false)
  const [infrastructureModalIsOpen, setInfrastructureModalIsOpen] = useState(false)
  const [studyModalIsOpen, setStudyModalIsOpen] = useState(false)
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
            <p style={{marginTop: ".5em"}}>&bull; Fast result technology. The ERP implementation algorithm is approximately the same as for subscription service. An express survey is also carried out, the maximum cost of the project is calculated, the hour of the programmer&apos;s work is estimated. Payment is also made once a month, but not at a fixed rate, but according to the number of hours actually spent by programmers. There are no strictly regulated work plans for a month or a week here — the list and order of tasks may vary depending on the actual needs of the enterprise. Flexibility is an absolute plus of fast result technology. You can include additional business processes in the project at any stage and without lengthy approvals. The only drawback of this implementation scheme is the blurring of the project implementation deadlines.</p>
            <p style={{marginTop: ".5em"}}>&bull; One-time calls. Installation of the program on employees workplaces and automation of business processes are carried out to the extent possible for the client. The company buys a ready-made solution out of the box, and all implementation work is carried out according to the scenario of one-time calls.</p>
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
      <Modal
        isOpen={testsModalIsOpen}
        onRequestClose={() => setTestsModalIsOpen(false)}
        contentLabel={"Pre-release testing"}
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
        <button onClick={() => setTestsModalIsOpen(false)} className={style.CloseModal}><ImCross /></button>
          <div className={style.ModalContent}>
            <h3>At the pre-release stage, work is carried out on setting up, refining and testing the system.</h3>
            <p style={{textAlign: "justify", marginTop: ".5em"}}>IT solutions for managing internal processes vary and the approach to testing them is also different, covering many aspects and risks. To ensure that the implementation of an erp system at the enterprise does not lead to a malfunction, and also shows the full power of its functionality, of course, tests are needed. The system is tested for compliance with the requirements in a separate specially prepared test base. Testing includes checking the function of each of the subsystems, and also checking the operability of end-to-end business processes. If necessary, load testing is carried out. The test results are recorded in the protocol, and on their basis, inconsistencies of the system with the requirements are identified and comments are eliminated. Checks should always be carried out before using such software at the level of the entire organization.</p>
            <h4 style={{marginTop: ".5em"}}>Functional testing</h4>
            <p>Before starting the checks, engineers study the documentation and business logic of the system, after which they test all functionality in accordance with the requirements and identify defects. After the release of the new functionality, specialists conduct regression testing, identifying whether changes have affected the previously developed part of the software. And to make sure that all the flaws are fixed, the testers validate the defects.
              For ERP solutions is important to check the correctness of data storage both during migration and in a static state. Therefore, along with functional testing, it is checked whether the data is in the right database, whether they are used correctly and whether the information corresponds to how it looked in the original storage.</p>
            <h4 style={{marginTop: ".5em"}}>Security testing</h4>
            <p>According to research, about 30% of the surveyed companies are concerned about the risk of data leakage when implementing an ERP system. There are two reasons for this: insufficient transparency of cloud solutions (16%) and potential data loss (9%). Spread of information technology leads to an increase in the number of detected software vulnerabilities. The number of detailed Exploit instructions for penetration into bottlenecks is continuously increasing every year. Security testing helps to protect the ERP system from cyber incidents: by applying penetration testing, specialists simulate the actions of intruders, thereby checking the software for vulnerabilities.</p>
            <h4 style={{marginTop: ".5em"}}>Integration testing</h4>
            <p>If a company integrates an ERP platform with ready-made software, the risk of its malfunction increases, because it is not known how the system will behave in a stack with software. Therefore, experts advise to conduct integration testing, which will help to make sure that each component of the ERP system and their interaction function smoothly together with corporate platforms and other IT solutions.
              It is worth remembering that additional functionality can be embedded in ERP products, for example, an electronic signature. In this case, the testers check how it works with a number of different documents, who can leave it and what statuses the signed papers acquire.</p>
            <h4 style={{marginTop: ".5em"}}>Performance testing</h4>
            <p>A large number of data operations and numerous ERP modules can lead to server overload or failure. Thanks to load testing, it is possible to evaluate the behavior of the system under the expected load, and stress testing will allow you to determine the peak number of simultaneous sessions and assess the stability of the software product. When conducting performance testing, a behavioral method is used, modeling the actions of end users and setting test conditions as close as possible to real ones.</p>
            <h4 style={{marginTop: ".5em"}}>Test automation</h4>
            <p>If you automate frequent checks, the business logic of which is subject to rare changes (for example, regression cases), this will help save time spent on QA and focus on manually conducting UI, UX, research and ad-hoc testing. In addition, in conditions of large data arrays, autotests help to detect defects faster and minimize the human factor.</p>
            <h4 style={{marginTop: ".5em"}}>Test efficiently and qualitatively.</h4>
            <p>This is influenced by a number of factors, including the methodology used. A common approach in the IT industry is Agile. The main reasons for implementing flexible methods include reducing time-to-market, managing rapidly changing priorities, increasing productivity, and much more. However, ERP systems require a special approach. The best option is a combination of global planning based on the traditional waterfall model and short-term planning and task tracking based on flexible practices. It is this scheme that allows you to achieve the intended results, combine strategic goals and adaptability. A team with the necessary skills is another indicator of effective testing. When attracting specialists to the project, it is necessary to conduct an introductory course so that test engineers get acquainted with the requirements, business logic and further understand the principles of the ERP system.</p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={infrastructureModalIsOpen}
        onRequestClose={() => setInfrastructureModalIsOpen(false)}
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
          <button onClick={() => setInfrastructureModalIsOpen(false)} className={style.CloseModal}><ImCross /></button>
          <div className={style.ModalContent}>
            <h3>Hardware and infrastructure solutions for hosting ERP systems and accounting and data processing systems can be divided into three types.</h3>
              <br /><p>1. Own local infrastructure at the enterprise. Servers and all associated telecommunications equipment and software are entirely owned and maintained by the company itself, which carries high maintenance and modernization costs. Also, with this approach, it is necessary to have a staff of qualified specialists who have experience working with server equipment and its software. Such a decision may be permissible and will make rational sense only for very large corporations</p>
              <p style={{marginTop: ".5em"}}>2. Renting virtual infrastructure (IaaS) on remote computing centers without the cost of buying your own servers, storage systems, network equipment and OS. IaaS is a service for renting scalable virtual infrastructure in a public cloud. The client receives a dedicated pool of resources: computing power (vCPU), memory (RAM), disk space and operating system.</p>
              <p style={{marginTop: ".5em"}}>3. A fully cloud-based ERP system hosted on the software developer&apos;s server and run via a browser - SaaS (&apos;software as a service&apos;). The cloud provides more opportunities for flexible scaling of the ERP system, including on-the-fly, mobility and security. No less important is the economy: to deploy ERP in the cloud, you do not need to purchase server equipment, licenses, maintain infrastructure and expand IT staff - all this is a &quot;headache&quot; of a cloud provider.</p>
            <br /><p>A high-quality ERP platform is demanding of server equipment, and it does not matter whether it is in the on-premises format (in the enterprise) or in the cloud. The customer needs to take into account the recommendations of each specific ERP system: requirements for the production server, web server, network equipment, types of supported DBMS, disk space. For example, the main criterion for the SAP HANA ERP platform is an impressive amount of server RAM (up to several TB), since most operations are performed in real time in RAM, and not on disks. The task with the server configuration is facilitated by the fact that each manufacturer of ERP systems has a list of recommended equipment and software with specific brands. The same recommendations are also used by hosting providers offering for rent both the infrastructure for installing or migrating the customer&apos;s own ERP platform (IaaS) and turnkey ERP solutions (SaaS).</p>
          </div>
          <div className={style.RobotBG}>
            <Image
              src={robotBG}
              alt='robot background'
            />
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={studyModalIsOpen}
        onRequestClose={() => setStudyModalIsOpen(false)}
        contentLabel={"Personnel training of ERP systems."}
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
          <button onClick={() => setStudyModalIsOpen(false)} className={style.CloseModal}><ImCross /></button>
          <div className={style.ModalContent}>
            <h3>Personnel training of ERP systems.</h3><br />
            <p style={{textAlign: "justify", textIndent: ".5em"}}>One of the tasks that consultants face when implementing an ERP system is training the personnel of the customer company to work with this system. The success of an expensive project often depends on how employees perceive the innovation. Any ERP system implementation project requires a qualified approach from both consultants and the company itself. Training of the customer&apos;s personnel is an important stage. The ERP system makes significant adjustments to the existing business processes at the enterprise, and employees have to perform not only their main duties, but also the functions &quot;imposed&quot; by the new system. Therefore, it is necessary to mentally prepare the team. One of the serious problems is when the customer&apos;s staff resists the implementation, because the management needs the system, and it was good enough for an ordinary employee, so he does not want to study. Often, the company&apos;s management has to transfer such employees to another job. The rest approach responsibly, realizing that they will have to put all the knowledge they have gained today into practice tomorrow. The ERP system is a very complex and expensive software package, which can be effectively operated only by well-trained and motivated personnel. It is impossible to study such a system &quot;on my knees&quot;. If innovations are incomprehensible and not obvious to most employees, the company will not get a return on implementation. One of the tasks of training is to make people see a useful tool and the business of the whole company behind abstract software. The company&apos;s management needs to take care of the training of employees in advance. It is recommended to start this process with an internal PR campaign and the creation of a single information space in order to explain to all employees the goals that the company pursues when implementing an information system. In fact, this is the first point of the general &quot;Personnel training Strategy&quot; - a special document where further actions are listed in detail, and the company&apos;s staff is divided into groups where all the necessary training activities are prescribed for each.</p>
            <p style={{textAlign: "justify", textIndent: ".5em"}}>Depending on who will use the ERP system and how, the learning process is built. All employees involved in the operation of the system are divided into groups, each receives its own amount of knowledge. There are usually several such groups in a company. It may look like this. The first group consists of managers of different levels who will have to make management decisions through the system; they need to understand what tools they receive. The second is the project team, or key users who will support the system during its operation. They need technical knowledge, while they do not need a deep understanding of business processes. The third is end users: all those employees who will be assigned additional responsibilities for entering primary data. The training of the first and second groups is taken over by consultants. End-user training is usually carried out by the companies themselves, developing a distance learning program for this and involving already trained key users for practical training.</p>
            <p style={{textAlign: "justify", textIndent: ".5em"}}>Immediately before the start of the implementation work, the working group studies the necessary modules of the system, the architecture. A training strategy is chosen for relatively small groups of employees who can transfer knowledge to the masses. Most consulting companies conduct training in their own training centers or on the territory of the customer company. Many ERP system manufacturers expect that well-trained specialists will work with the system.</p>
          </div>
          <div className={style.personnelBG}>
            <Image
              src={personnelBG}
              alt='personnel training background'
            />
          </div>
        </div>
      </Modal>
      <div className={style.SecondBlockLeft}>
        <h2 className={style.Header}>Stages of enterpize optimization development and implementation</h2>
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
            <p className={style.SecondBlockP}>Deployment of software in the enterprise at the workplaces of employees (often with
              &nbsp;<button onClick={() => setTestsModalIsOpen(true)} className={style.ButtonModal}>intermediate testing</button>
            ), training in the use of administrators by the system or the conclusion of a service contract. Access rights and reports are configured, management and executive corporate departments are synchronized. A separate task is the design and construction of the
            &nbsp;<button onClick={() => setInfrastructureModalIsOpen(true)} className={style.ButtonModal}>IT infrastructure</button>&nbsp;
            necessary to ensure the normal functioning of the system. Work data and reference information are loaded from the old system, excel files, etc.</p>
          </div>
        </div>
        <div className={style.SecondBlockConent}>
          <div className={style.SecondBlockIcon}><SvgCheckWhite alt="check icon" /></div>
          <div>
            <h3 className={style.SecondBlockH}>Commissioning into commercial operation, further maintenance</h3>
            <p className={style.SecondBlockP}>Upon completion of automation, a key group of
            &nbsp;<button onClick={() => setStudyModalIsOpen(true)} className={style.ButtonModal}>users is trained</button>
            , instructions for working in the system are developed. In the process of full-fledged operation, will necessarily appear current improvements, finding ways to increase the efficiency and return on the system, adding new modules to it. Take into account the aspects of information security - identifying risks and ways to respond to them.</p>
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
