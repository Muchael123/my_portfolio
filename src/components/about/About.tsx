import Hr from "../common/Hr";
import Subtitles from "../common/Subtitles";
import ImageCard from "./ImageCard";
import Me from "./Me";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      className="flex w-full z-0 mt-[4vh] flex-col py-5 px-4 md:py-3 relative"
      id="about"
    >
      <Hr />
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <Subtitles text="About Me" />

        <p className="text-center mb-10 w-full mt-3 italic">My introduction</p>
      </motion.div>
      <div className="w-full justify-center items-center flex flex-col md:flex-row gap-4 md:justify-between">
        <ImageCard />
        <Me />
      </div>
    </div>
  );
}

export default About;
