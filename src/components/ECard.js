import React from 'react'
import {motion} from 'framer-motion'
function ECard() {
  return (
    <article className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[450px] xl:w-[650px] snap-center bg-[#494949] p-10 xl:p-10 opacity-40 hover:opacity-100">
        <motion.img
        initial={{y:-100,opacity:0}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='./maich.jpg' alt='#'/>
        <div className='px-0 md:px-10 '>
            <h4 className="text-4xl font-light">CEO auto-Nipange</h4>
            <p className='font-bold text-2xl mt-1'>Auto-Nipange</p>
            <div className='flex space-x-2 my-2'>
                {/* tech used
                <img src="#">
                tech used
                tech used */}
                
                <img 
                className='h-10 w-10 rounded-full'
                src="./firebase.png" alt="#"/>
                <img className='h-10 w-10 rounded-full' src="./flask.png" alt="#"/>
                <img className='h-10 w-10 rounded-full' src="./html.png" alt="#"/>
                <img className='h-10 w-10 rounded-full' src="./js.jpeg" alt="#"/>
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... -Ended...</p>
            <ul className="list-disk space-y-4 ml-5 text-lg">
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ECard