import style from '../../../styles/Articles.module.css'
import Image from 'next/image'
import Link from 'next/link'

import ChoiseImg from '../../../images/articles/children-trianing.webp'
import CRMDifferenceImg from '../../../images/articles/crm-difference.webp'
import ERPDifferenceImg from '../../../images/articles/erp-difference.webp'
import OpenSourceImg from '../../../images/articles/opensource.webp'
import CloudAdvantages from '../../../images/articles/data-warehouse-scaled.webp'
import CloudServer from '../../../images/articles/cloud-server.webp'
import BugFix from '../../../images/icons/bug-fix.webp'
import SvgForkliftTruck from '../../../images/icons/ForkliftTruck'

export default function Articles() {
    return (
        <div className={style.Wrapper} id="articles">
            <h2 className={style.Header}>ARTICLES</h2>
            <div className={style.Container}>

                <div className={style.Box}>
                    <Link href="/articles/how-to-choise-ERP">
                        <a title="How to choise ERP system">
                            <div className={style.Content} style={{ border: "2px dashed white", borderRadius: ".5rem" }}>
                                <h3 style={{ color: "#ffcf46", WebkitTextStroke: "1px black"}}>How to choise ERP system</h3>
                                <div className={style.ContentInline}>
                                    <p style={{ width: "45%", textAlign: "justify", padding: "1em 1em 0 0", alignSelf: "center" }}>You have been quite a technology company for a long time. The documentation has been digitized, all processes are carried out in special information systems for each department. But there is somehow a lot of everything, you do not understand where the money goes, who is to blame for the mistakes and you want some order and clarity. Or you just started a business and immediately want to start all processes on automated rails...</p>
                                    <div className={style.ChoiseIMG}>
                                        <Image
                                            src={ChoiseImg}
                                            alt="Childrens choose electronic-document sysem"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box} style={{ placeItems: "start" }}>
                    <Link href="/articles/differences-between-erp-and-crm">
                        <a title="Differences between ERP and CRM systems">
                            <div className={style.Content} style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                                <div style={{ paddingTop: "1em" }} className={style.DifferenceImg}>
                                    <Image
                                        src={ERPDifferenceImg}
                                        alt="ERP differences"
                                    />
                                </div>
                                <h3 style={{ color: "#ffcf46", WebkitTextStroke: "1px black", margin: "2rem 0" }}>Differences between <span style={{ color: "#ffa48a" }}>ERP</span> and <span style={{ color: "#67d869" }}>CRM</span> systems</h3>
                                <div className={style.DifferenceImg}>
                                    <Image
                                        src={CRMDifferenceImg}
                                        alt="CRM differences"
                                    />
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <Link href="/articles/open-source-corporate-systems">
                        <a title="Open source corporate systems">
                            <div className={style.ContentOpenSource}>
                                <h3>Open source corporate systems review</h3>
                                <div className={style.OpenSourceImg}>
                                    <Image
                                        src={OpenSourceImg}
                                        alt="Open source systems"
                                    />
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <Link href="/articles/advantages-of-cloud-infrastructure">
                        <a title="Advantages of cloud infrastructure">
                            <div className={style.Content}>
                                <div className={style.Advantages}>
                                    <h3>Advantages of cloud infrastructure</h3>
                                    <div className={style.AdvantagesImageBig}>
                                        <Image
                                            src={CloudAdvantages}
                                            alt="Cloud ifrastructure"
                                        />
                                    </div>
                                    <div className={style.AdvantagesImageSmall}>
                                        <Image
                                            src={CloudServer}
                                            alt="Cloud server icon"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <Link href="/articles/implementation-errors">
                        <a title="Implementation errors">
                            <div className={style.Content} style={{ display: "inline-flex" }}>
                                <div style={{ width: "7%", alignSelf: "center", minWidth: "4rem" }}>
                                    <Image
                                        src={BugFix}
                                        alt="Bug fix"
                                    />
                                </div>
                                <h3 style={{ alignSelf: "center", marginLeft: "1rem" }}><span style={{ color: "#ffa48a", WebkitTextStroke: "1px black" }}>Errors in</span> the implementation of <span style={{ color: "#ffcf46", WebkitTextStroke: "1px black" }}>automated processes</span></h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <Link href="/articles/scada-with-erp">
                        <a title="SCADA with ERP integration">
                            <div className={style.ContentScada}>
                                <h3 style={{ padding: ".5em 0", color: "white", WebkitTextStroke: "2px black" }}>Integration of SCADA systems and enterprise management systems</h3>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <Link href="/articles/wms-systems">
                        <a title="Warehouse Management Systems">
                            <div className={style.Content}>
                                <div style={{ display: "inline-flex" }}>
                                    <h3 style={{ color: "#ffcf46", WebkitTextStroke: "1px black"}}>Warehouse logistics with <span style={{ color: "#67d869" }}>WMS</span></h3>
                                    <span style={{ padding: " 0 .5rem 0 0" }} className={style.ForkLiftTruck}><SvgForkliftTruck /></span>
                                </div>
                                <p>WMS-system (Warehouse Management System– is a software that is designed to automate the operation of a warehouse. With its help, you can significantly speed up logistics processes, minimize costs and improve warehouse management.</p>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}