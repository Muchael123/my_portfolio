import React from 'react'
import { motion } from "framer-motion"

function About() {
  return (
    <div className="h-screen space-y-10  flex flex-col md:flex-row relative text-center md:text-left max-w-7xl py-20 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-[#777474] text-2xl  ">About</h3>
        <motion.img 
      initial={{
        x:-100,
      }}
      transition={{duration:1.5,}}
      whileInView={{
        x:0,
      }}
      viewport={{once: true,}}
      
      src="./maich.jpg" alt="#"
       className="-mb-20 mt-20 top-30 md:mb-10 top-20 xl:ml-0 self-center flex-shrink-0 w-32 h-32 rounded-full  object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[550px]"/>
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
        
        className='text-base pb-20'> Michael Maina is a versatile <span className='text-[#1eff00] font-mono'>software engineer</span> known for his innovative thinking and problem-solving abilities. He is an informaion Technology student currently in Masinde Muliro University of Science And technology. Michael has extensive experience in <span className='text-[#1eff00] font-mono '>full-stack development, front-end frameworks, back-end languages, databases, Agile methodologies</span> and has a proven track record of delivering high-quality software within tight deadlines and enjoys <span   className='text-[#1eff00] font-mono '>collaborating</span> with cross-functional teams, fostering a positive and productive work environment. 
</p>
      </motion.div>
      </div>
  )
}

export default About
