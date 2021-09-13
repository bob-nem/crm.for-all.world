import Image from 'next/image'
import style from '../../../styles/Contacts.module.css'
import ContactForm from './contact-form/contact-form'

import Map from '../../../images/icons/Map'
import Mail from '../../../images/icons/Mail'
import Phone from '../../../images/icons/Phone'
import Clock from '../../../images/icons/Clock'

export default function Contacts () {
  return (
    <div className={style.Container}  id="contacts">
    <div className={style.BG}>
      <h2 className={style.MainHeader}>contacts</h2>
      <p className={style.MainHeaderDescription}>We are waiting for your questions and are ready to help in solving tasks on automation of document flow and technological processes of any complexity.</p>
      <div className={style.Separator}>
        <div className={style.Map}>

        </div>
        <div className={style.Contacts}>
          <div className={style.ContactData}>
            <div className={style.ContactRow}>
              <Map />
              <p>Nasir Trade Center, 89 Bir Uttam, CR Dutta Rd, Dhaka 1205</p>
            </div>
            <div className={style.ContactRow1}>
              <div className={style.Left}>
                <Mail />
                <p>&nbsp;optimization@for-all.world&nbsp;</p>
              </div>
              <div className={style.Right}>
                <Phone />
                <p>&nbsp;+880 1313-714-182</p>
              </div>
            </div>
            <div className={style.ContactRow2}>
              <Clock />
                <p>&nbsp;Sunday - Thuesday, 08:00 - 17:00 (reception by appointment)</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
    </div>
  )
}
