import BackroundCircles from './BackroundCircles';
import {Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
function Hero(){
  return (
    <div className="relative  h-screen flex flex-col overflow-scroll mt-[50px] justify-center items-center md:flex-col">
     <BackroundCircles/>
    
     <motion.img 
     initial={{y:-100, opacity:0}}
     animate={{y:0, opacity:1}}
     transition={{duration:1}}
     className='object-cover relative mb-4 rounded-full h-32 w-32 mx-auto' src='./maich.jpg' alt=''/>
     <motion.h2
     initial={{
      x:500,
      opacity:0
     }}
     animate={{
      x:0,
      opacity:1
     }}
     transition={{
      duration:1,
     }}
     className='text-sm uppercase pb-2 text-gray-500 tracking-[15px]'>Software engineer</motion.h2>
     <motion.div 
      initial= {
      {y: 500,
      opacity:0,
      scale: 0.2,}
    }
    animate={{
      y:0,
      opacity:1,
      scale:1,
    }}
    transition={{
      duration: 1.,
    }}
     className=''>
     
     <p className="text-3xl lg:text-6xl font-semibold px-10">
     <span >
    <Typewriter 
            words={[ 'Hi there', 'hello', 'How are you', "Welcome to My website"]}
            loop
            cursor
            cursorStyle='$'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={4000}
          />
    </span> <br/> 
    <h1 className="text-[#1eff00]" >
    <Typewriter
            words={[ "I'm Mike",'A guy who loves coding', 'And coffee', 'And loves coding++', ]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={10}
            deleteSpeed={50}
            delaySpeed={2000}
          />
          </h1>
         </p>
     </motion.div>
     <motion.div
      initial={{
      x:-500,
      opacity:0
     }}
     animate={{
      x:0,
      opacity:1
     }}
     transition={{
      duration:1,
     }}
     >
            <a href="#about" className='px-2 py-5 uppercase md:px-6 border-[#242424] rounded-full text-sm tracking-widest cursor-pointer  transition-all hover:border-[#0ceb04]/40 hover:text-[#0ceb04]/40'>about</a>
            <a href='#experience'>
            <button className="px-2 py-2 uppercase md:px-6 border-[#242424] rounded-full text-sm tracking-widest text-gray-500 transition-all hover:border-[#0ceb04]/40 hover:text-[#0ceb04]/40">Experience</button></a>
            <a href="#skills">
            <button className="px-2 py-2 uppercase md:px-6 border-[#242424] rounded-full text-sm tracking-widest text-gray-500 transition-all hover:border-[#0ceb04]/40 hover:text-[#0ceb04]/40 
            ">Skills</button></a>
            <a href="#projects">
            <button className="px-2 py-2 uppercase md:px-6 border-[#242424] rounded-full text-sm tracking-widest text-gray-500 transition-all hover:border-[#0ceb04]/40 hover:text-[#0ceb04]/40">Projects</button></a>
          </motion.div>
    </div>
  );
}

export default Hero