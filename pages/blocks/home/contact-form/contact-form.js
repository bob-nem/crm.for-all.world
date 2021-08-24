import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function ContactForm () {
  return (
    <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
      <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
      <form className="grid grid-cols-1 gap-y-6">
        <div>
        <label for="name" className="sr-only">
          Full name
        </label>
        </div>
      </form>
      </div>
    </div>
  )
}
