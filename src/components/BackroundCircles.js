import { motion } from "framer-motion"
function BackroundCircles({w, anime}) {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    animate={{
      opacity:[.5,.8,.9,.3,1],
      scale:[1,2,1,3,1,],
      borderRadius:["20%","25%","80%", "30%"],
      
    }}
    transition={{
      duration:3.5
    }}
     className="absolute ">
    <div className=" md:border-[2px] mt-20 rounded-lg pd-5 md:border-[#118311] md:h-[25rem]  md:w-[50rem] animate-pulse"/>
    {/* <div className= "border-[#0adf0a] rounded-full w-[200px] h-[200px] animate-ping" /> */}
    
    </motion.div>
  )
};
export default BackroundCircles