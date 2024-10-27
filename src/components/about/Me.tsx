
import TopCards from './TopCards'
import { IoCodeDownloadOutline } from "react-icons/io5";
import {motion} from 'framer-motion'

function Me() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex-1 ml-2 flex flex-col h-full justify-between p-3"
    >
      <TopCards />
      <p className="text-center md:text-start mt-5">
        I am a full-stack developer with 3+ years of experience in building web
        applications. I have worked on 50+ projects and 5+ startups. I am
        passionate about building scalable and efficient applications.
      </p>{" "}
      <a
        href="/MichaelMaina_CV.pdf"
        download="MichaelMaina_CV.pdf"
        className=" py-2 hover:pl-4  w-fit px-3 bg-gray-700 tracking-wider text-[#f0f0f0] rounded-xl mt-2 md:mt-3 hover:bg-gray-950 hover:text-white transition-all duration-200 flex gap-2 hover:gap-3 items-center justify-center"
      >
        Download Resume <IoCodeDownloadOutline size={24} />
      </a>
    </motion.div>
  );
}

export default Me