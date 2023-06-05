import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
function Heading(){
    return(
        <header  className=" bg-transparent fixed t-0 w-[100%] flex flex-row items-start p-5 justify-between max-w-7xl mb-40px mx-auto z-20 xl:items-center">
            <motion.div
    initial= {
      {x: -500,
      opacity:0,
      scale: 0.2,}
    }
    animate={{
      x:0,
      opacity:1,
      scale:1,
    }}
    transition={{
      duration: 1.,
    }}
             className="flex flex-row items-center ">
                {/* social icons twitter, linked-in,github,  */}
                <SocialIcon 
                    className="cursor-pointer"
                    network="facebook"
                    fgColor='#1eff00'
                    bgColor='transparent'
                />
                 <SocialIcon 
                    className="cursor-pointer"
                    network="twitter"
                    fgColor='#1eff00'
                    bgColor='transparent'
                />
                 <SocialIcon 
                    className="cursor-pointer"
                    network="linkedin"
                    fgColor='#1eff00'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div 
            initial= {
      {x: 500,
      opacity:0,
      scale: 0.2,}
    }
    animate={{
      x:0,
      opacity:1,
      scale:1,
    }}
    transition={{
      duration: 1.,
    }}
            className=" cursor-pointer">
            <SocialIcon 
                    className="flex"
                    network="email"
                    fgColor='#1eff00'
                    bgColor='transparent'
                />
                <p className="uppercase text-gray-400 md:inline-flex hidden text-sm">Get in touch</p>
            </motion.div>
        </header>
    );
}
export default Heading;