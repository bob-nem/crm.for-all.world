import Image from 'next/image'
import style from '../../styles/articles/Differences.module.css'

import TopImg from '../../images/articles/erp-and-crm-differences_topBG.webp'
import SvgCustomerBase from '../../images/icons/IntegrationSystems'

export default function Differences() {
    return (
        <div className={style.Container}>
            <div className={style.Cover}>
                <h1 style={{fontFamily: "Righteous", textTransform: "uppercase", color: "white", WebkitTextStroke: "1px #854adb", fontSize: "2.1rem", paddingRight: "2em"}}>Differences between CRM and ERP systems: which program to choose?</h1>
                <div>
                    <Image
                        src={TopImg}
                        alt="Find differences beetween ERP and CRM"
                    />
                </div>
            </div>
            <div className={style.Content}>
                <p><strong>When is it better to choose CRM, and when is ERP? We understand the intricacies of IT products: what are ERP and CRM systems, comparing their functions and capabilities.</strong></p>
                <h2 style={{padding: "1em 0 .1em"}}><strong>CRM and ERP - what it is?</strong></h2>
                <p>Almost every businessman sooner or later realizes that he needs a smart program to manage a company. But what is it, and what is the difference between CRM and ERP? In fact, both IT products have the same goal - to automate and optimize workflows. However, they have a different set of tools and tasks.</p>
                <h3 style={{padding: "1em 0 .1em"}}>1. CRM: from the first application to the re-sale</h3>
                <p><strong>CRM</strong> stands for <strong>Customer Relationship Management.</strong> The program helps to store and organize data about customers, applications and transactions. The information is collected in convenient cards: names, contacts, purchases, contracts, invoices and payments. The entire history of work with the customer, letters and call records are stored here in chronological order. In addition, the system automates processes and helps the manager at every stage of the sale: reminds to call the customer, forms documents according to a template, issues invoices, creates analytical reports, sends SMS, sets tasks and monitors their implementation.</p>
                <p style={{padding: "1em 0 1em"}}><i>Thanks to CRM, administrator Kate will simply not be able not to send a commercial offer, manager Alice will forget the details of the conversation with the client or lose his number. At the same time, Director Bob no longer needs to keep all the cases in his head and spend half a day compiling reports.</i></p>
                <p>The purpose of the CRM system is to build a dialogue with the client in such a way as to sell him more often, more and faster.</p>
                <div className={style.Possibilities} >
                    <div style={{display: "flex", flexDirection: "column", alignSelf: "center", width: "100%", boxShadow: "0 0 30px rgba(0,0,0,0.1),0 8px 16px rgba(0,0,0,0.07)"}}>
                        <div>
                            <h4 style={{fontSize: "1.2em", color: "white", textAlign: "center", textTransform: "uppercase", padding: "1em 0", background: "linear-gradient(45deg, #dc5456, #2daae2)"}}><strong>What does CRM do?</strong></h4>
                        </div>
                        <div className={style.Capabilities}>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>ORDERS</h4>
                                <p>Captures applications from the site, notifies the manager, reminds to call the client</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>clients and deals</h4>
                                <p>Stores information in cards: contacts, documents, letters, calls, applications, invoices and payments.</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>kpi and purposes</h4>
                                <p>Helps to set goals for employees and monitor the implementation of the plan</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>processes automation</h4>
                                <p>Sets tasks for managers during the transaction, sends SMS, tracks payments, etc.</p>
                            </div>
                            <div className={style.CapabilitiesBoxS}>
                                <h3 style={{fontWeight: "bold", color: "#2daae2"}}>CRM</h3>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>analytics and reports</h4>
                                <p>Generates visual diagrams and answers on business indicators online</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Documents</h4>
                                <p>Generates documents according to a template, substituting details, cost and other data</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Tasks</h4>
                                <p>Sets tasks and sends reminders about cases, monitors deadlines</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Sales</h4>
                                <p>Leads through the sales funnel: indicates the stages of bargains and checklists, reminds of tasks</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 style={{padding: ".5em 0 .1em"}}>2. ERP: from warehouse accounting to logistics</h3>
                <p>The abbreviation <strong>ERP</strong> stands for <strong>Enterprise Resource Planning.</strong> The program stores, processes and maintains a single database of the company, as well as synchronizes the activities of all departments: the order department, production workshops, warehouse, logistics department, accounting, advertising department, etc. ERP creates a single information space for all employees of the company. The data is entered into the service once, and becomes available to everyone.</p>
                <p style={{padding: "1em 0 1em"}}><i>Now Entony, a sales specialist, enters an order into the database, he is immediately seen by manager Nadia in the project department and the receptionist Andrew in production. The accounting department immediately learns about the payment of the order, and the management can immediately assess the dynamics of sales from online reports.</i></p>
                <p>The purpose of the ERP system is to keep resources under control and turn individual parts of the company into a single mechanism.</p>
                <div className={style.Possibilities} >
                    <div style={{display: "flex", flexDirection: "column", alignSelf: "center", width: "100%", boxShadow: "0 0 30px rgba(0,0,0,0.1),0 8px 16px rgba(0,0,0,0.07)"}}>
                        <div>
                            <h4 style={{fontSize: "1.2em", color: "white", textAlign: "center", textTransform: "uppercase", padding: "1em 0", background: "linear-gradient(45deg, #dc5456, #2daae2)"}}><strong>What does ERP do?</strong></h4>
                        </div>
                        <div className={style.Capabilities}>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>ORDERS</h4>
                                <p>Captures applications from the site, notifies the manager, reminds to call the client</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>
                                <h4 style={{fontWeight: "bold"}}>clients and deals</h4>
                                <p>Stores information in cards: contacts, documents, letters, calls, applications, invoices and payments.</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>kpi and purposes</h4>
                                <p>Helps to set goals for employees and monitor the implementation of the plan</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>processes automation</h4>
                                <p>Sets tasks for managers during the transaction, sends SMS, tracks payments, etc.</p>
                            </div>
                            <div className={style.CapabilitiesBoxS}>
                                <h3 style={{fontWeight: "bold", color: "#dc5456"}}>ERP</h3>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>analytics and reports</h4>
                                <p>Generates visual diagrams and answers on business indicators online</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Documents</h4>
                                <p>Generates documents according to a template, substituting details, cost and other data</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Tasks</h4>
                                <p>Sets tasks and sends reminders about cases, monitors deadlines</p>
                            </div>
                            <div className={style.CapabilitiesBox}>
                                <div className={style.Icon}>
                                    <SvgCustomerBase />
                                </div>                                
                                <h4 style={{fontWeight: "bold"}}>Sales</h4>
                                <p>Leads through the sales funnel: indicates the stages of bargains and checklists, reminds of tasks</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2><strong>When is it better to choose CRM, and when is ERP?</strong></h2>
                <p>Now that we have figured out what it is, it&#39;s time to decide which program to choose - ERP or CRM systems. To do this, ask yourself the question: what are the tasks facing the company?</p>
                <h3 style={{padding: "1em 0 .1em"}}>1. Who needs CRM: customer search, sales, calls</h3>
                <p>You need CRM if the main place in the office is the sales department, and that&#39;s what you want to &#34;pump up&#34;: increase efficiency, automate and systematize processes. CRM is needed if your work with clients is based on calls, letters and meetings, and you think every day how to find new customers and turn them into regular customers.</p>
                <p style={{padding: "1em 0 1em"}}><i>According to research, after the introduction of CRM, the productivity of managers increases by an average of 37%, the level of sales - up to 29%, and the company&#39;s profit - by 25-35%</i></p>
                <p>Global practice shows that CRM is most often implemented in the retail and wholesale sector, as well as in the services and hospitality industry. In a word, wherever it is important to win the loyalty of the client and build a long-term relationship with him.</p>
            </div> 
        </div>
    )
}