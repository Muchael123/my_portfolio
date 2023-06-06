import React from 'react'
import ECard from './ECard'
import { motion } from "framer-motion"
function Experience() {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{duration:1.5}}
    className="h-screen flex overflow-hidden relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
       <h3 className="absolute top-24 uppercase tracking-[15px] text-[#777474] text-1.5xl ">Experience</h3>
       <div className="w-full flex space-x-7 overflow-x-scroll snap-x snap-mandatory">
        <ECard/>
         <ECard/>
           <ECard/>
       </div>
    </motion.div>
  )
}

export default Experience