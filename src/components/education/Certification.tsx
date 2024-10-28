import { MdOutlineCalendarMonth } from "react-icons/md";
import { motion } from "framer-motion";

function Certification({
  title,
  institution,
  date,
  i,
}: {
  title: string;
  institution: string;
  date: string;
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut", delay: i * 0.8 }}
      className="border-[1px] p-2 rounded-xl shadow-xl border-gray-300 mb-5"
    >
      <div>
        <h4 className="font-semibold text-lg md:text-xl">{title}</h4>
        <p>{institution}</p>
        <p className="flex flex-row gap-3 items-center font-light">
          <MdOutlineCalendarMonth /> {date}
        </p>
      </div>
    </motion.div>
  );
}

export default Certification;
