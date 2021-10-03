import style from './form.module.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'


export default function ContactForm () {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const router = useRouter();
  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact.js`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          'success',
          'Thank you for contacting us, we will be in touch soon.'
        );
      }
    } catch (err) {console.log(err);}
  }
  return (
    <div className={style.Container}>
      <h2>Any question or remarks? Just write us a message!</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className={style.Row}>
          <input
            type="text"
            name="name"
            {...register("name", { required: {value: true, message: 'You must enter you name'} })}
            placeholder="Full name"
          />
          <span style={{color: "#ea4335", fontSize: ".8rem", paddingLeft: ".5em"}}>{errors?.name?.message}</span>
        </div>
        <div className={style.Row}>
          <input
            type="text"
            name="email"
            {...register("email", { required: {value: true, message: 'You must enter you email address'},
            minLength: { value: 7, message: 'This is not long enough to be an email'},
            maxLength: { value: 120, message: 'This is too long'},
            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'This needs to be a valid email address'}
            })}
            placeholder="E-mail"
          />
          <span style={{color: "#ea4335", fontSize: ".8rem", paddingLeft: ".5em"}}>{errors?.email?.message}</span>
        </div>
        <div className={style.Row}>
          <input
            type="text"
            name="phone"
            {...register("phone", { required: false })}
            placeholder="Phone"
          />
        </div>
        <div className={style.RowWithRB}>
          <label className={style.OptiTypes}>What Type Of Optimization Do You Need?</label>
          <div className={style.RBs}>
            <div className={style.RB}>
              <input type="radio" id="radiopersonal" name="type" value="personal"/>
              <label htmlFor="radiopersonal">Sales</label>
            </div>
            <div className={style.RB}>
              <input type="radio" id="radioecommerce" name="type" value="ecommerce"/>
              <label htmlFor="radioecommerce">Corporate</label>
            </div>
            <div className={style.RB}>
              <input type="radio" id="radiolandingpage" name="type" value="landingpage"/>
              <label htmlFor="radiolandingpage">Industry</label>
            </div>
          </div>
        </div>
        <div className={style.Row}>
          <textarea
            name="message"
            rows="4"
            {...register("Message", { required: {value: true, message: "You need to enter your message"},
            maxLength: {value: 1618, message: "Your message can't be more than 1618 characters"},
            minLength: {value: 31, message: "Your message must be longer than this"} 
            })}
            placeholder="Message"></textarea>
          <span style={{color: "#ea4335", fontSize: ".8rem", paddingLeft: ".5em"}}>{errors?.Message?.message}</span>
        </div>
        <div className={style.RowB}>
          <button className="primary">Send Message</button>
        </div>
      </form>
    </div>
  )
}
