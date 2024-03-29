import { motion } from "framer-motion"
function BackroundCircles({w, anime}) {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    animate={{
      opacity:[.5,.8,.9,.3,1],
      scale:[1,1.2,.4,1.5,1,],
      borderRadius:["20%","25%","80%", "30%"],
      
    }}
    transition={{
      duration:2.5
    }}
     className="absolute translate-x-[50%] translate-y-[50%]">
    <div className=" md:border-[2px] mt-20 rounded-lg pd-5 md:border-[#118311] md:h-[25rem]  md:w-[50rem] animate-pulse z-[-2]"/>
    {/* <div className= "border-[#0adf0a] rounded-full w-[200px] h-[200px] animate-ping" /> */}
    
    </motion.div>
  )
};
export default BackroundCircles