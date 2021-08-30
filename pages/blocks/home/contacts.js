import Image from 'next/image'
import style from '../../../styles/HomeContacts.module.css'
import ContactForm from './contact-form/contact-form'

import map from '../../../images/map.svg'
import mail from '../../../images/mail.svg'
import phone from '../../../images/phone.svg'
import clock from '../../../images/clock.svg'
import bg from '../../../images/dropshipping-consult.png'

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
              <Image
                src={map}
                height={36}
                width={70}
                alt="map icon"
              />
              <p>Nasir Trade Center, 89 Bir Uttam, CR Dutta Rd, Dhaka 1205</p>
            </div>
            <div className={style.ContactRow1}>
              <div className={style.Left}>
                <Image
                  src={mail}
                  height={32}
                  width={50}
                  alt="mail icon"
                />
                <p>&nbsp;optimization@for-all.world&nbsp;</p>
              </div>
              <div className={style.Right}>
                <Image
                  src={phone}
                  height={36}
                  width={50}
                  alt="phone icon"
                />
                <p>&nbsp;+880 1313-714-182</p>
              </div>
            </div>
            <div className={style.ContactRow2}>
              <Image
                src={clock}
                height={32}
                width={44}
                alt="working clocks icon"
              />
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
