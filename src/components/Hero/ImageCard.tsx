import { motion } from 'framer-motion';
const ImageCard = () => {
    const image = '/maich.jpg'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-center bg-cover rounded-full bg-no-repeat border-green-500 border-[6px] shadow-[inset_0_0_0_9px_rgba(65, 105, 225, 0.8)] order-1 justify-self-center w-[300px] min-h-[300px] p-1 animate-profile-animate"
      style={{ backgroundImage: `url(${image})` }}
    ></motion.div>
  );
};

export default ImageCard;
