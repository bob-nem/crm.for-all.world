import style from '../../../styles/HomePrices.module.css';
import Image from 'next/image';

export default function Prices() {
  return (
    <div className={style.Container}>
      <h2 className={style.MainHeader}>categories of solutions and their prices</h2>
      <p className={style.MainHeaderDescription}>Please note that depending on the set of functions and the presence of special conditions in the technical specification of the customer, the price may vary greatly. These prices are valid for the installation and configuration of a standard basic package.</p>
    </div>
  )
}
