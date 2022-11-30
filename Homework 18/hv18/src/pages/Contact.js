import React from 'react'
import { Input } from '../components/Input'

export const Contact = () => {
  return (
    <div className='flex flex-col w-full md:w-4/5 items-center mt-10'>
      <div className='text-5xl text-violet-800 font-semibold mb-5'>Contact us!</div>
      <Input placeHolder="Your email" />
      <Input placeHolder="Your full name" />
      <Input placeHolder="Your message" />
      <button className='w-[90%] mt-10 md:w-[50%] bg-violet-800 text-slate-50 font-semibold py-1 text-2xl rounded-3xl border-2 border-violet-800 hover:text-violet-800 hover:bg-slate-50 '>Send</button>
    </div>
  )
}
