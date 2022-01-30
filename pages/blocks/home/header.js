import style from '../../../styles/Header.module.css';
import Image from 'next/image';

import topIMG from '../../../images/Top-IMG.webp';
import unicornTopLogo from '../../../images/unicorn-logo-gr.webp';

export default function Header() {
  return (
    <header className={style.HeaderSlider} id="home">
      <div className={style.HeaderSliderLeft}>
        <div className={style.UnicornTopLogo}>
          <Image
            src={unicornTopLogo}
            alt="company logo unicorn"
          />
        </div>
        <h1 className={style.Header}>Enterprise Processes Optimization Systems</h1>
        <p className={style.TopDescription}>&#10148; Enterprise Resource Planning systems <strong>(ERP)</strong> and Customer Relations Management systems <strong>(CRM)</strong> are software for automating processes and document management, accounting and data analysis within an organization, as well as effective interaction with customers and partners. The integration of this software allows you to establish control and planning of any productive and customer-oriented business.<br />&#10144; A well-thought-out electronic document management system allows employees to understand how the processes are moving in the company, what needs to be done to achieve the targets and monitor the stages of each phase of work.</p>
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
