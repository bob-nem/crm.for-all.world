import style from '../../../styles/Contacts.module.css'
import ContactForm from './contact-form/contact-form'
import GoogleMaps from './map/map'
import { FiFacebook, FiTwitter, FiGithub, FiYoutube } from 'react-icons/fi';

import Map from '../../../images/icons/Map'
import Mail from '../../../images/icons/Mail'
import Phone from '../../../images/icons/Phone'
import Clock from '../../../images/icons/Clock'
import Navigator from '../../../images/icons/Navigator'

export default function Contacts () {
  return (
    <div className={style.Container}  id="contacts">
    <div className={style.BG}>
      <h2 className={style.Header}>contacts</h2>
      <p className={style.MainHeaderDescription}>We are waiting for your questions and are ready to help in solving tasks on automation of document flow and technological processes of any complexity.</p>
      <div className={style.Separator}>
        <div className={style.Map}>
          <GoogleMaps />
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
                <p>&nbsp;+880 1756-995-889</p>
              </div>
            </div>
            <div className={style.ContactRow2}>
              <Clock />
                <p>&nbsp;Sunday - Thuesday, 08:00 - 17:00 (reception by appointment)</p>
            </div>
          </div>
            <div className={style.ContactSocial}>
              <div className={style.ContactSocialCoordinates}>
                <Navigator className={style.NavigatorIcon} />
                <p>GPS: 23.746497, 90.392484</p>
              </div>
              <div className={style.ContactSocialWe}>
                <p>WE ARE IN SOCIAL:</p>
              </div>
              <div className={style.SocialMedia}>
                <a href="#" className={style.IconCircle}>
                  <FiFacebook className={style.SocialIcon}/>
                </a>
                <a href="#" className={style.IconCircle}>
                  <FiTwitter  className={style.SocialIcon}/>
                </a>
                <a href="#" className={style.IconCircle}>
                  <FiGithub  className={style.SocialIcon}/>
                </a>
                <a href="#" className={style.IconCircle}>
                  <FiYoutube  className={style.SocialIcon}/>
                </a>
              </div>
            </div>
          <ContactForm />
        </div>
      </div>
    </div>
    </div>
  )
}
