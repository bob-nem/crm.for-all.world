import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import style from '../../../../styles/HomeSecond.module.css';
import Modal from "../../../../components/Modal";

import checkWhite from '../../../../images/check-white.svg';

export default function Concept () {
  const [modal, setModal] = useState(false);

  const _modal = useRef(null);

  const handleClick = () => {
    setModal(true);
    window.history.pushState("", "", "/test2");
  };

  const closeModal = e => {
    if (!modal) return;
    if (_modal.current._content.current.contains(e.target)) return;
    setModal(false);
    window.history.go(-1);
  };

  const handleChange = e => {
    if (e.target.location.pathname === "/test2") {
      setModal(true);
    }
    if (e.target.location.pathname === "/") {
      setModal(false);
    }
  };

  useEffect(() => {
    window.onpopstate = handleChange;
    () => window.removeEventListener("popstate", handleChange);
  });

  return (

    <div className={style.SecondBlockConent}>
    {/*{modal && <Modal ref={_modal} onClick={closeModal} />}*/}
      <div className={style.SecondBlockIcon}><Image src={checkWhite} alt="check icon"/></div>
      <div>
        <h3 className={style.SecondBlockH}>Definition of the general concept, approval of the technical task</h3>
        <p className={style.SecondBlockP}>
          Work on the ERP or CMR implementation project at the enterprise begins with the definition of goals and objectives. This should not be automation for the sake of automation — the customer should clearly know what business effects he ultimately wants to achieve. At the preparatory stage, it is necessary to form a
          <button onClick={handleClick} style={{ marginBottom: "30px" }}>
            working group
          </button>
          on the client side, which together with the integrator will work on creating a voluminous and detailed technical task, thoroughly describing all, even the smallest processes.</p>
      </div>
    </div>
  )
}
