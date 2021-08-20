import {useState} from 'react';
import { useRouter } from 'next/router';
import style from './Tabs.module.css';

const Tabs = ({children}) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  }
  return (
    <div>
      <ul className={style.tabs}>
        {children.map((tab) => {
          const label = tab.props.label;
          return (
            <li
              className={label == activeTab ? style.current : ""}
              key={label}
            >
              <a href="#" onClick={(e) => handleClick(e, label)} className={style.tabLink}>{label}</a>
            </li>
          )
        })}
      </ul>
        {children.map((one) => {
          if (one.props.label == activeTab)
            return (
              <div key={one.props.label} className={style.content}>
                {one.props.children}
              </div>
            );
        })}
    </div>
  )
}

export { Tabs }
