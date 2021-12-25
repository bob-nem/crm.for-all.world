import Image from 'next/image'
import style from '../../styles/articles/Differences.module.css'
import Footer from './footer'

import TopImg from '../../images/articles/erp-and-crm-differences_topBG.webp'
import SvgOrders from '../../images/icons/Orders'
import SvgClients from '../../images/icons/Clients'
import SvgPurposes from '../../images/icons/ArrowInPurpose'
import SvgProcessesAutomation from '../../images/icons/ProcessesAutomation'
import SvgReports from '../../images/icons/Reports'
import SvgFileFolder from '../../images/icons/FileFolder'
import SvgFlag from '../../images/icons/Flag'
import SvgRevenue from '../../images/icons/Revenue'
import SvgDistributionChannels from '../../images/icons/DistributionChannels'
import SvgFinanceReports from '../../images/icons/FinanceReports'
import SvgInventory from '../../images/icons/Inventory'
import SvgProduction from '../../images/icons/Production'
import SvgTruck from '../../images/icons/Truck'
import SvgCodeLabel from '../../images/icons/CodeLabel'
import SvgHumanResources from '../../images/icons/HumanResources'
import SvgMaterialResources from '../../images/icons/MaterialResources'

export default function Differences() {
    return (
        <div className={style.Container}>
            <div className={style.Cover}>
                <div style={{display: "flex", maxWidth: "60rem", alignItems: "center", margin: "0 auto"}}>
                    <h1 style={{fontFamily: "Righteous", textTransform: "uppercase", color: "white", paddingRight: "2em"}}>Differences between CRM and ERP systems: which program to choose?</h1>
                    <div>
                        <Image
                            src={TopImg}
                            alt="Find differences beetween ERP and CRM"
                        />
                    </div>
                </div>                
            </div>
            <div className={style.Content}>
                <p><strong>When is it better to choose CRM, and when is ERP? We understand the intricacies of IT products: what are ERP and CRM systems, comparing their functions and capabilities.</strong></p>
                <h2 style={{padding: "1em 0 .1em"}}><strong>CRM and ERP - what it is?</strong></h2>
                <p>Almost every businessman sooner or later realizes that he needs a smart program to manage a company. But what is it, and what is the difference between CRM and ERP? In fact, both IT products have the same goal - to automate and optimize workflows. However, they have a different set of tools and tasks.</p>
                <h3 style={{padding: "1em 0 .1em"}}><strong>1. CRM: from the first application to the re-sale</strong></h3>
                <p><strong>CRM</strong> stands for <strong>Customer Relationship Management.</strong> The program helps to store and organize data about customers, applications and transactions. The information is collected in convenient cards: names, contacts, purchases, contracts, invoices and payments. The entire history of work with the customer, letters and call records are stored here in chronological order. In addition, the system automates processes and helps the manager at every stage of the sale: reminds to call the customer, forms documents according to a template, issues invoices, creates analytical reports, sends SMS, sets tasks and monitors their implementation.</p>
                <p style={{padding: "1em 0 1em"}}><i>Thanks to CRM, administrator Kate will simply not be able not to send a commercial offer, manager Alice will forget the details of the conversation with the client or lose his number. At the same time, Director Bob no longer needs to keep all the cases in his head and spend half a day compiling reports.</i></p>
                <p>The purpose of the CRM system is to build a dialogue with the client in such a way as to sell him more often, more and faster.</p>
                <div className={style.Possibilities}>
                    <div style={{display: "flex", flexDirection: "column", alignSelf: "center", width: "100%", boxShadow: "0 0 30px rgba(0,0,0,0.1),0 8px 16px rgba(0,0,0,0.07)"}}>
                        <h4 style={{fontSize: "1.2em", color: "white", textAlign: "center", textTransform: "uppercase", padding: "1em 0", background: "linear-gradient(45deg, #dc5456, #2daae2)"}}><strong>What does CRM do?</strong></h4>
                        <div className={style.Capabilities}>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgOrders />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>ORDERS</h4>
                                <p>Captures applications from the site, notifies the manager, reminds to call the client</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgClients />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>clients and deals</h4>
                                <p>Stores information in cards: contacts, documents, letters, calls, applications, invoices and payments.</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgPurposes />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>kpi and purposes</h4>
                                <p>Helps to set goals for employees and monitor the implementation of the plan</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgProcessesAutomation />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>processes automation</h4>
                                <p>Sets tasks for managers during the transaction, sends SMS, tracks payments, etc.</p>
                            </div>
                            <div className={style.CapabilitiesBoxS}>
                                <h3 style={{fontWeight: "bold", color: "#2daae2"}}>CRM</h3>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon} style={{width: "90%"}}>
                                    <SvgReports />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>analytics and reports</h4>
                                <p>Generates visual diagrams and answers on business indicators online</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgFileFolder />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Documents</h4>
                                <p>Generates documents according to a template, substituting details, cost and other data</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgFlag />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Tasks</h4>
                                <p>Sets tasks and sends reminders about cases, monitors deadlines</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgRevenue />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Sales</h4>
                                <p>Leads through the sales funnel: indicates the stages of bargains and checklists, reminds of tasks</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 style={{padding: ".5em 0 .1em"}}><strong>2. ERP: from warehouse accounting to logistics</strong></h3>
                <p>The abbreviation <strong>ERP</strong> stands for <strong>Enterprise Resource Planning.</strong> The program stores, processes and maintains a single database of the company, as well as synchronizes the activities of all departments: the order department, production workshops, warehouse, logistics department, accounting, advertising department, etc. ERP creates a single information space for all employees of the company. The data is entered into the service once, and becomes available to everyone.</p>
                <p style={{padding: "1em 0 1em"}}><i>Now Entony, a sales specialist, enters an order into the database, he is immediately seen by manager Nadia in the project department and the receptionist Andrew in production. The accounting department immediately learns about the payment of the order, and the management can immediately assess the dynamics of sales from online reports.</i></p>
                <p>The purpose of the ERP system is to keep resources under control and turn individual parts of the company into a single mechanism.</p>
                <div className={style.Possibilities} >
                    <div style={{display: "flex", flexDirection: "column", alignSelf: "center", width: "100%", boxShadow: "0 0 30px rgba(0,0,0,0.1),0 8px 16px rgba(0,0,0,0.07)"}}>
                        <h4 style={{fontSize: "1.2em", color: "white", textAlign: "center", textTransform: "uppercase", padding: "1em 0", background: "linear-gradient(45deg, #dc5456, #2daae2)"}}><strong>What does ERP do?</strong></h4>
                        <div className={style.Capabilities}>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon} style={{width: "90%"}}>
                                    <SvgDistributionChannels />
                                </div>
                                <h4 style={{fontWeight: "bold"}}>distribution and sales channels</h4>
                                <p>Сontrols sales and production plans, suppliers effectiveness, forms a pricing system.</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgFinanceReports />
                                </div>
                                <h4 style={{fontWeight: "bold"}}>Financial management and reporting</h4>
                                <p>Conducts accounting and tax accounting, monitors the implementation of the financial and management plan.</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon} style={{width: "93%"}}>
                                    <SvgInventory />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Warehouse inventory and purchases</h4>
                                <p>Keeps records of trade turnover, determines the timing and volume of product deliveries</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon} style={{width: "110%"}}>
                                    <SvgProduction />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Production</h4>
                                <p>Supervises the manufacture of the product from its design to implementation.</p>
                            </div>
                            <div className={style.CapabilitiesBoxS}>
                                <h3 style={{fontWeight: "bold", color: "#dc5456"}}>ERP</h3>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon} style={{width: "115%", paddingTop: ".75rem"}}>
                                    <SvgTruck />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>logistics</h4>
                                <p>Helps to conduct warehouse and production logistics, as well as logistics of external supplies and sales.</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon} style={{width: "80%"}}>
                                    <SvgCodeLabel />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Documentation</h4>
                                <p>Conducts technical and technological documentation, design documentation, working instructions</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon} style={{width: "90%"}}>
                                    <SvgHumanResources />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Human resources</h4>
                                <p>Keeps personnel records, calculating salaries, draws up work schedules and keeps records of working hours</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon} style={{width: "120%", paddingTop: ".75rem"}}>
                                    <SvgMaterialResources />
                                </div>     
                                <h4 style={{fontWeight: "bold"}}>Material resources</h4>
                                <p>Keeps records of production capacities up to a separate machine, certification of manufactured products</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 style={{padding: "1em 0 .1em"}}><strong>When is it better to choose CRM, and when is ERP?</strong></h2>
                <p>Now that we have figured out what it is, it&#39;s time to decide which program to choose - ERP or CRM systems. To do this, ask yourself the question: what are the tasks facing the company?</p>
                <h3 style={{padding: "1em 0 .1em"}}><strong>1. Who needs CRM: customer search, sales, calls</strong></h3>
                <p>You need CRM if the main place in the office is the sales department, and that&#39;s what you want to &#34;pump up&#34;: increase efficiency, automate and systematize processes. CRM is needed if your work with clients is based on calls, letters and meetings, and you think every day how to find new customers and turn them into regular customers.</p>
                <p style={{padding: "1em 0 1em"}}><i>According to research, after the introduction of CRM, the productivity of managers increases by an average of 37%, the level of sales - up to 29%, and the company&#39;s profit - by 25-35%</i></p>
                <p>Global practice shows that CRM is most often implemented in the retail and wholesale sector, as well as in the services and hospitality industry. In a word, wherever it is important to win the loyalty of the client and build a long-term relationship with him.</p>
                <div className={style.Possibilities}>
                    <div style={{display: "flex", flexDirection: "column", alignSelf: "center", width: "100%", boxShadow: "0 0 30px rgba(0,0,0,0.1),0 8px 16px rgba(0,0,0,0.07)"}}>
                        <h4 style={{fontSize: "1.2em", color: "black", textAlign: "center", textTransform: "uppercase", padding: "1em 0"}}><strong>rating of industries by frequency of CRM implementation</strong></h4>
                        <div style={{ display: "inline-flex", fontSize: "1.2em", color: "white", textAlign: "center", textTransform: "uppercase", padding: "1em 0", background: "linear-gradient(45deg, #dc5456, #2daae2)"}}>
                            <p style={{width: "60%", textAlign: "center"}}>BRANCH</p>
                            <p style={{width: "40%"}}>crm usage frequency</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", padding: ".5rem 2rem"}}>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>E-commerce</p><p style={{width: "8%"}}>73.1%</p><div style={{margin: "2px", width: "45%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>FMGC products</p><p style={{width: "8%"}}>65.4%</p><div style={{margin: "2px", width: "39%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Automobiles</p><p style={{width: "8%"}}>59.4%</p><div style={{margin: "2px", width: "36.5%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Banks and financial services</p><p style={{width: "8%"}}>56.5%</p><div style={{margin: "2px", width: "35%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Home appliances</p><p style={{width: "8%"}}>54.9%</p><div style={{margin: "2px", width: "34%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Kids products</p><p style={{width: "8%"}}>51.3%</p><div style={{margin: "2px", width: "31%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Cosmetical products</p><p style={{width: "8%"}}>48.6%</p><div style={{margin: "2px", width: "30%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Retail trade</p><p style={{width: "8%"}}>46.6%</p><div style={{margin: "2px", width: "27%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Pharmaceuticals</p><p style={{width: "8%"}}>45.2%</p><div style={{margin: "2px", width: "25%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Alcohol drinkings</p><p style={{width: "8%"}}>43.4%</p><div style={{margin: "2px", width: "24%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Telecom</p><p style={{width: "8%"}}>39.4%</p><div style={{margin: "2px", width: "23%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Computers and Software</p><p style={{width: "8%"}}>38.2%</p><div style={{margin: "2px", width: "21%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Tourism</p><p style={{width: "8%"}}>37.7%</p><div style={{margin: "2px", width: "20%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>HoReCa</p><p style={{width: "8%"}}>36.1%</p><div style={{margin: "2px", width: "19.5%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Medial Services</p><p style={{width: "8%"}}>35.9%</p><div style={{margin: "2px", width: "18.5%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Insurance services</p><p style={{width: "8%"}}>31.1%</p><div style={{margin: "2px", width: "16.5%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Construction</p><p style={{width: "8%"}}>29.8%</p><div style={{margin: "2px", width: "15%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Fitness</p><p style={{width: "8%"}}>26.7%</p><div style={{margin: "2px", width: "12%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Products for animals</p><p style={{width: "8%"}}>21.3%</p><div style={{margin: "2px", width: "9%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "47%"}}>Fitness</p><p style={{width: "8%"}}>16.1%</p><div style={{margin: "2px", width: "7%",  backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                            <div style={{display: "inline-flex", width: "100%", padding: ".5em"}}><p style={{width: "47%"}}>Interior items, building materials, < br/>charity.</p><p style={{width: "8%"}}>less< br/> 10%</p><div style={{margin: "2px", width: "4.5%",  maxHeight: "15px", backgroundColor: "#2daae2", border: "1px solid #2daae2", borderRadius: ".5rem"}}></div></div>
                        </div>  
                    </div>               
                </div>
                <h3 style={{padding: "1em 0 .1em"}}><strong>2. Who needs ERP: production, turnover, resources</strong></h3>
                <p>If you need to debug the work of the entire company, and not just the sales department, then this is a task for ERP. Such an IT product is necessary if production workshops and a warehouse are at the head of your interests. At the same time, the loading and logistics department must work like clockwork, and you have to constantly decide what and when to produce, on what conditions to ship to the customer, what raw materials need to be purchased and what resources will be needed for this.</p>
                <p style={{padding: "1em 0 1em"}}><i>The introduction of ERP helps to reduce production costs by 8%, deadlines for order fulfillment by 30% and increase the volume of products by 15%.</i></p>
                <p>Global practice shows that ERP is most in demand in trade, engineering, construction, as well as the food and chemical industries.</p>
                <div className={style.Possibilities}>
                    <div style={{display: "flex", flexDirection: "column", alignSelf: "center", width: "100%", boxShadow: "0 0 30px rgba(0,0,0,0.1),0 8px 16px rgba(0,0,0,0.07)"}}>
                        <h4 style={{fontSize: "1.2em", color: "black", textAlign: "center", textTransform: "uppercase", padding: "1em 0"}}><strong>industry distribution of ERP projects</strong></h4>
                        <div style={{ display: "inline-flex", fontSize: "1.2em", color: "white", textAlign: "center", textTransform: "uppercase", padding: "1em 0", background: "linear-gradient(45deg, #dc5456, #2daae2)"}}>
                            <p style={{width: "40%", textAlign: "center"}}>BRANCH</p>
                            <p style={{width: "35%", textAlign: "center"}}>projects quantity</p>
                            <p style={{width: "35%", textAlign: "center"}}>% from common digit</p>
                        </div>
                            <div style={{display: "flex", flexDirection: "column", padding: ".5rem 2rem"}}>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Trading</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>1369</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>16.4</p></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Mechanical engineering</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>831</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>9.9</p></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Construction</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>662</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>7.9</p></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Food industry</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>527</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>6,3</p></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Chemical industry</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>311</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>3,7</p></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Financial service</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>297</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>3.6</p></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Healthcare</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>292</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>3.5</p></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Energy industry</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>286</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>3.4</p></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Housing sector</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>253</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>3</p></div>
                            <div style={{display: "inline-flex", width: "100%", borderBottom: "1px dashed grey", padding: ".5em"}}><p style={{width: "40%"}}>Transport</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>251</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>3</p></div>
                            <div style={{display: "inline-flex", padding: ".5em"}}><p style={{width: "40%"}}>Others</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#dc5456"}}>3284</p><p style={{width: "35%", fontWeight: "bold", textAlign: "center", color: "#2daae2"}}>39.3</p></div>
                        </div>
                    </div>
                </div>      
                <h2 style={{paddingTop: "1em"}}><strong>CRM and ERP - is integration possible?</strong></h2>
                <p style={{padding: "1em 0 .1em"}}>That is, CRM and ERP are not competing products, but two sides of the same coin. <strong>The ERP system helps to control the production and logistics of products, and CRM helps to ensure sales and increase customer loyalty.</strong>&nbsp; And if you need to cover both?</p>
                <p>Then you can either set up integration between two products from different developers, or implement an ERP with a built-in CRM module. Let&apos;s analyze the pros and cons of each solution.</p>
                <h3 style={{padding: "1em 0 .1em"}}><strong>1. CRM and ERP - separate programs</strong></h3>
                <p>At large production facilities, where the main task is to create a high—quality product and observe all the nuances of a complex technological process, ERP is usually implemented. And in order to systematize transaction data and improve control over the sales department, ERP integration with a third-party CRM system is configured via the API. When you enter data into one application, they will automatically appear in another.</p>
                <p style={{padding: "1em 0 .1em"}}>It is important that the CRM system has flexible settings: for example, so that you can create your own fields for entering data in different formats. As well as a wide API that allows you to take exactly the data you need and transfer it to where you need it. However, when individual products interact, there is always a risk that something will go wrong. In this case, you cannot do without an experienced system administrator.</p>
                <h3 style={{padding: "1em 0 .1em"}}><strong>2. CRM and ERP - two in one</strong></h3>
                <p>Another option is when CRM is a pre-installed module in the ERP program along with the Accounting, Warehouse, etc. blocks. Plus, there is no need to integrate third-party products and constantly make adjustments due to software updates. However, there is a significant disadvantage.</p>
                <p style={{padding: "1em 0 .1em"}}><i>If the CRM module is secondary, it is often limited in functionality and flexibility, because ERP developers have given priority to other blocks. At the same time, in addition to analysts and programmers, experienced sales people take part in the development of a separate CRM, the program is constantly being tested and optimized to be an independent effective product.</i></p>
                <p>Interestingly, CRM systems have recently begun to include modules previously peculiar exclusively to ERP products.</p>
                <p style={{padding: "1em 0 .1em"}}><i>For example, in many CRM systems there is a payment block that allows you to track accounts receivable and payment dynamics, issue invoices and check receipts for them, split payments by banks and payment directions.
                    There are modules for schedules and reservations, which allows you to create work schedules for employees and entire departments. And there is even such an extension as a warehouse accounting module that can replace &quot;ERP: Trade and Warehouse&quot;.</i></p>
                <p>Thus, CRM systems with advanced capabilities can compete with ERP in certain market segments. This is typical, for example, in the sphere of trade and services — but only where it is not necessary to ensure the work of huge enterprises with thousands of employees. This option is suitable, for example, for a company with 50 employees, which has several outlets, a warehouse with goods and a sales department. Instead of implementing a complex ERP with a lot of unclaimed functions, you can take a CRM with a module for managing turnover — such a program will be cheaper and easier to learn.</p>
                <p style={{padding: "1em 0 .1em"}}><strong>So, both IT products are engaged in business process automation, but CRM is at the level of the relationship between the company and customers, and ERP is at the level of the internal organization of the entire enterprise. If you need the capabilities of both programs, then even at the stage of choosing a system, you should think about which of the integration options will be most convenient.</strong></p>
            </div>
            <Footer />
        </div>
    )
}