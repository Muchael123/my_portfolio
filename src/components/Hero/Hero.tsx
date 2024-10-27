import HandwrittenUnderline from "./HandwrittenLine";
import { VscSend } from "react-icons/vsc";
import ImageCard from "./ImageCard";
import MySocials from "./MySocials";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

function Hero() {
  return (
    <div
      className={`flex flex-col-reverse w-full  mb-20 justify-center items-center lg:flex-row lg:justify-between lg:mt-[2%] mt-[40vh] py-5 px-4 md:py-3 h-[90vh]`}
      id="Home"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-[484px]  p-4 text-center md:text-start flex flex-col justify-center h-full"
      >
        <h1 className="text-xl font-semibold md:text-2xl lg:text-5xl">
          Michael Maina👋
        </h1>
        <h3 className="w-full">
          <span className="text-lg font-semibold">I'm a</span>
          <HandwrittenUnderline>
            <span className="p-2 text-lg">Software Developer</span>
          </HandwrittenUnderline>
        </h3>
        <p className=" max-w-[468px] text-center w-full mt-4">
          <FaQuoteLeft />
          <span>
            I want to make art and develop wonders that hundres of thousands
            will come see and I wan to make it with the funnest, most talented
            team of my own.
          </span>
          <FaQuoteRight /> -{" "}
          <span className=" italic font-thin text-green-500">
            Michael Maina
          </span>
        </p>

        <hr className="border-t-2 hidden md:block border-gray-300 my-4" />

        <div className="flex flex-col w-full justify-center md:flex-row-reverse md:justify-between">
          <MySocials />
          <button
            onClick={() => (window.location.href = "#contact_me")}
            className="p-6 max-w-[60vw] hover:scale-x-[120%] bg-gray-700 tracking-wider text-[#f0f0f0] rounded-xl mt-7 md:mt-0 hover:bg-gray-950 hover:text-white transition-all duration-200 flex gap-2 hover:gap-3 items-center justify-center"
          >
            Say Hello <VscSend className="hover:scale-105" />
          </button>
        </div>
      </motion.div>
      <ImageCard />
    </div>
  );
}

export default Hero;
