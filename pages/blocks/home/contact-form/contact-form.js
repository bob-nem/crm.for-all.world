import Image from 'next/image'
import style from './form.module.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'


export default function ContactForm () {
  return (
    <div className={style.Container}>
      <h2>Any question or remarks? Just write us a message!</h2>
      <form>
        <div className={style.Row}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
          />
        </div>
        <div className={style.Row}>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
          />
        </div>
        <div className={style.Row}>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
          />
        </div>
        <div className={style.RowWithRB}>
          <label className={style.OptiTypes}>What Type Of Optimization Do You Need?</label>
          <div className={style.RBs}>
            <div className={style.RB}>
              <input type="radio" id="radiopersonal" name="type" value="personal"/>
              <label for="radiopersonal">Sales</label>
            </div>
            <div className={style.RB}>
              <input type="radio" id="radioecommerce" name="type" value="ecommerce"/>
              <label for="radioecommerce">Corporate</label>
            </div>
            <div className={style.RB}>
              <input type="radio" id="radiolandingpage" name="type" value="landingpage"/>
              <label for="radiolandingpage">Industry</label>
            </div>
          </div>
        </div>
        <div className={style.Row}>
          <textarea
            name="message"
            rows="4"
            placeholder="Message"></textarea>
        </div>
        <div className={style.RowB}>
          <button className="primary">Send Message</button>
        </div>
      </form>
    </div>
  )
}
