import Link from 'next/link';
import {useState} from 'react';
import style from '../styles/Navigation.module.css';

export default function Navigation ({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return <>
    <div className={style.header}>
      <nav className={style.navbar}>
          <ul className={isOpen === false ? style.navmenu : style.navmenu +' '+ style.active}>
            <li className={style.navitem}>
              <Link href='/#home'>
                <a className={style.navlink}>Home</a>
              </Link>
            </li>
            <li className={style.navitem}>
              <Link href='/#stages'>
                <a className={style.navlink}>Stages</a>
              </Link>
            </li>
            <li className={style.navitem}>
                <a className={style.navlink}>Contact</a>
            </li>
          </ul>
          <button className={isOpen === false ?
                            style.hamburger : style.hamburger +' '+ style.active}
                            onClick={openMenu}
                            >
            <span className={style.bar}></span>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
          </button>
        </nav>
      </div>
    {children}
  </>
}
