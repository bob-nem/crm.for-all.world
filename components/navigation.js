import Link from 'next/link';
import {useState} from 'react';
import style from '../styles/Navigation.module.css';

export default function Navigation ({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return <>
    <header className={style.header}>
      <nav className={style.navbar}>
          <a className={style.navlogo}>[BrandLogo]</a>
          <ul className={isOpen === false ? style.navmenu : style.navmenu +' '+ style.active}>
            <li className={style.navitem}>
              <Link href='/'>
                <a className={style.navlink}>Home</a>
              </Link>
            </li>
            <li className={style.navitem}>
              <Link href='#stages'>
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
      </header>
    {children}
  </>
}
