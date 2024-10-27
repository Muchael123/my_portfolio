import { motion } from "framer-motion";
function Hr() {
  return (
    <motion.hr
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className="border-t-2 border-yellow-500 my-4"
    />
  );
}

export default Hr