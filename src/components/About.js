import React from 'react'
import { motion } from "framer-motion"

function About() {
  return (
    <div className="h-screen space-y-10  flex flex-col md:flex-row relative text-center md:text-left max-w-7xl py-20 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-[#777474] text-2xl  ">About</h3>
        <motion.img 
      initial={{
        x:-200,
      }}
      transition={{duration:1.5,}}
      whileInView={{
        x:0,
      }}
      viewport={{once: true,}}
      
      src="./maich.jpg" alt="#"
       className="-mb-20 mt-20 top-30 md:mb-10 top-42 xl:ml-0 self-center flex-shrink-0 w-56 h-56 rounded-full  object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[450px]"/>
      <motion.div 
       initial={{
        y:200, opacity:0
      }}
      transition={{duration:1.5,}}
      whileInView={{
        y:0, opacity:1
      }}
      viewport={{once: true,}}
      className='relative -mb-1 px-2 space-y-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#1eff00]'>little </span> about me</h4>
        <p 
        
        className='text-base pb-20'>Welcome to Parrot OS

Copyright 2013-2020 Lorenzo Faletra palinuro@parrotsec.org
Copyright 2020-2022 Parrot Security CIC  director@parrotsec.org


This operating system is composed by several programs, each of them
includes its own license. The GNU/GPL v3 license applies to those
components developed by Parrot Security without an explicit license.
</p>
      </motion.div>
      </div>
  )
}

export default About