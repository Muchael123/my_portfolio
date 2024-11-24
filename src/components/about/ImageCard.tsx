import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt';

function ImageCard() {
  
  return (
    
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-full md:w-[50%]"
    >
     <Tilt className='w-full h-full'>
     <img
        src="/maich.jpg"
        alt="My photo"
        className="rounded-2xl h-96 w-full object-cover"
      />
     </Tilt>
    </motion.div>
  );
}

export default ImageCard