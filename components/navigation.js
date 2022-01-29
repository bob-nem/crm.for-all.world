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
                <a className={style.navlink} onClick={openMenu}>About</a>
              </Link>
            </li>
            <li className={style.navitem}>
              <Link href='/#prices'>
                <a className={style.navlink} onClick={openMenu}>Prices</a>
              </Link>
            </li>
            <li className={style.navitem}>
              <Link href='/#articles'>
                <a className={style.navlink} onClick={openMenu}>Articles</a>
              </Link>
            </li>
            <li className={style.navitem}>
              <Link href='/#contacts'>
                <a className={style.navlink} onClick={openMenu}>Contact</a>
              </Link>
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
