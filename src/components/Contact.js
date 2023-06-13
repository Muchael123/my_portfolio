import React from 'react'
import {Typewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons';

function Contact() {
  return (
    <div className="h-screen space-y-10  flex flex-col md:flex-row relative text-center md:text-left max-w-7xl py-20 justify-evenly mx-auto items-center ">
       <h3 className="absolute top-16 uppercase tracking-[20px] text-[#777474] text-2xl  ">Contact</h3>
        <div className='flex flex-col space-y-10 '>
            <h4 className='text-4xl font-semibold text-center'>I have what you need. {""}<br/>
            <span className='text-[#0ceb04]/50 uppercase decoration-[#e6f74c]'>
              <Typewriter 
            words={[ 'Contact me...', 'Hire me!', "Let's talk '_'"]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={5000}
          />
            </span></h4></div>

            <div className='space-y-2'>
               <p className='text-sm'> <SocialIcon 
                    className="cursor-pointer animate-pulse"
                    network="whatsapp"
                    fgColor='#1eff00'
                    bgColor='transparent'
                /> +254 104819099</p> 
               <p className='text-sm'> <SocialIcon 
                    className="cursor-pointer animate-pulse"
                    network="email"
                    fgColor='#1eff00'
                    bgColor='transparent'
                /> mainamichael2849@gmail.com</p> 
                <p className='text-sm'> <SocialIcon 
                    className="cursor-pointer animate-pulse"
                    network="google"
                    fgColor='#1eff00'
                    bgColor='transparent'
                /> 50100 Kakamega, Kenya</p>
                
            </div>
        <form classname='flex flex-col mx-auto w-[80%]'>
          <div className='flex space-x-2'>
            <input type='text' placeholder='Name e.g Mike' className='w-[100%] mb-2 outline-none text-gray-400 placeholder-gray-350 trasition-all focus:text-[#1eff00] focus:border-[rgb(202,247,5)]  bg-slate-600 border-b px-6 border-[#242424] rounded-l'/>
            <input type='text' placeholder='email e.g maina@gmail.com' className='w-[100%] mb-2 outline-none placeholder-gray-350  trasition-all text-gray-400 focus:text-[#1eff00] focus:border-[rgb(202,247,5)]  bg-slate-600 border-b px-6 border-[#242424] rounded-l' />
          </div>
          <input type='text' placeholder='Subject e.g job invitation' className='w-[100%] mb-2 outline-none placeholder-gray-350  trasition-all text-gray-400 focus:text-[#1eff00] focus:border-[rgb(202,247,5)]  bg-slate-600 border-b px-6 border-[#242424] rounded-l'/>
          <textarea placeholder='Type your message here' className='w-[100%] trasition-all placeholder-gray-350   text-gray-400 focus:text-[#1eff00] focus:border-[rgb(202,247,5)] outline-none bg-slate-600 border-b px-6 border-[#242424] rounded-l'/>
          <button type='submit' className='bg-[#24fa08] py-5 px-10 rounded-md text-black font-bold text-lg w-[80%] hover:bg-[#f7ab0a] transition-all '>Submit</button>
        </form>
    </div>
  )
}

export default Contact