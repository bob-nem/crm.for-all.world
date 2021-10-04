import style from '../../../styles/Articles.module.css'

export default function Articles() {
    return (
        <div className={style.Wrapper} id="articles">
            <h2 className={style.Header}>ARTICLES</h2>
            <div className={style.Container}>
                <div className={style.Box} style={{backgroundColor: "#E0FC45", border: "2px solid #FFCF46"}}>
                    <div className={style.Content}>
                        <h3>How to choise ERP system</h3>
                    </div>
                </div>
                <div className={style.Box} style={{backgroundColor: "#FF8038", border: "2px solid #32E5B4"}}>
                    <div className={style.Content}>
                        <h3>Differences between ERP and CRM systems</h3>
                    </div>
                </div>
                <div className={style.Box} style={{backgroundColor: "#6BFDB3", border: "2px solid #FF736B"}}>
                    <div className={style.Content}>
                        <h3>Open source ERP and CRM systems review</h3>
                    </div>
                </div>
                <div className={style.Box} style={{backgroundColor: "#1E4EFC", border: "2px solid #FFB100"}}>
                    <div className={style.Content}>
                        <h3>Advantages of cloud infrastructure</h3>
                    </div>
                </div>
                <div className={style.Box} style={{backgroundColor: "#643A0C", border: "2px solid #5D0B1E"}}>
                    <div className={style.Content}>
                        <h3>Errors in the implementation of automated processes</h3>
                    </div>
                </div>
                <div className={style.Box} style={{backgroundColor: "#28590B", border: "2px solid #083242"}}>
                    <div className={style.Content}>
                        <h3>Synchronization of the SCADA system with the corporate ERP</h3>
                    </div>
                </div>
                <div className={style.Box} style={{backgroundColor: "#083242", border: "2px solid #28590B"}}>
                    <div className={style.Content}>
                        <h3>Power and strength of top paid ERP systems</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}