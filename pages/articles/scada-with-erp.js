import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/articles/Scada-erp.module.css'
import Footer from '../blocks/articles/footer'

import TopImg from '../../images/articles/erp-and-crm-differences_topBG.webp'

export default function ScadaWithErp() {
    return (
        <div>
            <Head>
                <title>Integration of SCADA and ERP systems</title>
                <meta name="description" content="Difficult enterprise processes integration. ERP, CRM, WMS, MES, SCADA and others software integration in Bangladesh business." />
                <link rel="canonical" href="https://optimization.for-all.world/articles/scada-with-erp" key="canonical" />
                <meta property="og:title" content="Integration of SCADA and ERP systems" />
                <meta property="og:description" content="Difficult enterprise processes integration. ERP, CRM, WMS, MES, SCADA and others software integration in Bangladesh business." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://optimization.for-all.world/articles/scada-with-erp" />
                <meta property="og:image" content="https://optimization.for-all.world/images/opti.webp" />
                <meta property="og:image:alt" content="Production analysis to find optimization ways" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="bn_BD" />
            </Head>
            <div className={style.Cover}>
                <div style={{ display: "flex", maxWidth: "60rem", alignItems: "center", margin: "0 auto" }}>
                    <h1 style={{ fontFamily: "Righteous", textTransform: "uppercase", color: "white", paddingRight: "2em" }}>Integration of SCADA systems and enterprise management systems</h1>
                    <div>
                        <Image
                            src={TopImg}
                            alt="study open source corporate systems"
                        />
                    </div>
                </div>
            </div>
            <div className={style.Content}>
                <h2>INTRODUCTION</h2>
                <p>The most important IT resources in industrial enterprises are automated control systems, SCADA and ERP systems.</p>
                <p>The first two are designed to manage the production process, the third is for the organization of sales control and management of various business processes. For a long time, these systems have existed in parallel, but recently there has been a tendency to combine them, since the integration of automated process control systems and ERP makes it possible to increase the efficiency and transparency of business management. Customers increasingly began to prescribe the need for such integration in the technical specifications for the automated process control system. But how exactly to spend integration, what should be given priority, and what is secondary? How to organize information exchange, and re there ready-made solutions? What opportunities should the customer get?</p>
                <p>This article provides answers to some pressing issues of integration of automated process control systems and ERP systems, as well as describes the benefits obtained from integration.</p>
                <h2>ENTERPRISE INFORMATION SYSTEM</h2>
                <p>A complex (corporate) information system of an enterprise can generally be represented in the form of a hierarchy of levels (Fig. 1), covering all types of organizational and managerial activities at the enterprise, from collecting data on technological processes to monitoring he execution of orders.</p>
                <div style={{ margin: "0 auto" }} className={style.Triangle}>
                    <div className={style.Trapezoid1}><p>ERP (finance,contracts, supplies)</p></div>
                    <div className={style.Trapezoid2}><p>MES (coordination, analysis and optimization of output, planning of repair work)</p></div>
                    <div className={style.Trapezoid3}><p>SCADA (Automated process control system, dispatching)</p></div>
                    <label style={{ display: "flex", justifyContent: "center", margin: "0 auto", fontSize: ".9em", paddingTop: "1em" }}><i style={{ fontWeight: "bold" }}>Fig. 1. Complex information system of the enterprise</i></label>
                </div>
                <p>The first level of the hierarchy is various automated accounting and management systems (Automated process control system - automated process control system, ACS E is an automated power supply management system, ASKUE is an automated system for commercial accounting of energy resources). Their task is the collection and primary processing of data on the technical processes and resources of the enterprise, as well as the provision of dispatching control and equipment management.</p>
                <p>The second level is production execution systems, or production process control systems (MES - manufacturing execution system). Their purpose is to solve problems of synchronization, coordination, analysis and optimization of output. Also, these systems include software for planning repairs, maintaining a stock reserve of spare parts and managing personnel performing maintenance.</p>
                <p>The third level is enterprise resource management systems (ERP - enterprise resource planning). Systems of this level manage the financial resources of the enterprise, track the stocks of materials, manage the company&apos;s workforce. They are also designed to support medium-term and strategic planning of the company&apos;s activities.</p>
                <p>Often, only the first and second levels are present at most domestic enterprises, the third is sketchy. At the same time, it is worth noting that the presence of the first level is a prerequisite for building a high–quality information system of the company. Without obtaining comprehensive information about the technical processes performed, it is impossible to form a complete picture of the company&apos;s activities. The second level is no less important, but it is often performed not with the help of specialized applications that use data from the previous level, but is represented by disparate applications that automate the activities of the planning department of the enterprise. The third and last level of the hierarchy has found active use only in the last ten years. But the implementation of ERP systems took place and is still very often carried out without connection with the previous levels, and the ERP systems themselves, consisting of a large number of disparate modules, do not take into account the specifics of enterprises. Only in the last few years, customers began to gain an understanding of the essence of ERP systems and, as a result, there were requirements for integrators to organize the relationship between ERP and lower-level systems.</p>
                <h2>SOME INTEGRATION ISSUES</h2>
                <p>Traditionally, integrator firms are engaged in the implementation of SCADA systems, which, based on the developments of their partners, manufacturers of software and hardware, create ready-made solutions for end users. Sometimes they compete with IT departments of enterprises. At the same time, the most diverse software and hardware of world manufacturers, as well as their own software developments, are used. Often tasks are solved locally, without a systematic approach and taking into account the requirements for further integration of these subsystems in corporate information system, which ultimately has to pay dearly.</p>
                <label style={{ display: "flex", justifyContent: "center", margin: "0 auto", fontSize: ".9em", paddingTop: "1em" }}><i style={{ fontWeight: "bold" }}>Table 1. Sources of information for dispatch accounting systems</i></label>
                <p className={style.TableI}><b>!To see table turn your phone</b></p>
                <table className={style.Table}>
                    <tr>
                        <th>Dispatcher accounting system data level</th>
                        <td>Summary information transmitted to the next level</td>
                        <td>Detailed information</td>
                        <td>Information source</td>
                    </tr>
                    <tr>
                        <th>Automated control system level</th>
                        <td>Statistics on equipment loading, deviations, and resource availability</td>
                        <td>Equipment operation log, deviations from technological parameters</td>
                        <td>SCADA systems, direct connection to equipment via controllers</td>
                    </tr>
                    <tr>
                        <th>Workshop level</th>
                        <td>Statistics on the implementation of the plan, on the level of marriage, on the level of work in progress, on specially accounted products</td>
                        <td>Data on the history of the actual movement of inventory items with the indication of specific equipment at each stage. Marriage data. Deficit data</td>
                        <td>MES-systems, dispatch control systems</td>
                    </tr>
                    <tr>
                        <th>Production management level</th>
                        <td>Execution of the schedule for orders. Problematic divisions. Bottlenecks in the execution of orders</td>
                        <td>Data on orders, on inter-shop deficit</td>
                        <td>ERP systems, dispatch control systems</td>
                    </tr>
                </table>
                <p>Most of the well-known and popular SCADA systems, at first glance, already contain the implementation of all the necessary functions of operational control and process control (data collection, processing, storage and visualization, notification of personnel about events and alarms, transmission of control commands). At the same time, there is a situation when using one or another SCADA package causes problems when integrating with other systems.</p>
                <p>One of these problems <i>is the lack of modules in the SCADA system responsible for aggregating data from heterogeneous sources</i> (the SCADA system itself, OPC, SQL database, and a number of others). Without such functionality, it will be impossible to prepare and transfer data to MES and ERP systems.The module should support the following aggregation functions: averaging, sampling of max/min values, summation, determination of percentages, etc. At the same time, it is necessary to maintain a high-level namespace (the formation of the full name of the variable, for example, plant-shop-line-machine-parameter) and the organization of access to data through database management systems (DBMS): MS SQL Server, Oracle, etc. In this case, MES and ERP systems can easily access the history and operational data from the SCADA system level by means of ordinary SQL queries to the DBMS.</p>
                <p>Another aspect of integration within a corporate information system is the heterogeneity of information flows in modern dispatch systems. There are two types of information flows: technological exchanges and business information exchanges. The first are real-time exchanges of values of measured and monitored parameters. Such exchanges relate to SCADA systems and are carried out by control rooms with local automation systems, and they also go between control rooms. Business exchanges are exchanges in the temporary mode of the processes of economic activity (not the processes of technological equipment operation) of indicators related to the production activity of the enterprise. In other words, these are data exchanges mainly between components of the MES system, MES exchanges with the ERP system, exchanges with automation systems of external organizations.</p>
                <p>However, the main difficulty in organizing information exchange between the lower and upper levels of the corporate information system is the unambiguous definition of lists of signals for exchange, coordination of logics, encodings, status and other issues. For both technological exchanges and business information exchanges, these issues can lead to big problems. For technological exchanges, this is, first of all, the traditional inconsistency of logic, quotes, resentation of information for individual installations, facilities, dispatching complexes of the local and corporate level. Even at the level of the installation and the object , the same parameter may have a different name, for example, due to delivery by different manufacturers SCADA systems and local automation systems.</p>
                <p>An even more serious problem is determining the correspondence between parameters and objects in MES and ERP systems. Due to a large number of reasons, in some cases there are discrepancies in the definition (and description) of the enterprise object in accounting documents and in dispatching reports, not to mention the binding of the value to the measurement and control tools in the SCADA system. Great confusion make repairs, equipment replacements. The existing discrepancies lead to a significant complication of integration projects and increase the costs of both the implementation of the system and its maintenance and expansion. To solve this problem, an unambiguous definition of the place of the data source in the hierarchy of the enterprise is proposed. The data source can be changed (as well as added, deleted) only as part of the reconstruction of the entire enterprise, and not repairs or replacement of technological equipment (that is, for example, replacement of the valve as a result of repair should not lead to a change in the encodings of the pressure and temperature parameters measured on this valve). For these purposes, it is proposed to introduce the certification of parameters, which is carried out at the design stage.</p>
                <p>Also, often when a customer tries to get a complete corporate information system, the integrator faces the following problem – the company&apos;s unwillingness to implement MES and ERP systems. No matter how much we would like, but practice shows that in order for a standardized management system to work at an enterprise, it must fit into these standards, that is, the business processes performed must meet a number of requirements (meaning the requirements of MES and ERP systems standards). In this case, the integrator should pay attention to the dispatch control and ADSC systems – automated dispatching control systems).</p>
                <p>Very often, ERP, shop-level systems and automated process control systems exist separately at the enterprise. Building a connected hierarchy by means of a system taken from one of the management levels does not have an effect – it covers too narrow an area.</p>
                <p>Dispatch control systems are able to fill gaps in automation. They work at the junction of different systems, and in their arsenal there is everything necessary for the integration of data of different levels. The basis of such a system is data collection and consolidation, which is understood as a set of methods and procedures aimed at extracting data from various sources, ensuring the necessary level of their information content and quality, conversion into a single format in which they can be uploaded to a data warehouse or analytical system. Such functionality is very similar to the capabilities of aggregation modules in modern SCADA systems.</p>
                <p>At each of the levels of the dispatching accounting system, its own system of indicators is used, displayed in the form of graphs and indicators. Table 1 shows that the main sources of information are generally accepted classes of systems: SCADA, MES, ERP. However, the dispatching control systems themselves have the appropriate capabilities.</p>
                <p>Of course, dispatch accounting systems are not a panacea, but they are able to emulate some missing systems before they appear. For a number of enterprises, full functionality is sometimes not needed, even in products from the giants of enterprise management systems, such as SAP, Microsoft, Oracle and others, not all modules are used.</p>
                <p>It is known that managers practically do not work in accounting systems. And they certainly do not work in those where there are no means of analysis or monitoring. The most important goal of the dispatching accounting system is to convey to the head summary information about the work of his accountable department in a simple and understandable way. That is why dispatch accounting systems are easier to implement – because managers are interested in them.</p>
                <p>In general, we can say that the basis for the effective organization of information exchanges is the full elaboration of these issues at the stage of project work. The role of design organizations is extremely large, in the case of an effective solution to the problem of information exchanges at the design stage, significant savings of all types of resources are achieved during the implementation and expansion of the system and, most importantly, an effective solution of all classes of tasks at all levels of management is provided.</p>
                <h2>OVERCOMING INTEGRATION PROBLEMS</h2>
                <p>One of the ways to solve a number of these problems is to use the &quot;right&quot; software. ICONICS applications can be safely attributed to such software. The stories of their successful implementation and integration with other systems clearly show that integrators, armed with the &quot;right&quot; solutions, can cope with a wide variety of projects.</p>
                <p>One of these projects was the integration of production processes with ERP systems in the company &quot;Poste Italiane&quot;. It is the national postal system of Italy, which processes more than 7 billion postal items per year and manages thousands of employees and branches.</p>
                <p>The project was aimed at improving the quality of operational management of the postal infrastructure and improving the following business processes:</p>
                <ul>
                    <li>control, monitoring and management of production operations</li>
                    <li>monitoring the progress of work performed</li>
                    <li>management decision support</li>
                    <li>tracking of correspondence flows within the sorting center</li>
                    <li>data collection from the field level (sensors, actuators)</li>
                    <li>integration with administrative systems.</li>
                </ul>
                <p>During the project, the following ICONICS software products were implemented: SCADA system package GENESIS32, including GraphWorX32, TrendWorX32, AlarmWorX32 and DataWorX32; BizViz intelligent solution and programs for business presentation of information, including PortalWorX, ReportWorX, BridgeWorX and MobileHMI.</p>
                <ul><label><i>The following results of implementation and integration were obtained:</i></label>
                    <li>full integration of the entire value chain, from the production level to the enterprise level</li>
                    <li>organization of access to information in real time, which allowed employees and managers to work and interact with greater productivity</li>
                    <li>providing management personnel with information to make better operational decisions</li>
                    <li>providing extensive opportunities for the integration and use of information from multiple data sources, including systems: sorting, address recognition, warehousing, weighing and packaging, financial and production planning</li>
                    <li>excellent communication capabilities, flexibility of the resulting project and high-quality visualization.</li>
                </ul>
                <p>Additional profit was obtained due to the integration of an intelligent production management system with all modules used in the value chain. The solution is integrated with SAP (PP/DS, EM, BW SEM, SD &#38; LES), RFID systems and already existing systems.</p>
                <ul><label><i>The ICONICS BizViz product ensured the fulfillment of strict visualization and connection requirements, which allowed:</i></label>
                    <li>create personalized dashboards with relevant content from various systems</li>
                    <li>enter customizable key performance indicators to track performance in real time for set goals</li>
                    <li>provide reporting (automatic and on-demand) with advanced analytical functions</li>
                </ul>
                <p>Starting in 2004, the project gradually covered everything 23 sorting centers. Throughout the implementation process, the level of automation of business processes steadily increased from the initial 40% to the planned 85%. It is worth noting that the critical factor of success and rapid deployment was the close cooperation of the customer with the local system integrator.</p>
                <p>Another interesting project, which required the construction of an integrated enterprise information system, was a project in Metal Trade Comax (Czech Republic). This enterprise is located about 30 kilometers from Prague and operates in the field of non-ferrous metallurgy, producing both alloys and rolled metal (Fig. 3). Using the Coil Coating technology (coating on rolled products), the metallurgical enterprise performs organic coatings and embossing on aluminum, aluminum alloys, cold-rolled steel and hot-dip galvanized steel. Rolled metal coated with a special compound has a wide range of applications: roofing, sheet metal, railings, windows, trailers, building cladding, etc.</p>
                <p>ICONICS GENESIS32 with GraphWorX32 provides visualization of the metal coating process. WebHMI allows you to control processes over the Internet. ReportWorX32 and TrendWorX32 provide data recording, graphs, reports and simple analytics, while AlarmWorX32 provides fault information. To fully integrate production and business process data, the company provides data exchange between ICONICS software and the Microsoft Dynamics NAV enterprise resource planning system.</p>
                <p>GENESIS32 for Metal Trade Commax was proposed by the ADAX system integrator, which has already implemented several successful projects in the Czech Republic. After 8 months of implementation, the customer received full monitoring and control of production processes.</p>
                <p>The support of open standards in ICONICS allowed the customer to ensure compatibility with devices from a wide variety of suppliers. The ICONICS solution easily interacts with both SIEMENS SIMATIC PLC, which control the motors of the production line, and with SIEMENS SIMATIC S7-300 connected via Industrial Ethernet.</p>
                <p>DataWorX32 provides aggregation of data from various OPC sources. Monitoring is also carried out using the SNMP protocol of devices for measuring the consumed electricity. The TrendWorX component allowed the company to store large amounts of historical data in Microsoft SQL 2005 Server, and ReportWorX provided the ability to generate technological and client reports. Process reports include information about conditions and events during production, for example, defects on the surface of a metal roll or emergency events during coating. Client reports contain business information from Microsoft Dynamics NAV and a brief description of the product, including strip length, weight, material, and laboratory results.</p>
                <p>Solutions from ICONICS made it possible to guarantee the necessary level of quality of the metal coating at the exit from the conveyor. The company has a system for automatic evaluation of surface defects in rolls. To do this, three fast industrial cameras are installed on the line, which can detect surface defects on metal plates. The results of the cameras are transmitted to ReportWorX (Fig. 4), where the data is visualized and stored on the server.</p>
                <p>After the successful implementation of ICONICS on the ADAX production line, it was proposed to modernize other customer systems, in particular, the control system for the 12-ton aluminum smelting furnace. According to the customer, there are many tasks in this control system that can be optimized using solutions from ICONICS.</p>
                <p>As can be seen from the description of examples of building corporate information systems, in both cases, integrators were faced with the task of not just automating technological processes, but performing complex automation of the enterprise, providing not only information about technical processes, but also about the state of business processes. And yet, they managed thanks to the right tool</p>
                <h2>CONCLUSION</h2>
                <p>For a long time, system integrators from the field of automated control systems we have not faced the need to deal with related systems and provide interfaces for information exchange. The problems of processing and using the information accumulated in the databases of SCADA systems in the field of business processes were imposed on those who need this data. But now they are facing a serious challenge: potential and former customers no longer need only a well-established technological process, they need a business process linked to technology. And for this, it is necessary to take much more seriously the design of new systems, as well as the choice of the &quot;right&quot; tools.</p>
            </div>
            <Footer />
        </div>
    )
}