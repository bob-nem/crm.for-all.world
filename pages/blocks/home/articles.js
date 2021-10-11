import style from '../../../styles/Articles.module.css'
import Image from 'next/image'
import Link from 'next/link'

import ChoiseImg from '../../../images/backgrounds/children-trianing.webp'


export default function Articles() {
    return (
        <div className={style.Wrapper} id="articles">
            <h2 className={style.Header}>ARTICLES</h2>
            <div className={style.Container}>
                <div className={style.Box}>
                    <Link href="/articles/how-to-choise-ERP">
                        <a title="How to choise ERP system">
                            <div className={style.Content} style={{border: "2px dashed white", borderRadius: ".5rem"}}>
                                <h3 className={style.H3Hover} style={{color: "#ffcf46", WebkitTextStroke: "1px black", fontSize: "2.5em"}}>How to choise ERP system</h3>
                                <div style={{display: "inline-flex"}}>
                                    <p style={{width: "45%", textAlign: "justify", padding: "1em 1em 0 0", alignSelf: "center"}}>You have been quite a technology company for a long time. The documentation has been digitized, all processes are carried out in special information systems for each department. But there is somehow a lot of everything, you do not understand where the money goes, who is to blame for the mistakes and you want some order and clarity. Or you just started a business and immediately want to start all processes on automated rails...</p>
                                    <div style={{alignSelf: "center"}}>
                                        <Image
                                            src={ChoiseImg}
                                            alt={"Childrens choose electronic-document sysem"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={style.Box}>
                    <Link href="/articles/differences-between-erp-and-crm">
                        <a title="Differences between ERP and CRM systems">
                            <div className={style.Content}>
                                <h3>Differences between ERP and CRM systems</h3>
                            </div>
                        </a>
                    </Link>                    
                </div>
                <div className={style.Box}>
                    <div className={style.Content}>
                        <h3>Open source ERP and CRM systems review</h3>
                    </div>
                </div>
                <div className={style.Box}>
                    <div className={style.Content}>
                        <h3>Advantages of cloud infrastructure</h3>
                    </div>
                </div>
                <div className={style.Box}>
                    <div className={style.Content}>
                        <h3>Errors in the implementation of automated processes</h3>
                    </div>
                </div>
                <div className={style.Box}>
                    <div className={style.Content}>
                        <h3>Synchronization of the SCADA system with the corporate ERP</h3>
                    </div>
                </div>
                <div className={style.Box}>
                    <div className={style.Content}>
                        <h3>Power and strength of top paid ERP systems</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}