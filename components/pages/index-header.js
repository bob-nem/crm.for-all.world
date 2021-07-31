import style from '../../styles/HomeHeader.module.css';
import Image from 'next/image';

import topIMG from '../../images/Top-IMG.png';
import unicornTopLogo from '../../images/unicorn-logo-gr.png';

export default function Header() {
  return (
    <header className={style.HeaderSlider} id="home">
      <div className={style.HeaderSliderLeft}>
        <div className={style.UnicornTopLogo}>
          <Image
            src={unicornTopLogo}
          />
        </div>
        <h1 className={style.TopHeader}>Customer Relationship Management Systems</h1>
        <p className={style.TopDescription}>&#10148; <strong>CRM system</strong> (Customer Relations Management) is a program for automating document management processes, accounting and data analysis in an organization, as well as effectively interacting with customers and partners. The integration of this software allows you to establish control and planning of any productive and customer-oriented business.<br />&#10144; A well-thought-out CRM system allows the manager to understand how the processes are moving in the company, what needs to be done to achieve the targets and monitor the stages of each process</p>
      </div>
      <div className={style.HeaderSliderRight}>
        <Image
          className={style.HeaderSliderRightIMG}
          src={topIMG}
          alt="computer with CRM"
        />
      </div>
    </header>
  )
}
