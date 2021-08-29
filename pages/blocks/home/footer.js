import Image from 'next/image'
import style from '../../../styles/HomeFooter.module.css'
import { FiMail, FiPhone, FiMap, FiFacebook, FiTwitter, FiGithub, FiYoutube } from 'react-icons/fi';

import unicornTopLogo from '../../../images/unicorn-logo-gr.png';

export default function Footer () {
  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <div className={style.Address}>
          <div className={style.Logo}>
            <Image
              src={unicornTopLogo}
              alt="company logo unicorn"
            />
        </div>
        <p>optimization.for-all.world</p>
        <p>Nasir Trade Center, 89 Bir Uttam, CR Dutta Rd,< br /> Dhaka 1205, Bangladesh</p>
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
        <div className={style.Products}>
          <h2>Products</h2>
          <p>Discower Features</p>
          <p>CMS Integration</p>
          <p>ERP Integration</p>
          <p>Industrial automatization</p>
          <p>Blockchain solutions</p>
        </div>
        <div className={style.Products}>
          <h2>Company</h2>
          <p>About Us</p>
          <p>About Security</p>
          <p>User Guide</p>
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
        </div>
        <div className={style.Subscribe}>
          <h2>SUBSCRIBE OUR NEWSLETTER</h2>
          <div className={style.InputEmail}>
            <input type="email" id="usr" placeholder="email address" /><a href="#"><FiMail /></a>
          </div>
          <p>FOR-ALL WORLD CORPORATION</p>
          <p>© 2020</p>
        </div>
      </div>
    </div>
  )
}
