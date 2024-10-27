import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

type JobExperienceProps = {
  tittle: string;
  company: string;
  date: string;
  location: string;
  description: string[];
};

function WorkCard(work: JobExperienceProps) {
  const [isWorkDetailsOpen, setIsWorkDetailsOpen] = useState(false);

  return (
    <div className="relative border-gray-300 border-[1px] p-4 max-w-[200px] h-[300px] flex flex-col justify-between">
      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {isWorkDetailsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-md flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg min-w-[300px] max-w-full relative"
            >
              <button
                onClick={() => setIsWorkDetailsOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-green-500"
              >
                <LiaTimesSolid size={32} />
              </button>
              <p className="font-bold mb-3">At {work.company}, I:</p>
              <ul className="list-disc list-inside space-y-1">
                {work.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <h3 className="font-semibold text-lg">{work.tittle}</h3>
      <div>
        <p className="text-sm text-gray-500">{work.company}</p>
        <p className="text-sm text-gray-500">{work.date}</p>
        <p className="text-sm text-gray-500">{work.location}</p>
      </div>
      <button
        className="text-green-500 flex flex-row gap-3 hover:gap-4 items-center transition-all duration-200 ease-in-out"
        onClick={() => setIsWorkDetailsOpen(true)}
      >
        View more{" "}
        <span>
          <FaLongArrowAltRight />
        </span>
      </button>
    </div>
  );
}

export default WorkCard;
