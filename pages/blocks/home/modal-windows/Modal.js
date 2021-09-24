import React from 'react'
import style from './Modal.module.css'

export default function Modal({open, children, onClose}) {
  if (!open) return null
  return (
    <>
      <div className={style.Overlay} />
      <div className={style.ModalWindow}>
        <button onClick={onClose} className={style.CloseButton}>Close modal</button>
        {children}
      </div>
    </>
  )
}
